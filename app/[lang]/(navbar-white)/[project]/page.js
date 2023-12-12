import IndexListProject from '@/components/listProject'
import { getDictionary } from '../../dictionaries'
import getData from '@/utils/getData'
import { ToastContainer } from 'react-toastify'

import NavBarV2 from '@/components/general/NavBarV2'
import NotFound from '../../not-found'
import { handleCheckLangCode, listSlugNavHire, slugProject } from '@/utils'

export async function generateMetadata({ params: { lang } }) {
    const data = await getData('/site-infor')
    const t = await getDictionary(lang)
    return {
        metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN),
        title: t?.metaData?.project?.title,
        description: t?.metaData?.project?.description,
        keywords: ['KANGNAM', 'kangnam', 'Bất động sản', 'Mua nhà'],
        authors: [
            {
                name: 'okhub',
                url: 'https://okhub.vn/',
            },
        ],
        creator: 'FinnTVD',
        openGraph: {
            title: t?.metaData?.project?.title,
            description: t?.metaData?.project?.description,
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
            title: t?.metaData?.project?.title,
            description: t?.metaData?.project?.description,
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
export default async function Page({ params: { lang, project } }) {
    const t = await getDictionary(lang)
    const data = await getData('/property-category')
    const isProject = slugProject?.join('')?.includes(project)
    const isHire = listSlugNavHire?.join('')?.includes(project)
    return (
        <>
            <header className='fixed top-0 left-0 w-screen bg-white h-fit shadow-boxFilter z-[999999999999]'>
                <NavBarV2
                    lang={lang}
                    t={t}
                />
            </header>
            {!data || data?.statusCode === 404 ? (
                <NotFound />
            ) : (
                <IndexListProject
                    lang={lang}
                    t={t}
                    dataSlug={data?.data}
                    isProject={isProject}
                    isHire={isHire}
                />
            )}
            <ToastContainer style={{ zIndex: '999999999999999' }} />
        </>
    )
}
