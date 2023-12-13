import getData from '@/utils/getData'
import CommentFB from './CommentFB'
import ContentDetail from './ContentDetail'
import ImageGallery from './ImageGallery'
import RelatedProject from './RelatedProject'
import NavBarV2 from '../general/NavBarV2'
import NotFound from '@/app/[lang]/not-found'
import ContentDetailProject from './ContentDetailProject'

export default async function IndexProjectDetail({ lang, detail, t, isProject }) {
    const data = await getData(`${isProject ? '/project/project-by-slug/' : '/property/property-by-slug/'}${detail}`)

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
                <main>
                    <ImageGallery data={data} />
                    {isProject ? (
                        <ContentDetailProject
                            data={data}
                            detail={detail}
                            lang={lang}
                            t={t}
                            isProject={isProject}
                        />
                    ) : (
                        <ContentDetail
                            data={data}
                            detail={detail}
                            lang={lang}
                            t={t}
                            isProject={isProject}
                        />
                    )}
                    <CommentFB data={data} />
                    <RelatedProject
                        lang={lang}
                        data={data}
                        t={t}
                        isProject={isProject}
                    />
                </main>
            )}
        </>
    )
}
