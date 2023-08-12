'use client'
import Image from 'next/image'
import BoxCurrency from './BoxCurrency'
import SocialMedia from './SocialMedia'
import { useState } from 'react'

export default function FeatureHome() {
    const [isShow, setIsShow] = useState(null)

    const handleCurrently = () => {
        setIsShow(!isShow)
    }

    return (
        <ul className='fixed right-[3.94vw] bottom-[5.86vw] z-[9999] gap-y-[1.88vw] flex flex-col transition-all duration-500 ease-linear select-none'>
            <li
                className={`item-social transition-all duration-200 ease-linear group relative w-[4.5vw] h-[4.5vw] cursor-pointer shadow-feature flex justify-center items-center bg-white rounded-full before:content-normal before:w-[10.64vw] before:h-[25vw] before:bg-transparent hover:before:block before:hidden before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:-translate-x-[58%]`}
            >
                <Image
                    src='/social.svg'
                    alt='social'
                    width={36}
                    height={36}
                    className='object-contain w-[2.04vw] h-[2.04vw] group-hover:scale-125 transition-all duration-200 ease-linear'
                />
                <SocialMedia />
            </li>
            <li
                className={`item-social transition-all duration-200 ease-linear relative w-[4.5vw] h-[4.5vw] shadow-feature bg-white rounded-full group`}
            >
                <div
                    onClick={handleCurrently}
                    className='relative flex items-center justify-center w-full h-full cursor-pointer '
                >
                    <Image
                        src='/tiente.svg'
                        alt='tiente'
                        width={36}
                        height={36}
                        className='object-contain w-[2.04vw] h-[2.04vw] group-hover:scale-125 transition-all duration-200 ease-linear'
                    />
                </div>
                <BoxCurrency className={!isShow && 'hidden'} />
            </li>
            <li
                className={`item-social transition-all duration-200 ease-linear w-[4.5vw] h-[4.5vw] cursor-pointer shadow-feature flex justify-center items-center bg-white rounded-full group`}
            >
                <Image
                    src='/call.svg'
                    alt='call'
                    width={36}
                    height={36}
                    className='object-contain w-[2.04vw] h-[2.04vw] group-hover:scale-125 transition-all duration-200 ease-linear'
                />
            </li>
        </ul>
    )
}
