'use client'
import { useState, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import Image from 'next/image'
//
import Button from '../general/Button'
import 'swiper/css/effect-fade'
import { slugProjectLangCode } from '@/utils'
// districtId=3083&levelZoom=12&lng=105.76722048500005&lat=21.039611664000063&cityId=11
const arrArea = [
    {
        id: 1,
        translations: [
            {
                title: '01. Khu vực Nam Từ Liêm, Hà Nội',
                code: 'vi',
            },
            {
                title: '01. Area Nam Tu Liem, Ha Noi',
                code: 'en',
            },
            {
                title: '01. 영역 Nam Tu Liem, Ha Noi',
                code: 'kr',
            },
            {
                title: '01. 区域 Nam Tu Liem, Ha Noi',
                code: 'cn',
            },
        ],
        cityId: 11,
        districtId: 3083,
        lng: 105.76722048500005,
        lat: 21.039611664000063,
    },
    {
        id: 2,
        translations: [
            {
                title: '02. Khu vực Hà Đông, Hà Nội',
                code: 'vi',
            },
            {
                title: '02. Area Ha Dong, Ha Noi',
                code: 'en',
            },
            {
                title: '02. 영역 Ha Dong, Ha Noi',
                code: 'kr',
            },
            {
                title: '02. 区域 Ha Dong, Ha Noi',
                code: 'cn',
            },
        ],
        cityId: 11,
        districtId: 1035,
        lng: 105.77091365500007,
        lat: 20.96472601000005,
    },
    {
        id: 3,
        translations: [
            {
                title: '03. Khu vực Cầu Giấy, Hà Nội',
                code: 'vi',
            },
            {
                title: '03. Area Cau Giay, Ha Noi',
                code: 'en',
            },
            {
                title: '03. 영역 Cau Giay, Ha Noi',
                code: 'kr',
            },
            {
                title: '03. 区域 Cau Giay, Ha Noi',
                code: 'cn',
            },
        ],
        cityId: 11,
        districtId: 523,
        lng: 105.79180610344349,
        lat: 21.030707398300226,
    },
    {
        id: 4,
        translations: [
            {
                title: '04. Khu vực Ba Vì, Hà Nội',
                code: 'vi',
            },
            {
                title: '04. Area Ba Vi, Ha Noi',
                code: 'en',
            },
            {
                title: '04. 영역 Ba Vi, Ha Noi',
                code: 'kr',
            },
            {
                title: '04. 区域 Ba Vi, Ha Noi',
                code: 'cn',
            },
        ],
        cityId: 11,
        districtId: 3595,
        lng: 105.42338142200003,
        lat: 21.19812091500006,
    },
]

const arrProminent = [
    { id: 1, src: '/images/bg-prominent.jpg', alt: 'bg header primary' },
    { id: 2, src: '/images/bg-prominent2.jpeg', alt: 'bg-prominent1' },
    { id: 3, src: '/images/bg-prominent3.jpeg', alt: 'bg-prominent3' },
    { id: 4, src: '/images/bg-prominent4.jpeg', alt: 'bg-prominent4' },
]
export default function Prominent({ t, lang }) {
    const swiperRef = useRef()
    const [indexSlider, setIndexSlider] = useState(0)
    const isMobile = useMediaQuery({
        query: '(max-width: 767.9px)',
    })

    const handleSlideChange = (swiper) => {
        setIndexSlider(Number(swiper.realIndex))
    }

    const handleSlideClick = (index) => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(index)
        }
    }
    const handleGenderHref = () => {
        const data = { ...arrArea[indexSlider] }
        return (
            slugProjectLangCode?.find((e) => e?.langCode == lang)?.slug +
            `/districtId=${data?.districtId}&levelZoom=12&lng=${data?.lng}&lat=${data?.lat}&cityId=${data?.cityId}`
        )
    }

    return (
        <section
            id='prominent'
            className='relative flex h-screen md:items-end max-md:mt-[13.067vw] max-md:h-[80vh]'
        >
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
                className='!absolute top-0 left-0 z-0 w-full h-full mySwiper'
            >
                {arrProminent?.map((e, index) => (
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
            <div className='absolute bottom-0 left-0 w-full h-[76vh] max-md:h-full bg-gradient-slide z-[1]'></div>
            <div className='relative z-10 px-120 flex flex-col gap-y-[4.25vw] max-md:gap-y-[30.4vw] items-center w-full mb-[3.19vw] max-md:mt-[10.4vw] px-mb10 max-lg:mb-[4.29vw]'>
                {isMobile && (
                    <div className='w-full md:hidden'>
                        <span className='text-white title-mb14-600-160'>
                            {arrArea[indexSlider]?.translations?.find((e) => e?.code === lang)?.title}
                        </span>
                        <ul className='flex gap-x-[2.4vw] w-full mt-[2.67vw]'>
                            {arrArea?.map((e, index) => (
                                <li
                                    onClick={() => handleSlideClick(index)}
                                    key={index}
                                    className={`${
                                        indexSlider === index ? 'active' : ''
                                    } flex-1 border-t-[2px] border-solid border-white02 pt-[0.5vw] relative before:h-[2px] before:w-0 before:bg-white before:absolute before:-top-[2px] before:left-0 transition-all duration-[5s] cursor-pointer`}
                                ></li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className='flex flex-col items-center max-md:w-[77.8vw]'>
                    <h2
                        data-aos='fade-right'
                        data-aos-duration='1000'
                        className='capitalize title60 title-tl42 title-mb30-800-130 max-md:-tracking-[0.9px] text-white'
                    >
                        {t?.homepage?.section6?.title}
                    </h2>
                    <span className='mt-[0.75vw] max-md:mt-[2.13vw] mb-[1.5vw] max-lg:mt-[1.75vw] max-lg:max-lg:mb-[2.5vw] max-md:mb-[6.4vw] w-[21.5vw] max-md:w-full max-lg:w-[34.5vw] text-24pc max-lg:text-20tl font-normal leading-[1.3] block text-center max-md:text-20mb'>
                        {t?.homepage?.section6?.description}
                    </span>
                    <Button
                        href={handleGenderHref()}
                        className='text-white border-white'
                        stroke='white'
                    >
                        {t?.homepage?.section6?.button}
                    </Button>
                </div>
                {!isMobile && (
                    <ul className='flex gap-x-[1.5vw] w-full max-md:hidden'>
                        {arrArea?.map((e, index) => (
                            <li
                                onClick={() => handleSlideClick(index)}
                                key={index}
                                className={`${
                                    indexSlider === index ? 'active' : ''
                                } flex-1 border-t-[2px] border-solid border-white02 pt-[0.5vw] relative before:h-[2px] before:w-0 before:bg-white before:absolute before:-top-[2px] before:left-0 transition-all duration-[5s] max-lg:text-center cursor-pointer title16-600-160 title-tl16-600-160 max-lg:pt-[1.5vw]`}
                            >
                                {e?.translations?.find((i) => i?.code === lang)?.title}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    )
}
