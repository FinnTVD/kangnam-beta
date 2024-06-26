'use client'
import Image from 'next/image'
import useStore from '@/app/[lang]/(store)/store'
import { useEffect, useRef } from 'react'
import { ToastContainer } from 'react-toastify'
import MapProjectDetail from './MapProjectDetail'
import PriceDetail from './PriceDetail'
import { categoryHireId, formatDateTime, originHouseInit } from '@/utils'
import InfoDetail from './InfoDetail'
import InfoDetailRes from './InfoDetailRes'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PopupShareSocial from './PopupShareSocial'
import FormNamePhone from './FormNamePhone'
import ShareSocialInfo from './ShareSocialInfo'

const month = [
    {
        title: '/tháng',
        code: 'vi',
    },
    {
        title: '/month',
        code: 'en',
    },
    {
        title: '/월',
        code: 'kr',
    },
    {
        title: '/月',
        code: 'cn',
    },
]

const handleGennerateMonth = (lang) => {
    if (!lang) return '/tháng'
    return month?.find((e) => e?.code === lang)?.title
}

const handleCheckStatus = (alias, lang) => {
    if (alias === 'hire') return handleGennerateMonth(lang)
    return ''
}

const slugProjectLang = [
    {
        code: 'vi',
        title: 'Dự án',
    },
    {
        code: 'en',
        title: 'Project',
    },
    {
        code: 'kr',
        title: '분양',
    },
    {
        code: 'cn',
        title: '项目',
    },
]
const bed = [
    {
        code: 'vi',
        title: 'ngủ',
    },
    {
        code: 'en',
        title: 'bedroom',
    },
    {
        code: 'kr',
        title: '침실',
    },
    {
        code: 'cn',
        title: '卧室',
    },
]
const bath = [
    {
        code: 'vi',
        title: 'tắm',
    },
    {
        code: 'en',
        title: 'bathroom',
    },
    {
        code: 'kr',
        title: '화장실',
    },
    {
        code: 'cn',
        title: '浴室',
    },
]

