'use client'
import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Form1 from './Form1'
import Form2 from './Form2'
import Form3 from './Form3'

export default function SlideForm({ t }) {
    const [indexSlider, setIndexSlider] = useState(0)
    const swiperRef = useRef()
    const handleNextSlide = () => {
        swiperRef.current?.slideNext()
    }

    const handlePrevSlide = () => {
        swiperRef.current?.slidePrev()
    }

    const handleSlideChange = (swiper) => {
        setIndexSlider(swiper.realIndex)
    }

    return (
        <section className='px-120 pt-[6.37vw] w-screen h-fit'>
            <div className='relative w-full h-fit'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={60}
                    onSlideChange={handleSlideChange}
                    speed={1000}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper
                    }}
                    allowTouchMove={false}
                >
                    <SwiperSlide>
                        <Form1
                            handleNextSlide={handleNextSlide}
                            t={t}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Form2
                            handleNextSlide={handleNextSlide}
                            handlePrevSlide={handlePrevSlide}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Form3
                            handleNextSlide={handleNextSlide}
                            handlePrevSlide={handlePrevSlide}
                        />
                    </SwiperSlide>
                </Swiper>

                <div className='absolute top-0 -translate-y-full left-0 bg-[rgba(214,162,121,0.1)] w-full h-[0.25vw]'>
                    <div className='relative'>
                        <div
                            className={`${
                                indexSlider === 1 ? 'w-2/3' : indexSlider === 2 ? 'w-full' : 'w-1/3'
                            } absolute left-0 h-[0.375vw] -translate-y-1/2 opacity-100 bg-logo top-1/2 transition-all duration-[0.8s] ease-linear rounded-t-full`}
                        ></div>
                        <span className='text-nu title16-400-150 block mb-[1.19vw] absolute -top-[0.69vw] left-0 -translate-y-full'>
                            Hoàn thành {indexSlider + 1}/3
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
