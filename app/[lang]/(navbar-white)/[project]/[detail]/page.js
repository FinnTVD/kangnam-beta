import { getDictionary } from '@/app/[lang]/dictionaries'
import IndexProjectDetail from '@/components/listProjectDetail'
import { categoryHireId, categoryResaleId, handleCheckLangCode, slugProject } from '@/utils'
import getData from '@/utils/getData'

export async function generateStaticParams({ params: { lang, project } }) {
    const [hire, resale, projects] = await Promise.all([
        getData(`/property/for-web?take=50&propertyCategoryIds=${categoryHireId}`),
        getData(`/property/for-web?take=50&propertyCategoryIds=${categoryResaleId}`),
        getData(`/project?page=1&take=50`),
    ])

    const allList = [...hire?.data, ...resale?.data, ...projects?.data]
    return allList?.map((item) => {
        if (
            item?.translations?.find((e) => e?.languageCode?.toLowerCase()?.includes(lang))?.slug &&
            item?.propertyCategory?.translations?.find((e) => e?.alias === project)?.alias
        ) {
            return {
                detail: item?.translations?.find((e) => e?.languageCode?.toLowerCase()?.includes(lang))?.slug,
            }
        }
    })
}
export async function generateMetadata({ params: { lang, detail } }) {
    const data = await getData(`/property/property-by-slug/${detail}`)
    if (!data) return
    const dataDetail = data?.translations?.find((e) => e?.slug === detail)
    return {
        metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN),
        title: dataDetail?.titleSeo || 'Detail Project',
        description: dataDetail?.descSeo,
        applicationName: process.env.SITE_NAME,
        openGraph: {
            title: dataDetail?.titleSeo,
            description: dataDetail?.descSeo,
            url: process.env.DOMAIN,
            siteName: process.env.SITE_NAME,
            images: [
                {
                    url: data?.firstImage,
                    alt: dataDetail?.name || dataDetail?.titleSeo,
                },
            ],
            locale: handleCheckLangCode(lang),
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: dataDetail?.titleSeo,
            description: dataDetail?.descSeo,
            creator: process.env.SITE_NAME,
            images: [
                {
                    url: data?.firstImage,
                    alt: dataDetail?.name || dataDetail?.titleSeo,
                },
            ],
            locale: handleCheckLangCode(lang),
            type: 'website',
        },
    }
}
export default async function DetailPage({ params: { lang, detail, project } }) {
    const t = await getDictionary(lang)
    const isProject = slugProject?.join('')?.includes(decodeURI(project))
    const dataInfo = await getData('/site-infor')

    return (
        <IndexProjectDetail
            lang={lang}
            detail={detail}
            t={t}
            isProject={isProject}
            dataInfo={dataInfo}
        />
    )
}
