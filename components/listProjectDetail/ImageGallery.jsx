'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useMediaQuery } from 'react-responsive'
import Link from 'next/link'
import IconYoutube from '../icons/IconYoutube'

const seeLocation = [
    {
        title: 'Xem vị trí',
        code: 'vi',
    },
    {
        title: 'See location',
        code: 'en',
    },
    {
        title: '위치를 참조하십시오',
        code: 'kr',
    },
    {
        title: '请参阅位置',
        code: 'cn',
    },
]

export default function ImageGallery({ data, t, lang }) {
    const images = data?.images || []
    const listImage = [data?.firstImage, ...images]?.filter((e) => e)
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' })
    const isTablet = useMediaQuery({ query: '(max-width: 1023px)' })
    const [zoomSize, setZoomSize] = useState(0)
    const swiper1Ref = useRef()
    const swiperRef = useRef()
    const swiperRef2 = useRef()
    const swiperSlideShowRef = useRef()
    const slRef = useRef()
    const [thumbIndex, setThumbIndex] = useState(0)

    useEffect(() => {
        if (typeof window === 'undefined') return
        const containers = document.querySelectorAll('.swiper-container')
        if (!containers) return
        containers.forEach((container) => {
            if (!container) return
            let startY
            let startX
            let scrollLeft
            let scrollTop
            let isDown
            function mouseIsDown(e) {
                if (!e) return

                isDown = true
                startY = e.pageY - container.offsetTop
                startX = e.pageX - container.offsetLeft
                scrollLeft = container.scrollLeft
                scrollTop = container.scrollTop
            }
            function mouseUp(e) {
                isDown = false
            }
            function mouseLeave(e) {
                isDown = false
            }
            function mouseMove(e) {
                if (!e) return
                if (isDown) {
                    e.preventDefault()
                    //Move vertcally
                    const y = e.pageY - container.offsetTop
                    const walkY = y - startY
                    container.scrollTop = scrollTop - walkY

                    //Move Horizontally
                    const x = e.pageX - container.offsetLeft
                    const walkX = x - startX
                    container.scrollLeft = scrollLeft - walkX
                }
            }
            container.addEventListener('mousedown', (e) => mouseIsDown(e))
            container.addEventListener('mouseup', (e) => mouseUp(e))
            container.addEventListener('mouseleave', (e) => mouseLeave(e))
            container.addEventListener('mousemove', (e) => mouseMove(e))
        })
    }, [])

    useEffect(() => {
        if (typeof window === 'undefined') return
        const imgArray = document.querySelectorAll('.image-animate')
        if (!imgArray) return
        imgArray.forEach((item) => {
            item.style.transform = `scale(${1 + 0.2 * zoomSize})`
        })
    }, [zoomSize])

    const seemoreHandler = () => {
        if (!swiperRef.current || !slRef.current) return
        swiperRef.current.style.opacity = '1'
        swiperRef.current.style.zIndex = '1000000000000'
        slRef.current.style.opacity = '1'
    }

    const nextSlideHandler = () => {
        if (!swiperSlideShowRef.current) return
        swiperSlideShowRef.current?.slideNext()
    }

    const prevSlideHandler = () => {
        if (!swiperSlideShowRef.current) return
        swiperSlideShowRef.current?.slidePrev()
    }

    const nextSlide1Handler = () => {
        if (!swiper1Ref.current) return
        swiper1Ref.current?.slideNext()
    }

    const prevSlide1Handler = () => {
        if (!swiper1Ref.current) return
        swiper1Ref.current?.slidePrev()
    }

    const zoomInHandler = () => {
        const zSize = zoomSize + 1
        if (zSize <= 2) setZoomSize(zSize)
    }

    const zoomOutHandler = () => {
        const zSize = zoomSize - 1
        if (zSize >= 0) setZoomSize(zSize)
    }

    const closeGalleryHandler = () => {
        if (!swiperRef.current || !slRef.current) return
        swiperRef.current.style.opacity = '0'
        swiperRef.current.style.zIndex = '-2'
        slRef.current.style.opacity = '0'
        setZoomSize(0)
    }

    const slideThumbIndex = (swiper) => {
        setThumbIndex(swiper.realIndex)
    }

    const handleScrollDownMap = () => {
        if (typeof window !== 'undefined') {
            const imgMapDetail = document.getElementById('imgMapDetail')
            imgMapDetail?.scrollIntoView({ behavior: 'smooth' })
        }
    }

    if (!listImage?.length) return
    return (
        <>
            <div className='h-[5.75vw] max-lg:h-[10vw] max-md:h-[18vw]'></div>
            <div className='relative'>
                <Swiper
                    // loop={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 4,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 4,
                        },
                    }}
                    speed={600}
                    freeMode={true}
                    grabCursor={true}
                    onBeforeInit={(swiper) => {
                        swiper1Ref.current = swiper
                    }}
                    onSlideChange={slideThumbIndex}
                    thumbs={{ swiper: swiperRef2?.current }}
                    // thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Thumbs]}
                    className='h-[21.875vw] max-md:h-[82.9vw] max-lg:h-[30vw]'
                >
                    {!isTablet
                        ? listImage?.slice(0, 9).map((item, index) => (
                              <SwiperSlide
                                  key={index}
                                  className='lg:max-w-[calc((100%-8px)/3)] md:max-w-[calc((100%-8px)/2))]'
                              >
                                  <Image
                                      src={item || '/images/itemproject.jpg'}
                                      alt={index}
                                      width={532}
                                      height={350}
                                      className='object-cover w-full h-full'
                                  />
                              </SwiperSlide>
                          ))
                        : listImage?.map((item, index) => (
                              <SwiperSlide
                                  key={index}
                                  className='lg:max-w-[calc((100%-8px)/3)] md:max-w-[calc((100%-8px)/2))]'
                              >
                                  <Image
                                      src={item || '/images/itemproject.jpg'}
                                      width={532}
                                      height={350}
                                      alt={index}
                                      className='object-cover w-full h-full'
                                  />
                              </SwiperSlide>
                          ))}
                </Swiper>
                {isMobile && (
                    <div
                        className='absolute top-[50%] left-[2.6vw] translate-y-[-50%] flex items-center justify-center w-[8vw] h-[8vw] bg-white bg-opacity-5 rounded-[50%] z-[5]'
                        onClick={prevSlide1Handler}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='12'
                            height='20'
                            viewBox='0 0 12 20'
                            fill='none'
                            className='w-[66%]'
                        >
                            <path
                                d='M0.0275771 10.0004L9.83458 0.193359L11.2048 1.3337L2.53817 10.0004L11.2048 18.667L9.83458 19.8074L0.0275771 10.0004Z'
                                fill='white'
                            />
                        </svg>
                    </div>
                )}
                {isMobile && (
                    <div
                        className='absolute top-[50%] right-[2.6vw] translate-y-[-50%] flex items-center justify-center w-[8vw] h-[8vw] bg-white bg-opacity-5 rounded-[50%] z-[5]'
                        onClick={nextSlide1Handler}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='12'
                            height='20'
                            viewBox='0 0 12 20'
                            fill='none'
                        >
                            <path
                                d='M11.5388 9.99964L1.73183 19.8066L0.361572 18.6663L9.02824 9.99964L0.361572 1.33297L1.73183 0.192641L11.5388 9.99964Z'
                                fill='white'
                            />
                        </svg>
                    </div>
                )}
                {isMobile && (
                    <div className='absolute bottom-[5.3vw] right-[2.6vw] z-[5] flex gap-x-[2.13vw]'>
                        <Link
                            href={data?.naver || '/'}
                            target='_blank'
                            className={`${
                                data?.naver ? '' : 'hidden'
                            } border border-white rounded-[10vw] gap-[1vw] z-[5] px-[5.4vw] py-[0.6vw] flex items-center cursor-pointer`}
                        >
                            <span className='title-mb13-400-130'>NAVER</span>
                        </Link>
                        <Link
                            target='_blank'
                            href={data?.youtube || '/'}
                            className={`${
                                data?.youtube ? '' : 'hidden'
                            } border border-white rounded-[10vw] gap-[1vw] z-[5] px-[5.4vw] py-[0.6vw] flex items-center cursor-pointer`}
                        >
                            <IconYoutube />
                        </Link>
                        <div
                            className={`${
                                data?.youtube || data?.naver ? 'py-[0.6vw]' : 'py-[1.6vw]'
                            } border border-white rounded-[10vw] gap-[1vw] z-[5] px-[3.4vw] flex items-center cursor-pointer`}
                            onClick={handleScrollDownMap}
                        >
                            <span className='title-mb13-400-130'>
                                {seeLocation?.find((i) => i?.code === lang)?.title}
                            </span>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='14'
                                height='15'
                                viewBox='0 0 14 15'
                                fill='none'
                            >
                                <path
                                    d='M7.00134 7.35449C7.28242 7.35449 7.52261 7.25441 7.72192 7.05424C7.92122 6.85407 8.02087 6.61345 8.02087 6.33236C8.02087 6.05128 7.92079 5.81109 7.72062 5.61178C7.52046 5.41248 7.27983 5.31283 6.99874 5.31283C6.71766 5.31283 6.47747 5.41291 6.27817 5.61308C6.07886 5.81324 5.97921 6.05387 5.97921 6.33496C5.97921 6.61604 6.07929 6.85623 6.27946 7.05553C6.47962 7.25484 6.72025 7.35449 7.00134 7.35449ZM7.00004 13.3337C5.43476 12.0017 4.26567 10.7646 3.49275 9.6222C2.71983 8.47984 2.33337 7.42255 2.33337 6.45033C2.33337 4.99199 2.80247 3.83019 3.74067 2.96491C4.67886 2.09963 5.76532 1.66699 7.00004 1.66699C8.23476 1.66699 9.32122 2.09963 10.2594 2.96491C11.1976 3.83019 11.6667 4.99199 11.6667 6.45033C11.6667 7.42255 11.2802 8.47984 10.5073 9.6222C9.73442 10.7646 8.56532 12.0017 7.00004 13.3337Z'
                                    fill='white'
                                />
                            </svg>
                        </div>
                    </div>
                )}
            </div>
            <div className='flex gap-[3.75vw] pl-[0.625vw] pr-[7.5vw] py-[1vw] bg-maunhat max-md:pl-0 max-md:pr-0 max-md:py-[2.6vw]'>
                <Swiper
                    // loop={true}
                    onSwiper={setThumbsSwiper}
                    breakpoints={{
                        0: {
                            slidesPerView: 3.5,
                            spaceBetween: 6,
                        },
                        768: {
                            slidesPerView: 5,
                            spaceBetween: 8,
                        },
                        1024: {
                            slidesPerView: 10,
                            spaceBetween: 8,
                        },
                    }}
                    onBeforeInit={(swiper) => {
                        swiperRef2.current = swiper
                    }}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Thumbs]}
                    className='h-[5vw] flex-grow max-md:h-[16.8vw] max-md:!pl-[2.7vw] max-lg:h-[10vw]'
                >
                    {!isTablet
                        ? listImage?.slice(0, 10).map((item, index) => (
                              <SwiperSlide
                                  key={index}
                                  className='rounded-[4px] overflow-hidden lg:max-w-[calc((100%-54px)/10)]'
                              >
                                  {index !== listImage.slice(0, 10).length - 1 ? (
                                      <Image
                                          src={item}
                                          width={532}
                                          height={350}
                                          alt={index}
                                          className='object-cover w-full h-full'
                                      ></Image>
                                  ) : (
                                      <div
                                          onClick={seemoreHandler}
                                          className='relative flex items-center justify-center w-full h-full cursor-pointer'
                                      >
                                          <Image
                                              src={item}
                                              fill
                                              alt={index}
                                              className='z-[-2]'
                                          ></Image>
                                          <span className='text-white text-12pc font-bold leading-[1.3] tracking-[-0.36px] capitalize'>
                                              See more
                                          </span>
                                          <div className='bg-black bg-opacity-20 absolute w-full h-full top-0 left-0 z-[-1]'></div>
                                      </div>
                                  )}
                              </SwiperSlide>
                          ))
                        : listImage?.map((item, index) => (
                              <SwiperSlide
                                  key={index}
                                  className='lg:max-w-[calc((100%-54px)/10)]'
                              >
                                  <Image
                                      src={item}
                                      width={532}
                                      height={350}
                                      alt={index}
                                      className={
                                          index !== thumbIndex
                                              ? 'rounded-[4px] w-full h-full object-cover'
                                              : 'border-[3px] border-logo rounded-[4px] w-full h-full object-cover'
                                      }
                                  ></Image>
                              </SwiperSlide>
                          ))}
                </Swiper>
                <div className='flex gap-x-[1rem]'>
                    <div
                        className={`${
                            data?.naver ? '' : 'hidden'
                        }  flex flex-col items-center justify-center bg-logo rounded-[10px] gap-[0.375vw] w-[5vw] h-[5vw] max-md:hidden cursor-pointer group transition-all duration-500 max-lg:w-[8vw] max-lg:h-[8vw] flex-shrink-0 my-auto `}
                    >
                        <Link
                            href={data?.naver || '/'}
                            target='_blank'
                            className={`uppercase text-[1vw] max-lg:text-[1.6vw] font-bold text-white w-full h-full flex justify-center group-hover:scale-125 transition-all duration-200 items-center rounded-full`}
                        >
                            NAVER
                        </Link>
                    </div>
                    <div
                        className={`${
                            data?.youtube ? '' : 'hidden'
                        } flex flex-col items-center justify-center bg-logo rounded-[10px] gap-[0.375vw] w-[5vw] h-[5vw] max-md:hidden cursor-pointer group transition-all duration-500 max-lg:w-[8vw] max-lg:h-[8vw] flex-shrink-0 my-auto`}
                    >
                        <Link
                            href={data?.youtube || '/'}
                            target='_blank'
                            className='flex items-center justify-center w-full h-full'
                        >
                            <IconYoutube className='object-contain w-[2.5vw] h-[2.5vw] max-lg:w-[4.5vw] max-lg:h-[4.5vw] group-hover:scale-125 transition-all duration-200 ease-linear' />
                        </Link>
                    </div>
                    <div
                        onClick={handleScrollDownMap}
                        className='flex flex-col items-center justify-center bg-logo rounded-[10px] gap-[0.375vw] w-[5vw] h-[5vw] max-md:hidden cursor-pointer group transition-all duration-500 max-lg:w-[8vw] max-lg:h-[8vw] flex-shrink-0 my-auto'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='31'
                            height='30'
                            viewBox='0 0 31 30'
                            fill='none'
                            className='w-[1.875vw] max-lg:w-[2.875vw] group-hover:translate-y-[0.5vw] transition-all duration-300'
                        >
                            <path
                                d='M15.1375 14.6875C15.7399 14.6875 16.2546 14.473 16.6816 14.0441C17.1087 13.6152 17.3223 13.0996 17.3223 12.4972C17.3223 11.8949 17.1078 11.3802 16.6789 10.9531C16.2499 10.526 15.7343 10.3125 15.132 10.3125C14.5297 10.3125 14.015 10.527 13.5879 10.9559C13.1608 11.3848 12.9473 11.9004 12.9473 12.5028C12.9473 13.1051 13.1617 13.6198 13.5907 14.0469C14.0196 14.474 14.5352 14.6875 15.1375 14.6875ZM15.1348 27.5C11.7806 24.6458 9.27539 21.9948 7.61914 19.5469C5.96289 17.099 5.13477 14.8333 5.13477 12.75C5.13477 9.625 6.13997 7.13542 8.15039 5.28125C10.1608 3.42708 12.4889 2.5 15.1348 2.5C17.7806 2.5 20.1087 3.42708 22.1191 5.28125C24.1296 7.13542 25.1348 9.625 25.1348 12.75C25.1348 14.8333 24.3066 17.099 22.6504 19.5469C20.9941 21.9948 18.4889 24.6458 15.1348 27.5Z'
                                fill='white'
                            />
                            <circle
                                cx='15.1348'
                                cy='12.5'
                                r='3'
                                fill='#D6A279'
                            />
                        </svg>
                        <span className='text-white text-14pc font-semibold leading-[1.14286] max-lg:title-tl14'>
                            {t?.projectDetail?.info?.location}
                        </span>
                    </div>
                </div>
            </div>
            <div
                className='fixed top-0 left-0 z-[-2] opacity-0 w-full h-full max-md:hidden'
                ref={swiperRef}
            >
                <div
                    className='relative w-full h-full transition-all duration-300 bg-black opacity-0 bg-opacity-70'
                    ref={slRef}
                >
                    <Swiper
                        initialSlide={9}
                        // loop={true}
                        navigation={true}
                        allowTouchMove={false}
                        onBeforeInit={(swiper) => {
                            swiperSlideShowRef.current = swiper
                        }}
                        modules={[Navigation]}
                        speed={800}
                        className='w-full h-full'
                    >
                        {listImage?.map((item, index) => (
                            <SwiperSlide
                                key={index}
                                className='relative overflow-hidden swiper-container cursor-grab'
                            >
                                <div
                                    className='absolute top-0 left-0 w-full h-full z-1'
                                    onClick={closeGalleryHandler}
                                ></div>
                                <div className='relative flex items-center justify-center w-full h-full'>
                                    <Image
                                        src={item}
                                        width={1600}
                                        height={850}
                                        alt={index}
                                        className='image-animate relative w-auto h-[37vw] z-2 transition-all duration-200'
                                    ></Image>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className='absolute top-3 right-3 flex z-[3] gap-4'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='white'
                            className='w-8 h-8 cursor-pointer'
                            onClick={zoomInHandler}
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6'
                            />
                        </svg>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='white'
                            className='w-8 h-8 cursor-pointer'
                            onClick={zoomOutHandler}
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6'
                            />
                        </svg>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='white'
                            className='w-8 h-8 cursor-pointer'
                            onClick={closeGalleryHandler}
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M6 18L18 6M6 6l12 12'
                            />
                        </svg>
                    </div>
                    <div
                        className='absolute top-[50%] left-2 translate-y-[-50%] cursor-pointer z-[5]'
                        onClick={prevSlideHandler}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='white'
                            className='w-8'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
                            />
                        </svg>
                    </div>
                    <div
                        className='absolute top-[50%] right-2 translate-y-[-50%] cursor-pointer z-[5]'
                        onClick={nextSlideHandler}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='w-8'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}
