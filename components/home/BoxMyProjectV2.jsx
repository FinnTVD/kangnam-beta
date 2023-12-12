import getData from '@/utils/getData'
import MyProject from './MyProject'

let propertyTypeParams = ''
let propertyAreaTypeParams = ''
let propertyCategoryTypeParams = ''

let propertyBedsParams = ''
let propertyBathsParams = ''
let propertyOrientsParams = ''

export default async function BoxMyProjectV2({ searchParams, t, lang }) {
    const propertyType = searchParams?.propertyTypeIds
    const propertyAreaType = searchParams?.propertyAreaTypeIds
    const propertyCategoryType = searchParams?.propertyCategoryIds

    const propertyBeds = searchParams?.beds
    const propertyBaths = searchParams?.baths
    const propertyOrients = searchParams?.orients
    const minPrice = searchParams?.minPrice
    const maxPrice = searchParams?.maxPrice
    const minArea = searchParams?.minArea
    const maxArea = searchParams?.maxArea

    const page = searchParams?.page
    const cityId = searchParams?.cityId
    const districtId = searchParams?.districtId
    const wardId = searchParams?.wardId

    if (propertyType) {
        propertyTypeParams = propertyType
            .split('--')
            .reduce((accumulator, currentValue) => accumulator + '&propertyTypeIds=' + currentValue, '')
    } else {
        propertyTypeParams = ''
    }
    if (propertyAreaType) {
        propertyAreaTypeParams = propertyAreaType
            .split('--')
            .reduce((accumulator, currentValue) => accumulator + '&propertyAreaTypeIds=' + currentValue, '')
    } else {
        propertyAreaTypeParams = ''
    }
    if (propertyCategoryType) {
        propertyCategoryTypeParams = propertyCategoryType
            .split('--')
            .reduce((accumulator, currentValue) => accumulator + '&propertyCategoryIds=' + currentValue, '')
    } else {
        propertyCategoryTypeParams = ''
    }

    if (propertyBeds) {
        propertyBedsParams = propertyBeds
            ?.split('--')
            ?.reduce((accumulator, currentValue) => accumulator + '&beds=' + currentValue, '')
    } else {
        propertyBedsParams = ''
    }
    if (propertyBaths) {
        propertyBathsParams = propertyBaths
            ?.split('--')
            ?.reduce((accumulator, currentValue) => accumulator + '&baths=' + currentValue, '')
    } else {
        propertyBathsParams = ''
    }
    if (propertyOrients) {
        propertyOrientsParams = propertyOrients
            ?.split('--')
            ?.reduce((accumulator, currentValue) => accumulator + '&orients=' + currentValue, '')
    } else {
        propertyOrientsParams = ''
    }

    const query = `/property/for-web?page=${Number(page) ? Number(page) : 1}&take=8${
        propertyCategoryTypeParams ? propertyCategoryTypeParams : ''
    }${propertyAreaTypeParams ? propertyAreaTypeParams : ''}${propertyTypeParams ? propertyTypeParams : ''}${
        propertyBedsParams ? propertyBedsParams : ''
    }${propertyBathsParams ? propertyBathsParams : ''}${propertyOrientsParams ? propertyOrientsParams : ''}${
        cityId ? '&cityId=' + cityId : ''
    }${districtId ? '&districtId=' + districtId : ''}${wardId ? '&wardId=' + wardId : ''}${
        minPrice ? '&minPrice=' + minPrice + '000000000' : ''
    }${maxPrice ? '&maxPrice=' + maxPrice + '000000000' : ''}${minArea ? '&minArea=' + minArea : ''}${
        maxArea ? '&maxArea=' + maxArea : ''
    }`

    const data = await getData(query)

    return (
        <MyProject
            lang={lang}
            t={t}
            data={data}
        />
    )
}
