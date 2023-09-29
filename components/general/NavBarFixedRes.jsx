'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import MenuRes from './MenuRes'
import SearchGlobal from '../home/SearchGlobal'
import useSWR from 'swr'

const objClass = {
    classContainer:
        'w-[68.267vw] py-[3.06vw] px-[5.07vw] rounded-[10vw] flex justify-between items-center shadow-input border border-solid border-logo',
    classLine: 'border-l border-solid border-logo opacity-50 h-[2.67vw] mx-[3.2vw]',
    classForm: 'flex-1 flex items-center gap-x-[0.5vw]',
    isIcon: false,
    iconSmall: true,
    classInput: 'bg-transparent outline-none text-den title-mb12-400-130 w-[29vw]',
}

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function NavBarFixedRes({ isHome = true, lang, t }) {
    const [isOpen, setIsOpen] = useState(false)
    const [prevScrollY, setPrevScrollY] = useState(0)
    const navRef = useRef()
    const { data, isLoading, error } = useSWR(`${process.env.NEXT_PUBLIC_API}/site-infor`, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })
    useEffect(() => {
        if (typeof window === 'undefined') return
        document.addEventListener('scroll', handleScroll)
        // window.scrollTo(0, 0);
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [prevScrollY])

    const handleScroll = () => {
        if (typeof window === 'undefined' || !navRef?.current) return
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        if (window.innerWidth < 768) {
            if (scrollTop >= 200) {
                if (scrollTop > prevScrollY) {
                    //Cuộn xuống
                    navRef?.current?.classList?.remove('active')
                } else if (scrollTop < prevScrollY) {
                    //Cuộn lên
                    navRef?.current?.classList?.add('active')
                }
            } else {
                navRef?.current?.classList?.remove('active')
            }
        }
        setPrevScrollY(scrollTop)
    }

    return (
        <div
            id='nav'
            ref={navRef}
            className={`pl-[4vw] pr-[2.5vw] fixed top-0 left-0 -translate-y-[110%] h-fit border-b border-solid border-white04 bg-white transition-all duration-500 w-screen z-[99999999] md:hidden`}
            style={{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}
        >
            <div className='flex justify-between items-center my-[2.67vw]'>
                <Link
                    href={`/${lang !== 'vi' ? lang : ''}`}
                    className='relative w-[8.267vw] h-[11.467vw] block'
                >
                    <Image
                        className='object-contain'
                        src='/images/logo-no-bg.svg'
                        alt='logo'
                        sizes='3.52vw'
                        fill
                    />
                </Link>

                {!isHome && (
                    <SearchGlobal
                        lang={lang}
                        classContainer={objClass.classContainer}
                        classLine={objClass.classLine}
                        classForm={objClass.classForm}
                        isIcon={objClass.isIcon}
                        iconSmall={objClass.iconSmall}
                        classInput={objClass.classInput}
                        isHome={false}
                        classList={objClass.classList}
                    />
                )}
                <div
                    onClick={() => setIsOpen(true)}
                    className='relative cursor-pointer w-fit'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='#D6A279'
                        className='max-md:w-[10.33vw] max-md:h-[8.6vw] max-lg:w-[5.2vw] max-lg:auto'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                        />
                    </svg>
                </div>
            </div>
            <MenuRes
                lang={lang}
                t={t}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                data={data}
            />
        </div>
    )
}
