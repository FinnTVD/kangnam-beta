import IndexAgreements from '@/components/agreements'
import NavBarV2 from '@/components/general/NavBarV2'
import { getDictionary } from '../../dictionaries'
import { handleCheckLangCode } from '@/utils'
import getData from '@/utils/getData'

export async function generateMetadata({ params: { lang } }) {
    const data = await getData('/site-infor')
    const t = await getDictionary(lang)
    return {
        title: t?.metaData?.agreement?.title,
        description: t?.metaData?.agreement?.description,
        keywords: ['KANGNAM', 'kangnam', 'Bất động sản', 'Mua nhà'],
        authors: [
            {
                name: 'okhub',
                url: 'https://okhub.vn/',
            },
        ],
        creator: 'FinnTVD',
        openGraph: {
            title: t?.metaData?.agreement?.title,
            description: t?.metaData?.agreement?.description,
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
            title: t?.metaData?.agreement?.title,
            description: t?.metaData?.agreement?.description,
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
export default async function Agreements({ params }) {
    const t = await getDictionary(params.lang)

    return (
        <>
            <header className='fixed top-0 left-0 w-screen bg-white h-fit shadow-boxFilter z-[999999999999]'>
                <NavBarV2
                    lang={params.lang}
                    t={t}
                />
            </header>
            <IndexAgreements lang={params.lang} />
        </>
    )
}
