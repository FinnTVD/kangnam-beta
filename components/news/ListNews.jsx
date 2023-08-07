'use client'
import LatestNewsItem from "../general/LatestNewsItem"
import OtherNewsItem from "../general/OtherNewsItem"
import ListNewsCategorized from "./ListNewsCategorized"
import { useEffect, useState } from "react"
import ReactPaginate from 'react-paginate';
import classes from './ListNewsStyles.module.css';

export default function ListNews () {
    const categories = ['Thị trường', 'Tin nóng', 'Dự án'];
    const newsArr = [{id: 0, category: 'Thị trường', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: 'Buổi đấu giá 121 lô đất tại các huyện Nam Đàn, Thanh Chương, Yên Thành, thị xã Thái Hòa và thị trấn Hưng Nguyên (tỉnh Nghệ An) sẽ được tổ chức vào các ngày cuối tháng 7 và đầu tháng 8 tới. Giá khởi điểm thấp nhất từ hơn 260 triệu đồng/lô.', picture: '/featuredImg.jpg'},
    {id: 1, category: 'Thị trường', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: 'Buổi đấu giá 121 lô đất tại các huyện Nam Đàn, Thanh Chương, Yên Thành, thị xã Thái Hòa và thị trấn Hưng Nguyên (tỉnh Nghệ An) sẽ được tổ chức vào các ngày cuối tháng 7 và đầu tháng 8 tới. Giá khởi điểm thấp nhất từ hơn 260 triệu đồng/lô.', picture: '/featuredImg.jpg'},
    {id: 2, category: 'Tin nóng', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: 'Buổi đấu giá 121 lô đất tại các huyện Nam Đàn, Thanh Chương, Yên Thành, thị xã Thái Hòa và thị trấn Hưng Nguyên (tỉnh Nghệ An) sẽ được tổ chức vào các ngày cuối tháng 7 và đầu tháng 8 tới. Giá khởi điểm thấp nhất từ hơn 260 triệu đồng/lô.', picture: '/featuredImg.jpg'},
    {id: 3, category: 'Dự án', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: 'Buổi đấu giá 121 lô đất tại các huyện Nam Đàn, Thanh Chương, Yên Thành, thị xã Thái Hòa và thị trấn Hưng Nguyên (tỉnh Nghệ An) sẽ được tổ chức vào các ngày cuối tháng 7 và đầu tháng 8 tới. Giá khởi điểm thấp nhất từ hơn 260 triệu đồng/lô.', picture: '/featuredImg.jpg'},
    {id: 4, category: 'Dự án', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: 'Buổi đấu giá 121 lô đất tại các huyện Nam Đàn, Thanh Chương, Yên Thành, thị xã Thái Hòa và thị trấn Hưng Nguyên (tỉnh Nghệ An) sẽ được tổ chức vào các ngày cuối tháng 7 và đầu tháng 8 tới. Giá khởi điểm thấp nhất từ hơn 260 triệu đồng/lô.', picture: '/featuredImg.jpg'},
    {id: 5, category: 'Thị trường', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: 'Buổi đấu giá 121 lô đất tại các huyện Nam Đàn, Thanh Chương, Yên Thành, thị xã Thái Hòa và thị trấn Hưng Nguyên (tỉnh Nghệ An) sẽ được tổ chức vào các ngày cuối tháng 7 và đầu tháng 8 tới. Giá khởi điểm thấp nhất từ hơn 260 triệu đồng/lô.', picture: '/featuredImg.jpg'},
    {id: 6, category: 'Thị trường', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: 'Buổi đấu giá 121 lô đất tại các huyện Nam Đàn, Thanh Chương, Yên Thành, thị xã Thái Hòa và thị trấn Hưng Nguyên (tỉnh Nghệ An) sẽ được tổ chức vào các ngày cuối tháng 7 và đầu tháng 8 tới. Giá khởi điểm thấp nhất từ hơn 260 triệu đồng/lô.', picture: '/featuredImg.jpg'},
    {id: 7, category: 'Thị trường', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: 'Buổi đấu giá 121 lô đất tại các huyện Nam Đàn, Thanh Chương, Yên Thành, thị xã Thái Hòa và thị trấn Hưng Nguyên (tỉnh Nghệ An) sẽ được tổ chức vào các ngày cuối tháng 7 và đầu tháng 8 tới. Giá khởi điểm thấp nhất từ hơn 260 triệu đồng/lô.', picture: '/featuredImg.jpg'},
    {id: 8, category: 'Thị trường', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: 'Buổi đấu giá 121 lô đất tại các huyện Nam Đàn, Thanh Chương, Yên Thành, thị xã Thái Hòa và thị trấn Hưng Nguyên (tỉnh Nghệ An) sẽ được tổ chức vào các ngày cuối tháng 7 và đầu tháng 8 tới. Giá khởi điểm thấp nhất từ hơn 260 triệu đồng/lô.', picture: '/featuredImg.jpg'},
]
    const pageLength = Math.ceil(newsArr.length/9);
    // console.log(pageLength)
    const pageArr = new Array(pageLength);
    // console.log(newsArr.slice(0,12));
    const [category, setCategory] = useState('Thị trường');
    const [pageNumber, setPageNumber] = useState(1);
    const [listNews, setListNews] = useState();
    useEffect(() => {
        setListNews(newsArr.filter((item) => item.category===category).slice(9*(pageNumber-1),9*pageNumber-1))
    }, [category, pageNumber])
    return (
        <section className="px-120 pt-[6.875vw] pb-[8.125vw]">
            <div className='flex justify-between items-center'>
                <div>
                    <span className='sub-title'>Tin tức về thị trường</span>
                    <h2 className='title56 text-den mt-[0.62vw]'>Tin tức thị trường</h2>
                </div>
                <div className="flex gap-[1.5vw]">
                    {categories.map((category) => 
                        <span onClick={() => setCategory(category)} className="border border-[#D6A279] rounded-full py-[0.625vw] px-[1.5vw] text-den title14-400-150"> {category} </span>     
                    )}
                </div>
            </div>
            {/* <div className='mt-[3.5vw] grid grid-cols-3 grid-rows-[16.875vw_16.875vw] gap-[1.5vw]'>
                <div className='col-span-2 row-span-2'>
                    <LatestNewsItem newsItem={newsArr[0]} id={newsArr[0].id} key={newsArr[0].id}></LatestNewsItem>
                </div>
                {newsArrSlice?.map((news) => 
                <div key={news.id}>
                    <OtherNewsItem newsOtherItem={news} id={news.id} key={news.id}></OtherNewsItem>
                </div>
                )}
            </div> */}
            {listNews && <ListNewsCategorized list={listNews}></ListNewsCategorized>}
            <ReactPaginate
                breakLabel="..."
                nextLabel="Next"
                onPageChange={() => setPageNumber(index+1)}
                pageRangeDisplayed={5}
                pageCount={pageLength}
                renderOnZeroPageCount={null}
                previousLabel="Previous"
                pageClassName="page"
                className={classes['news-pagination']}
            />
            {/* {pageArr.map((p, index) => {
                <span onClick={() => setPageNumber(index+1)}> {index+1} </span>
            })} */}
        </section>
    )
}