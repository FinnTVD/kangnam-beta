'use client'
import { useParams } from "next/navigation"
import PostDetail from "./PostDetail";
import RelatedNews from "./RelatedNews";


export default function IndexNewsDetail({slug}){
    const content = "<img src='/about-us-contact-address.png'></img><p>Cụm từ bất động sản được chúng ta sử dụng nhiều và được nhắc đến nhiều lần nhưng không phải ai cũng hiểu rõ cụm từ này mang ý nghĩa gì? Bất động sản là một thuật ngữ có mang tính pháp lý trong đó mỗi quốc gia có một khái niệm riêng và không giống nhau về khái niệm bất động sản.</p><h2>1. Đôi nét về các dự án bất động sản</h2><p>Cụm từ bất động sản được chúng ta sử dụng nhiều và được nhắc đến nhiều lần nhưng không phải ai cũng hiểu rõ cụm từ này mang ý nghĩa gì? Bất động sản là một thuật ngữ có mang tính pháp lý trong đó mỗi quốc gia có một khái niệm riêng và không giống nhau về khái niệm bất động sản.</p>"
    const newsArr = [{id: 0, slug: "nghe-an-sap-dau-gia-hon-100-lo-dat-khoi-diem-1-trieu-dong-2m2", author:"Admin", category: 'Thị trường', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: content, picture: '/featuredImg.jpg'},
    {id: 1, slug: "nghe-an-sap-dau-gia-hon-100-lo-dat-khoi-diem-1-trieu-dong-2m2-1", author:"Admin", category: 'Thị trường', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: content, picture: '/featuredImg.jpg'},
    {id: 2, slug: "nghe-an-sap-dau-gia-hon-100-lo-dat-khoi-diem-1-trieu-dong-2m2-2", author:"Admin", category: 'Tin nóng', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: content, picture: '/featuredImg.jpg'},
    {id: 3, slug: "nghe-an-sap-dau-gia-hon-100-lo-dat-khoi-diem-1-trieu-dong-2m2-3", author:"Admin", category: 'Dự án', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: content, picture: '/featuredImg.jpg'},
    {id: 4, slug: "nghe-an-sap-dau-gia-hon-100-lo-dat-khoi-diem-1-trieu-dong-2m2-4", author:"Admin", category: 'Dự án', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: content, picture: '/featuredImg.jpg'},
    {id: 5, slug: "nghe-an-sap-dau-gia-hon-100-lo-dat-khoi-diem-1-trieu-dong-2m2-5", author:"Admin", category: 'Thị trường', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: content, picture: '/featuredImg.jpg'},
    {id: 6, slug: "nghe-an-sap-dau-gia-hon-100-lo-dat-khoi-diem-1-trieu-dong-2m2-6", author:"Admin", category: 'Thị trường', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: content, picture: '/featuredImg.jpg'},
    {id: 7, slug: "nghe-an-sap-dau-gia-hon-100-lo-dat-khoi-diem-1-trieu-dong-2m2-7", author:"Admin", category: 'Thị trường', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: content, picture: '/featuredImg.jpg'},
    {id: 8, slug: "nghe-an-sap-dau-gia-hon-100-lo-dat-khoi-diem-1-trieu-dong-2m2-8", author:"Admin", category: 'Thị trường', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: content, picture: '/featuredImg.jpg'},
    {id: 9, slug: "nghe-an-sap-dau-gia-hon-100-lo-dat-khoi-diem-1-trieu-dong-2m2-9", author:"Admin", category: 'Thị trường', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: content, picture: '/featuredImg.jpg'},
    {id: 10, slug: "nghe-an-sap-dau-gia-hon-100-lo-dat-khoi-diem-1-trieu-dong-2m2-10", author:"Admin", category: 'Thị trường', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: content, picture: '/featuredImg.jpg'},
    {id: 11, slug: "nghe-an-sap-dau-gia-hon-100-lo-dat-khoi-diem-1-trieu-dong-2m2-11", author:"Admin", category: 'Thị trường', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: content, picture: '/featuredImg.jpg'},
    {id: 12, slug: "nghe-an-sap-dau-gia-hon-100-lo-dat-khoi-diem-1-trieu-dong-2m2-12", author:"Admin", category: 'Thị trường', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: content, picture: '/featuredImg.jpg'},
    {id: 13, slug: "nghe-an-sap-dau-gia-hon-100-lo-dat-khoi-diem-1-trieu-dong-2m2-13", author:"Admin", category: 'Thị trường', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: content, picture: '/featuredImg.jpg'},
    {id: 14, slug: "nghe-an-sap-dau-gia-hon-100-lo-dat-khoi-diem-1-trieu-dong-2m2-14", author:"Admin", category: 'Thị trường', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: content, picture: '/featuredImg.jpg'}]
    // const router = useRouter()
    // const { slug } = useParams()
    // console.log(slug)
    const post = newsArr.find((item) => item.slug === slug)
    const relatedNewsArr = newsArr.filter((item) => item.category === post.category && item!==post).slice(0, 5);
    console.log(relatedNewsArr)
    return(
        <>
            <PostDetail post={post}></PostDetail>
            <RelatedNews relatedNews={relatedNewsArr}></RelatedNews>
        </>
    )
}