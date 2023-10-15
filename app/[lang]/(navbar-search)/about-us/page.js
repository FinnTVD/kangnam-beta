import IndexAboutUs from '@/components/aboutUs'
import { getDictionary } from '../../dictionaries'
import HeaderV2 from '@/components/general/HeaderV2'
import getData from '@/utils/getData'
import { handleCheckLangCode } from '@/utils'
const src = '/images/bg-about-us.jpg'

export async function generateMetadata({ params: { lang } }) {
    const data = await getData('/site-infor')
    const t = await getDictionary(lang)
    return {
        title: t?.metaData?.aboutUs?.title,
        description: t?.metaData?.aboutUs?.description,
        keywords: ['KANGNAM', 'kangnam', 'Bất động sản', 'Mua nhà'],
        authors: [
            {
                name: 'okhub',
                url: 'https://okhub.vn/',
            },
        ],
        creator: 'FinnTVD',
        openGraph: {
            title: t?.metaData?.aboutUs?.title,
            description: t?.metaData?.aboutUs?.description,
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
            title: t?.metaData?.aboutUs?.title,
            description: t?.metaData?.aboutUs?.description,
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
    }
}
export default async function News({ params: { lang } }) {
    const data = await getData('/site-infor')
    const t = await getDictionary(lang)

    return (
        <>
            <HeaderV2
                lang={lang}
                t={t}
                src={src}
            />
            <IndexAboutUs
                t={t}
                lang={lang}
                dataInfo={data}
            />
        </>
    )
}
