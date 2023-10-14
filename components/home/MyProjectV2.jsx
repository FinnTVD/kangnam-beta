'use client'
import Skeleton from 'react-loading-skeleton'
import Image from 'next/image'
import Link from 'next/link'
import useToggleShowMap from '@/hooks/useToggleShowMap'
import Button from '../general/Button'
import { arrFilter, handleCheckLangCode } from '@/utils'
import { useMediaQuery } from 'react-responsive'
import ReactPaginate from 'react-paginate'
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import useSWR, { mutate } from 'swr'
import classes from '../news/ListNewsStyles.module.css'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import BoxFilterV2 from '../general/filterV2/BoxFilterV2'
import useStore from '@/app/[lang]/(store)/store'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import dynamic from 'next/dynamic'
import IconAddress from '../icons/IconAddress'
import IconArea from '../icons/IconArea'
import IconCurrency from '../icons/IconCurrency'
const MapV4 = dynamic(() => import('./MapV2/MapV4'))

const arrItem = new Array(8).fill(0)
const fetcher = (url, langCode) => fetch(url, { headers: { 'x-language-code': langCode } }).then((res) => res.json())
let propertyTypeParams = ''
let propertyAreaTypeParams = ''
let propertyCategoryTypeParams = ''

gsap.registerPlugin(ScrollTrigger)
export default function MyProjectV2({ lang, t }) {
    const setBoxMap = useStore((state) => state.setBoxMap)
    // const valueSearch = useStore((state) => state.valueSearch)
    // const selectSearch = useStore((state) => state.selectSearch)
    // const valueSearchPrev = useStore((state) => state.valueSearchPrev)
    const cityId = useStore((state) => state.cityId)
    const districtId = useStore((state) => state.districtId)
    const wardId = useStore((state) => state.wardId)
    const isSubmit = useStore((state) => state.isSubmit)
    const setIsFeatureHome = useStore((state) => state.setIsFeatureHome)
    const isFeatureHome = useStore((state) => state.isFeatureHome)
    const isTablet = useMediaQuery({
        query: '(max-width: 1023px)',
    })
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathName = usePathname()
    const projectsRef = useRef()
    const page = searchParams.get('page')

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

    const [show, Element] = useToggleShowMap()
    const [isToggle, setIsToggle] = useState(false)
    const { data, error, isLoading } = useSWR(
        `${process.env.NEXT_PUBLIC_API}/property?order=ASC&page=${page ? page : 1}&take=${show ? 6 : 8}${
            propertyCategoryTypeParams ? propertyCategoryTypeParams : ''
        }${propertyAreaTypeParams ? propertyAreaTypeParams : ''}${propertyTypeParams ? propertyTypeParams : ''}${
            cityId ? '&cityId=' + cityId : ''
        }${districtId ? '&districtId=' + districtId : ''}${wardId ? '&wardId=' + wardId : ''}`,
        (url) => fetcher(url, handleCheckLangCode(lang)),
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        },
    )

    useEffect(() => {
        mutate(
            `${process.env.NEXT_PUBLIC_API}/property?order=ASC&page=${page ? page : 1}&take=${show ? 6 : 8}${
                propertyCategoryTypeParams ? propertyCategoryTypeParams : ''
            }${propertyAreaTypeParams ? propertyAreaTypeParams : ''}${propertyTypeParams ? propertyTypeParams : ''}${
                cityId ? '&cityId=' + cityId : ''
            }${districtId ? '&districtId=' + districtId : ''}${wardId ? '&wardId=' + wardId : ''}`,
        )
    }, [lang, isSubmit])

    useEffect(() => {
        projectsRef?.current && setBoxMap(projectsRef.current)
    }, [])

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            setTimeout(() => {
                gsap.to(projectsRef.current, {
                    scrollTrigger: {
                        trigger: projectsRef.current,
                        start: 'top bottom',
                        end: 'bottom 65%',
                        scrub: true,
                        onToggle: (self) => {
                            if (self.isActive) {
                                setIsFeatureHome({
                                    isStandMap: true,
                                    isContain: true,
                                })
                            } else {
                                setIsFeatureHome({
                                    isStandMap: false,
                                    isContain: false,
                                })
                            }
                        },
                    },
                })
            }, 500)
        }, projectsRef)
        return () => {
            ctx.revert()
        }
    }, [])

    if (isTablet) return

    return (
        <section
            ref={projectsRef}
            id='boxMap'
            className='pl-[7.5vw] text-den pt-[9.13vw] pb-[10.06vw] z-[9] relative bg-white max-lg:hidden'
        >
            <h2
                data-aos='fade-right'
                data-aos-duration='1000'
                className='pr-[7.5vw] title56'
            >
                {t?.homepage?.section3?.title}
            </h2>
            <div className='flex justify-between items-center pr-[7.5vw] mb-[2vw] mt-[1.5vw]'>
                <BoxFilterV2
                    arrFilter={arrFilter}
                    lang={lang}
                    t={t}
                />
                <div className='flex gap-x-[1.5vw] items-center'>
                    <span className='text-black title16-400-150 h-fit'>{t?.homepage?.section3?.showMap}</span>
                    <div>{Element}</div>
                </div>
            </div>
            <div className={`${show ? '' : 'pr-[7.5vw]'} flex gap-x-[1.88vw] relative`}>
                <div className={`${isToggle ? 'hidden' : ''} flex-1`}>
                    <div
                        className={`${
                            show ? 'grid-cols-3' : 'grid-cols-4'
                        } w-full grid grid-rows-2 gap-x-[1.25vw] gap-y-[1.87vw] h-fit`}
                    >
                        {isLoading &&
                            arrItem.slice(0, show ? 6 : 8).map((e, index) => (
                                <div
                                    className='w-full'
                                    key={index}
                                >
                                    <div className='relative w-full h-[13.75vw] rounded-[0.5vw] overflow-hidden'>
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
                        {data &&
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
                                    <div className='relative w-full h-[13.75vw] rounded-[0.5vw] overflow-hidden'>
                                        <Image
                                            // data-aos='zoom-out'
                                            // data-aos-delay={`${(index % 3) * 300}`}
                                            className='z-0 object-cover'
                                            src={e?.firstImage || '/images/itemproject.jpg'}
                                            alt={
                                                e?.translations?.find((e) =>
                                                    e?.languageCode
                                                        ?.toLowerCase()
                                                        ?.includes(lang === 'ch' ? 'cn' : lang),
                                                )?.name ||
                                                e?.translations[0]?.name ||
                                                'thumbnail project'
                                            }
                                            sizes='100vw'
                                            fill
                                        />
                                        <div className='block absolute rounded-[0.25vw] bg-logo top-[1vw] left-[1vw] text-white py-[0.38vw] px-[0.94vw] h-fit w-fit title10-600-150'>
                                            {e?.propertyCategory?.translations?.find((e) =>
                                                e?.languageCode?.toLowerCase()?.includes(lang === 'ch' ? 'cn' : lang),
                                            )?.name || 'Dự án'}
                                        </div>
                                    </div>
                                    <div className='pt-[1.13vw]'>
                                        <h6
                                            title={
                                                e?.translations?.find((e) =>
                                                    e?.languageCode
                                                        ?.toLowerCase()
                                                        ?.includes(lang === 'ch' ? 'cn' : lang),
                                                )?.name || e?.translations[0]?.name
                                            }
                                            className='text-den title18-700-130 -tracking-[1px] mb-[0.63vw] line-clamp-1'
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
                                            <span className='ml-[0.5vw] mr-[0.25vw] text-nau-nhat title14-700-150 whitespace-nowrap'>
                                                {t?.projects?.item?.address}
                                            </span>
                                            <span className='capitalize text-den title14-400-150 line-clamp-1'>
                                                {e?.address?.ward +
                                                    ', ' +
                                                    e?.address?.district +
                                                    ', ' +
                                                    e?.address?.city}
                                            </span>
                                        </div>
                                        <div className='flex items-center my-[0.5vw]'>
                                            <IconArea
                                                className={
                                                    'w-[0.875vw] h-[0.875vw] max-md:w-[5vw] max-md:h-[5vw] max-lg:w-[2vw] max-lg:h-[2vw]'
                                                }
                                            />
                                            <span className='ml-[0.5vw] mr-[0.25vw] text-nau-nhat title14-700-150'>
                                                {t?.projects?.item?.area}
                                            </span>
                                            <span className=' text-den title14-400-150'>
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
                                            <span className='ml-[0.5vw] mr-[0.25vw] text-nau-nhat title14-700-150'>
                                                {t?.projects?.item?.price}
                                            </span>
                                            <span className='capitalize text-den title14-400-150'>
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
                    <div className='flex justify-between items-center mt-[0.69vw]'>
                        {data ? (
                            <ReactPaginate
                                breakLabel='...'
                                nextLabel='Next'
                                onPageChange={(e) => {
                                    router.push(pathName + '?' + createQueryString('page', e?.selected + 1), {
                                        scroll: false,
                                    })
                                    projectsRef?.current?.scrollIntoView({ behavior: 'smooth' })
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
                        ) : (
                            <div></div>
                        )}
                        <Button
                            href={'/' + lang + t?.Navbar?.listNav[0]?.href || '/' + lang + '/du-an'}
                            className='border-none bg-logo mt-[2.5vw]'
                            stroke='white'
                            span='text-white font-semibold -tracking-[0.32px]'
                        >
                            {t?.homepage?.section3?.button}
                        </Button>
                    </div>
                </div>
                <div
                    className={`${!show ? 'hidden' : ''} rounded-tl-[0.5vw] ${
                        isToggle ? 'w-full' : '!w-[35.5625vw]'
                    } !h-[46.9375vw] rounded-bl-[0.5vw] overflow-hidden relative `}
                >
                    <MapV4 lang={lang} />
                    <div
                        onClick={() =>
                            setIsFeatureHome({
                                isStandMap: true,
                                isContain: false,
                            })
                        }
                        id='showFeature'
                        className={`${
                            isFeatureHome?.isContain ? 'active' : ''
                        } fixed top-1/2 right-0 -translate-y-1/2 w-[3vw] h-[6vw] bg-white z-50  rounded-tl-full rounded-bl-full flex justify-center items-center`}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='25'
                            viewBox='0 0 24 25'
                            fill='none'
                            className={`w-[1.375vw] h-[1.375vw] max-lg:w-[3vw] max-lg:h-[3vw] max-md:w-[4.27vw] max-md:h-[4.27vw] rotate-90`}
                        >
                            <path
                                d='M1 1L12 12L23 1'
                                stroke='black'
                                strokeWidth='2'
                            />
                            <path
                                d='M1 12L12 23L23 12'
                                stroke='black'
                                strokeWidth='2'
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}
