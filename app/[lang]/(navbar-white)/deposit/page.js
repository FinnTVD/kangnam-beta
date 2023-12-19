import ConsignmentIndex from '@/components/consignment'
import { getDictionary } from '../../dictionaries'
import NavBarV2 from '@/components/general/NavBarV2'
import getData from '@/utils/getData'
import FeatureHome from '@/components/home/FeatureHome'
import { handleCheckLangCode } from '@/utils'

export async function generateMetadata({ params: { lang } }) {
    const data = await getData('/site-infor')
    const t = await getDictionary(lang)
    return {
        metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN),
        title: t?.metaData?.deposit?.title,
        description: t?.metaData?.deposit?.description,
        keywords: ['KANGNAM', 'kangnam', 'Bất động sản', 'Mua nhà'],
        authors: [
            {
                name: 'okhub',
                url: 'https://okhub.vn/',
            },
        ],
        creator: 'FinnTVD',
        openGraph: {
            title: t?.metaData?.deposit?.title,
            description: t?.metaData?.deposit?.description,
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
            title: t?.metaData?.deposit?.title,
            description: t?.metaData?.deposit?.description,
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
export default async function DepositPage({ params: { lang } }) {
    const t = await getDictionary(lang)
    const data = await getData('/site-infor')

    return (
        <>
            <header className='fixed top-0 left-0 w-screen bg-white h-fit shadow-boxFilter z-[999999999999]'>
                <NavBarV2
                    lang={lang}
                    t={t}
                />
                <FeatureHome dataInfo={data} />
            </header>
            <ConsignmentIndex
                t={t}
                lang={lang}
            />
        </>
    )
}
