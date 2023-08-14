'use client';
import Button from '../general/Button'
import Image from 'next/image'
import LatestNewsItem from '../general/LatestNewsItem'
import OtherNewsItem from '../general/OtherNewsItem'
import { useTranslations } from 'next-intl'
// import React, { useEffect } from 'react'


export default function LatestNews () {
    const t = useTranslations("HomepageNews");
    const content = "<img src='/about-us-contact-address.png'></img><span>Cụm từ bất động sản được chúng ta sử dụng nhiều và được nhắc đến nhiều lần nhưng không phải ai cũng hiểu rõ cụm từ này mang ý nghĩa gì? Bất động sản là một thuật ngữ có mang tính pháp lý trong đó mỗi quốc gia có một khái niệm riêng và không giống nhau về khái niệm bất động sản.</span><h2>1. Đôi nét về các dự án bất động sản</h2><p>Cụm từ bất động sản được chúng ta sử dụng nhiều và được nhắc đến nhiều lần nhưng không phải ai cũng hiểu rõ cụm từ này mang ý nghĩa gì? Bất động sản là một thuật ngữ có mang tính pháp lý trong đó mỗi quốc gia có một khái niệm riêng và không giống nhau về khái niệm bất động sản.</p>"
    const categories = ['Thị trường', 'Tin nóng', 'Dự án'];
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
    const newsArrSlice = newsArr.slice(1, 6);
    
    return(
    <section className='w-full px-120 pb-[8.125vw] mt-[-6.25vw] relative'>
        <div className='flex justify-between items-end'>
            <div>
                <span className='sub-title'>{t('subtitle')}</span>
                <h2 className='title56 text-den mt-[0.62vw]'>{t('title')}</h2>
            </div>
            <Button href={'/danh-sach-tin-tuc'}>Xem tất cả</Button>
        </div>
        <div className='mt-[3.5vw] grid grid-cols-3 grid-rows-[16.875vw_16.875vw_16.875vw] gap-[1.5vw]'>
            <div className='col-span-2 row-span-2'>
                <LatestNewsItem newsItem={newsArr[0]} id={newsArr[0].id} key={newsArr[0].id}></LatestNewsItem>

            </div>
            <div className='mt-[3.5vw] grid grid-cols-3 grid-rows-[16.875vw_16.875vw_16.875vw] gap-[1.5vw]'>
                <div className='col-span-2 row-span-2'>
                    <LatestNewsItem
                        newsItem={newsArr[0]}
                        id={newsArr[0].id}
                        key={newsArr[0].id}
                    ></LatestNewsItem>
                </div>
                {newsArrSlice?.map((news) => (
                    <div key={news.id}>
                        <OtherNewsItem
                            newsOtherItem={news}
                            id={news.id}
                            key={news.id}
                        ></OtherNewsItem>
                    </div>
                ))}
            </div>
        </section>
    )
}
