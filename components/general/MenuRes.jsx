'use client'
import Link from 'next/link'
import Image from 'next/image'
import BoxLanguage from './language/BoxLanguage'
import useSWR from 'swr'
import { postTypeIdAgreement } from '@/utils'
import SearchGlobal from '../home/SearchGlobal'
const fetcher = (...args) => fetch(...args).then((res) => res.json())

const objClass = {
    classContainer:
        'w-[68.26vw] py-[2.65vw] px-[5vw] bg-white02 rounded-[6.25vw] flex justify-between items-center border border-solid border-white03 backdrop-blur-[11px]',
    classLine:
        'border-l border-solid border-logo opacity-40 h-[1.0625vw] mx-[0.63vw] max-md:opacity-10 max-md:border-white max-md:h-[2.67vw] max-md:mx-[2.2vw]',
    classForm: 'flex-1 flex items-center gap-x-[0.5vw] relative',
    isIcon: false,
    iconSmall: true,
    classInput:
        'bg-transparent outline-none text-den max-lg:text-white title16-400-130 max-md:title-mb12-400-130 max-lg:title-tl12 placeholder:text-white/50 max-md:w-full',
    classList:
        'absolute bottom-[-0.5vw] left-0 translate-y-full z-[1000] bg-white text-black w-[50vw] px-[1.5vw] py-[1vw] rounded-[0.5vw] shadow-input max-md:title-mb12-400-150',
}

export default function MenuRes({ lang, t, setIsOpen, isOpen, data }) {
    const {
        data: agreementData,
        error: errorNews,
        isLoading: isLoading,
    } = useSWR(process.env.NEXT_PUBLIC_API + `/post?page=1&take=12&postTypeIds[]=${postTypeIdAgreement}`, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })
    let agreementDataTranslation = []
    if (agreementData) {
        agreementData?.data?.forEach((item) => {
            item?.translations?.forEach((itm) => {
                if (itm?.languageCode?.toLowerCase()?.includes(lang === 'ch' ? 'cn' : lang))
                    agreementDataTranslation.push({ title: itm?.title, slug: itm?.slug })
            })
        })
    }

    return (
        <div
            className={`${
                isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-30'
            } transition-all duration-300 fixed top-0 left-0 w-full h-screen bg-logo`}
        >
            <div className='flex justify-between p-[2.67vw] items-center border-b border-solid border-white01 relative z-[99]'>
                <Link
                    href={`/${lang !== 'vi' ? lang : ''}`}
                    className='relative w-[8.267vw] h-[11.467vw] block'
                    onClick={() => setIsOpen(false)}
                >
                    <Image
                        className='object-contain brightness-0 invert'
                        src='/images/logo-no-bg.svg'
                        alt='logo'
                        sizes='3.52vw'
                        fill
                        priority
                    />
                </Link>

                <SearchGlobal
                    lang={lang}
                    classContainer={objClass.classContainer}
                    classLine={objClass.classLine}
                    classForm={objClass.classForm}
                    isIcon={objClass.isIcon}
                    iconSmall={objClass.iconSmall}
                    classInput={objClass.classInput}
                    classList={objClass.classList}
                    isHome={false}
                    dark={'white'}
                />
                <div
                    onClick={() => setIsOpen(false)}
                    className='cursor-pointer'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='white'
                        className='w-[5.73vw] h-[5.73vw]'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M6 18L18 6M6 6l12 12'
                        />
                    </svg>
                </div>
            </div>
            <ul className='max-md:px-mb10 flex flex-col mt-[8vw] mb-[13.33vw] text-white max-lg:px-[3.2vw]'>
                {t?.menuNav?.nav1.map((e, index) => (
                    <li
                        onClick={() => setIsOpen(false)}
                        className='w-full py-[2.67vw] max-md:title-mb20-400-120 border-b borders-solid border-white01 last:border-none max-lg:title-tl20'
                        key={index}
                    >
                        <Link href={e.href}>{e.title}</Link>
                    </li>
                ))}
            </ul>
            <div className='max-md:px-mb10 mt-[13.33vw] flex justify-between items-end max-lg:px-[3.2vw]'>
                <ul className='flex flex-col text-white gap-y-[1.07vw] w-full max-lg:w-auto'>
                    {t?.menuNav?.nav2.map((e, index) => (
                        <li
                            onClick={() => setIsOpen(false)}
                            className='max-md:title-mb14-400-171 opacity-80 max-lg:title-tl14'
                            key={index}
                        >
                            <Link href={e.href}>{e.title}</Link>
                        </li>
                    ))}
                </ul>
                <BoxLanguage
                    lang={lang}
                    t={t}
                    isMenu={true}
                />
            </div>
            <div className='px-mb10 my-[4.27vw]'>
                <div className='border border-t border-white01'></div>
            </div>
            <span className='block text-white max-md:px-mb10 max-md:title-mb12-400-200 opacity-50 max-lg:title-tl12 max-lg:px-[3.2vw]'>
                {t?.menuRes?.email}
            </span>
            <span className='block text-white max-md:px-mb10 max-md:title-mb13-400-184 opacity-95 max-md:-mt-[1.6vw] max-lg:title-tl13 max-lg:px-[3.2vw] max-lg:mt-0'>
                {data?.email}
            </span>
            <span className='block text-white max-md:px-mb10 max-md:title-mb12-400-200 opacity-50 mt-[2.13vw] max-lg:title-tl12 max-lg:px-[3.2vw]'>
                {t?.menuRes?.address}
            </span>
            <address className='block text-white max-md:px-mb10 max-md:title-mb13-400-130 opacity-95 not-italic max-lg:title-tl13 max-lg:px-[3.2vw]'>
                {data?.address}
            </address>
            <span className='block text-white max-md:px-mb10 max-md:title-mb12-400-200 opacity-50 mt-[2.13vw] max-lg:title-tl12 max-lg:px-[3.2vw]'>
                {t?.menuRes?.hotline}
            </span>
            <span className='block text-white max-md:px-mb10 max-md:title-mb13-600-150 max-lg:title-tl13 max-lg:px-[3.2vw]'>
                {data?.phone}
            </span>
            <div className='max-md:px-mb10 mt-[4.27vw] max-lg:px-[3.2vw]'>
                <Link
                    href={`${lang !== 'vi' ? '/' + lang + '/deposit' : '/deposit'}`}
                    className='bg-nu h-fit w-full text-center block rounded-[6.25vw] py-[3.82vw] text-white max-md:title-mb13-600-150 max-lg:title-tl13'
                >
                    {t?.Navbar?.button}
                </Link>
            </div>
        </div>
    )
}
