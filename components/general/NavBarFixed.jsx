'use client'
import Image from 'next/image'
import Link from 'next/link'
import BoxLanguage from './language/BoxLanguage'
import { useEffect, useRef, useState } from 'react'
import SearchGlobal from '../home/SearchGlobal'
import MegaMenu from './MegaMenu'
const objClass = {
    classContainer:
        'w-[23.125vw] py-[0.87vw] px-[1.75vw] bg-white02 rounded-[10vw] flex justify-between items-center shadow-input border border-solid border-logo backdrop-blur-[11px] mr-[0.5vw]',
    classLine: 'border-l border-solid border-logo opacity-40 h-[1.0625vw] mx-[0.63vw]',
    classForm: 'flex-1 flex items-center gap-x-[0.5vw] relative',
    isIcon: false,
    iconSmall: true,
    classInput: 'bg-transparent outline-none text-den title16-400-130',
    classList:
        'w-[36vw] absolute bottom-[-0.5vw] left-0 translate-y-full z-[1000] bg-white text-black px-[1.5vw] py-[1vw] rounded-[0.5vw] shadow-input',
}

export default function NavBarFixed({ isHome, lang, t, isMobile }) {
    const [prevScrollY, setPrevScrollY] = useState(0)
    const navRef = useRef()
    useEffect(() => {
        if (typeof window === 'undefined') return
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [prevScrollY])

    const handleScroll = () => {
        if (typeof window === 'undefined' || !navRef?.current) return
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        if (window.innerWidth >= 1024) {
            if (scrollTop >= 500) {
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
            className={`${
                isHome ? 'px-120' : 'px-[3.75vw]'
            } fixed top-0 left-0 -translate-y-[110%] h-fit border-b border-solid border-white04 bg-white transition-all duration-500 w-screen z-[99999999] max-md:hidden`}
            style={{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 11px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}
        >
            <div className={`${isHome ? 'gap-x-[3.12vw]' : 'gap-x-[1.5vw]'} flex items-center justify-end w-full`}>
                <div
                    id='logo-banner-active'
                    className='justify-start flex-1 py-[0.5vw]'
                >
                    <Link
                        href={`/${lang !== 'vi' ? lang : ''}`}
                        className='relative w-[3.5vw] h-[4.75vw] block'
                    >
                        <Image
                            className='object-contain'
                            src='/images/logo-no-bg.svg'
                            alt='logo'
                            sizes='3.5vw'
                            fill
                        />
                    </Link>
                </div>

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
                {!isMobile ? (
                    <div className='flex gap-x-[3.13vw] items-center'>
                        <MegaMenu
                            isHome={isHome}
                            lang={lang}
                            t={t}
                            fixed={true}
                        />
                        <div className='flex gap-x-[1.25vw] items-center'>
                            <Link
                                href={`${lang !== 'vi' ? '/' + lang + '/deposit' : '/deposit'}`}
                                className='bg-gradient-prominent shadow-prominent h-fit w-fit rounded-[10vw] py-[1vw] px-[2vw] text-d-9-d-9-d-9 title16-700-150 whitespace-nowrap'
                            >
                                Kí gửi nhà đất
                            </Link>
                            <BoxLanguage
                                type={'ds'}
                                lang={lang}
                                t={t}
                            />
                        </div>
                    </div>
                ) : (
                    <div
                        onClick={() => setIsOpen(true)}
                        className='relative w-fit'
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
                )}
            </div>
        </div>
    )
}
