'use client'
import Image from 'next/image'
import NavBar from './NavBar'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useState } from 'react'
import FeatureHome from '../home/FeatureHome'
import SearchHome from '../home/SearchHome'
import { usePathname } from 'next/navigation'
import ContentPageOther from './ContentPageOther'

gsap.registerPlugin(ScrollTrigger)

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

export default function HeaderV2() {
    const [isHome, setIsHome] = useState(true) // neu la home page isHome = true
    const pathName = usePathname()

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
    if (pathName.indexOf('/danh-sach-du-an') !== -1) {
        return
    }

    return (
        <header
            id='header'
            className='relative w-screen h-fit'
        >
            <div className={`${isHome ? 'h-screen' : 'h-[80vh]'} relative w-full`}>
                <Image
                    className='z-0 object-cover'
                    src='/bg-header.jpg'
                    alt='bg-header'
                    sizes='100vw'
                    quality={100}
                    fill
                />
                {isHome && (
                    <Image
                        className='object-contain z-20 w-[23.4375vw] h-[59.8vh] absolute right-[7.56vw] top-[18vh] mix-blend-color-dodge'
                        src='/big-logo.png'
                        alt='big-logo'
                        width={350}
                        height={550}
                        quality={100}
                    />
                )}
                <div
                    className={`${
                        isHome ? 'bg-gradient-header1' : 'bg-gradient-header-other'
                    } absolute z-[2] top-0 left-0 w-full h-full`}
                ></div>
                {/* linear-white */}
                {isHome && <div className='absolute z-[1] bg-gradient-header2 top-0 left-0 w-full h-full'></div>}
                <NavBar isHome={isHome} />
                {isHome ? <SearchHome /> : <ContentPageOther />}
                <div
                    onClick={handleScrollDown}
                    className='absolute bottom-[2vw] opacity-50 w-fit h-fit left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-y-[0.94vw] select-none'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='25'
                        viewBox='0 0 24 25'
                        fill='none'
                        className='w-[1.375vw] h-[1.375vw]'
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
                    <span className='uppercase text-14pc font-semibold leading-[1.28] tracking-[0.7px]'>
                        Cuộn xuống
                    </span>
                </div>
                {isHome && (
                    <div className='absolute z-[4] bottom-0 left-1/2 opacity-20 -translate-x-1/2 w-[72.625vw] h-[2px] bg-gradient-line-header'></div>
                )}
                {isHome && <FeatureHome />}
            </div>
        </header>
    )
}
