import IndexHome from '@/components/home'

import { getDictionary } from '../dictionaries'
import getData from '@/utils/getData'
import { handleCheckLangCode } from '@/utils'

export async function generateMetadata({ params: { lang } }) {
    const data = await getData('/site-infor')

    const t = await getDictionary(lang)
    return {
        metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN),
        title: t?.metaData?.homepage?.title || 'Home',
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
export default async function Home({ params, searchParams }) {
    const [t, dataHomePage] = await Promise.all([getDictionary(params?.lang), getData('/home-page')])

    return (
        <IndexHome
            lang={params?.lang}
            t={t}
            dataHomePage={dataHomePage}
            params={params}
            searchParams={searchParams}
        />
    )
}
