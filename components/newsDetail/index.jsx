import PostDetail from './PostDetail'
import RelatedNews from './RelatedNews'

export default function IndexNewsDetail({ lang, t, post, newsDetail }) {
    return (
        <>
            {post && (
                <PostDetail
                    t={t}
                    post={post}
                    newsDetail={newsDetail}
                    lang={lang}
                ></PostDetail>
            )}
            {post && (
                <RelatedNews
                    t={t}
                    lang={lang}
                    post={post}
                ></RelatedNews>
            )}
        </>
    )
}
