import getData from '@/utils/getData'
import MyProject from './MyProject'

let propertyTypeParams = ''
let propertyAreaTypeParams = ''
let propertyCategoryTypeParams = ''

export default async function BoxMyProjectV2({ searchParams, t, lang }) {
    const propertyType = searchParams?.propertyTypeIds
    const propertyAreaType = searchParams?.propertyAreaTypeIds
    const propertyCategoryType = searchParams?.propertyCategoryIds
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

    const query = `/property/for-web?page=${page ? page : 1}&take=8${
        propertyCategoryTypeParams ? propertyCategoryTypeParams : ''
    }${propertyAreaTypeParams ? propertyAreaTypeParams : ''}${propertyTypeParams ? propertyTypeParams : ''}${
        cityId ? '&cityId=' + cityId : ''
    }${districtId ? '&districtId=' + districtId : ''}${wardId ? '&wardId=' + wardId : ''}`

    const data = await getData(query)

    return (
        <MyProject
            lang={lang}
            t={t}
            data={data}
        />
    )
}
