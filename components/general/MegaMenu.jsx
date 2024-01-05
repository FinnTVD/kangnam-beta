'use client'
import useStore from '@/app/[lang]/(store)/store'
import { listIdNav } from '@/utils'
import Link from 'next/link'
import { memo, useEffect, useState } from 'react'
import useSWR from 'swr'
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

    if (!listNav?.length) return
    if (fixed)
        return (
            <ul className='flex'>
                {listNav?.length > 0 &&
                    listNav?.map((e, index) => (
                        <li
                            key={index}
                            className={`relative select-none group`}
                        >
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
                                        className='absolute bottom-0 translate-y-full right-0 rounded-[0.625vw] group-hover:block hidden bg-white w-fit  after:block after:h-[1.2vw] after:w-[12vw] after:absolute after:top-0 after:-translate-y-[95%] after:right-0 after:bg-transparent pt-[1vw] pb-[0.5vw]'
                                    >
                                        <span className='title16-600-130 text-den px-[1vw] pb-[0.75vw] block'>
                                            {e?.title}
                                        </span>
                                        <ul className='w-full'>
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
                                <Link
                                    className='px-[0.94vw] py-[1vw] block title16-600-130 text-den whitespace-nowrap'
                                    href={`${
                                        lang !== 'vi'
                                            ? '/' + lang + (e?.href?.startsWith('/') ? e?.href : '/' + e?.href)
                                            : e?.href.includes('/')
                                            ? e?.href
                                            : `/${e?.href}`
                                    }`}
                                >
                                    {e.title}
                                </Link>
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
                        className={`relative select-none group`}
                    >
                        {e?.branch ? (
                            <>
                                <div
                                    className={`${
                                        isHome ? 'px-[1.25vw]' : 'px-[0.94vw]'
                                    } py-[1vw] flex cursor-pointer items-center gap-x-[0.5vw]`}
                                >
                                    <span className='inline-block title16-600-130 title-tl12-600-150 whitespace-nowrap'>
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
                                <div className='absolute bottom-0 translate-y-[calc(100%+1.03vw)] right-0 rounded-[0.625vw] group-hover:block hidden bg-white w-fit before:absolute before:block before:w-[0.8vw] before:h-[0.8vw] before:bg-white before:top-0 before:right-[1.25vw] before:rotate-45 before:-translate-y-1/2 after:block after:h-[1.2vw] after:w-[12vw] after:absolute after:top-0 after:-translate-y-[95%] after:right-0 after:bg-transparent pt-[1vw] pb-[0.5vw]'>
                                    <span className='title16-600-130 text-den px-[1vw] pb-[0.75vw] block'>
                                        {e?.title}
                                    </span>
                                    <ul className='w-full'>
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
                            <Link
                                className={`${
                                    isHome ? 'px-[1.25vw]' : 'px-[0.94vw]'
                                } py-[1vw] block title16-600-130 title-tl12-600-150 whitespace-nowrap`}
                                href={`${
                                    lang !== 'vi'
                                        ? '/' + lang + (e?.href?.startsWith('/') ? e?.href : '/' + e?.href)
                                        : e.href
                                }`}
                            >
                                {e.title}
                            </Link>
                        )}
                    </li>
                ))}
        </ul>
    )
}
export default memo(MegaMenu)
