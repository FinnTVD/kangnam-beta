'use client'
import LatestNewsItem from "../general/LatestNewsItem"
import OtherNewsItem from "../general/OtherNewsItem"
import ListNewsCategorized from "./ListNewsCategorized"
import { useEffect, useRef, useState } from "react"
import ReactPaginate from 'react-paginate';
import classes from './ListNewsStyles.module.css';

export default function ListNews () {
    const content = "<span>Cụm từ bất động sản được chúng ta sử dụng nhiều và được nhắc đến nhiều lần nhưng không phải ai cũng hiểu rõ cụm từ này mang ý nghĩa gì? Bất động sản là một thuật ngữ có mang tính pháp lý trong đó mỗi quốc gia có một khái niệm riêng và không giống nhau về khái niệm bất động sản.</span><h2>1. Đôi nét về các dự án bất động sản</h2><p>Cụm từ bất động sản được chúng ta sử dụng nhiều và được nhắc đến nhiều lần nhưng không phải ai cũng hiểu rõ cụm từ này mang ý nghĩa gì? Bất động sản là một thuật ngữ có mang tính pháp lý trong đó mỗi quốc gia có một khái niệm riêng và không giống nhau về khái niệm bất động sản.</p>"
    const categories = ['Thị trường', 'Tin nóng', 'Dự án'];
    const newsArr = [{id: 0, slug: "nghe-an-sap-dau-gia-hon-100-lo-dat-khoi-diem-1-trieu-dong-2m2", author:"Admin", category: 'Thị trường', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: content, picture: '/images/featuredImg.jpg'},
    {id: 1, slug: "nghe-an-sap-dau-gia-hon-100-lo-dat-khoi-diem-1-trieu-dong-2m2-1", author:"Admin", category: 'Thị trường', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: content, picture: '/images/featuredImg.jpg'},
    {id: 2, slug: "nghe-an-sap-dau-gia-hon-100-lo-dat-khoi-diem-1-trieu-dong-2m2-2", author:"Admin", category: 'Tin nóng', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: content, picture: '/images/featuredImg.jpg'},
    {id: 3, slug: "nghe-an-sap-dau-gia-hon-100-lo-dat-khoi-diem-1-trieu-dong-2m2-3", author:"Admin", category: 'Dự án', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: content, picture: '/images/featuredImg.jpg'},
    {id: 4, slug: "nghe-an-sap-dau-gia-hon-100-lo-dat-khoi-diem-1-trieu-dong-2m2-4", author:"Admin", category: 'Dự án', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: content, picture: '/images/featuredImg.jpg'},
    {id: 5, slug: "nghe-an-sap-dau-gia-hon-100-lo-dat-khoi-diem-1-trieu-dong-2m2-5", author:"Admin", category: 'Thị trường', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: content, picture: '/images/featuredImg.jpg'},
    {id: 6, slug: "nghe-an-sap-dau-gia-hon-100-lo-dat-khoi-diem-1-trieu-dong-2m2-6", author:"Admin", category: 'Thị trường', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: content, picture: '/images/featuredImg.jpg'},
    {id: 7, slug: "nghe-an-sap-dau-gia-hon-100-lo-dat-khoi-diem-1-trieu-dong-2m2-7", author:"Admin", category: 'Thị trường', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: content, picture: '/images/featuredImg.jpg'},
    {id: 8, slug: "nghe-an-sap-dau-gia-hon-100-lo-dat-khoi-diem-1-trieu-dong-2m2-8", author:"Admin", category: 'Thị trường', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: content, picture: '/images/featuredImg.jpg'},
    {id: 9, slug: "nghe-an-sap-dau-gia-hon-100-lo-dat-khoi-diem-1-trieu-dong-2m2-9", author:"Admin", category: 'Thị trường', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: content, picture: '/images/featuredImg.jpg'},
    {id: 10, slug: "nghe-an-sap-dau-gia-hon-100-lo-dat-khoi-diem-1-trieu-dong-2m2-10", author:"Admin", category: 'Thị trường', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: content, picture: '/images/featuredImg.jpg'},
    {id: 11, slug: "nghe-an-sap-dau-gia-hon-100-lo-dat-khoi-diem-1-trieu-dong-2m2-11", author:"Admin", category: 'Thị trường', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: content, picture: '/images/featuredImg.jpg'},
    {id: 12, slug: "nghe-an-sap-dau-gia-hon-100-lo-dat-khoi-diem-1-trieu-dong-2m2-12", author:"Admin", category: 'Thị trường', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: content, picture: '/images/featuredImg.jpg'},
    {id: 13, slug: "nghe-an-sap-dau-gia-hon-100-lo-dat-khoi-diem-1-trieu-dong-2m2-13", author:"Admin", category: 'Thị trường', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: content, picture: '/images/featuredImg.jpg'},
    {id: 14, slug: "nghe-an-sap-dau-gia-hon-100-lo-dat-khoi-diem-1-trieu-dong-2m2-14", author:"Admin", category: 'Thị trường', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: content, picture: '/images/featuredImg.jpg'}]
    // const pageLength = Math.ceil(newsArr.length/9);
    // console.log(pageLength)
    // const pageArr = new Array(pageLength);
    // console.log(newsArr.slice(0,12));
    const [category, setCategory] = useState('Thị trường');
    let prevCategory = 'Thị trường';
    let pageLength = newsArr.filter((item) => item.category===category).length/9
    const [pageNumber, setPageNumber] = useState(1);
    const [listNews, setListNews] = useState();
    const [cateIndex, setCateIndex] = useState(0);
    const categoryStyle = "border border-[#D6A279] rounded-full py-[0.625vw] px-[1.5vw] title14-400-150 cursor-pointer";
    const newsCategorizedRef = useRef()
    useEffect(() => {
        let pNumber;
        if(prevCategory!==category){
            pNumber = 1;
            setPageNumber(1);
        }
        else{
            pNumber = pageNumber;
        }
        console.log(pNumber)
        setListNews(newsArr.filter((item) => item.category===category).slice(9*(pNumber-1),9*pNumber))
        prevCategory = category;
    }, [category, pageNumber])
    return (
        <section className="px-120 pt-[6.875vw] pb-[8.125vw]" ref={newsCategorizedRef}>
            <div className='flex items-center justify-between'>
                <div>
                    <span className='sub-title'>Tin tức về thị trường</span>
                    <h2 className='title56 text-den mt-[0.62vw]'>Tin tức thị trường</h2>
                </div>
                <div className="flex gap-[1.5vw]">
                    {categories.map((category, index) => 
                        <span key={index} className={index===cateIndex ? `${categoryStyle} bg-[#D6A279] text-white` : `${categoryStyle} bg-transparent text-den`} onClick={() => {setCategory(category); setCateIndex(index)}}> {category} </span>     
                    )}
                </div>
            </div>
            
            {listNews&& 
            <>
                <ListNewsCategorized list={listNews}></ListNewsCategorized>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next"
                    onPageChange={(e) => setPageNumber(e.selected+1)}
                    pageRangeDisplayed={5}
                    pageCount={pageLength}
                    renderOnZeroPageCount={null}
                    previousLabel="Previous"
                    forcePage={pageNumber-1}
                    pageClassName={classes.page}
                    activeClassName={classes.selected}
                    onClick={() => {newsCategorizedRef.current?.scrollIntoView({ behavior: 'smooth' })}}
                    className={classes['news-pagination']}
                />
            </>
            }
            {/* {pageArr.map((p, index) => {
                <span onClick={() => setPageNumber(index+1)}> {index+1} </span>
            })} */}
        </section>
    )
}