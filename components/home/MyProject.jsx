'use client'
import Skeleton from 'react-loading-skeleton'
import Image from 'next/image'
import Link from 'next/link'
import useToggleShowMap from '@/hooks/useToggleShowMap'
import Button from '../general/Button'
import { arrFilter, renderAddress, renderTitle, renderHref } from '@/utils'
import { useMediaQuery } from 'react-responsive'
import ReactPaginate from 'react-paginate'
import { memo, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
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
const MapV5 = dynamic(() => import('./MapV2/MapV5'))

const arrItem = new Array(8).fill(0)

gsap.registerPlugin(ScrollTrigger)
const MyProject = ({ lang, t, data }) => {
    const isTablet = useMediaQuery({
        query: '(max-width: 1023px)',
    })
    if (isTablet) return null

    const setBoxMap = useStore((state) => state.setBoxMap)
    const setIsFeatureHome = useStore((state) => state.setIsFeatureHome)
    const isFeatureHome = useStore((state) => state.isFeatureHome)

    const router = useRouter()
    const searchParams = useSearchParams()
    const pathName = usePathname()
    const projectsRef = useRef()
    const page = searchParams.get('page')

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)

            return params.toString()
        },
        [searchParams],
    )

    const [show, Element] = useToggleShowMap()
    const [isToggle, setIsToggle] = useState(false)

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
                    isOther={true}
                    isHome={true}
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
                        {!data &&
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
                            data?.data?.slice(0, show ? 6 : 8)?.map((e, index) => (
                                <Link
                                    href={renderHref(e, lang)}
                                    className='w-full'
                                    key={index}
                                >
                                    <div className='relative w-full h-[13.75vw] rounded-[0.5vw] overflow-hidden'>
                                        <Image
                                            className='z-0 object-cover'
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
                                        <h6
                                            title={renderTitle(t, e, lang)}
                                            className='text-den title18-700-130 -tracking-[1px] mb-[0.63vw] line-clamp-1'
                                        >
                                            {renderTitle(t, e, lang)}
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
                            ))}
                    </div>
                    <div className='flex justify-between items-center mt-[0.69vw]'>
                        {data ? (
                            <ReactPaginate
                                breakLabel='...'
                                nextLabel='Next'
                                onPageChange={(e) => {
                                    router.replace(pathName + '?' + createQueryString('page', e?.selected + 1), {
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
                    <MapV5 lang={lang} />
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
                        } fixed top-1/2 right-0 -translate-y-1/2 w-[2.5vw] h-[4vw] bg-white z-50  rounded-tl-full rounded-bl-full flex justify-center items-center cursor-pointer`}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='25'
                            viewBox='0 0 24 25'
                            fill='none'
                            className={`w-[1.25vw] h-[1.25vw] max-lg:w-[3vw] max-lg:h-[3vw] max-md:w-[4.27vw] max-md:h-[4.27vw] rotate-90`}
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
export default memo(MyProject)
