'use client'
import Image from 'next/image'
import Link from 'next/link'
import useToggleShowMap from '@/hooks/useToggleShowMap'
import BoxSort from './BoxSort'
import { useMediaQuery } from 'react-responsive'
import BtnShowMap from './BtnShowMap'
import ReactPaginate from 'react-paginate'
import classes from '../news/ListNewsStyles.module.css'
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import useSWR, { mutate } from 'swr'
import Skeleton from 'react-loading-skeleton'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BoxFilterV2 from '../general/filterV2/BoxFilterV2'
import { findIdByAlias, handleCheckLangCode } from '@/utils'
import useStore from '@/app/[lang]/(store)/store'

import dynamic from 'next/dynamic'
import IconCurrency from '../icons/IconCurrency'
import IconArea from '../icons/IconArea'
import IconAddress from '../icons/IconAddress'
const MapV4 = dynamic(() => import('../home/MapV2/MapV4'))
const arrFilter = [
    {
        id: 1,
        title: 'Loại hình',
        slug: 'propertyTypeIds',
        api: '/property-type',
    },
    {
        id: 2,
        title: 'Địa điểm',
        slug: 'propertyAreaTypeIds',
        api: '/property-area-type',
    },
]
const arrFilter1 = [
    {
        id: 1,
        title: 'Loại hình',
        slug: 'propertyTypeIds',
        api: '/property-type',
    },
    {
        id: 2,
        title: 'Địa điểm',
        slug: 'propertyAreaTypeIds',
        api: '/property-area-type',
    },
    {
        id: 3,
        title: 'Hình thức',
        slug: 'propertyCategoryIds',
        api: '/property-category',
    },
]

const slugProject = ['/du-an', '/projects', '/项目', '/프로젝트']

const listProject = new Array(24).fill(0)
const fetcher = (url, langCode) => fetch(url, { headers: { 'x-language-code': langCode } }).then((res) => res.json())

