'use client'
import { handleCheckLangCode, listIdNav, postTypeIdAgreement } from '@/utils'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function MegaMenu({ isHome, lang, t, fixed }) {
    const [listNav, setListNav] = useState([])
    const languageCode = handleCheckLangCode(lang)
    const { data, isLoading, error } = useSWR(`${process.env.NEXT_PUBLIC_API}/property-category`, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })
    const {
        data: agreementData,
        error: agreementError,
        isLoading: agreementIsLoading,
    } = useSWR(process.env.NEXT_PUBLIC_API + `/post?page=1&take=12&postTypeIds=${postTypeIdAgreement}`, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })

    useEffect(() => {
        if (!data) return
        let a = data?.data?.filter((e) => listIdNav?.find((i) => i === e?.id))
        let b = []
        a.forEach((e, index) => {
            b.push({
                id: index + 1,
                title: e?.translations?.find((e) =>
                    e?.languageCode?.toLowerCase()?.includes(lang === 'ch' ? 'cn' : lang),
                )?.name,
                href: e?.translations?.find((e) =>
                    e?.languageCode?.toLowerCase()?.includes(lang === 'ch' ? 'cn' : lang),
                )?.alias,
            })
        })
        setListNav([...b, ...t?.Navbar?.listNav])
    }, [lang, data])

    let agreementDataTranslation = []
    if (agreementData) {
        agreementData?.data?.forEach((item) => {
            item?.translations?.forEach((itm) => {
                if (itm?.languageCode === languageCode)
                    agreementDataTranslation?.push({ title: itm.title, slug: itm.slug })
            })
        })
    }

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
                                        <span className='whitespace-nowrap title16-600-130 inline-block text-den'>
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
                                            {e?.branch?.map((item) => (
                                                <li
                                                    key={item?.id}
                                                    className='px-[1vw] py-[0.5vw] hover:bg-[#f3f4f7]'
                                                >
                                                    <Link
                                                        className='whitespace-nowrap title16-400-130 text-den block w-full h-full'
                                                        href={`${lang !== 'vi' ? '/' + lang + item?.href : item?.href}`}
                                                    >
                                                        {item?.title}
                                                    </Link>
                                                </li>
                                            ))}
                                            {agreementDataTranslation?.map((item) => (
                                                <li
                                                    key={item?.id}
                                                    className='px-[1vw] py-[0.5vw] hover:bg-[#f3f4f7]'
                                                >
                                                    <Link
                                                        className='block w-full h-full whitespace-nowrap title16-400-130 text-den'
                                                        href={`${
                                                            lang !== 'vi' ? '/' + lang + '/' + item?.slug : item?.slug
                                                        }`}
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
                                    scroll={false}
                                    className='px-[0.94vw] py-[1vw] block title16-600-130 text-den whitespace-nowrap'
                                    href={`${lang !== 'vi' ? '/' + lang + e.href : e.href}`}
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
                                        {e?.branch?.map((item) => (
                                            <li
                                                key={item?.id}
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
                                        {agreementDataTranslation?.map((item) => (
                                            <li
                                                key={item?.id}
                                                className='px-[1vw] py-[0.5vw] hover:bg-[#f3f4f7]'
                                            >
                                                <Link
                                                    className='block w-full h-full whitespace-nowrap title16-400-130 text-den'
                                                    href={`${
                                                        lang !== 'vi' ? '/' + lang + '/' + item?.slug : item?.slug
                                                    }`}
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
                                scroll={false}
                                className={`${
                                    isHome ? 'px-[1.25vw]' : 'px-[0.94vw]'
                                } py-[1vw] block title16-600-130 title-tl12-600-150 whitespace-nowrap`}
                                href={`${lang !== 'vi' ? '/' + lang + e.href : e.href}`}
                            >
                                {e.title}
                            </Link>
                        )}
                    </li>
                ))}
        </ul>
    )
}