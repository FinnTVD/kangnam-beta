'use client'

import { useState } from 'react'
const arrFilter = [
    {
        title: 'Mới nhất',
        href: '/',
    },
    {
        title: 'Giá tăng dần',
        href: '/',
    },
    {
        title: 'Giá giảm dần',
        href: '/',
    },
]

export default function BoxSort() {
    const [isShow, setIsShow] = useState(false)
    const [indexValue, setIndexValue] = useState(0)
    return (
        <div className='relative w-fit z-10 select-none'>
            <div
                onClick={() => setIsShow(!isShow)}
                className='gap-x-[0.63vw] max-md:gap-x-[4.27vw] flex items-center cursor-pointer'
            >
                <span className='text-den05 text-de title16-400-150 title-mb14-400-150'>
                    {arrFilter[indexValue].title}
                </span>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='11'
                    height='6'
                    viewBox='0 0 11 6'
                    fill='none'
                >
                    <path
                        opacity='0.7'
                        d='M5.6 6L10.4497 0H0.750258L5.6 6Z'
                        fill='#444444'
                    />
                </svg>
            </div>
            <ul
                className={`${
                    !isShow && 'hidden'
                } absolute -left-[0.8vw] rounded-lg overflow-hidden -bottom-[0.5vw] translate-y-full bg-white shadow-boxFilter max-md:-left-[2.5vw] max-md:py-[1vw]`}
            >
                {arrFilter.map((e, index) => (
                    <li
                        key={index}
                        onClick={() => {
                            setIndexValue(index)
                            setIsShow(false)
                        }}
                        className='text-[#6B7280] text-14pc cursor-pointer hover:bg-[#F3F4F7] font-normal leading-[1.15] py-[0.9vw] px-[1.13vw] whitespace-nowrap flex gap-x-[0.5vw] max-md:gap-x-[1vw] items-center max-md:text-14mb max-md:px-[2.5vw] max-md:py-[1.5vw]'
                    >
                        {e.title}
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='black'
                            className={`${
                                indexValue !== index && 'hidden'
                            } w-[0.8vw] h-[0.8vw] max-md:w-[3vw] max-md:h-[3vw]`}
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M4.5 12.75l6 6 9-13.5'
                            />
                        </svg>
                    </li>
                ))}
            </ul>
        </div>
    )
}
