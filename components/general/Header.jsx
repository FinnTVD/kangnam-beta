'use client'
import Image from 'next/image'
import NavBar from './NavBar'
import FeatureHome from '../home/FeatureHome'
import SearchHome from '../home/SearchHome'
import { usePathname } from 'next/navigation'
import classes from './headerV2.module.css'
import SlideBanner from '../home/SlideBanner'
import NavBarFixed from './NavBarFixed'
import { useMediaQuery } from 'react-responsive'
import NavBarRes from './NavBarRes'
import NavBarFixedRes from './NavBarFixedRes'
import { useEffect, useState } from 'react'

const isCheckPathName = (pathName) => {
    switch (pathName) {
        case '/':
            return true
        case '/en':
            return true
        case '/kr':
            return true
        case '/ch':
            return true
        default:
            return false
    }
}

export default function Header({ lang, t }) {
    const [isHome, setIsHome] = useState(true) // neu la home page isHome = true
    const pathName = usePathname()
    const isMobile = useMediaQuery({
        query: '(max-width: 767.9px)',
    })

    useEffect(() => {
        if (!pathName) return
        setIsHome(isCheckPathName(pathName))
    }, [pathName])

    const handleScrollDown = () => {
        if (typeof window !== 'undefined') {
            const e = document.getElementById('header')
            window.scrollTo({
                top: e.offsetHeight,
                behavior: 'smooth',
            })
        }
    }

    //trang danh sach du an khong co header
    // if (pathName.indexOf('/danh-sach-du-an') !== -1 || pathName.indexOf('/dang-tin') !== -1) {
    //     return
    // }

    return (
        <header
            id='header'
            className='relative w-screen h-fit'
        >
            <div className={`h-screen max-md:h-[64vh] relative w-full`}>
                {/* <Image
                    className='z-0 object-cover'
                    src='/images/bg-header.jpg'
                    alt='bg-header'
                    sizes='100vw'
                    quality={100}
                    fill
                /> */}
                <SlideBanner />
                <Image
                    className='object-contain z-20 w-[23.4375vw] h-[59.8vh] absolute right-[7.56vw] top-[18vh] mix-blend-color-dodge max-md:w-[45.6vw] max-md:h-[64.26vw] max-md:top-[16.8vw] max-md:right-[4.8vw]'
                    src='/images/big-logo.png'
                    alt='big-logo'
                    width={350}
                    height={550}
                    priority
                />
                <div className={`bg-gradient-header1 absolute z-[2] top-0 left-0 w-full h-full`}></div>
                {/* linear-white */}
                <div className='absolute z-[1] bg-gradient-header2 top-0 left-0 w-full h-full'></div>
                {isMobile ? (
                    <NavBarRes
                        isHome={isHome}
                        lang={lang}
                        t={t}
                    />
                ) : (
                    <NavBar
                        isHome={isHome}
                        lang={lang}
                        t={t}
                    />
                )}
                {!isMobile ? (
                    <NavBarFixed
                        isHome={isHome}
                        lang={lang}
                    />
                ) : (
                    <NavBarFixedRes
                        isHome={isHome}
                        lang={lang}
                        t={t}
                    />
                )}
                <SearchHome />

                <div
                    onClick={handleScrollDown}
                    className='absolute bottom-[2vw] opacity-50 w-fit h-fit left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-y-[0.94vw] max-md:gap-y-[4vw] select-none'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='25'
                        viewBox='0 0 24 25'
                        fill='none'
                        className={`${classes['btn-scroll-down']} w-[1.375vw] h-[1.375vw] max-md:w-[4.27vw] max-md:h-[4.27vw]`}
                    >
                        <path
                            d='M1 1L12 12L23 1'
                            stroke='white'
                            strokeWidth='2'
                        />
                        <path
                            d='M1 12L12 23L23 12'
                            stroke='white'
                            strokeWidth='2'
                        />
                    </svg>
                    <span className='uppercase text-14pc font-semibold leading-[1.28] tracking-[0.7px] max-md:text-10mb max-md:font-semibold max-md:leading-[1.8] max-md:tracking-[0.5px] max-md:uppercase text-white'>
                        Cuộn xuống
                    </span>
                </div>
                <div className='absolute z-[4] bottom-0 left-1/2 opacity-20 -translate-x-1/2 w-[72.625vw] h-[2px] bg-gradient-line-header'></div>
                {!isMobile && <FeatureHome />}
            </div>
        </header>
    )
}