export default function ContentDetail({ data, detail, lang, t, isProject }) {
    const setSlugDetailProject = useStore((state) => state.setSlugDetailProject)
    if (!data) return
    const parentRef = useRef(null)
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        let mm = gsap.matchMedia()
        let ctx = gsap.context(() => {
            mm.add('(min-width: 1024px)', () => {
                ScrollTrigger.create({
                    trigger: parentRef.current,
                    start: 'top top',
                    end: 'bottom bottom',
                    pin: '#info_detail_other',
                    scrub: true,
                })
            })
        }, parentRef)
        setSlugDetailProject(data)
        return () => {
            setSlugDetailProject(null)
            ctx.revert()
        }
    }, [])
    const dataDetail = data?.translations?.find((e) => e?.slug === detail || e?.slug === decodeURIComponent(detail))

    return (
        <section
            ref={parentRef}
            className='pt-[3.875vw] max-md:pt-[4.27vw] px-120 px-mb10'
        >
            <div className='flex mb-[1.25vw] max-md:mb-[2.13vw]'>
                <span className='mr-[0.25vw] inline-block title16-600-150 text-den opacity-50 max-md:hidden max-lg:title-tl14'>
                    {t?.menuNav?.nav1?.[0]?.title} /{' '}
                    {isProject
                        ? slugProjectLang?.find((e) => e?.code === lang)?.title
                        : data?.propertyCategory?.translations?.find((e) =>
                              e?.languageCode?.toLowerCase()?.includes(lang),
                          )?.name}
                </span>
                <span className='title16-600-150 text-den max-md:hidden max-lg:title-tl14'> / {dataDetail?.name}</span>
                <address className='not-italic title16-600-150 title-tl14 title-mb14-400-150 text-den lg:mb-[1vw] md:hidden max-md:opacity-50'>
                    {data?.address?.display}
                </address>
            </div>
            <div className='flex gap-x-[2vw]'>
                <div className='flex-1'>
                    <div className='flex items-center justify-between max-lg:flex-col max-md:justify-start'>
                        <h1 className='w-[38.8125vw] title32-800-130 text-den -tracking-[1.6px] capitalize max-md:title-mb20-700-130 max-md:-tracking-[1px] max-lg:w-full line-clamp-3 max-lg:title-tl20'>
                            {dataDetail?.name}
                        </h1>
                        <div className='w-fit max-lg:flex max-md:gap-x-[3.2vw] max-md:mt-[1.33vw] max-lg:items-center max-lg:w-full max-lg:gap-x-[2vw]'>
                            <h2 className='mb-[0.5vw] text-den title28-800-130 -tracking-[0.84px] capitalize max-md:title-mb25-700-130 max-md:text-logo max-md:-tracking-[0.75px] max-lg:title-tl25'>
                                {dataDetail?.priceDisplay}
                                {handleCheckStatus(data?.propertyCategory?.alias, lang)}
                                {data?.propertyCategory?.id === categoryHireId ? ` ${handleGennerateMonth(lang)}` : ''}
                            </h2>
                            <div className='flex gap-x-[1.06vw] justify-end max-md:justify-start max-md:gap-x-[2.13vw]'>
                                {data?.propertyCategory?.id !== categoryHireId && (
                                    <PriceDetail
                                        price={data?.price}
                                        lang={lang}
                                        size={dataDetail?.size}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='mt-[1vw] max-md:mt-[4vw]'>
                        <span className='text-[#888] text-20pc font-normal leading-[1.7] max-md:title-mb16-400-150 max-lg:title-tl20'>
                            {formatDateTime(dataDetail?.updatedAt).slice(0, 10)} -
                        </span>

                        <span className='text-[#888] text-20pc font-normal leading-[1.7] max-md:title-mb16-400-150 max-lg:title-tl20'>
                            {' '}
                            Admin KangNam
                        </span>
                    </div>
                    <div className='mt-[1.5vw] max-md:mt-[4.27vw] border border-dashed border-logo rounded-[0.625vw] bg-[#FFFBF5] pt-[1.25vw] px-[1.69vw] max-md:py-[6.4vw] max-md:px-[4.27vw] pb-[1.81vw]'>
                        <address className='not-italic title16-600-150 text-den mb-[1vw] max-md:hidden max-lg:title-tl16'>
                            {data?.address?.display}
                        </address>
                        <ul className='flex gap-x-[2.5vw] max-md:flex-wrap max-md:gap-x-[10.61vw] max-md:gap-y-[4.27vw]'>
                            <li
                                className={`${
                                    data?.bed ? '' : 'hidden'
                                } flex gap-x-[0.63vw] max-md:gap-x-[2.67vw] items-center`}
                            >
                                <Image
                                    className='object-cover w-[1.25vw] h-[1.25vw] max-md:w-[5.33vw] max-md:h-[5.33vw]'
                                    src='/images/bed.svg'
                                    alt='bed'
                                    width={24}
                                    height={24}
                                />
                                <span className='text-14pc leading-[1.14] font-normal opacity-70 text-den max-md:text-14mb max-md:leading-[1.14] max-lg:title-tl14'>
                                    {data?.bed} {bed?.find((e) => e?.code === lang)?.title}
                                </span>
                            </li>
                            <li
                                className={`${
                                    data?.bath ? '' : 'hidden'
                                } flex gap-x-[0.63vw] max-md:gap-x-[2.67vw] items-center`}
                            >
                                <Image
                                    className='object-cover w-[1.25vw] h-[1.25vw] max-md:w-[5.33vw] max-md:h-[5.33vw]'
                                    src='/images/wc.svg'
                                    alt='bed'
                                    width={24}
                                    height={24}
                                />
                                <span className='text-14pc leading-[1.14] font-normal opacity-70 text-den max-md:text-14mb max-md:leading-[1.14] max-lg:title-tl14'>
                                    {data?.bath} {bath?.find((e) => e?.code === lang)?.title}
                                </span>
                            </li>
                            <li
                                className={`${
                                    dataDetail?.size ? '' : 'hidden'
                                } flex gap-x-[0.63vw] max-md:gap-x-[2.67vw] items-center`}
                            >
                                <Image
                                    className='object-cover w-[1.25vw] h-[1.25vw] max-md:w-[5.33vw] max-md:h-[5.33vw]'
                                    src='/images/area.svg'
                                    alt='bed'
                                    width={24}
                                    height={24}
                                />
                                <span className='text-14pc leading-[1.14] font-normal opacity-70 text-den max-md:text-14mb max-md:leading-[1.14] max-lg:title-tl14'>
                                    {dataDetail?.size}
                                </span>
                            </li>
                            <li
                                className={`${
                                    data?.orient ? '' : 'hidden'
                                } flex gap-x-[0.63vw] max-md:gap-x-[2.67vw] items-center`}
                            >
                                <Image
                                    className='object-cover w-[1.25vw] h-[1.25vw] max-md:w-[5.33vw] max-md:h-[5.33vw]'
                                    src='/images/direction.svg'
                                    alt='bed'
                                    width={24}
                                    height={24}
                                />
                                <span className='text-14pc leading-[1.14] font-normal opacity-70 text-den max-md:text-14mb max-md:leading-[1.14] max-lg:title-tl14'>
                                    {originHouseInit[data?.orient]?.find((e) => e?.langCode === lang)?.title}
                                </span>
                            </li>
                            <li
                                className={`${
                                    data?.constructionYear ? '' : 'hidden'
                                } flex gap-x-[0.63vw] max-md:gap-x-[2.67vw] items-center`}
                            >
                                <Image
                                    className='object-cover w-[1.25vw] h-[1.25vw] max-md:w-[5.33vw] max-md:h-[5.33vw]'
                                    src='/images/mark.svg'
                                    alt='bed'
                                    width={24}
                                    height={24}
                                />
                                <span className='text-14pc leading-[1.14] font-normal opacity-70 text-den max-md:text-14mb max-md:leading-[1.14] max-lg:title-tl14'>
                                    {t?.projectDetail?.info?.yearBuilding}: {data?.constructionYear}
                                </span>
                            </li>
                        </ul>
                    </div>
                    <InfoDetailRes
                        data={data}
                        lang={lang}
                        dataDetail={dataDetail}
                        t={t}
                    />
                    <div className='mt-[2.56vw] max-md:mt-[6.4vw] relative'>
                        <h2 className='title32-800-130 max-md:title-mb20-700-130 max-md:-tracking-[0.6px] text-den -tracking-[0.96px] mb-[1vw] max-md:mb-[4vw] max-lg:title-tl20'>
                            {t?.projectDetail?.info?.title}
                        </h2>
                        <div
                            id='contentProject'
                            className='text-den-2'
                            dangerouslySetInnerHTML={{ __html: dataDetail?.content }}
                        />
                        <div
                            id='imgMapDetail'
                            className='absolute bottom-[calc(5.75vw-2.19vw)] left-0 max-md:bottom-0 text-den/20'
                        ></div>
                    </div>
                    <div className='text-den mt-[1.5vw] text-[1vw] font-semibold leading-normal max-md:text-14mb max-lg:text-14tl'>
                        {t?.projectDetail?.info?.codeProject}:{' '}
                        <span className=' text-nau-nhat tracking-[0.5px]'>{data?.propertyCode}</span>
                    </div>
                    <div className='w-full h-fit lg:hidden md:flex md:gap-x-[3vw]'>
                        <FormNamePhone
                            id={data?.id}
                            t={t}
                        />
                        <ShareSocialInfo />
                    </div>

                    <div className='border-t md:border-b border-solid border-[#faf4ed] py-[2.5vw] max-md:pt-[4.27vw] mt-[2.19vw] max-md:mt-[7.47vw]'>
                        <h2 className='title32-800-130 text-den -tracking-[0.96px] max-md:mb-[4.27vw] mb-[1vw] max-md:title-mb20-700-130 max-md:-tracking-[0.6px] max-lg:title-tl20 '>
                            {t?.projectDetail?.info?.location}
                        </h2>
                        <div className='flex mb-[0.75vw] gap-x-[1vw] max-md:gap-y-[4.27vw] max-md:mb-[4.27vw] max-md:flex-col'>
                            <div className='flex-1'>
                                <span className='inline-block mr-[3.25vw] max-md:mr-[4.2vw] max-md:min-w-[36vw] title18-600-130 max-md:title-mb16-600-130 text-den max-lg:title-tl16'>
                                    {t?.projectDetail?.map?.address}:
                                </span>
                                <span className='title16-400-130 max-md:title-mb16-400-130 text-den max-lg:title-tl16'>
                                    {data?.address?.address}
                                </span>
                            </div>
                            <div className='flex-1'>
                                <span className='inline-block mr-[3.25vw] max-md:mr-[4.2vw] max-md:min-w-[36vw] title18-600-130 max-md:title-mb16-600-130 text-den max-lg:title-tl16'>
                                    {t?.projectDetail?.map?.ward}:
                                </span>
                                <span className='title16-400-130 max-md:title-mb16-400-130 text-den max-lg:title-tl16'>
                                    {data?.address?.ward}
                                </span>
                            </div>
                        </div>
                        <div className='flex max-md:gap-y-[4.27vw] max-md:flex-col'>
                            <div className='flex-1'>
                                <span className='inline-block mr-[3.25vw] max-md:mr-[4.2vw] max-md:min-w-[36vw] title18-600-130 max-md:title-mb16-600-130 text-den max-lg:title-tl16'>
                                    {t?.projectDetail?.map?.district}:
                                </span>
                                <span className='title16-400-130 max-md:title-mb16-400-130 text-den max-lg:title-tl16'>
                                    {data?.address?.district}
                                </span>
                            </div>
                            <div className='flex-1'>
                                <span className='inline-block mr-[3.25vw] max-md:mr-[4.2vw] max-md:min-w-[36vw] title18-600-130 max-md:title-mb16-600-130 text-den max-lg:title-tl16'>
                                    {t?.projectDetail?.map?.city}:
                                </span>
                                <span className='title16-400-130 max-md:title-mb16-400-130 text-den max-lg:title-tl16'>
                                    {data?.address?.city}
                                </span>
                            </div>
                        </div>
                        <MapProjectDetail
                            dataDetail={dataDetail}
                            data={data}
                        />
                    </div>
                </div>
                <InfoDetail
                    data={data}
                    lang={lang}
                    dataDetail={dataDetail}
                    t={t}
                />
            </div>
            <ToastContainer style={{ zIndex: '999999999999999' }} />
            <PopupShareSocial />
        </section>
    )
}
