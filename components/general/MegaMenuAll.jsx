'use client'

import {
    categoryHireId,
    categoryResaleId,
    formatDateTime,
    renderAddress,
    renderHref,
    renderHrefNews,
    renderTitle,
} from '@/utils'
import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'
import useSWR from 'swr'
import IconAddress from '../icons/IconAddress'
import IconArea from '../icons/IconArea'
import IconCurrency from '../icons/IconCurrency'
import Image from 'next/image'
import { SwiperSlide, Swiper } from 'swiper/react'
import { FreeMode, Mousewheel, Scrollbar } from 'swiper/modules'

const dataSkeletion = new Array(5).fill(0)
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function MegaMenuAll({ lang, t, indexPopup }) {
    const {
        data: dataHire,
        isLoading: isLoadingHire,
        error: errorHire,
    } = useSWR(
        `${process.env.NEXT_PUBLIC_API}/property?order=DESC&page=1&take=15&propertyCategoryIds=${categoryHireId}`,
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        },
    )

    const {
        data: dataResale,
        isLoading: isLoadingResale,
        error: errorResale,
    } = useSWR(
        `${process.env.NEXT_PUBLIC_API}/property?order=DESC&page=1&take=15&propertyCategoryIds=${categoryResaleId}`,
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        },
    )
    const {
        data: dataProject,
        isLoading: isLoadingProject,
        error: errorProject,
    } = useSWR(`${process.env.NEXT_PUBLIC_API}/project?order=DESC&page=1&take=15`, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })
    const {
        data: dataPost,
        isLoading: isLoadingPost,
        error: errorPost,
    } = useSWR(`${process.env.NEXT_PUBLIC_API}/post?order=DESC&page=1&take=15`, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })

    const handleDataMegaAll = () => {
        if (isLoadingHire || isLoadingResale || isLoadingProject || isLoadingPost) return null
        if (indexPopup === 0) {
            return dataProject
        }
        if (indexPopup === 1) {
            return dataResale
        }
        if (indexPopup === 2) {
            return dataHire
        }
        if (indexPopup === 3) {
            return dataPost
        }
        return dataProject
    }
    return (
        <>
            {!handleDataMegaAll() ? (
                <div className='flex justify-between gap-x-[24px]'>
                    {dataSkeletion.map((e, index) => (
                        <div
                            key={index}
                            className='!max-w-[calc((100%-4rem-(4*24px))/4)] !w-[calc((100%-4rem-(4*24px))/4)]'
                        >
                            <div className='relative w-full h-[10.1875vw] rounded-[0.5vw] overflow-hidden'>
                                <Skeleton height={'13.75vw'} />
                            </div>
                            <div className='pt-[1.13vw]'>
                                <Skeleton height={'1.4375vw'} />
                            </div>
                            <div className='mt-[0.63vw] flex flex-col gap-y-[0.5vw]'>
                                <div>
                                    <Skeleton height={'1vw'} />
                                </div>
                                <div>
                                    <Skeleton height={'1vw'} />
                                </div>
                                <div>
                                    <Skeleton height={'1vw'} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <Swiper
                    slidesPerView={5}
                    slidesPerGroup={5}
                    spaceBetween={24}
                    mousewheel={true}
                    grabCursor={true}
                    scrollbar={true}
                    modules={[Mousewheel, FreeMode, Scrollbar]}
                    className='w-full h-fit'
                >
                    {handleDataMegaAll() &&
                        handleDataMegaAll()?.data?.map((e, index) => (
                            <SwiperSlide key={index}>
                                {indexPopup !== 3 ? (
                                    <Link
                                        href={renderHref(e, lang)}
                                        className='w-full select-none group/item'
                                    >
                                        <div className='relative w-full h-[10.1875vw] rounded-[0.5vw] overflow-hidden'>
                                            <Image
                                                className='z-0 object-cover transition-all duration-200 group-hover/item:scale-110'
                                                src={e?.firstImage || '/images/itemproject.jpg'}
                                                alt={
                                                    e?.translations?.find((e) =>
                                                        e?.languageCode?.toLowerCase()?.includes(lang),
                                                    )?.name ||
                                                    e?.translations[0]?.name ||
                                                    'thumbnail project'
                                                }
                                                sizes='100vw'
                                                fill
                                            />
                                        </div>
                                        <div className='pt-[1.13vw]'>
                                            <h2
                                                title={renderTitle(t, e, lang)}
                                                className='text-den title18-700-130 -tracking-[1px] mb-[0.63vw] line-clamp-1 group-hover/item:text-[#D6A279] transition duration-300'
                                            >
                                                {renderTitle(t, e, lang)}
                                            </h2>
                                            <div
                                                title={e?.address?.display}
                                                className='flex items-center'
                                            >
                                                <IconAddress
                                                    className={
                                                        'w-[0.875vw] h-[0.875vw] max-md:w-[5vw] max-md:h-[5vw] max-lg:w-[2vw] max-lg:h-[2vw] flex-shrink-0'
                                                    }
                                                />
                                                <span className='ml-[0.5vw] mr-[0.25vw] text-nau-nhat title14-700-150 whitespace-nowrap'>
                                                    {t?.projects?.item?.address}
                                                </span>
                                                <span className='capitalize text-den title14-400-150 line-clamp-1'>
                                                    {renderAddress(e?.address)}
                                                </span>
                                            </div>
                                            <div
                                                title={
                                                    e?.translations?.find((e) =>
                                                        e?.languageCode?.toLowerCase()?.includes(lang),
                                                    )?.size
                                                        ? e?.translations?.find((e) =>
                                                              e?.languageCode?.toLowerCase()?.includes(lang),
                                                          )?.size + ' m²'
                                                        : e?.translations[0]?.size
                                                        ? e?.translations[0]?.size + ' m²'
                                                        : t?.projects?.filterSecond?.noinfo
                                                }
                                                className='flex items-center my-[0.5vw]'
                                            >
                                                <IconArea
                                                    className={
                                                        'w-[0.875vw] h-[0.875vw] max-md:w-[5vw] max-md:h-[5vw] max-lg:w-[2vw] max-lg:h-[2vw]'
                                                    }
                                                />
                                                <span className='ml-[0.5vw] mr-[0.25vw] text-nau-nhat title14-700-150'>
                                                    {t?.projects?.item?.area}
                                                </span>
                                                <span className=' text-den title14-400-150 line-clamp-1'>
                                                    {e?.translations?.find((e) =>
                                                        e?.languageCode?.toLowerCase()?.includes(lang),
                                                    )?.size
                                                        ? e?.translations?.find((e) =>
                                                              e?.languageCode?.toLowerCase()?.includes(lang),
                                                          )?.size + ' m²'
                                                        : e?.translations[0]?.size
                                                        ? e?.translations[0]?.size + ' m²'
                                                        : t?.projects?.filterSecond?.noinfo}
                                                </span>
                                            </div>
                                            <div
                                                title={t?.projects?.item?.price}
                                                className='flex items-center'
                                            >
                                                <IconCurrency
                                                    className={
                                                        'w-[0.875vw] h-[0.875vw] max-md:w-[5vw] max-md:h-[5vw] max-lg:w-[2vw] max-lg:h-[2vw]'
                                                    }
                                                />
                                                <span className='ml-[0.5vw] mr-[0.25vw] text-nau-nhat title14-700-150'>
                                                    {t?.projects?.item?.price}
                                                </span>
                                                <span className='capitalize text-den title14-400-150'>
                                                    {e?.translations?.find((e) =>
                                                        e?.languageCode?.toLowerCase()?.includes(lang),
                                                    )?.priceDisplay || t?.projects?.filterSecond?.noinfo}
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ) : (
                                    <Link
                                        href={renderHrefNews(e, lang)}
                                        className='group/item hover:bg-white rounded-[0.5vw]'
                                    >
                                        <div className='cursor-pointer w-full h-full bg-white rounded-2xl backdrop-blur-2xl p-[1.5vw] max-md:rounded-[13px] max-md:p-[5.3vw] max-md:py-mb10 shadow-input max-md:shadow-newsDetailMb'>
                                            <div className='w-full h-[10.1875vw] relative rounded-lg overflow-hidden max-md:h-[56vw] max-lg:h-[40vw] max-md:rounded-[8px]'>
                                                <Image
                                                    src={e?.image ? e?.image : '/images/featuredImg.jpg'}
                                                    fill
                                                    alt={
                                                        e?.translations?.find((i) =>
                                                            i?.languageCode?.toLowerCase()?.includes(lang),
                                                        )?.title || 'thumbnail news'
                                                    }
                                                    className='absolute top-0 left-0 object-cover w-full h-full overflow-hidden transition duration-300 group-hover/item:scale-110'
                                                />
                                            </div>
                                            <span className='bg-nau-nhat inline-block title12-400-150 mt-[1vw] py-[0.3125vw] px-[1.125vw] bg-opacity-20 rounded-[100px] text-nau-nhat max-md:pr-[2.6vw] max-md:title-mb10-400-150 max-md:mt-[3.4vw] max-md:py-[1.1vw] max-md:px-[3.7vw] max-md:rounded-[3.3px] max-lg:title-tl12'>
                                                {e?.postType?.title}
                                            </span>
                                            <div className='w-full mt-[0.2625vw]] flex flex-col max-md:mt-[0.8vw]'>
                                                <h2 className='mt-[0.25vw] text-den-2 title20-700-150 group-hover/item:text-[#D6A279] transition duration-300 max-md:title-mb16-700-135 max-lg:title-tl20 max-md:line-clamp-3 !text-[1vw] line-clamp-2 h-[3vw]'>
                                                    {
                                                        e?.translations?.find((i) =>
                                                            i?.languageCode?.toLowerCase()?.includes(lang),
                                                        )?.title
                                                    }
                                                </h2>
                                            </div>
                                            <div className='flex mt-[0.5vw] max-md:mt-[1.7vw]'>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    width='21'
                                                    height='21'
                                                    viewBox='0 0 21 21'
                                                    fill='none'
                                                    className='w-[1.3125vw] h-auto max-md:w-[4.5vw] max-lg:w-[2vw]'
                                                >
                                                    <g opacity='0.7'>
                                                        <path
                                                            d='M7.00098 1.75V4.375'
                                                            stroke='#656263'
                                                            strokeMiterlimit='10'
                                                            strokeLinecap='round'
                                                            strokeLinejoin='round'
                                                        />
                                                        <path
                                                            d='M13.999 1.75V4.375'
                                                            stroke='#656263'
                                                            strokeMiterlimit='10'
                                                            strokeLinecap='round'
                                                            strokeLinejoin='round'
                                                        />
                                                        <path
                                                            d='M3.06348 7.95508H17.9385'
                                                            stroke='#656263'
                                                            strokeMiterlimit='10'
                                                            strokeLinecap='round'
                                                            strokeLinejoin='round'
                                                        />
                                                        <path
                                                            d='M18.375 7.4375V14.875C18.375 17.5 17.0625 19.25 14 19.25H7C3.9375 19.25 2.625 17.5 2.625 14.875V7.4375C2.625 4.8125 3.9375 3.0625 7 3.0625H14C17.0625 3.0625 18.375 4.8125 18.375 7.4375Z'
                                                            stroke='#656263'
                                                            strokeMiterlimit='10'
                                                            strokeLinecap='round'
                                                            strokeLinejoin='round'
                                                        />
                                                        <path
                                                            d='M13.7315 11.9863H13.7394'
                                                            stroke='#656263'
                                                            strokeWidth='1.5'
                                                            strokeLinecap='round'
                                                            strokeLinejoin='round'
                                                        />
                                                        <path
                                                            d='M13.7315 14.6113H13.7394'
                                                            stroke='#656263'
                                                            strokeWidth='1.5'
                                                            strokeLinecap='round'
                                                            strokeLinejoin='round'
                                                        />
                                                        <path
                                                            d='M10.4952 11.9863H10.5031'
                                                            stroke='#656263'
                                                            strokeWidth='1.5'
                                                            strokeLinecap='round'
                                                            strokeLinejoin='round'
                                                        />
                                                        <path
                                                            d='M10.4952 14.6113H10.5031'
                                                            stroke='#656263'
                                                            strokeWidth='1.5'
                                                            strokeLinecap='round'
                                                            strokeLinejoin='round'
                                                        />
                                                        <path
                                                            d='M7.25691 11.9863H7.26477'
                                                            stroke='#656263'
                                                            strokeWidth='1.5'
                                                            strokeLinecap='round'
                                                            strokeLinejoin='round'
                                                        />
                                                        <path
                                                            d='M7.25691 14.6113H7.26477'
                                                            stroke='#656263'
                                                            strokeWidth='1.5'
                                                            strokeLinecap='round'
                                                            strokeLinejoin='round'
                                                        />
                                                    </g>
                                                </svg>
                                                <span className='text-[#656263] title14-400-150 ml-[0.375vw] opacity-70 max-md:title-mb12-400-150 max-md:ml-[1.3vw] max-lg:title-tl14'>
                                                    {formatDateTime(e?.updatedAt)}
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                )}
                            </SwiperSlide>
                        ))}
                </Swiper>
            )}
        </>
    )
}
