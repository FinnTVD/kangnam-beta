'use client'
import Image from 'next/image'
import NavBar from './NavBar'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import ContentPageOther from './ContentPageOther'
import classes from './headerV2.module.css'
import NavBarFixed from './NavBarFixed'
import { useMediaQuery } from 'react-responsive'
import NavBarRes from './NavBarRes'
import NavBarFixedRes from './NavBarFixedRes'

const isCheckPathName = (pathName) => {
    switch (pathName) {
        case '/':
            return true
        case '/en':
            return true
        case '/kr':
            return true
        case '/cn':
            return true
        default:
            return false
    }
}

export default function HeaderV2({ lang, t, post, newsDetail, src, breadcrumb }) {
    const [isHome, setIsHome] = useState(true) // neu la home page isHome = true
    const pathName = usePathname()
    const isTablet = useMediaQuery({
        query: '(max-width: 1023px)',
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

    return (
        <header
            id='header'
            className='relative w-screen h-fit'
        >
            <div className={`h-[80vh] max-md:h-[55vh] relative w-full overflow-hidden`}>
                <Image
                    data-aos='zoom-out'
                    className='z-0 object-cover'
                    src={post?.image || src || '/images/bg-header.jpg'}
                    alt={newsDetail?.title || 'bg-header'}
                    sizes='100vw'
                    fill
                    priority
                />
                <div className={`bg-gradient-header-other absolute z-[2] top-0 left-0 w-full h-full`}></div>
                {/* linear-white */}
                {isTablet ? (
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
                {!isTablet ? (
                    <NavBarFixed
                        isHome={isHome}
                        lang={lang}
                        t={t}
                    />
                ) : (
                    <NavBarFixedRes
                        isHome={isHome}
                        lang={lang}
                        t={t}
                    />
                )}
                <ContentPageOther
                    post={post}
                    newsDetail={newsDetail}
                    lang={lang}
                    breadcrumb={breadcrumb}
                    t={t}
                />
                {isHome ? (
                    <></>
                ) : (
                    <div
                        onClick={handleScrollDown}
                        className='absolute bottom-[2vw] opacity-50 w-fit h-fit left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-y-[0.94vw] max-md:gap-y-[4vw] select-none cursor-pointer'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='25'
                            viewBox='0 0 24 25'
                            fill='none'
                            className={`${classes['btn-scroll-down']} w-[1.375vw] h-[1.375vw] max-lg:w-[3vw] max-lg:h-[3vw] max-md:w-[4.27vw] max-md:h-[4.27vw]`}
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
                        <span className='uppercase text-14pc font-semibold leading-[1.28] tracking-[0.7px] max-md:text-10mb max-md:font-semibold max-md:leading-[1.8] max-md:tracking-[0.5px] max-md:uppercase text-white max-lg:title-tl14'>
                            {t?.scroll?.title}
                        </span>
                    </div>
                )}
            </div>
        </header>
    )
}
