import NavBarV2 from '../general/NavBarV2'
import CommentFB from './CommentFB'
import ContentDetail from './ContentDetail'
import ImageGallery from './ImageGallery'
import RelatedProject from './RelatedProject'

export default function IndexProjectDetail({ lang }) {
    return (
        <>
            <header className='fixed top-0 left-0 w-screen bg-white h-fit shadow-boxFilter z-[999999999999]'>
                <NavBarV2 lang={lang} />
            </header>
            <main>
                <ImageGallery />
                <ContentDetail />
                <CommentFB />
                <RelatedProject />
            </main>
        </>
    )
}
