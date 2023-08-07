import Button from '../general/Button'
import Image from 'next/image'
import LatestNewsItem from '../general/LatestNewsItem'
import OtherNewsItem from '../general/OtherNewsItem'
// import React, { useEffect } from 'react'

export default function LatestNews () {
    const newsArr = [{id: 0, category: 'Thị trường', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: 'Buổi đấu giá 121 lô đất tại các huyện Nam Đàn, Thanh Chương, Yên Thành, thị xã Thái Hòa và thị trấn Hưng Nguyên (tỉnh Nghệ An) sẽ được tổ chức vào các ngày cuối tháng 7 và đầu tháng 8 tới. Giá khởi điểm thấp nhất từ hơn 260 triệu đồng/lô.', picture: '/featuredImg.jpg'},
    {id: 1, category: 'Thị trường', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: 'Buổi đấu giá 121 lô đất tại các huyện Nam Đàn, Thanh Chương, Yên Thành, thị xã Thái Hòa và thị trấn Hưng Nguyên (tỉnh Nghệ An) sẽ được tổ chức vào các ngày cuối tháng 7 và đầu tháng 8 tới. Giá khởi điểm thấp nhất từ hơn 260 triệu đồng/lô.', picture: '/featuredImg.jpg'},
    {id: 2, category: 'Tin nóng', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: 'Buổi đấu giá 121 lô đất tại các huyện Nam Đàn, Thanh Chương, Yên Thành, thị xã Thái Hòa và thị trấn Hưng Nguyên (tỉnh Nghệ An) sẽ được tổ chức vào các ngày cuối tháng 7 và đầu tháng 8 tới. Giá khởi điểm thấp nhất từ hơn 260 triệu đồng/lô.', picture: '/featuredImg.jpg'},
    {id: 3, category: 'Dự án', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: 'Buổi đấu giá 121 lô đất tại các huyện Nam Đàn, Thanh Chương, Yên Thành, thị xã Thái Hòa và thị trấn Hưng Nguyên (tỉnh Nghệ An) sẽ được tổ chức vào các ngày cuối tháng 7 và đầu tháng 8 tới. Giá khởi điểm thấp nhất từ hơn 260 triệu đồng/lô.', picture: '/featuredImg.jpg'},
    {id: 4, category: 'Dự án', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: 'Buổi đấu giá 121 lô đất tại các huyện Nam Đàn, Thanh Chương, Yên Thành, thị xã Thái Hòa và thị trấn Hưng Nguyên (tỉnh Nghệ An) sẽ được tổ chức vào các ngày cuối tháng 7 và đầu tháng 8 tới. Giá khởi điểm thấp nhất từ hơn 260 triệu đồng/lô.', picture: '/featuredImg.jpg'},
    {id: 5, category: 'Thị trường', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: 'Buổi đấu giá 121 lô đất tại các huyện Nam Đàn, Thanh Chương, Yên Thành, thị xã Thái Hòa và thị trấn Hưng Nguyên (tỉnh Nghệ An) sẽ được tổ chức vào các ngày cuối tháng 7 và đầu tháng 8 tới. Giá khởi điểm thấp nhất từ hơn 260 triệu đồng/lô.', picture: '/featuredImg.jpg'},
    {id: 6, category: 'Thị trường', date: '21/07/2023', title: 'Nghệ An sắp đấu giá hơn 100 lô đất, khởi điểm 1 triệu đồng/m2', content: 'Buổi đấu giá 121 lô đất tại các huyện Nam Đàn, Thanh Chương, Yên Thành, thị xã Thái Hòa và thị trấn Hưng Nguyên (tỉnh Nghệ An) sẽ được tổ chức vào các ngày cuối tháng 7 và đầu tháng 8 tới. Giá khởi điểm thấp nhất từ hơn 260 triệu đồng/lô.', picture: '/featuredImg.jpg'}]
    const newsArrSlice = newsArr.slice(1, 6);
    return(
    <section className='w-full px-120 pb-[8.125vw] mt-[-6.25vw] relative'>
        <div className='absolute top-0 left-0 h-[6.25vw] w-full z-[-1]' style={{background: 'linear-gradient(0deg, #fff, #ffffff00)'}}></div>
        <div className='flex justify-between items-end'>
            <div>
                <span className='sub-title'>Tổng hợp các dự án</span>
                <h2 className='title56 text-den mt-[0.62vw]'>Tin tức mới nhất</h2>
            </div>
            <Button href={'/danh-sach-tin-tuc'}>Xem tất cả</Button>
        </div>
        <div className='mt-[3.5vw] grid grid-cols-3 grid-rows-[16.875vw_16.875vw_16.875vw] gap-[1.5vw]'>
            <div className='col-span-2 row-span-2'>
                <LatestNewsItem newsItem={newsArr[0]} id={newsArr[0].id} key={newsArr[0].id}></LatestNewsItem>
            </div>
            {newsArrSlice?.map((news) => 
            <div key={news.id}>
                <OtherNewsItem newsOtherItem={news} id={news.id} key={news.id}></OtherNewsItem>
            </div>
            )}
        </div>
    </section>
    )
}