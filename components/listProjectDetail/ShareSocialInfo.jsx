'use client'

import useStore from '@/app/[lang]/(store)/store'
import { usePathname } from 'next/navigation'
import copy from 'copy-text-to-clipboard'
import { useState } from 'react'

export default function ShareSocialInfo() {
    const pathName = usePathname()
    const setIsPopupShare = useStore((state) => state.setIsPopupShare)
    const isPopupShare = useStore((state) => state.isPopupShare)
    const [isCopy, setIsCopy] = useState(false)

    return (
        <div className='flex justify-center gap-x-[1vw] my-[2vw] max-md:mt-[4vw] max-md:gap-x-[4vw]'>
            <div
                title='Share social'
                className='w-[3vw] h-[3vw] max-md:w-[10vw] max-md:h-[10vw] rounded-full bg-[#d6a279] flex justify-center items-center relative cursor-pointer'
                onClick={() => {
                    setIsPopupShare(!isPopupShare)
                }}
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='white'
                    className='w-6 h-6 max-md:w-[5.5rem] max-md:h-[5.5vw]'
                >
                    <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z'
                    />
                </svg>
            </div>
            <div
                title='Copy link'
                className='w-[3vw] h-[3vw] max-md:w-[10vw] max-md:h-[10vw] rounded-full bg-[#d6a279] flex justify-center items-center relative cursor-pointer'
                onClick={() => {
                    copy(process.env.NEXT_PUBLIC_DOMAIN + pathName.slice(1))
                    setIsCopy(true)
                    setTimeout(() => {
                        setIsCopy(false)
                    }, 1500)
                }}
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='white'
                    className='w-6 h-6 max-md:w-[5.5rem] max-md:h-[5.5vw]'
                >
                    <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184'
                    />
                </svg>
                <div
                    className={`${
                        isCopy ? 'flex' : 'hidden'
                    } absolute top-[-0.25vw] max-md:top-[-1.25vw] max-md:text-[3.5vw] max-md:w-[17vw] max-md:h-[7vw] bg-black -translate-x-1/2 left-1/2 w-[5vw] h-[2vw] rounded-[0.5vw] text-white text-[1vw] -translate-y-full justify-center items-center before:absolute before:w-[0.5vw] before:h-[0.5vw] before:rotate-45 before:bg-black before:bottom-0 max-md:before:bottom-[0.25vw] max-md:before:w-[2.5vw] max-md:before:h-[2.5vw] before:left-1/2 before:-translate-x-1/2 before:translate-y-1/2
                `}
                >
                    Copied!
                </div>
            </div>
        </div>
    )
}
