'use client'
import { useEffect, useState } from 'react'
import SelectLanguage from './SelectLanguage'
import Image from 'next/image'
import useClickOutSide from '@/hooks/useClickOutSide'

const handleCheckCountry = (locale) => {
    switch (locale) {
        case 'vn':
            return 'Việt Nam'
        case 'en':
            return 'English'
        case 'kr':
            return 'Korea'
        case 'ch':
            return 'China'
        default:
            break
    }
}

const handleCheckIcon = (locale) => {
    switch (locale) {
        case 'vn':
            return '/images/vn.svg'
        case 'en':
            return '/images/english.svg'
        case 'kr':
            return '/images/korea.svg'
        case 'ch':
            return '/images/china.svg'
        default:
            break
    }
}

export default function BoxLanguage({ type = '', lang, t }) {
    const [isShowLanguage, setIsShowLanguage] = useState(false)
    const [sideRef, isOutSide] = useClickOutSide()
    useEffect(() => {
        isOutSide && setIsShowLanguage(false)
    }, [isOutSide])
    return (
        <div
            onClick={() => {
                setIsShowLanguage(!isShowLanguage)
            }}
            ref={sideRef}
            className='flex flex-col gap-y-[0.56vw] relative z-[99999] w-[8vw]'
        >
            <span
                className={`${
                    type === 'ds' ? 'text-den opacity-60' : 'text-white'
                } title-language-active -tracking-[0.6px] title12-600-150`}
            >
                {t?.Navbar?.title}
            </span>
            <div className='flex items-center gap-x-[0.5vw] select-none cursor-pointer'>
                <Image
                    className='w-[1.75vw] h-[1.125vw] object-cover rounded-[3px]'
                    src={handleCheckIcon(lang)}
                    alt='country'
                    quality={100}
                    width={28}
                    height={18}
                />
                <span
                    className={`${
                        type === 'ds' ? 'text-den' : 'text-white'
                    } title-language-active title16-600-150 -tracking-[0.48px]`}
                >
                    {handleCheckCountry(lang)}
                </span>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='11'
                    height='7'
                    viewBox='0 0 11 7'
                    fill='none'
                    className={`${isShowLanguage ? 'rotate-180' : ''} transition-all duration-200 ease-linear`}
                >
                    <path
                        d='M5.6 6.5L10.4497 0.5H0.750258L5.6 6.5Z'
                        fill={`${type === 'ds' ? '#444' : 'white'}`}
                    />
                </svg>
            </div>
            <SelectLanguage
                className={!isShowLanguage || isOutSide ? 'hidden' : ''}
                lang={lang}
            />
        </div>
    )
}
