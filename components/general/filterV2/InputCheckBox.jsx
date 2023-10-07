'use client'

import { useEffect, useState } from 'react'

export default function InputCheckBox({ e, lang, lh }) {
    const [isToggle, setIsToggle] = useState(lh?.find((item) => e?.id === item) ? true : false)
    useEffect(() => {
        setIsToggle(lh?.find((item) => e?.id === item) ? true : false)
    }, [lh])
    return (
        <div className='w-fit flex items-center gap-x-[0.75vw] max-md:gap-x-[3.2vw]'>
            <input
                type='checkbox'
                id={e?.id}
                className='w-[1.5vw] h-[1.5vw] max-md:w-[6.4vw] hidden checked:bg-green-500 max-md:h-[6.4vw] outline-none border border-solid border-den02 cursor-pointer'
                checked={isToggle}
            />
            <div
                onClick={() => {
                    setIsToggle(!isToggle)
                }}
                className={`${
                    isToggle ? 'bg-[#767676]' : 'bg-white'
                } w-[1.5vw] h-[1.5vw] max-md:w-[6.4vw] max-md:h-[6.4vw] outline-none border border-solid border-black/40 cursor-pointer rounded-[0.25vw]`}
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='4'
                    stroke='white'
                    className={`${isToggle ? '' : 'hidden'} w-[1.25vw] h-[1.5vw] max-md:w-[6.25vw] max-md:h-[5.5vw]`}
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M4.5 12.75l6 6 9-13.5'
                    />
                </svg>
            </div>

            <span
                className='title14-400-150 text-den cursor-pointer max-md:title-mb14-400-150 w-[5.5625vw] max-md:w-[23.74vw] max-md:whitespace-normal max-lg:title-tl14 max-lg:w-[20vw]'
                htmlFor={e?.id}
                onClick={() => {
                    setIsToggle(!isToggle)
                }}
            >
                {e?.translations?.find((e) => e?.languageCode?.toLowerCase()?.includes(lang === 'ch' ? 'cn' : lang))
                    ?.name || e?.title}
            </span>
        </div>
    )
}
