import IndexHome from '@/components/home'

import { getDictionary } from '../dictionaries'
import getData from '@/utils/getData'
import { categoryHireId, handleCheckLangCode, postTypeIdAgreement } from '@/utils'
// let propertyTypeParams = ''
// let propertyAreaTypeParams = ''
// let propertyCategoryTypeParams = ''

export async function generateMetadata({ params: { lang } }) {
    const data = await getData('/site-infor')

    const t = await getDictionary(lang)
    return {
        title: t?.metaData?.homepage?.title,
        description: t?.metaData?.homepage?.description,
        applicationName: process.env.SITE_NAME,
        keywords: ['KANGNAM', 'kangnam', 'Bất động sản', 'Mua nhà'],
        authors: [
            {
                name: 'okhub',
                url: 'https://okhub.vn/',
            },
        ],
        creator: 'FinnTVD',
        openGraph: {
            title: t?.metaData?.homepage?.title,
            description: t?.metaData?.homepage?.description,
            url: process.env.DOMAIN,
            siteName: process.env.SITE_NAME,
            images: [
                {
                    url: data?.background,
                    alt: 'background kangnam',
                },
            ],
            locale: handleCheckLangCode(lang),
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: t?.metaData?.homepage?.title,
            description: t?.metaData?.homepage?.description,
            creator: process.env.SITE_NAME,
            images: [
                {
                    url: data?.background,
                    alt: 'background kangnam',
                },
            ],
            locale: handleCheckLangCode(lang),
            type: 'website',
        },
        // manifest: `${DOMAIN}/site.webmanifest`,
    }
}
export const dynamic = 'force-dynamic'
export default async function Home({ params, searchParams }) {
    const t = await getDictionary(params?.lang)
    const dataHomePage = await getData('/home-page')
    const dataPosts = await getData('/post')
    // const propertyType = searchParams?.propertyTypeIds
    // const propertyAreaType = searchParams?.propertyAreaTypeIds
    // const propertyCategoryType = searchParams?.propertyCategoryIds
    // if (propertyType) {
    //     propertyTypeParams = propertyType
    //         .split('--')
    //         .reduce((accumulator, currentValue) => accumulator + '&propertyTypeIds=' + currentValue, '')
    // } else {
    //     propertyTypeParams = ''
    // }

    // if (propertyAreaType) {
    //     propertyAreaTypeParams = propertyAreaType
    //         .split('--')
    //         .reduce((accumulator, currentValue) => accumulator + '&propertyAreaTypeIds=' + currentValue, '')
    // } else {
    //     propertyAreaTypeParams = ''
    // }

    // if (propertyCategoryType) {
    //     propertyCategoryTypeParams = propertyCategoryType
    //         .split('--')
    //         .reduce((accumulator, currentValue) => accumulator + '&propertyCategoryIds=' + currentValue, '')
    // } else {
    //     propertyCategoryTypeParams = ''
    // }
    // const dataSelling = await getData(
    //     `/property?take=20${propertyCategoryTypeParams ? propertyCategoryTypeParams : ''}${
    //         propertyAreaTypeParams ? propertyAreaTypeParams : ''
    //     }${propertyTypeParams ? propertyTypeParams : ''}`,
    // )
    // const dataHiring = await getData(
    //     `/property?propertyCategoryIds=${categoryHireId}${propertyAreaTypeParams ? propertyAreaTypeParams : ''}${
    //         propertyTypeParams ? propertyTypeParams : ''
    //     }`,
    // )
    const dataPostNews = dataPosts?.data?.filter((item) => item?.postType?.id !== postTypeIdAgreement).slice(0, 6)

    return (
        <>
            {/* <div className='text-black text-[50px] h-[100vh] mt-[10vw]'>
                <div>{JSON.stringify(searchParams)}</div>

                {`/property?take=20${propertyCategoryTypeParams ? propertyCategoryTypeParams : ''}${
                    propertyAreaTypeParams ? propertyAreaTypeParams : ''
                }${propertyTypeParams ? propertyTypeParams : ''}`}
            </div> */}
            <IndexHome
                lang={params?.lang}
                t={t}
                dataPostNews={dataPostNews}
                dataHomePage={dataHomePage}
                // dataHiring={[]}
                // dataSelling={[]}
            />
        </>
    )
}
