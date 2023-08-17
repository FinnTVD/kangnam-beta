'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import NewsItem from '../news/NewsItem'
import Button from '../general/Button'

export default function RelatedNews({t, relatedNews}) {
    return(
        <section className='px-120 mt-[3.75vw]'>
            <div className='flex justify-between items-end'>
                <div>
                    <span className='sub-title'>{t.newsDetailRelated.subtitle}</span>
                    <h2 className='title56 text-den mt-[0.62vw]'>{t.newsDetailRelated.title}</h2>
                </div>
                <Button href={'/danh-sach-tin-tuc'}>Xem tất cả</Button>
            </div>
        <Swiper
                loop={true}
                slidesPerView={3}
                spaceBetween={24}
                className='pt-[1.875vw] pb-[6.25vw]'
        >
            {relatedNews.map((item) => 
                <SwiperSlide>
                    <NewsItem newsOtherItem={item}></NewsItem>
                </SwiperSlide>
            )}
        </Swiper>
        </section>
    )
}