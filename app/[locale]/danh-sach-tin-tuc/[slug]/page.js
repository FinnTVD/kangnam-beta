import IndexNewsDetail from "@/components/newsDetail";


export default function NewsDetail({ params }){
  return(
    <IndexNewsDetail slug={params.slug}></IndexNewsDetail>
  )
}