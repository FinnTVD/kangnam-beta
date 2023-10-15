import IndexContact from '@/components/contact'
import HeaderV2 from '@/components/general/HeaderV2'
import { getDictionary } from '../../dictionaries'
import getData from '@/utils/getData'
import { handleCheckLangCode } from '@/utils'
const src = '/images/bg-contact.jpg'

export async function generateMetadata({ params: { lang } }) {
    const data = await getData('/site-infor')
    const t = await getDictionary(lang)
    return {
        title: t?.metaData?.contact?.title,
        description: t?.metaData?.contact?.description,
        keywords: ['KANGNAM', 'kangnam', 'Bất động sản', 'Mua nhà'],
        authors: [
            {
                name: 'okhub',
                url: 'https://okhub.vn/',
            },
        ],
        creator: 'FinnTVD',
        openGraph: {
            title: t?.metaData?.contact?.title,
            description: t?.metaData?.contact?.description,
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
            title: t?.metaData?.contact?.title,
            description: t?.metaData?.contact?.description,
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
export default async function ContactPage({ params }) {
    const data = await getData('/site-infor')
    const t = await getDictionary(params.lang)

    return (
        <>
            <HeaderV2
                lang={params.lang}
                t={t}
                src={src}
            />
            <IndexContact
                dataInfo={data}
                t={t}
            />
        </>
    )
}
