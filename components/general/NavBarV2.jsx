'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import BoxLanguage from './language/BoxLanguage'
import { useMediaQuery } from 'react-responsive'
import MenuRes from './MenuRes'
import SearchGlobal from '../home/SearchGlobal'
import MegaMenu from './MegaMenu'
import useSWR from 'swr'

const objClass = {
    classContainer:
        'w-[23.125vw] py-[0.87vw] px-[1.75vw] max-md:w-[68.267vw] max-md:py-[3.06vw] max-md:px-[5.07vw] bg-white rounded-[10vw] flex justify-between items-center shadow-input border border-solid border-logo max-lg:w-fit relative',
    classLine:
        'border-l border-solid border-den opacity-40 h-[1.0625vw] mx-[0.63vw] max-md:h-[2.67vw] max-md:mx-[3.2vw]',
    classForm: 'flex-1 flex items-center gap-x-[0.5vw] lg:relative',
    isIcon: false,
    iconSmall: true,
    classInput:
        'outline-none text-den title16-400-130 mr-[1.5vw] max-md:mr-0 max-md:title-mb12-400-130 max-md:w-[29vw] max-lg:title-tl12',
    classList:
        'w-[36vw] absolute bottom-[-0.5vw] left-0 translate-y-full z-[1000] bg-white text-black px-[1.5vw] py-[1vw] rounded-[0.5vw] shadow-input max-md:w-[50vw] max-md:title-mb12-400-150 max-md:w-full max-md:rounded-[2.3vw] max-md:h-[60vh] max-md:overflow-y-auto',
}

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function NavBarV2({ lang, t }) {
    const isTablet = useMediaQuery({
        query: '(max-width: 1023px)',
    })
    const [isOpen, setIsOpen] = useState(false)
    const { data, isLoading, error } = useSWR(`${process.env.NEXT_PUBLIC_API}/site-infor`, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })

    return (
        <nav className='relative z-[9999] border-b border-solid px-[3.75vw] h-fit border-white04 max-md:pl-[4vw] max-md:pr-[2.5vw]'>
            <div className='flex items-center justify-between w-full gap-x-[2.5vw] max-md:my-[2.67vw]'>
                <div className='flex gap-x-[1.92vw] items-center'>
                    <Link
                        href={`/${lang !== 'vi' ? lang : ''}`}
                        className='relative w-[3.52vw] h-[4.5vw] block my-[0.62vw] max-md:w-[8.267vw] max-md:h-[11.467vw] max-lg:w-[6vw] max-lg:h-[8vw]'
                    >
                        <Image
                            className='object-cover select-none max-lg:object-contain'
                            src='/images/logo-no-bg.svg'
                            alt='logo'
                            sizes='3.52vw'
                            priority
                            fill
                        />
                    </Link>
                </div>

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
                {/* {!isTablet ? ( */}
                <div className='flex gap-x-[3.13vw] items-center max-lg:hidden'>
                    <MegaMenu
                        lang={lang}
                        t={t}
                        fixed={true}
                    />
                    <div className='flex gap-x-[1.25vw] items-center'>
                        <Link
                            href={`${lang !== 'vi' ? '/' + lang + '/deposit' : '/deposit'}`}
                            className='bg-gradient-prominent shadow-prominent h-fit w-fit rounded-[10vw] py-[1vw] px-[2vw] text-d-9-d-9-d-9 title16-700-150 whitespace-nowrap'
                        >
                            {t?.Navbar?.button}
                        </Link>
                        <BoxLanguage
                            type={'ds'}
                            lang={lang}
                            t={t}
                        />
                    </div>
                </div>
                {/* ) : ( */}
                <div
                    onClick={() => setIsOpen(true)}
                    className='relative w-fit lg:hidden'
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
                {/* )} */}
            </div>
            <MenuRes
                lang={lang}
                t={t}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                data={data}
            />
        </nav>
    )
}
