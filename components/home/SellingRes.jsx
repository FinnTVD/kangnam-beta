'use client'

import 'swiper/css/grid'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Grid } from 'swiper/modules'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../general/Button'
import { arrFilter, categoryHireId, renderAddress, renderHref, renderTitle } from '@/utils'
import BoxFilterV2 from '../general/filterV2/BoxFilterV2'
import { useEffect, useRef, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import BtnShowMap from '../listProject/BtnShowMap'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import IconAddress from '../icons/IconAddress'
import IconArea from '../icons/IconArea'
import IconCurrency from '../icons/IconCurrency'

const arrSelling = new Array(2).fill(0)

gsap.registerPlugin(ScrollTrigger)
export default function SellingRes({ lang, data, t }) {
    const boxSellRef = useRef(null)
    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        let ctx = gsap.context(() => {
            setTimeout(() => {
                gsap.to(boxSellRef.current, {
                    scrollTrigger: {
                        trigger: boxSellRef.current,
                        start: 'top center',
                        end: 'bottom center',
                        scrub: true,
                        onToggle: (self) => {
                            if (self.isActive) {
                                setIsShow(true)
                            } else {
                                setIsShow(false)
                            }
                        },
                    },
                })
            }, 500)
        }, boxSellRef)
        return () => {
            ctx.revert()
        }
    }, [boxSellRef.current])

    const dataNew = data?.data?.filter((item) => item?.propertyCategory?.id !== categoryHireId)

    return (
        <section
            ref={boxSellRef}
            id='selling'
            className='w-full pt-[11.11vw] h-fit relative lg:hidden'
        >
            <BtnShowMap
                t={t}
                isShow={isShow}
            />
            <div className='px-mb10 max-lg:pl-[3.2vw]'>
                <h2 className='text-den font-bold max-lg:title-tl25 max-md:title-mb25-700-130 -tracking-[1.25px]'>
                    {t?.homepage?.section3Mobile?.buy?.title}
                </h2>
                <span className='max-lg:title-tl14 max-md:title-mb14-400-150 text-den opacity-[0.65] block mb-[3.2vw]'>
                    {t?.homepage?.section3Mobile?.buy?.subtitle?.over}{' '}
                    <span className='title-mb14-700-150 max-lg:font-bold'>{dataNew?.length || '500'}</span>{' '}
                    {t?.homepage?.section3Mobile?.buy?.subtitle?.projectDistribution}
                </span>
            </div>
            {/* <div className='scrollbar overflow-x-scroll'> */}
                <div className='px-mb10 mb-[3.2vw] max-lg:pl-[3.2vw]'>
                    <BoxFilterV2
                        arrFilter={arrFilter}
                        t={t}
                    />
                </div>
            {/* </div> */}

            {dataNew && (
                <Swiper
                    slidesPerView={'auto'}
                    grid={{
                        rows: 2,
                    }}
                    spaceBetween={16}
                    modules={[Grid]}
                    className='mySwiper max-md:!h-[180vw] px-mb10 max-lg:!pl-[3.2vw] max-lg:!h-[150vw]'
                    id='selling'
                >
                    {Array.isArray(dataNew) &&
                        dataNew?.map((e, index) => (
                            <SwiperSlide
                                className={`max-md:!h-[calc(180vw/2-16px)] max-md:!w-[77.6vw] overflow-hidden rounded-[2.13vw] max-lg:!h-auto max-lg:!w-[57.6vw]`}
                                key={index}
                            >
                                <Link
                                    href={renderHref(e, lang)}
                                    className='block w-full h-fit box-img'
                                    key={index}
                                >
                                    <div className='relative w-full h-[50.93vw] rounded-[2.13vw] overflow-hidden'>
                                        <Image
                                            className='z-0 object-cover'
                                            src={e?.firstImage || '/images/itemproject.jpg'}
                                            alt={e?.translation?.name || 'thumbnail project'}
                                            sizes='50.93vw'
                                            fill
                                        />
                                        <div className='block absolute rounded-[1vw] bg-logo top-[2.67vw] left-[2.92vw] text-white py-[0.93vw] px-[4vw] h-fit w-fit max-md:title-mb10-600-150 max-lg:title-tl10'>
                                            {e?.propertyCategory?.translations?.find((e) =>
                                                e?.languageCode?.toLowerCase()?.includes(lang),
                                            )?.name || 'Dự án'}
                                        </div>
                                    </div>
                                    <div className='pt-[1.13vw] max-md:pt-[2.67vw]'>
                                        <h6 className='text-den max-md:title-mb18-700-130 mb-[2.67vw] line-clamp-1 max-lg:title-tl18 font-bold'>
                                            {renderTitle(e, lang)}
                                        </h6>
                                        <div className='flex items-center '>
                                            <IconAddress className={'flex-shrink-0'} />
                                            <span className='ml-[2.13vw] mr-[0.7vw] text-nau-nhat max-md:title-mb14-700-150 whitespace-nowrap max-lg:title-tl14 font-bold'>
                                                {t?.selling?.address}:
                                            </span>
                                            <span className='capitalize text-den max-md:title-mb14-400-150 line-clamp-1 max-lg:title-tl14'>
                                                {renderAddress(e?.address)}
                                            </span>
                                        </div>
                                        <div className='flex items-center my-[2.13vw]'>
                                            <IconArea className={'flex-shrink-0'} />
                                            <span className='ml-[2.13vw] mr-[0.7vw] text-nau-nhat max-md:title-mb14-700-150 max-lg:title-tl14 font-bold'>
                                                {t?.selling?.area}
                                            </span>
                                            <span className='capitalize text-den max-md:title-mb14-400-150 max-lg:title-tl14'>
                                                {e?.translation?.size
                                                    ? e?.translation?.size + ' m²'
                                                    : 'Chưa có thông tin!'}
                                            </span>
                                        </div>
                                        <div className='flex items-center'>
                                            <IconCurrency className={'flex-shrink-0'} />
                                            <span className='ml-[2.13vw] mr-[0.7vw] text-nau-nhat max-md:title-mb14-700-150 max-lg:title-tl14 font-bold'>
                                                {t?.selling?.price}:
                                            </span>
                                            <span className='capitalize text-den max-md:title-mb14-400-150 max-lg:title-tl14'>
                                                {e?.translation?.priceDisplay || 'Chưa có thông tin!'}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                </Swiper>
            )}
            <div className='px-mb10 mt-[6.4vw] mb-[16vw] max-lg:px-[3.2vw] max-lg:mt-[5vw] max-lg:mb-[8vw]'>
                <Button
                    href='/projects'
                    full={true}
                    className='border-none bg-logo'
                    span='text-white '
                    stroke='white'
                >
                    {t?.selling?.button}
                </Button>
            </div>
        </section>
    )
}

SellingRes.Skeleton = function () {
    return (
        <div className='flex flex-col overflow-hidden mt-[11.16rem]'>
            <div className='flex gap-x-[4.27vw] px-mb10 flex-nowrap overflow-hidden w-fit'>
                {arrSelling?.map((e, index) => (
                    <div
                        className='h-[calc(180vw/2-16px)] !w-[77.6vw] overflow-hidden rounded-[2.13vw]'
                        key={index}
                    >
                        <div className='relative w-full h-[50.93vw] rounded-[0.5vw] overflow-hidden'>
                            <Skeleton height={'50.93vw'} />
                        </div>
                        <div className='my-[2.67vw]'>
                            <Skeleton height={'6.13vw'} />
                        </div>
                        <div className='flex flex-col gap-y-[2.13vw]'>
                            <div>
                                <Skeleton height={'4.53vw'} />
                            </div>
                            <div>
                                <Skeleton height={'4.53vw'} />
                            </div>
                            <div>
                                <Skeleton height={'4.53vw'} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex gap-x-[4.27vw] mt-[4.27vw] px-mb10 flex-nowrap overflow-hidden w-fit'>
                {arrSelling?.map((e, index) => (
                    <div
                        className='h-[calc(180vw/2-16px)] !w-[77.6vw] overflow-hidden rounded-[2.13vw]'
                        key={index}
                    >
                        <div className='relative w-full h-[50.93vw] rounded-[0.5vw] overflow-hidden'>
                            <Skeleton height={'50.93vw'} />
                        </div>
                        <div className='my-[2.67vw]'>
                            <Skeleton height={'6.13vw'} />
                        </div>
                        <div className='flex flex-col gap-y-[2.13vw]'>
                            <div>
                                <Skeleton height={'4.53vw'} />
                            </div>
                            <div>
                                <Skeleton height={'4.53vw'} />
                            </div>
                            <div>
                                <Skeleton height={'4.53vw'} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
