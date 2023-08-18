'use client'
import 'swiper/css/free-mode'
import Image from 'next/image'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'

const arrProject = new Array(8).fill(0)

export default function SlideProjectProminent({ isMobile }) {
    const swiperRef = useRef()

    const handleNextSlide = () => {
        swiperRef.current?.slideNext()
    }

    const handlePrevSlide = () => {
        swiperRef.current?.slidePrev()
    }
    return (
        <div className='relative'>
            <Swiper
                loop={true}
                breakpoints={{
                    0: {
                        slidesPerView: 'auto',
                        spaceBetween: 16,
                        freeMode: true,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                    },
                }}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper
                }}
                modules={[FreeMode]}
                className='max-md:pl-[2.67vw]'
            >
                {arrProject &&
                    arrProject.map((e, index) => (
                        <SwiperSlide
                            className='!h-[26.1825vw] max-md:!w-[78.4vw] max-md:!h-[88vw] overflow-hidden rounded-[1vw] max-md:rounded-[3.2vw]'
                            key={index}
                        >
                            <div className='h-full max-md:w-full relative select-none px-[4.51vw] py-[6.47vw] flex items-end '>
                                <Image
                                    className='object-cover rounded-[1vw]'
                                    src='/images/slideitem.jpg'
                                    alt={`slide-${index}`}
                                    quality={100}
                                    sizes='20.125vw'
                                    fill
                                />
                                <div className='absolute bottom-0 left-0 w-full h-[16.8125vw] max-md:h-[65.49vw] bg-gradient-slide z-[1]'></div>
                                <div className='relative z-10'>
                                    <h6 className='text-white title-mb18-700-150'>LUMIERE Boulevard</h6>
                                    <address className='text-white title-mb12-600-150'>Quan 9, 시 Ho Chi Minh</address>
                                    <span className='text-white title-mb12-400-150'>값: 35tr/m2 </span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
            {!isMobile && (
                <button
                    onClick={handlePrevSlide}
                    className='absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[4vw] h-[4vw] rounded-full border border-solid border-[#D6A279] flex justify-center items-center bg-white z-20'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='#444'
                        className='w-6 h-6'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M15.75 19.5L8.25 12l7.5-7.5'
                        />
                    </svg>
                </button>
            )}
            {!isMobile && (
                <button
                    onClick={handleNextSlide}
                    className='absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[4vw] h-[4vw] rounded-full border border-solid border-[#D6A279] flex justify-center items-center bg-white z-20'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='#444'
                        className='w-6 h-6'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M8.25 4.5l7.5 7.5-7.5 7.5'
                        />
                    </svg>
                </button>
            )}
        </div>
    )
}
