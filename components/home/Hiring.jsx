'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'

import Link from 'next/link'
import Button from '../general/Button'
import { arrFilterV2, renderAddress, renderHref, renderTitle } from '@/utils'
import BoxFilterV2 from '../general/filterV2/BoxFilterV2'
import IconAddress from '../icons/IconAddress'
import IconArea from '../icons/IconArea'
import IconCurrency from '../icons/IconCurrency'

export default function Hiring({ lang, t, data }) {
    return (
        <section className='w-full lg:hidden'>
            <div className='px-mb10 max-lg:px-[3.2vw]'>
                <h2 className='text-den max-md:title-mb25-700-130 -tracking-[1.25px] max-lg:title-tl25 font-bold'>
                    {t?.homepage?.section3Mobile?.rent?.title}
                </h2>
                <span className='max-lg:title-tl14 max-md:title-mb14-400-150 text-den opacity-[0.65] block mb-[3.2vw]'>
                    {t?.homepage?.section3Mobile?.rent?.subtitle?.over}{' '}
                    <span className='title-mb14-700-150 max-lg:font-bold'>{data?.meta?.itemCount || '500'}</span>{' '}
                    {t?.homepage?.section3Mobile?.rent?.subtitle?.projectDistribution}
                </span>
            </div>
            <div className='px-mb10 mb-[3.2vw] max-lg:px-[3.2vw]'>
                <BoxFilterV2
                    arrFilter={arrFilterV2}
                    t={t}
                />
            </div>
            {data && (
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={18}
                    modules={[FreeMode]}
                    className='px-mb10 max-lg:!pl-[3.2vw]'
                >
                    {data?.data?.map((e, index) => (
                        <SwiperSlide
                            className='!h-fit max-md:!w-[77.6vw] overflow-hidden rounded-[2.13vw] max-lg:!w-[57.6vw]'
                            key={index}
                        >
                            <Link
                                href={renderHref(e, lang)}
                                className='w-full'
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
                                    <div className='block absolute rounded-[1vw] bg-logo top-[2.67vw] left-[2.92vw] text-white py-[0.93vw] px-[4vw] h-fit w-fit max-md:title-mb10-600-150'>
                                        {e?.propertyCategory?.translations?.find((e) =>
                                            e?.languageCode?.toLowerCase()?.includes(lang === 'ch' ? 'cn' : lang),
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
                                            {t?.hiring?.address} :
                                        </span>
                                        <span className='capitalize text-den max-md:title-mb14-400-150 line-clamp-1 max-lg:title-tl14'>
                                            {renderAddress(e?.address)}
                                        </span>
                                    </div>
                                    <div className='flex items-center my-[2.13vw]'>
                                        <IconArea className={'flex-shrink-0'} />
                                        <span className='ml-[2.13vw] mr-[0.7vw] text-nau-nhat max-md:title-mb14-700-150 max-lg:title-tl14 font-bold'>
                                            {t?.hiring?.area} :
                                        </span>
                                        <span className='capitalize text-den max-md:title-mb14-400-150 max-lg:title-tl14'>
                                            {e?.translation?.size ? e?.translation?.size + ' m²' : 'Chưa có thông tin!'}
                                        </span>
                                    </div>
                                    <div className='flex items-center'>
                                        <IconCurrency className={'flex-shrink-0'} />
                                        <span className='ml-[2.13vw] mr-[0.7vw] text-nau-nhat max-md:title-mb14-700-150 max-lg:title-tl14 font-bold'>
                                            {t?.hiring?.price}
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
            <div className='px-mb10 mt-[8.53vw] mb-[16vw] max-lg:px-[3.2vw] max-lg:mt-[5vw] max-lg:mb-[8vw]'>
                <Button
                    href={'' || '/projects'}
                    full={true}
                    className='border-none bg-logo'
                    span='text-white '
                    stroke='white'
                >
                    {t?.hiring?.button}
                </Button>
            </div>
        </section>
    )
}
