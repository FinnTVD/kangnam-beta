'use client'

import { useEffect, useState } from 'react'

export default function InputCheckBox({ e, lang, lh, index }) {
    const [isToggle, setIsToggle] = useState(lh?.find((item) => e?.id === item) ? true : false)
    const [data, setData] = useState(null)
    useEffect(() => {
        if (index !== 1) return
        const callApi = async (id) => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API}/property?take=1&propertyAreaTypeIds=${id}`)
            const data = await res.json()
            data && setData(data?.data?.[0]?.address)
        }
        callApi(e?.id)
    }, [])

    useEffect(() => {
        setIsToggle(lh?.find((item) => e?.id === item) ? true : false)
    }, [lh])

    const handleToggle = () => {
        setIsToggle(!isToggle)
        if (index !== 1) return
        if (!isToggle) {
            const a = {
                cityId: data?.cityId,
                lng: data?.cityLng,
                lat: data?.cityLat,
            }
            if (data?.cityId && data?.cityLng && data?.cityLat) {
                window.localStorage.setItem('dataArea', JSON.stringify(a))
            }
        }
    }
    return (
        <div className='w-fit flex items-center gap-x-[0.75vw] max-md:gap-x-[3.2vw]'>
            <input
                type='checkbox'
                id={e?.id}
                className='w-[1.5vw] h-[1.5vw] max-md:w-[6.4vw] hidden checked:bg-green-500 max-md:h-[6.4vw] outline-none border border-solid border-den02 cursor-pointer'
                checked={isToggle}
            />
            <div
                onClick={handleToggle}
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
                onClick={handleToggle}
            >
                {e?.translations?.find((i) => i?.languageCode?.toLowerCase()?.includes(lang))?.name || e?.title}
            </span>
        </div>
    )
}
