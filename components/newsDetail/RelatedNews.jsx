'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import NewsItem from '../news/NewsItem'
import Button from '../general/Button'
import { useMediaQuery } from 'react-responsive'
import { Autoplay } from 'swiper/modules'

export default function RelatedNews({ t, relatedNews }) {
    const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' })

    return (
        <section className='px-120 mt-[3.75vw] max-md:mt-[13.3vw] max-md:px-0 max-md:mb-[16vw]'>
            <div className='flex justify-between items-end px-mb10'>
                <div>
                    <span className='sub-title max-md:title-mb10-700-150 max-md:tracking-[0.5px]'>
                        {t.newsDetailRelated.subtitle}
                    </span>
                    <h2 className='title56 text-den mt-[0.62vw] max-md:normal-case max-md:mt-[1vw] max-md:title-mb25-700-130 max-md:tracking-[-0.75px]'>
                        {t.newsDetailRelated.title}
                    </h2>
                </div>
                {!isMobile && (
                    <Button
                        stroke='white'
                        href={'/danh-sach-tin-tuc'}
                        className='bg-[#D6A279] text-white border-none'
                    >
                        Xem thêm tin tức
                    </Button>
                )}
            </div>
            <Swiper
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    240: {
                        slidesPerView: 1.2,
                        spaceBetween: 16,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                    },
                }}
                speed={600}
                modules={[Autoplay]}
                className='pt-[1.875vw] pb-[6.25vw] max-md:pl-[2.6vw] max-md:py-[4.3vw]'
            >
                {relatedNews.map((item, index) => (
                    <SwiperSlide key={index}>
                        <NewsItem newsOtherItem={item}></NewsItem>
                    </SwiperSlide>
                ))}
            </Swiper>
            {isMobile && (
                <Button
                    stroke='white'
                    href={'/danh-sach-tin-tuc'}
                    span='text-14mb font-normal tracking-[-0.28px]'
                    icon='w-auto h-[4.5vw]'
                    className=' bg-logo !w-[91.6vw] justify-center text-white border-none gap-x-[3.2vw] py-[4.26vw] mt-0 mb-0 ml-auto mr-auto'
                >
                    {t.newsDetailRelated.button}
                </Button>
            )}
        </section>
    )
}
