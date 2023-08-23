import { getDictionary } from '@/app/[lang]/dictionaries'
import IndexNewsDetail from '@/components/newsDetail'

export default async function NewsDetail({ params }) {
    const t = await getDictionary(params.lang)

    return (
        <IndexNewsDetail
            t={t}
            slug={params.slug}
        ></IndexNewsDetail>
    )
}
