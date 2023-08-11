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
            <li className='group relative w-[4.5vw] h-[4.5vw] cursor-pointer shadow-feature flex justify-center items-center bg-white rounded-full before:content-normal before:w-[3.64vw] before:h-[20vw] before:bg-transparent hover:before:block before:hidden before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:-translate-x-[45%]'>
                <Image
                    src='/social.svg'
                    alt='social'
                    width={36}
                    height={36}
                    className='object-contain w-[2.04vw] h-[2.04vw]'
                />
                <SocialMedia />
            </li>
            <li className='relative w-[4.5vw] h-[4.5vw] shadow-feature bg-white rounded-full'>
                <div
                    onClick={handleCurrently}
                    className='relative flex items-center justify-center w-full h-full cursor-pointer '
                >
                    <Image
                        src='/tiente.svg'
                        alt='tiente'
                        width={36}
                        height={36}
                        className='object-contain w-[2.04vw] h-[2.04vw]'
                    />
                </div>
                <BoxCurrency className={!isShow && 'hidden'} />
            </li>
            <li className='w-[4.5vw] h-[4.5vw] cursor-pointer shadow-feature flex justify-center items-center bg-white rounded-full'>
                <Image
                    src='/call.svg'
                    alt='call'
                    width={36}
                    height={36}
                    className='object-contain w-[2.04vw] h-[2.04vw]'
                />
            </li>
        </ul>
    )
}
