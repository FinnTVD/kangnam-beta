'use client';
import Button from '../general/Button'
import Image from 'next/image'
import LatestNewsItem from '../general/LatestNewsItem'
import OtherNewsItem from '../general/OtherNewsItem'
import { useMediaQuery } from 'react-responsive';
// import React, { useEffect } from 'react'


export default function LatestNews ({t}) {
    const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' })
    const content = "<img src='/images/about-us-contact-address.png'></img><span>Cụm từ bất động sản được chúng ta sử dụng nhiều và được nhắc đến nhiều lần nhưng không phải ai cũng hiểu rõ cụm từ này mang ý nghĩa gì? Bất động sản là một thuật ngữ có mang tính pháp lý trong đó mỗi quốc gia có một khái niệm riêng và không giống nhau về khái niệm bất động sản.</span><h2>1. Đôi nét về các dự án bất động sản</h2><p>Cụm từ bất động sản được chúng ta sử dụng nhiều và được nhắc đến nhiều lần nhưng không phải ai cũng hiểu rõ cụm từ này mang ý nghĩa gì? Bất động sản là một thuật ngữ có mang tính pháp lý trong đó mỗi quốc gia có một khái niệm riêng và không giống nhau về khái niệm bất động sản.</p>"
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
    const newsArrSlice = isMobile? newsArr.slice(1, 3) : newsArr.slice(1, 6);
    
    return(
    <section className='w-full px-120 pb-[8.125vw] mt-[-6.25vw] relative max-md:mt-[3.7vw] max-md:px-mb10 max-md:pb-[20.8vw]'>
        <div className='flex justify-between items-end'>
            <div>
                <span className='sub-title max-md:title-mb12-600-160 max-md:leading-[1.5] max-md:tracking-[0.6px]'>{t.homepageNews.subtitle}</span>
                <h2 className='title56 text-den mt-[0.62vw] max-md:title-mb25-700-130 max-md:tracking-[-0.75px] max-md:mt-[2.1vw] max-md:normal-case'>{t.homepageNews.title}</h2>
            </div>
            {!isMobile && <Button stroke='white' className='bg-logo text-white border-none' href={'/danh-sach-tin-tuc'}>{t.homepageNews.button}</Button>}
        </div>
        <div className='mt-[3.5vw] grid grid-cols-3 grid-rows-[16.875vw_16.875vw_16.875vw] gap-[1.5vw] max-md:grid-cols-1 max-md:grid-rows-[68.5vw_44.2vw_44.2vw] max-md:gap-[4.2vw] max-md:mt-[4.2vw]'>
                <div className='col-span-2 row-span-2 max-md:col-span-1 max-md:row-span-1'>
                    <LatestNewsItem
                        newsItem={newsArr[0]}
                        id={newsArr[0].id}
                        key={newsArr[0].id}
                        t={t}
                    ></LatestNewsItem>
                </div>
                {newsArrSlice?.map((news) => 
                    <div key={news.id}>
                        <OtherNewsItem
                            newsOtherItem={news}
                            id={news.id}
                            key={news.id}
                        ></OtherNewsItem>
                    </div>
                )}
        </div>
        {isMobile && <Button stroke='white' href={'/danh-sach-tin-tuc'} span='text-14mb font-normal tracking-[-0.28px]' icon='w-auto h-[4.5vw]' className='bg-logo w-full mt-[8.26vw] justify-center text-white border-none gap-x-[3.2vw] py-[4.26vw] max-md:mt-[4.2vw]'>{t.homepageNews.button}</Button>}
        </section>
    )
}
