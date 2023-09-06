'use client'

import { useRouter } from "next/navigation"
import PostDetail from "./PostDetail";
import RelatedNews from "./RelatedNews";
import { useEffect } from "react";
import useSWR from 'swr'
import { handleCheckLangCode } from "@/utils";

const fetcher = (...args) => fetch(...args).then((res) => res.json())
const fetcher1 = (url, langCode) => fetch(url, { headers: { 'x-language-code': langCode } }).then((res) => res.json())
export default function IndexNewsDetail({t, slug, lang}){
    const router = useRouter()
    const langCode = handleCheckLangCode(lang)
    
    const {
        data: post,
        error: errorPost,
        isLoading: isLoadingPost,
    } = useSWR(process.env.NEXT_PUBLIC_API + `/post/post-by-slug/${slug}`, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })

    const {
        data: newsArr,
        error: errornewsArr,
        isLoading: isLoadingNewsArr,
    } = useSWR(process.env.NEXT_PUBLIC_API + `/post?page=1&take=7&postTypeIds[]=${post?.postType.id}`, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        })

    const relatedNewsArr = newsArr?.data?.filter((item) => item.postType.id === post.postType.id && item.id!==post.id).slice(0, 6);
    const translation = post?.translations?.find((item) => item.languageCode===langCode)

    useEffect(() => {
        if(translation)
            router.replace(`/${lang}/news/${translation.slug}`,undefined,{shallow:true})
    }, [translation])

    return(
        <>
            {(post && translation) && <PostDetail t={t} post={post} langCode={langCode} translation={translation}></PostDetail>}
            {<RelatedNews t={t} relatedNews={relatedNewsArr? relatedNewsArr : null} lang={lang} isLoadingNewsArr={isLoadingNewsArr}></RelatedNews>}
        </>
    )
}
