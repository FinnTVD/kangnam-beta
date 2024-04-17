'use client'
import useStore from '@/app/[lang]/(store)/store'
import { listIdNav } from '@/utils'
import Link from 'next/link'
import { memo, useEffect, useState } from 'react'
import useSWR from 'swr'

import { renderHref, renderTitle } from '@/utils'
const fetcher = (...args) => fetch(...args).then((res) => res.json())

const MegaMenu = ({ isHome, lang, t, fixed }) => {
    const setCategoryNav = useStore((state) => state.setCategoryNav)

    const [listNav, setListNav] = useState([])

    const { data, isLoading, error } = useSWR(`${process.env.NEXT_PUBLIC_API}/property-category`, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })

    useEffect(() => {
        if (!data || !t?.Navbar?.listNav?.length) return
        setCategoryNav(data?.data)
        let a = data?.data?.filter((e) => listIdNav?.find((i) => i === e?.id))
        let b = []
        a.forEach((e, index) => {
            b.push({
                id: index + 1,
                title: e?.translations?.find((e) => e?.languageCode?.toLowerCase()?.includes(lang))?.name,
                href: '/' + e?.translations?.find((e) => e?.languageCode?.toLowerCase()?.includes(lang))?.alias,
            })
        })
        setListNav([t?.Navbar?.listNav[0], ...b.reverse(), t?.Navbar?.listNav[1], t?.Navbar?.listNav[2]])
        // setListNav([...b, ...t?.Navbar?.listNav])
    }, [lang, data])

    // data dự án
    const {
        data: dataProject,
        isLoading: isLoadingProject,
        error: errorProject,
    } = useSWR(`${process.env.NEXT_PUBLIC_API}/project?order=DESC&page=1&take=15`, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })
    const handleDataMegaAll = (indexPopup) => {
        if (isLoadingProject) return null
        if (indexPopup === 0) {
            return dataProject
        }
    }
    // mua ban cho thue
    const {
        data: datapopup,
        isLoading: isLoadingpopup,
        error: errorpopup,
    } = useSWR(`${process.env.NEXT_PUBLIC_API}/property-type?page=1&take=10`, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })
    // tin tuc
    const {
        data: categories,
        error: errorCategories,
        isLoading: isLoadingCategories,
    } = useSWR(process.env.NEXT_PUBLIC_API + `/post-type`, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })
    console.log('🚀 ~ MegaMenu ~ categories:', categories)

    if (!listNav?.length) return
    if (fixed)
        return (
            <ul className='flex'>
                {listNav?.length > 0 &&
                    listNav?.map((e, index) => (
                        <li
                            key={index}
                            className={`relative select-none group day`}
                        >
                            {/* code cux */}
                            {e?.branch ? (
                                <>
                                    <div className='px-[0.94vw] py-[1vw] flex cursor-pointer items-center gap-x-[0.5vw]'>
                                        <span className='inline-block whitespace-nowrap title16-600-130 text-den'>
                                            {e?.title}
                                        </span>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            strokeWidth='3'
                                            stroke='#444'
                                            className='w-[1.2vw] h-[1.2vw]'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                                            />
                                        </svg>
                                    </div>
                                    <div
                                        style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
                                        className='min-w-[10vw] w-max absolute bottom-0 translate-y-full right-0 rounded-[0.625vw] group-hover:block hidden bg-white before:absolute before:block before:w-[0.8vw] before:h-[0.8vw] before:bg-white before:top-0 before:right-[1.25vw] before:rotate-45 before:-translate-y-1/2 after:block before:shadow-[0_-2px_4px_0_rgb(0,0,0,0.05)] after:h-[1.2vw] after:w-[12vw] after:absolute after:top-0 after:-translate-y-[95%] after:right-0 after:bg-transparent pt-[1vw] pb-[0.5vw]'
                                    >
                                        <span className='title16-600-130 text-den px-[1vw] pb-[0.75vw] block'>
                                            {e?.title}
                                        </span>

                                        <ul className={`${e?.branch?.length > 5 ? 'grid grid-cols-2' : ''} w-full`}>
                                            {e?.branch?.map((item, index) => (
                                                <li
                                                    key={index}
                                                    className='px-[1vw] py-[0.5vw] hover:bg-[#f3f4f7]'
                                                >
                                                    <Link
                                                        className='block w-full h-full whitespace-nowrap title16-400-130 text-den'
                                                        href={`${lang !== 'vi' ? '/' + lang + item?.href : item?.href}`}
                                                    >
                                                        {item?.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <Link
                                        className='hayoday px-[0.94vw] py-[1vw] title16-600-130 text-den whitespace-nowrap flex cursor-pointer items-center justify-center gap-x-[0.5vw] relative z-10'
                                        href={`${
                                            lang !== 'vi'
                                                ? '/' + lang + (e?.href?.startsWith('/') ? e?.href : '/' + e?.href)
                                                : e?.href.includes('/')
                                                ? e?.href
                                                : `/${e?.href}`
                                        }`}
                                    >
                                        {e.title}
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            strokeWidth='3'
                                            stroke='#444'
                                            className='w-[1.2vw] h-[1.2vw]'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                                            />
                                        </svg>
                                    </Link>
                                    <div
                                        style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
                                        className='min-w-[10vw] w-max absolute bottom-0 translate-y-full right-0 rounded-[0.625vw] group-hover:block hidden bg-white before:absolute before:block before:w-[0.8vw] before:h-[0.8vw] before:bg-white before:top-0 before:right-[1.25vw] before:rotate-45 before:-translate-y-1/2 after:block before:shadow-[0_-2px_4px_0_rgb(0,0,0,0.05)] after:h-[1.2vw] after:w-[12vw] after:absolute after:top-0 after:-translate-y-[95%] after:right-0 after:bg-transparent pt-[1vw] pb-[0.5vw]'
                                    >
                                        {e?.id == 3 && (
                                            <span className='title16-600-130 text-den px-[1vw] pb-[0.75vw] block'>
                                                {e?.title}
                                            </span>
                                        )}

                                        <ul
                                            className={`${
                                                handleDataMegaAll(index)?.data?.length > 5 && 'grid grid-cols-2'
                                            } ${
                                                (e.id == 1 || e.id == 2) &&
                                                datapopup?.data?.length > 5 &&
                                                'grid grid-cols-2'
                                            } w-full`}
                                        >
                                            {handleDataMegaAll(index) &&
                                                handleDataMegaAll(index)?.data?.map((e, index) => (
                                                    <li
                                                        key={index}
                                                        className='px-[1vw] py-[0.5vw] hover:bg-[#f3f4f7] '
                                                    >
                                                        <Link
                                                            className='block w-full h-full whitespace-nowrap title16-400-130 text-den'
                                                            href={renderHref(e, lang)}
                                                        >
                                                            {renderTitle(t, e, lang)}
                                                        </Link>
                                                    </li>
                                                ))}
                                            {(e.id == 1 || e.id == 2) &&
                                                datapopup?.data &&
                                                datapopup?.data.map((item, index) => (
                                                    <li
                                                        key={index}
                                                        className='px-[1vw] py-[0.5vw] hover:bg-[#f3f4f7]'
                                                    >
                                                        <Link
                                                            className='block w-full h-full whitespace-nowrap title16-400-130 text-den'
                                                            href={`${
                                                                lang === 'vi'
                                                                    ? `${e?.href}?propertyTypeIds=`
                                                                    : `/${lang}${e?.href}?page=1&propertyTypeIds=`
                                                            }${
                                                                item?.translations?.find((i) =>
                                                                    i?.languageCode?.toLowerCase()?.includes(lang),
                                                                )?.propertyTypeId || '/'
                                                            }`}
                                                        >
                                                            {e?.title}{' '}
                                                            {item?.translations?.find((i) =>
                                                                i?.languageCode?.toLowerCase()?.includes(lang),
                                                            )?.name || item?.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            {e?.id == 5 &&
                                                categories?.data &&
                                                categories?.data.map((item, index) => (
                                                    <li
                                                        key={index}
                                                        className='px-[1vw] py-[0.5vw] hover:bg-[#f3f4f7]'
                                                    >
                                                        <Link
                                                            className='block w-full h-full whitespace-nowrap title16-400-130 text-den'
                                                            href={`${
                                                                lang === 'vi'
                                                                    ? '/news?category='
                                                                    : `/${lang}/news?category=`
                                                            }${
                                                                item?.translations?.find((i) =>
                                                                    i?.languageCode?.toLowerCase()?.includes(lang),
                                                                )?.postTypeId || '/'
                                                            }`}
                                                        >
                                                            {item?.translations?.find((i) =>
                                                                i?.languageCode?.toLowerCase()?.includes(lang),
                                                            )?.name || item?.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>
                                </>
                            )}
                        </li>
                    ))}
            </ul>
        )

    return (
        <ul className={` flex`}>
            {listNav?.length > 0 &&
                listNav?.map((e, index) => (
                    <li
                        key={index}
                        className={`oday relative select-none group`}
                    >
                        {/* code moi */}
                        {e?.branch ? (
                            <>
                                <div className='px-[0.94vw] py-[1vw] flex cursor-pointer items-center gap-x-[0.5vw]'>
                                    <span className='inline-block text-white whitespace-nowrap title16-600-130'>
                                        {e?.title}
                                    </span>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth='3'
                                        stroke='currentColor'
                                        className='w-[1.2vw] h-[1.2vw]'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                                        />
                                    </svg>
                                </div>
                                <div
                                    style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
                                    className='min-w-[10vw] w-max absolute bottom-0 translate-y-full right-0 rounded-[0.625vw] group-hover:block hidden bg-white before:absolute before:block before:w-[0.8vw] before:h-[0.8vw] before:bg-white before:top-0 before:right-[1.25vw] before:rotate-45 before:-translate-y-1/2 after:block before:shadow-[0_-2px_4px_0_rgb(0,0,0,0.05)] after:h-[1.2vw] after:w-[12vw] after:absolute after:top-0 after:-translate-y-[95%] after:right-0 after:bg-transparent pt-[1vw] pb-[0.5vw]'
                                >
                                    <span className='title16-600-130 text-den px-[1vw] pb-[0.75vw] block'>
                                        {e?.title}
                                    </span>

                                    <ul className={`${e?.branch?.length > 5 ? 'grid grid-cols-2' : ''} w-full`}>
                                        {e?.branch?.map((item, idx) => (
                                            <li
                                                key={idx}
                                                className='px-[1vw] py-[0.5vw] hover:bg-[#f3f4f7]'
                                            >
                                                <Link
                                                    className='block w-full h-full whitespace-nowrap title16-400-130 text-den'
                                                    href={`${lang !== 'vi' ? '/' + lang + item?.href : item?.href}`}
                                                >
                                                    {item?.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </>
                        ) : (
                            <>
                                <Link
                                    className={`${
                                        isHome ? 'px-[1.25vw]' : 'px-[0.94vw]'
                                    } testnua py-[1vw] flex justify-center items-center gap-x-[0.5vw] title16-600-130 title-tl12-600-150 whitespace-nowrap relative z-10`}
                                    href={`${
                                        lang !== 'vi'
                                            ? '/' + lang + (e?.href?.startsWith('/') ? e?.href : '/' + e?.href)
                                            : e.href
                                    }`}
                                >
                                    {e.title}
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth='3'
                                        stroke='currentColor'
                                        className='w-[1.2vw] h-[1.2vw] max-lg:hidden'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                                        />
                                    </svg>
                                </Link>
                                {/* class cũ  className='min-w-[10vw] w-max z-0 pointer-events-none opacity-0 group-hover:opacity-100 group-hover:z-[99999] group-hover:pointer-events-auto fixed h-fit bg-white top-[5.9vw] rounded-[0.5vw] px-[2vw] pt-[1vw] pb-[3vw]' */}
                                <div
                                    className='min-w-[10vw] w-max absolute bottom-0 translate-y-full right-0 rounded-[0.625vw] group-hover:block hidden bg-white before:absolute before:block before:w-[0.8vw] before:h-[0.8vw] before:bg-white before:top-0 before:right-[1.25vw] before:rotate-45 before:-translate-y-1/2 after:block before:shadow-[0_-2px_4px_0_rgb(0,0,0,0.05)] after:h-[1.2vw] after:w-[12vw] after:absolute after:top-0 after:-translate-y-[95%] after:right-0 after:bg-transparent pt-[1vw] pb-[0.5vw]'
                                    style={{
                                        boxShadow:
                                            'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
                                    }}
                                >
                                    {e?.id == 3 && (
                                        <span className='title16-600-130 text-den px-[1vw] pb-[0.75vw] block'>
                                            {e?.title}
                                        </span>
                                    )}

                                    <ul
                                        className={`${
                                            handleDataMegaAll(index)?.data?.length > 5 && 'grid grid-cols-2'
                                        } ${
                                            (e.id == 1 || e.id == 2) &&
                                            datapopup?.data?.length > 5 &&
                                            'grid grid-cols-2'
                                        } w-full`}
                                    >
                                        {handleDataMegaAll(index) &&
                                            handleDataMegaAll(index)?.data?.map((e, index) => (
                                                <li
                                                    key={index}
                                                    className='px-[1vw] py-[0.5vw] hover:bg-[#f3f4f7] '
                                                >
                                                    <Link
                                                        className='block w-full h-full whitespace-nowrap title16-400-130 text-den'
                                                        href={renderHref(e, lang)}
                                                    >
                                                        {renderTitle(t, e, lang)}
                                                    </Link>
                                                </li>
                                            ))}
                                        {(e.id == 1 || e.id == 2) &&
                                            datapopup?.data &&
                                            datapopup?.data.map((item, index) => (
                                                <li
                                                    key={index}
                                                    className='px-[1vw] py-[0.5vw] hover:bg-[#f3f4f7]'
                                                >
                                                    <Link
                                                        className='block w-full h-full whitespace-nowrap title16-400-130 text-den'
                                                        href={`${
                                                            lang === 'vi'
                                                                ? `${e?.href}?propertyTypeIds=`
                                                                : `/${lang}${e?.href}?page=1&propertyTypeIds=`
                                                        }${
                                                            item?.translations?.find((i) =>
                                                                i?.languageCode?.toLowerCase()?.includes(lang),
                                                            )?.propertyTypeId || '/'
                                                        }`}
                                                    >
                                                        {e?.title}{' '}
                                                        {item?.translations?.find((i) =>
                                                            i?.languageCode?.toLowerCase()?.includes(lang),
                                                        )?.name || item?.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        {e?.id == 5 &&
                                            categories?.data &&
                                            categories?.data.map((item, index) => (
                                                <li
                                                    key={index}
                                                    className='px-[1vw] py-[0.5vw] hover:bg-[#f3f4f7]'
                                                >
                                                    <Link
                                                        className='block w-full h-full whitespace-nowrap title16-400-130 text-den'
                                                        href={`${
                                                            lang === 'vi'
                                                                ? '/news?category='
                                                                : `/${lang}/news?category=`
                                                        }${
                                                            item?.translations?.find((i) =>
                                                                i?.languageCode?.toLowerCase()?.includes(lang),
                                                            )?.postTypeId || '/'
                                                        }`}
                                                    >
                                                        {item?.translations?.find((i) =>
                                                            i?.languageCode?.toLowerCase()?.includes(lang),
                                                        )?.name || item?.title}
                                                    </Link>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            </>
                        )}
                    </li>
                ))}
        </ul>
    )
}
export default memo(MegaMenu)
