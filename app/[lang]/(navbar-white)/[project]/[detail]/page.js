import { getDictionary } from '@/app/[lang]/dictionaries'
import IndexProjectDetail from '@/components/listProjectDetail'
import { handleCheckLangCode } from '@/utils'
import getData from '@/utils/getData'
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
export default async function DetailPage({ params: { lang, detail } }) {
    const t = await getDictionary(lang)

    return (
        <IndexProjectDetail
            lang={lang}
            detail={detail}
            t={t}
        />
    )
}
