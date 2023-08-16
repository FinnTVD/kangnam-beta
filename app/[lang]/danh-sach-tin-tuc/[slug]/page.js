import IndexNewsDetail from "@/components/newsDetail";
import { getDictionary } from "../../dictionaries";

export default async function NewsDetail({ params }){
  const t = await getDictionary(params.lang)

  return(
    <IndexNewsDetail t={t} slug={params.slug}></IndexNewsDetail>
  )
}