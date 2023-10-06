import getData from '@/utils/getData'
import CommentFB from './CommentFB'
import ContentDetail from './ContentDetail'
import ImageGallery from './ImageGallery'
import RelatedProject from './RelatedProject'
import NavBarV2 from '../general/NavBarV2'
import NotFound from '@/app/[lang]/not-found'

export default async function IndexProjectDetail({ lang, detail, t }) {
    const data = await getData(`/property/property-by-slug/${detail}`)

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
                    <ContentDetail
                        data={data}
                        detail={detail}
                        lang={lang}
                    />
                    <CommentFB data={data} />
                    <RelatedProject
                        lang={lang}
                        detail={detail}
                        data={data}
                    />
                </main>
            )}
        </>
    )
}
