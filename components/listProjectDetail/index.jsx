import getData from '@/utils/getData'
import CommentFB from './CommentFB'
import ContentDetail from './ContentDetail'
import ImageGallery from './ImageGallery'
import RelatedProject from './RelatedProject'

export default async function IndexProjectDetail({ lang, detail }) {
    const data = await getData(`/property/property-by-slug/${detail}`)
    if (!data) return

    return (
        <>
            <main>
                <ImageGallery />
                <ContentDetail
                    data={data}
                    detail={detail}
                />
                <CommentFB data={data} />
                <RelatedProject
                    lang={lang}
                    detail={detail}
                />
            </main>
        </>
    )
}
