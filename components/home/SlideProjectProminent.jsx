'use client'
import Image from 'next/image'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

const arrProject = new Array(8).fill(0)

export default function SlideProjectProminent() {
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
                slidesPerView={4}
                spaceBetween={24}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper
                }}
            >
                {arrProject &&
                    arrProject.map((e, index) => (
                        <SwiperSlide key={index}>
                            <div className='w-[20.125vw] h-[26.1825vw] relative select-none p-[1.5vw] flex items-end rounded-[1vw] overflow-auto'>
                                <Image
                                    className='object-cover rounded-[1vw]'
                                    src='/slideitem.jpg'
                                    alt={`slide-${index}`}
                                    quality={100}
                                    sizes='20.125vw'
                                    fill
                                />
                                <div className='absolute bottom-0 left-0 w-[20.125vw] h-[16.8125vw] bg-gradient-slide z-[1]'></div>
                                <div className='relative z-10'>
                                    <h6 className='text-white title20-700-150'>LUMIERE Boulevard</h6>
                                    <address className='mt-[0.5vw] mb-[0.25vw] text-white title15-500-150'>
                                        Quan 9, 시 Ho Chi Minh
                                    </address>
                                    <span className='text-white title15-500-150'>값: 35tr/m2 </span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
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
        </div>
    )
}
