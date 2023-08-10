'use client'
import { useState } from 'react'
import SelectLanguage from './SelectLanguage'
import Image from 'next/image'
import { useLocale } from 'next-intl'

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
            return '/vn.svg'
        case 'en':
            return '/english.svg'
        case 'kr':
            return '/korea.svg'
        case 'ch':
            return '/china.svg'
        default:
            break
    }
}

export default function BoxLanguage() {
    const [isShowLanguage, setIsShowLanguage] = useState(false)
    const locale = useLocale()
    if (!locale) return
    return (
        <div
            onClick={() => {
                setIsShowLanguage(!isShowLanguage)
            }}
            className='flex flex-col gap-y-[0.56vw] relative z-40 w-[8vw]'
        >
            <span className='text-white -tracking-[0.6px] title12-600-150'>Chọn ngôn ngữ</span>
            <div className='flex items-center gap-x-[0.5vw] select-none cursor-pointer'>
                <Image
                    className='w-[1.75vw] h-[1.125vw] object-cover rounded-[3px]'
                    src={handleCheckIcon(locale)}
                    alt='country'
                    quality={100}
                    width={28}
                    height={18}
                />
                <span className='text-white title16-600-150 -tracking-[0.48px]'>{handleCheckCountry(locale)}</span>
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
                        fill='white'
                    />
                </svg>
            </div>
            <SelectLanguage className={!isShowLanguage ? 'hidden' : ''} />
        </div>
    )
}
