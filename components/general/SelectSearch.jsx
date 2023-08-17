'use client'

import useClickOutSide from '@/hooks/useClickOutSide'
import { useEffect, useState } from 'react'

const listSearch = [
    {
        id: 1,
        title: 'Mua nhà',
    },
    {
        id: 2,
        title: 'Thuê nhà',
    },
    {
        id: 3,
        title: 'Dự án',
    },
]
export default function SelectSearch({ type = 'dark', menu = false }) {
    const [isOpen, setIsOpen] = useState(false)
    const [arrSearch, setArrSearch] = useState({
        id: 1,
        title: 'Mua nhà',
        list: [
            {
                id: 2,
                title: 'Thuê nhà',
            },
            {
                id: 3,
                title: 'Dự án',
            },
        ],
    })
    const [sideRef, isOutSide] = useClickOutSide()
    useEffect(() => {
        isOutSide && setIsOpen(false)
    }, [isOutSide])

    const handleChangeSearch = (item) => {
        const listSearchNew = listSearch.filter((e) => e.id !== item.id)
        setArrSearch({
            id: item.id,
            title: item.title,
            list: [...listSearchNew],
        })
        setIsOpen(false)
    }
    return (
        <div
            ref={sideRef}
            onClick={() => setIsOpen(!isOpen)}
            className={`${type === 'white' ? 'text-white' : 'text-den'} ${
                menu ? 'title-mb12-400-130' : 'title-mb14-400-130'
            } gap-x-[0.13vw] select-none cursor-pointer flex items-center title14-400-130 whitespace-nowrap relative`}
        >
            {arrSearch.title}
            <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke={`${type === 'white' ? 'white' : '#D6A279'}`}
                className='w-[1vw] h-[1vw] max-md:w-[5vw] max-md:h-[3vw]'
            >
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                />
            </svg>
            <ul
                style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}
                className={`${
                    !isOpen || isOutSide ? 'hidden' : ''
                } absolute top-[2.5vw] -left-[1vw] rounded-md bg-white py-[0.5vw] text-den max-md:top-[7.5vw] max-md:-left-[3vw] max-md:py-[1vw]`}
            >
                {arrSearch?.list?.map((e) => (
                    <li
                        onClick={() => handleChangeSearch(e)}
                        key={e.id}
                        className={`${
                            menu ? 'title-mb12-400-130' : 'title-mb14-400-130'
                        } py-[0.5vw] max-md:py-[1.5vw] max-md:px-[3vw] px-[1vw] hover:bg-[#f3f4f7]`}
                    >
                        {e.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}
