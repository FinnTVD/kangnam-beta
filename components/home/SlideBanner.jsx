'use client'

import 'swiper/css/effect-fade'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'

const arrBanner = [
    { id: 1, src: '/images/bg-header.jpg', alt: 'bg header' },
    { id: 2, src: '/images/bg-header1.jfif', alt: 'bg-header1' },
    { id: 3, src: '/images/bg-header2.jfif', alt: 'bg-header2' },
]
export default function SlideBanner() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                loop={true}
                effect={'fade'}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                speed={1000}
                modules={[EffectFade, Autoplay]}
                className='absolute top-0 left-0 z-0 w-full h-full mySwiper'
            >
                {arrBanner &&
                    arrBanner?.map((e, index) => (
                        <SwiperSlide key={index}>
                            <div className='relative w-full h-full'>
                                <Image
                                    className='object-cover'
                                    src={e.src}
                                    alt={e.alt}
                                    fill
                                    quality={100}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </>
    )
}
