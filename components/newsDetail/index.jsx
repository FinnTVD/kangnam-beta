// 'use client'
import getData from "@/utils/getData";
import PostDetail from "./PostDetail";
import RelatedNews from "./RelatedNews";
import { handleCheckLangCode } from "@/utils";

export default async function IndexNewsDetail({lang, t, slug}){
    const post = await getData(`/post/post-by-slug/${slug}`)
    const langCode = handleCheckLangCode(lang)
    const translation = post?.translations?.find((item) => item.languageCode===langCode)

    return(
        <>
            {(post && translation) && <PostDetail t={t} post={post} translation={translation} lang={lang}></PostDetail>}
            {post && <RelatedNews t={t} lang={lang} post={post}></RelatedNews>}
        </>
    )
}
