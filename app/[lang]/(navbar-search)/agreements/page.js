import IndexAgreements from '@/components/agreements'
import NavBarV2 from '@/components/general/NavBarV2'
import { getDictionary } from '../../dictionaries'
import { handleCheckLangCode, postTypeIdAgreement } from '@/utils'
import getData from '@/utils/getData'

export async function generateMetadata({ params: { lang } }) {
    const data = await getData('/site-infor')
    const t = await getDictionary(lang)
    return {
        metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN),
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
    const agreementData = await getData(`/post?take=12&postTypeIds[]=${postTypeIdAgreement}`)
    let agreementDataTranslation = []
    if (agreementData) {
        agreementData?.data?.forEach((item) => {
            item?.translations?.forEach((itm) => {
                if (itm?.languageCode?.toLowerCase()?.includes(params.lang))
                    agreementDataTranslation.push({ title: itm?.title, slug: itm?.slug, description: itm?.description })
            })
        })
    }
    return (
        <>
            <header className='fixed top-0 left-0 w-screen bg-white h-fit shadow-boxFilter z-[999999999999]'>
                <NavBarV2
                    lang={params.lang}
                    t={t}
                />
            </header>
            <IndexAgreements
                t={t}
                agreementDataTranslation={agreementDataTranslation}
            />
        </>
    )
}
