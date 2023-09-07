import { getDictionary } from '@/app/[lang]/dictionaries'
import HeaderV2 from '@/components/general/HeaderV2'
import IndexNewsDetail from '@/components/newsDetail'
import { handleCheckLangCode } from '@/utils'
import getData from '@/utils/getData'

export async function generateMetadataNews({ params: { lang, slug } }) {
    const data = await getData(`/post/post-by-slug/${slug}`)
    if (!data) return
    const dataDetail = data?.translations?.find((e) => e?.slug === slug)
    return {
        title: dataDetail?.titleSeo,
        description: dataDetail?.descSeo,
        applicationName: process.env.SITE_NAME,
        openGraph: {
            title: dataDetail?.titleSeo,
            description: dataDetail?.descSeo,
            url: process.env.DOMAIN,
            siteName: process.env.SITE_NAME,
            images: [
                {
                    url: data?.image,
                    alt: dataDetail?.title || dataDetail?.titleSeo,
                },
            ],
            locale: lang,
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
        },
        robots: {
            index: false,
            follow: true,
            nocache: true,
            googleBot: {
                index: true,
                follow: false,
                noimageindex: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    }
}

export default async function NewsDetail({ params: {lang, slug} }) {
    // let post = null
    const t = await getDictionary(lang)
    // const langCode = handleCheckLangCode(lang)
    // try{
    //     const response = await fetch(NEXT_PUBLIC_API + `/post/post-by-slug/${slug}`)
    //     const data = response.json()
    //     post = data
    // }
    // catch{
    //     throw new Error('Lỗi fetch')
    // }
    // const translation = post?.translations?.find((item) => item.languageCode===langCode)

    return (
        <> 
            <HeaderV2
                lang={lang}
                t={t}
            />
            <IndexNewsDetail
                t={t}
                slug={slug}
                lang={lang}
            >
            </IndexNewsDetail>
        </>
    )
}
