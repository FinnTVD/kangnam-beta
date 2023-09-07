import { getDictionary } from '@/app/[lang]/dictionaries'
import HeaderV2 from '@/components/general/HeaderV2'
import IndexNewsDetail from '@/components/newsDetail'

export default async function NewsDetail({ params }) {
    const t = await getDictionary(params.lang)

    return (
        <>
            <HeaderV2
                lang={params.lang}
                t={t}
            />
            <IndexNewsDetail
                t={t}
                slug={params.slug}
                lang={params.lang}
            ></IndexNewsDetail>
        </>
    )
}
