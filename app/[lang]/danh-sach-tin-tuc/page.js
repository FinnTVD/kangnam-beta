import IndexNews from "@/components/news"
import { getDictionary } from '../dictionaries'

export default async function News({params: {lang}}) {
    const t = await getDictionary(lang)
    return(
        <IndexNews t={t}></IndexNews>
    )
}