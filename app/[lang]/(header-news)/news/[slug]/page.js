import { getDictionary } from '@/app/[lang]/dictionaries'
import NotFound from '@/app/[lang]/not-found'
import HeaderV2 from '@/components/general/HeaderV2'
import IndexNewsDetail from '@/components/newsDetail'
import { handleCheckLangCode } from '@/utils'
import getData from '@/utils/getData'
import { mgId, ttId, tvId } from '@/utils/sitemapinit'

export async function generateStaticParams({ params: { lang } }) {
    const posts = await getData(
        `/post?order=DESC&page=1&take=50&postTypeIds=${ttId}&postTypeIds=${tvId}&postTypeIds=${mgId}`,
    )

    return posts?.data?.map((item) => {
        if (item?.translations?.find((e) => e?.languageCode?.toLowerCase()?.includes(lang))?.slug) {
            return {
                slug: item?.translations?.find((e) => e?.languageCode?.toLowerCase()?.includes(lang))?.slug,
            }
        }
    })
}

export async function generateMetadata({ params: { lang, slug } }) {
    const data = await getData(`/post/post-by-slug/${slug}`)
    if (!data) return
    const dataDetail = data?.translations?.find((e) => e?.slug === slug)
    return {
        metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN),
        title: dataDetail?.titleSeo || dataDetail?.title,
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

export default async function NewsDetail({ params: { lang, slug } }) {
    const t = await getDictionary(lang)
    const post = await getData(`/post/post-by-slug/${slug}`)
    if (!post || post?.statusCode === 404) return <NotFound />
    const categories = await getData('/post-type')
    const langCode = handleCheckLangCode(lang)
    const newsDetail = post?.translations?.find((item) => item?.languageCode === langCode)
    const category = categories?.data?.find((item) => item.id === post.postType.id)

    return (
        <>
            <HeaderV2
                lang={lang}
                t={t}
                post={post}
                newsDetail={newsDetail}
            />
            {post && category && newsDetail && (
                <IndexNewsDetail
                    t={t}
                    slug={slug}
                    lang={lang}
                    post={post}
                    newsDetail={newsDetail}
                    category={category}
                />
            )}
        </>
    )
}