let propertyTypeParams = ''
let propertyAreaTypeParams = ''
let propertyCategoryTypeParams = ''
gsap.registerPlugin(ScrollTrigger)
export default function ListProject({ lang, t, dataSlug }) {
    const parentRef = useRef(null)
    const isTablet = useMediaQuery({
        query: '(max-width: 1023px)',
    })
    const isMobile = useMediaQuery({
        query: '(max-width: 767px)',
    })
    const router = useRouter()
    const pathName = usePathname()
    const searchParams = useSearchParams()
    const page = searchParams.get('page')
    const price = searchParams.get('price')
    const [show, Element] = useToggleShowMap()
    const cityId = useStore((state) => state.cityId)
    const districtId = useStore((state) => state.districtId)
    const wardId = useStore((state) => state.wardId)
    const isSubmit = useStore((state) => state.isSubmit)
    const propertyType = searchParams.getAll('propertyTypeIds')
    const propertyAreaType = searchParams.getAll('propertyAreaTypeIds')
    const propertyCategoryType = searchParams.getAll('propertyCategoryIds')

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)

            return params.toString()
        },
        [searchParams],
    )

    if (propertyType?.length > 0 && propertyType[0]) {
        propertyTypeParams = propertyType[0]
            .split('--')
            .reduce((accumulator, currentValue) => accumulator + '&propertyTypeIds=' + currentValue, '')
        router.push(pathName + '?' + createQueryString('page', 1), {
            scroll: false,
        })
    } else {
        propertyTypeParams = ''
    }

    if (propertyAreaType?.length > 0 && propertyAreaType[0]) {
        propertyAreaTypeParams = propertyAreaType[0]
            .split('--')
            .reduce((accumulator, currentValue) => accumulator + '&propertyAreaTypeIds=' + currentValue, '')
        router.push(pathName + '?' + createQueryString('page', 1), {
            scroll: false,
        })
    } else {
        propertyAreaTypeParams = ''
    }

    if (propertyCategoryType?.length > 0 && propertyCategoryType[0]) {
        propertyCategoryTypeParams = propertyCategoryType[0]
            .split('--')
            .reduce((accumulator, currentValue) => accumulator + '&propertyCategoryIds=' + currentValue, '')
        router.push(pathName + '?' + createQueryString('page', 1), {
            scroll: false,
        })
    } else {
        propertyCategoryTypeParams = ''
    }

    const { data, error, isLoading } = useSWR(
        `${process.env.NEXT_PUBLIC_API}/property?order=ASC&page=${page ? page : 1}&take=24${findIdByAlias(
            pathName,
            dataSlug,
        )}${propertyCategoryTypeParams ? propertyCategoryTypeParams : ''}${
            propertyAreaTypeParams ? propertyAreaTypeParams : ''
        }${propertyTypeParams ? propertyTypeParams : ''}${price ? '&price=' + price : ''}${
            cityId ? '&cityId=' + cityId : ''
        }${districtId ? '&districtId=' + districtId : ''}${wardId ? '&wardId=' + wardId : ''}`,
        (url) => fetcher(url, handleCheckLangCode(lang)),
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        },
    )

    useLayoutEffect(() => {
        if (typeof window === 'undefined') return
        let ctx = gsap.context(() => {
            setTimeout(() => {
                gsap.to('#boxRef-filter', {
                    position: 'fixed',
                    left: !isTablet ? '7.5vw' : isMobile ? '0' : '3.2vw',
                    top: !isTablet ? '5.75vw' : isMobile ? '18.25vw' : '9.3vw',
                    zIndex: '999999',
                    background: 'white',
                    scrollTrigger: {
                        trigger: '#boxRef-filter',
                        start: 'top top',
                        end: 'bottom top',
                        scrub: true,
                    },
                })
            }, 500)
        }, parentRef)
        return () => {
            ctx.revert()
        }
    }, [])

    useEffect(() => {
        mutate(
            `${process.env.NEXT_PUBLIC_API}/property?order=ASC&page=${page ? page : 1}&take=24${findIdByAlias(
                pathName,
                dataSlug,
            )}${propertyCategoryTypeParams ? propertyCategoryTypeParams : ''}${
                propertyAreaTypeParams ? propertyAreaTypeParams : ''
            }${propertyTypeParams ? propertyTypeParams : ''}${price ? '&price=' + price : ''}${
                cityId ? '&cityId=' + cityId : ''
            }${districtId ? '&districtId=' + districtId : ''}${wardId ? '&wardId=' + wardId : ''}`,
        )
    }, [lang, isSubmit])

    return (
        <section
            id='list-project'
            ref={parentRef}
            className='mt-[5.75vw] relative z-10 max-md:mt-[17vw] max-lg:mt-[10vw]'
        >
            <div className='flex justify-between w-full'>
                <div
                    className={`${
                        show ? 'w-[calc(100vw-35.3125vw-2vw)]' : 'w-full pr-[7.5vw]'
                    } pl-[7.5vw] px-mb10 max-lg:w-full max-lg:px-[3.2vw]`}
                >
                    <div className={`w-full bg-white max-md:top-[18.3vw] max-md:pr-[2.67vw] max-md:w-full`}>
                        <div className='mt-[2vw] max-md:mt-[6.4vw] flex items-center border-b border-solid border-line max-md:ml-[2.67vw] max-md:px-0'>
                            <div className='flex flex-col gap-y-[0.31vw] max-md:gap-y-[1.33vw] mb-[1vw] max-md:mb-[2.13vw]'>
                                <span className='opacity-50 text-den title14-400-150 max-md:title-mb16-400-150 max-lg:title-tl14'>
                                    100% xác thực
                                </span>
                                <h3 className='text-den title32-800-130 max-md:title-mb25-700-130 max-md:-tracking-[1.25px] max-lg:title-tl32'>
                                    Mua bán nhà đất căn hộ
                                </h3>
                            </div>
                        </div>
                        <div
                            id='boxRef-filter'
                            className={`${
                                show ? 'w-[55.25vw]' : 'w-[84vw]'
                            } max-md:pl-0 max-md:ml-[2.67vw] max-lg:w-full max-md:left-0 max-lg:left-[3.2vw] border-b border-solid border-line py-[1vw] max-md:pr-0 max-md:pt-[2.67vw] max-md:pb-[4.27vw] max-md:border-none flex justify-between left-[7.5vw] bg-white`}
                        >
                            <BoxFilterV2
                                arrFilter={slugProject?.find((e) => e?.includes(pathName)) ? arrFilter1 : arrFilter}
                            />
                            <div className='flex gap-x-[1.31vw] items-center max-lg:hidden'>
                                <span className='text-black title16-400-150 h-fit max-lg:title-tl16'>Bản đồ</span>
                                <div>{Element}</div>
                            </div>
                        </div>
                        <article className='px-mb10'>
                            <div className='flex justify-between mt-[1.5vw] mb-[1vw]'>
                                <div className='flex gap-x-[0.31vw] max-md:gap-x-[1.33vw]'>
                                    <span className='inline-block opacity-50 text-den title16-400-150 max-md:title-mb16-400-150 max-lg:title-tl16'>
                                        Hiển thị
                                    </span>
                                    <span className='inline-block text-den title16-600-150 max-md:title-mb16-600-150 max-lg:title-tl16'>
                                        {data?.meta?.take > data?.meta?.itemCount
                                            ? data?.meta?.itemCount
                                            : data?.meta?.take}{' '}
                                        trong số hơn{' '}
                                        {data?.meta?.itemCount > data?.meta?.take
                                            ? data?.meta?.take
                                            : data?.meta?.itemCount}{' '}
                                        <span className='max-md:hidden'>nhà đất xác thực</span>
                                    </span>
                                </div>
                                <BoxSort
                                    price={price}
                                    createQueryString={createQueryString}
                                    pathName={pathName}
                                    router={router}
                                />
                            </div>
                        </article>
                    </div>
                    {Array.isArray(data?.data) && data?.data?.length === 0 && (
                        <div className='text-black text-[1.5vw] font-normal leading-normal text-center'>
                            Không tìm thấy bất sản nào!
                        </div>
                    )}
                    <div
                        className={`grid ${
                            show ? 'grid-cols-3 grid-rows-[8]' : 'grid-cols-4 grid-rows-6'
                        } grid-row gap-x-[1.25vw] gap-y-[1.87vw] max-md:grid-cols-1 max-md:gap-x-0 max-md:gap-y-[5.86vw] max-lg:grid-cols-2`}
                    >
                        {isLoading &&
                            listProject?.map((e, index) => (
                                <div
                                    className='w-full'
                                    key={index}
                                >
                                    <div className='relative w-full h-[13.75vw] rounded-[0.5vw] overflow-hidden max-md:h-[73.8vw] max-lg:h-[30vw]'>
                                        <Skeleton height={'100%'} />
                                    </div>
                                    <div className='mt-[1.13vw] max-md:h-[6.1vw] max-md:mt-[4.8vw] max-lg:h-[3vw]'>
                                        <Skeleton height={'100%'} />
                                    </div>
                                    <div className='mt-[0.63vw] flex flex-col gap-y-[0.5vw] max-md:mt-[4.6vw] max-md:gap-y-[1.6vw]'>
                                        <div className='h-[1vw] max-md:h-[5.3vw] max-lg:h-[2.2vw]'>
                                            <Skeleton height={'100%'} />
                                        </div>
                                        <div className='h-[1vw] max-md:h-[5.3vw] max-lg:h-[2.2vw]'>
                                            <Skeleton height={'100%'} />
                                        </div>
                                        <div className='h-[1vw] max-md:h-[5.3vw] max-lg:h-[2.2vw]'>
                                            <Skeleton height={'100%'} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        {Array.isArray(data?.data) &&
                            data?.data?.map((e, index) => (
                                <Link
                                    href={
                                        (lang === 'vi' ? '' : lang + '/') +
                                        (e?.propertyCategory?.translations?.find((e) =>
                                            e?.languageCode?.toLowerCase()?.includes(lang === 'ch' ? 'cn' : lang),
                                        )?.alias || 'du-an') +
                                        '/' +
                                        (e?.translations?.find((e) =>
                                            e?.languageCode?.toLowerCase()?.includes(lang === 'ch' ? 'cn' : lang),
                                        )?.slug || e?.translations[0]?.slug)
                                    }
                                    className='w-full'
                                    key={index}
                                >
                                    <div className='relative w-full h-[13.75vw] max-md:h-[73.87vw] rounded-[0.5vw] overflow-hidden max-md:rounded-[2.69vw] max-lg:h-[30vw]'>
                                        <Image
                                            className='z-0 object-cover'
                                            src={`${e?.firstImage ? e?.firstImage : '/images/itemproject.jpg'}`}
                                            alt={
                                                e?.translations?.find((e) =>
                                                    e?.languageCode
                                                        ?.toLowerCase()
                                                        ?.includes(lang === 'ch' ? 'cn' : lang),
                                                )?.name ||
                                                e?.translations[0]?.name ||
                                                'thumbnail project'
                                            }
                                            sizes='33vw'
                                            fill
                                            quality={100}
                                        />
                                        <div className='block absolute rounded-[0.25vw] bg-logo top-[1vw] left-[1vw] text-white py-[0.38vw] px-[0.94vw] h-fit w-fit title10-600-150 max-md:top-[5.37vw] max-md:left-[5.37vw] max-md:py-[1.16vw] max-md:px-[5.04vw] max-md:title-mb12-600-150 max-lg:title-tl10 max-md:rounded-[1.33vw]'>
                                            {e?.propertyCategory?.translations?.find((e) =>
                                                e?.languageCode?.toLowerCase()?.includes(lang === 'ch' ? 'cn' : lang),
                                            )?.name || 'Dự án'}
                                        </div>
                                    </div>
                                    <div className='pt-[1.13vw] max-md:pt-[6.4vw]'>
                                        <h6
                                            title={
                                                e?.translations?.find((e) =>
                                                    e?.languageCode
                                                        ?.toLowerCase()
                                                        ?.includes(lang === 'ch' ? 'cn' : lang),
                                                )?.name || e?.translations[0]?.name
                                            }
                                            className='text-den title18-700-130 max-md:title-mb18-700-130 -tracking-[1px] mb-[0.63vw] max-md:mb-[3.36vw] max-md:-tracking-[1.259px] line-clamp-1 max-lg:title-tl18'
                                        >
                                            {e?.translations?.find((e) =>
                                                e?.languageCode?.toLowerCase()?.includes(lang === 'ch' ? 'cn' : lang),
                                            )?.name ||
                                                e?.translations[0]?.name ||
                                                'Chưa có thông tin!'}
                                        </h6>
                                        <div
                                            title={e?.address?.display}
                                            className='flex items-center'
                                        >
                                            <IconAddress
                                                className={
                                                    'w-[0.875vw] h-[0.875vw] max-md:w-[5vw] max-md:h-[5vw] max-lg:w-[2vw] max-lg:h-[2vw] flex-shrink-0'
                                                }
                                            />
                                            <span className='ml-[0.5vw] max-md:ml-[2.69vw] mr-[0.25vw] max-md:mr-[1vw] text-nau-nhat title14-700-150 max-md:title-mb16-700-150 whitespace-nowrap max-lg:title-tl14'>
                                                Địa chỉ:
                                            </span>
                                            <span className='capitalize text-den title14-400-150 max-md:title-mb16-400-150 line-clamp-1 max-lg:title-tl14'>
                                                {e?.address?.ward +
                                                    ', ' +
                                                    e?.address?.district +
                                                    ', ' +
                                                    e?.address?.city}
                                            </span>
                                        </div>
                                        <div className='flex items-center my-[0.5vw] max-md:my-[2.69vw]'>
                                            <IconArea
                                                className={
                                                    'w-[0.875vw] h-[0.875vw] max-md:w-[5vw] max-md:h-[5vw] max-lg:w-[2vw] max-lg:h-[2vw]'
                                                }
                                            />
                                            <span className='ml-[0.5vw] max-md:ml-[2.69vw] mr-[0.25vw] max-md:mr-[1vw] text-nau-nhat title14-700-150 max-md:title-mb16-700-150 max-lg:title-tl14'>
                                                Diện tích:
                                            </span>
                                            <span className='capitalize text-den title14-400-150 max-md:title-mb16-400-150 max-lg:title-tl14'>
                                                {e?.translations?.find((e) =>
                                                    e?.languageCode
                                                        ?.toLowerCase()
                                                        ?.includes(lang === 'ch' ? 'cn' : lang),
                                                )?.size
                                                    ? e?.translations?.find((e) =>
                                                          e?.languageCode
                                                              ?.toLowerCase()
                                                              ?.includes(lang === 'ch' ? 'cn' : lang),
                                                      )?.size + ' m²'
                                                    : e?.translations[0]?.size
                                                    ? e?.translations[0]?.size + ' m²'
                                                    : 'Chưa có thông tin!'}
                                            </span>
                                        </div>
                                        <div className='flex items-center'>
                                            <IconCurrency
                                                className={
                                                    'w-[0.875vw] h-[0.875vw] max-md:w-[5vw] max-md:h-[5vw] max-lg:w-[2vw] max-lg:h-[2vw]'
                                                }
                                            />
                                            <span className='ml-[0.5vw] max-md:ml-[2.69vw] mr-[0.25vw] max-md:mr-[1vw] text-nau-nhat title14-700-150 max-md:title-mb16-700-150 max-lg:title-tl14'>
                                                Mức giá:
                                            </span>
                                            <span className='capitalize text-den max-md:title14-400-150 max-md:title-mb16-400-150 max-lg:title-tl14'>
                                                {e?.translations?.find((e) =>
                                                    e?.languageCode
                                                        ?.toLowerCase()
                                                        ?.includes(lang === 'ch' ? 'cn' : lang),
                                                )?.priceDisplay || 'Chưa có thông tin!'}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                    </div>
                    <div
                        id='boxPagination'
                        className='mb-[6.26vw] max-md:mb-[16vw]'
                    >
                        <ReactPaginate
                            breakLabel='...'
                            nextLabel='Next'
                            onPageChange={(e) => {
                                router.push(pathName + '?' + createQueryString('page', e.selected + 1))
                                window?.scrollTo({ top: 0, behavior: 'smooth' })
                            }}
                            pageRangeDisplayed={5}
                            pageCount={Math.ceil(data?.meta?.pageCount) || 1}
                            renderOnZeroPageCount={null}
                            previousLabel='Previous'
                            forcePage={page ? page - 1 : 0}
                            pageClassName={classes.page}
                            activeClassName={classes.selected}
                            className={classes['news-pagination']}
                        />
                    </div>
                </div>
                <div className='max-lg:hidden'>
                    <div
                        id='boxMap'
                        className={`${
                            !show ? 'hidden' : ''
                        } w-[35.3125vw] z-[99999] fixed top-[5.75vw] right-0 rounded-tl-[0.5vw] overflow-hidden`}
                    >
                        <div className='w-full h-[calc(100vh-6vw)] rounded-tl-[0.5vw] overflow-hidden'>
                            {/* <MapV3 /> */}
                            <MapV4 dataSlug={dataSlug} />
                        </div>
                    </div>
                    <div className={`${!show ? 'hidden' : ''} !w-[35.3125vw]`}></div>
                </div>
            </div>
            {isTablet && <BtnShowMap />}
        </section>
    )
}
