import IndexListProject from '@/components/listProject'
import { getDictionary } from '../../dictionaries'
import getData from '@/utils/getData'
import { ToastContainer } from 'react-toastify'

import NavBarV2 from '@/components/general/NavBarV2'
import NotFound from '../../not-found'
import { handleCheckLangCode, listSlugNavHire, slugProject } from '@/utils'
import { projects } from '@/utils/sitemapinit'
import { Suspense } from 'react'
import Skeleton from 'react-loading-skeleton'

export async function generateStaticParams({ params: { lang } }) {
    return projects.map((project) => {
        if (lang === project.code) return { project: project.title }
    })
}

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
export default async function page({ params: { lang, project } }) {
    const t = await getDictionary(lang)
    const data = await getData('/property-category')
    const isProject = slugProject?.join('')?.includes(decodeURI(project))
    const isHire = listSlugNavHire?.join('')?.includes(decodeURI(project))
    return (
        <>
            <header className='fixed top-0 left-0 w-screen bg-white h-fit shadow-boxFilter z-[999999999999]'>
                <Suspense fallback={<div>Loading ...</div>}>
                    <NavBarV2
                        lang={lang}
                        t={t}
                    />
                </Suspense>
            </header>
            {!data || data?.statusCode === 404 ? (
                <NotFound />
            ) : (
                <Suspense
                    fallback={
                        <div className='w-full h-screen'>
                            <Skeleton className='h-full' />
                        </div>
                    }
                >
                    <IndexListProject
                        lang={lang}
                        t={t}
                        dataSlug={data?.data}
                        isProject={isProject}
                        isHire={isHire}
                    />
                </Suspense>
            )}
            <ToastContainer style={{ zIndex: '999999999999999' }} />
        </>
    )
}
