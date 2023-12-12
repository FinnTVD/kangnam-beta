'use client'
import { useCallback, useEffect, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import useSWR, { mutate } from 'swr'
import dynamic from 'next/dynamic'
//
import useToggleShowMap from '@/hooks/useToggleShowMap'
import BoxSort from './BoxSort'
import BtnShowMap from './BtnShowMap'
import ReactPaginate from 'react-paginate'
import classes from '../news/ListNewsStyles.module.css'
import Skeleton from 'react-loading-skeleton'
import BoxFilterV2 from '../general/filterV2/BoxFilterV2'
import { findIdByAlias, handleCheckLangCode } from '@/utils'
import IconCurrency from '../icons/IconCurrency'
import IconArea from '../icons/IconArea'
import IconAddress from '../icons/IconAddress'
const MapV6 = dynamic(() => import('../home/MapV2/MapV6'))

const listProject = new Array(24).fill(0)
const fetcher = (url, langCode) => fetch(url, { headers: { 'x-language-code': langCode } }).then((res) => res.json())

let propertyTypeParams = ''
let propertyAreaTypeParams = ''

gsap.registerPlugin(ScrollTrigger)

export default function ListProject({ lang, t, dataSlug }) {
    const arrFilter = [
        {
            id: 1,
            title: t?.projects?.category,
            slug: 'propertyTypeIds',
            titleLang: 'propertyTypeIdsP',
            api: '/property-type',
        },
        {
            id: 2,
            title: t?.projects?.address,
            slug: 'propertyAreaTypeIds',
            titleLang: 'propertyAreaTypeIdsP',
            api: '/property-area-type',
        },
        {
            id: 4,
            title: 'Khoảng giá',
            slug: 'price',
            titleLang: 'price',
            api: '/price',
        },
        {
            id: 5,
            title: 'Diện tích',
            slug: 'area',
            titleLang: 'area',
            api: '/area',
        },
        {
            id: 6,
            title: 'Trạng thái',
            slug: 'status',
            titleLang: 'status',
            api: '/status',
        },
    ]

    const parentRef = useRef(null)
    const isTablet = useMediaQuery({
        query: '(max-width: 1023px)',
    })

    const router = useRouter()
    const pathName = usePathname()
    const searchParams = useSearchParams()
    const page = searchParams.get('page')
    const price = searchParams.get('price')
    const cityId = searchParams.get('cityId')
    const minPrice = searchParams.get('minPrice')
    const maxPrice = searchParams.get('maxPrice')
    const minArea = searchParams.get('minArea')
    const maxArea = searchParams.get('maxArea')
    const status = searchParams.get('status')

    const districtId = searchParams.get('districtId')
    const wardId = searchParams.get('wardId')
    const [show, Element] = useToggleShowMap()

    const propertyType = searchParams.getAll('propertyTypeIds')
    const propertyAreaType = searchParams.getAll('propertyAreaTypeIds')

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

    const { data, error, isLoading } = useSWR(
        `${process.env.NEXT_PUBLIC_API}/project?order=${price ? price : 'DESC'}${price ? '&orderBy=price' : ''}&page=${
            page ? page : 1
        }&take=24${findIdByAlias(pathName, dataSlug)}${propertyAreaTypeParams ? propertyAreaTypeParams : ''}${
            propertyTypeParams ? propertyTypeParams : ''
        }${cityId ? '&cityId=' + cityId : ''}${districtId ? '&districtId=' + districtId : ''}${
            wardId ? '&wardId=' + wardId : ''
        }${minPrice ? '&minPrice=' + minPrice + '000000000' : ''}${
            maxPrice ? '&maxPrice=' + maxPrice + '000000000' : ''
        }${minArea ? '&minArea=' + minArea : ''}${maxArea ? '&maxArea=' + maxArea : ''}${
            status ? '&status=' + status : ''
        }`,
        (url) => fetcher(url, handleCheckLangCode(lang)),
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        },
    )

    useEffect(() => {
        let mm = gsap.matchMedia()
        let ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: '#container_filter',
                start: 'top top',
                endTrigger: 'footer',
                end: 'bottom top',
                onEnter: () => {
                    if (data?.data?.length > 3) {
                        document.getElementById('boxRef-filter').classList.add('active')
                    }
                },
                onLeave: () => {
                    document.getElementById('boxRef-filter').classList.remove('active')
                },
                onLeaveBack: () => {
                    document.getElementById('boxRef-filter').classList.remove('active')
                },
            })

            mm.add('(min-width: 1024px)', () => {
                ScrollTrigger.create({
                    trigger: '#container_boxMap',
                    start: 'top top',
                    endTrigger: '#boxPagination',
                    end: 'top bottom',
                    pin: true,
                    onEnter: () => {
                        document.getElementById('boxMap').classList.add('active')
                    },
                    onLeave: () => {
                        document.getElementById('boxMap').classList.remove('active')
                    },
                })
            })
        }, parentRef)
        return () => {
            ctx.revert()
        }
    }, [data])

    useEffect(() => {
        mutate(
            `${process.env.NEXT_PUBLIC_API}/project?order=${price ? price : 'DESC'}${
                price ? '&orderBy=price' : ''
            }&page=${page ? page : 1}&take=24${findIdByAlias(pathName, dataSlug)}${
                propertyAreaTypeParams ? propertyAreaTypeParams : ''
            }${propertyTypeParams ? propertyTypeParams : ''}${
                cityId ? '&cityId=' + cityId : ''
            }${districtId ? '&districtId=' + districtId : ''}${wardId ? '&wardId=' + wardId : ''}${
                minPrice ? '&minPrice=' + minPrice + '000000000' : ''
            }${maxPrice ? '&maxPrice=' + maxPrice + '000000000' : ''}${minArea ? '&minArea=' + minArea : ''}${
                maxArea ? '&maxArea=' + maxArea : ''
            }${status ? '&status=' + status : ''}`,
        )
    }, [lang, searchParams])

    const handleOpenDate = (date) => {
        const dateNew = new Date(date)
        const dateNow = new Date()
        if (dateNow >= dateNew) {
            return true
        } else {
            return false
        }
    }

    return (
        <section
            id='list-project'
            ref={parentRef}
            className='mt-[5.75vw] relative z-10 max-md:mt-[17vw] max-lg:mt-[10vw] lg:min-h-screen overflow-hidden'
        >
            <div className='flex justify-between w-full h-fit'>
                <div
                    className={`${
                        show ? 'w-[calc(100vw-35.3125vw-2vw)]' : 'w-full pr-[7.5vw]'
                    } pl-[7.5vw] px-mb10 max-lg:w-full max-lg:px-[3.2vw] h-fit`}
                >
                    <div
                        id='container_filter'
                        className={`w-full bg-white max-md:top-[18.3vw] max-md:pr-[2.67vw] max-md:w-full`}
                    >
                        <div className='mt-[2vw] max-md:mt-[6.4vw] flex items-center border-b border-solid border-line max-md:ml-[2.67vw] max-md:px-0'>
                            <div className='flex flex-col gap-y-[0.31vw] max-md:gap-y-[1.33vw] mb-[1vw] max-md:mb-[2.13vw]'>
                                <span className='opacity-50 text-den title14-400-150 max-md:title-mb16-400-150 max-lg:title-tl14'>
                                    {t?.projects?.subtitle}
                                </span>
                                <h3 className='text-den title32-800-130 max-md:title-mb25-700-130 max-md:-tracking-[1.25px] max-lg:title-tl32'>
                                    {t?.projects?.titleP}
                                </h3>
                            </div>
                        </div>
                        <div
                            id='boxRef-filter'
                            className={`${
                                show ? 'w-[55.25vw]' : 'w-[84vw]'
                            } max-md:pl-0 max-md:ml-[2.67vw] max-lg:w-full max-md:left-0 max-lg:left-[3.2vw] border-b border-solid border-line py-[1vw] max-md:pr-0 transition-all duration-200 max-md:pt-[2.67vw] max-md:pb-[4.27vw] max-md:border-none flex justify-between left-[7.5vw] bg-white`}
                        >
                            <BoxFilterV2
                                arrFilter={arrFilter}
                                t={t}
                            />
                            <div className='flex gap-x-[1.31vw] items-center max-lg:hidden'>
                                <span className='text-black title16-400-150 h-fit max-lg:title-tl16'>
                                    {t?.projects?.map}
                                </span>
                                <div>{Element}</div>
                            </div>
                        </div>
                        <article className='px-mb10'>
                            <div className='flex justify-between mt-[1.5vw] mb-[1vw]'>
                                <div className='flex gap-x-[0.31vw] max-md:gap-x-[1.33vw]'>
                                    <span className='inline-block opacity-50 text-den title16-400-150 max-md:title-mb16-400-150 max-lg:title-tl16'>
                                        {t?.projects?.show}
                                    </span>
                                    <span className='inline-block text-den title16-600-150 max-md:title-mb16-600-150 max-lg:title-tl16'>
                                        {data?.meta?.take > data?.meta?.itemCount
                                            ? data?.meta?.itemCount
                                            : data?.meta?.take}{' '}
                                        {t?.projects?.over}{' '}
                                        {data?.meta?.itemCount > data?.meta?.take
                                            ? data?.meta?.take
                                            : data?.meta?.itemCount}{' '}
                                        <span className='max-md:hidden'>{t?.projects?.validateIsProject}</span>
                                    </span>
                                </div>
                                <BoxSort
                                    price={price}
                                    createQueryString={createQueryString}
                                    pathName={pathName}
                                    router={router}
                                    t={t}
                                />
                            </div>
                        </article>
                    </div>
                    {Array.isArray(data?.data) && data?.data?.length === 0 && (
                        <div className='text-black text-[1.5vw] font-normal leading-normal text-center'>
                            Không tìm thấy bất động sản nào!
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
                                        (lang === 'vi' ? '' : `/${lang}` + '/') +
                                        (e?.propertyCategory?.translations?.find((e) =>
                                            e?.languageCode?.toLowerCase()?.includes(lang),
                                        )?.alias || 'du-an') +
                                        '/' +
                                        (e?.translations?.find((e) => e?.languageCode?.toLowerCase()?.includes(lang))
                                            ?.slug || e?.translations[0]?.slug)
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
                                                    e?.languageCode?.toLowerCase()?.includes(lang),
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
                                                e?.languageCode?.toLowerCase()?.includes(lang),
                                            )?.name || 'Dự án'}
                                        </div>
                                    </div>
                                    <div className='pt-[0.5vw] max-md:pt-[6.4vw]'>
                                        <div
                                            className={`${
                                                handleOpenDate(e?.openDate)
                                                    ? 'bg-[#E7FFF4] text-[#07A35D]'
                                                    : 'bg-gray-300 text-gray-800'
                                            } rounded-md p-[0.5vw] w-fit mb-[0.613vw]`}
                                        >
                                            {handleOpenDate(e?.openDate) ? 'Đang mở bán' : 'Sắp mở bán'}
                                        </div>
                                        <h6
                                            title={
                                                e?.translations?.find((e) =>
                                                    e?.languageCode?.toLowerCase()?.includes(lang),
                                                )?.name || e?.translations[0]?.name
                                            }
                                            className='text-den title18-700-150 max-md:title-mb18-700-130 -tracking-[1px] mb-[0.63vw] max-md:mb-[3.36vw] max-md:-tracking-[1.259px] line-clamp-1 max-lg:title-tl18'
                                        >
                                            {e?.translations?.find((e) =>
                                                e?.languageCode?.toLowerCase()?.includes(lang),
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
                                                {t?.projects?.item?.address}:
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
                                                    'w-[0.875vw] h-[0.875vw] min-w-[0.875vw] max-md:min-w-[5vw] max-lg:min-w-[2vw] max-md:w-[5vw] max-md:h-[5vw] max-lg:w-[2vw] max-lg:h-[2vw]'
                                                }
                                            />
                                            <span className='ml-[0.5vw] max-md:ml-[2.69vw] mr-[0.25vw] max-md:mr-[1vw] text-nau-nhat title14-700-150 max-md:title-mb16-700-150 max-lg:title-tl14 whitespace-nowrap'>
                                                {t?.projects?.item?.area}:
                                            </span>
                                            <span className='capitalize text-den title14-400-150 max-md:title-mb16-400-150 max-lg:title-tl14 line-clamp-1'>
                                                {e?.translations?.find((e) =>
                                                    e?.languageCode?.toLowerCase()?.includes(lang),
                                                )?.size
                                                    ? e?.translations?.find((e) =>
                                                          e?.languageCode?.toLowerCase()?.includes(lang),
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
                                                {t?.projects?.item?.price}:
                                            </span>
                                            <span className='capitalize text-den max-md:title14-400-150 max-md:title-mb16-400-150 max-lg:title-tl14'>
                                                {e?.translations?.find((e) =>
                                                    e?.languageCode?.toLowerCase()?.includes(lang),
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
                <div
                    id='container_boxMap'
                    className='max-lg:hidden'
                >
                    <div
                        id='boxMap'
                        className={`${
                            !show ? 'hidden' : ''
                        } w-[35.3125vw] z-[99999] relative h-screen rounded-tl-[0.5vw] overflow-hidden transition-all duration-200`}
                    >
                        <div className='w-full h-[calc(100vh-6vw)] rounded-tl-[0.5vw] overflow-hidden'>
                            {/* <MapV3 /> */}
                            <MapV6 dataSlug={dataSlug} />
                        </div>
                    </div>
                </div>
            </div>
            {isTablet && <BtnShowMap t={t} />}
        </section>
    )
}
