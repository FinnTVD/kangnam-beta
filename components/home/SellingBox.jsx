import getData from '@/utils/getData'
import Hiring from './Hiring'
import SellingRes from './SellingRes'
import { categoryHireId } from '@/utils'

let propertyTypeParams = ''
let propertyAreaTypeParams = ''
let propertyCategoryTypeParams = ''

export default async function SellingBox({ lang, t, searchParams }) {
    const propertyType = searchParams?.propertyTypeIds
    const propertyAreaType = searchParams?.propertyAreaTypeIds
    const propertyCategoryType = searchParams?.propertyCategoryIds

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

    const [dataSelling, dataHiring] = await Promise.all([
        getData(
            `/property/for-web?take=20${propertyCategoryTypeParams ? propertyCategoryTypeParams : ''}${
                propertyAreaTypeParams ? propertyAreaTypeParams : ''
            }${propertyTypeParams ? propertyTypeParams : ''}`,
        ),
        getData(
            `/property/for-web?propertyCategoryIds=${categoryHireId}${
                propertyAreaTypeParams ? propertyAreaTypeParams : ''
            }${propertyTypeParams ? propertyTypeParams : ''}`,
        ),
    ])
    if (dataHiring === undefined || dataSelling === undefined) return <SellingRes.Skeleton />

    return (
        <>
            <SellingRes
                lang={lang}
                t={t}
                data={dataSelling}
            />
            <Hiring
                lang={lang}
                t={t}
                data={dataHiring}
            />
        </>
    )
}
