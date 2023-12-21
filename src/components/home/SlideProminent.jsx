'use client'
import 'swiper/css/effect-fade'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import Image from 'next/image'
import { useRef } from 'react'
const arrProminent = [
    { id: 1, src: '/images/bg-prominent.jpg', alt: 'bg header primary' },
    { id: 2, src: '/images/bg-prominent2.jpeg', alt: 'bg-prominent1' },
    { id: 3, src: '/images/bg-prominent3.jpeg', alt: 'bg-prominent3' },
    { id: 4, src: '/images/bg-prominent4.jpeg', alt: 'bg-prominent4' },
]
export default function SlideProminent({ setIndexSlider, indexSlider }) {
    const swiperRef = useRef()

    const handleSlideChange = (swiper) => {
        setIndexSlider(swiper.realIndex)
    }

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
                onSlideChange={handleSlideChange}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper
                }}
                modules={[EffectFade, Autoplay]}
                className='absolute top-0 left-0 z-0 w-full h-full mySwiper'
            >
                {arrProminent &&
                    arrProminent?.map((e, index) => (
                        <SwiperSlide key={index}>
                            <div className='relative w-full h-full overflow-hidden box-img-slide'>
                                <Image
                                    className={`${
                                        indexSlider === index ? 'active' : ''
                                    } object-cover w-[110vw] h-[110vh] scale-110`}
                                    src={e.src}
                                    alt={e.alt}
                                    sizes='100vw'
                                    fill
                                />
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </>
    )
}
