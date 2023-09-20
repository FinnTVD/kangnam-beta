'use client'

import useClickOutSide from '@/hooks/useClickOutSide'
import { useEffect, useState } from 'react'

const listSearch = [
    {
        id: 1,
        title: 'Dự án',
    },
    {
        id: 2,
        title: 'Thuê nhà',
        id: '013b523f-e340-4e7e-80a6-99096a7ce3fe',
    },
    {
        id: 3,
        title: 'Mua nhà',
        id: '823a2e96-0913-47a2-a25c-780eb911434f',
    },
]
export default function SelectSearch({ type = 'dark', menu = false }) {
    const [isOpen, setIsOpen] = useState(false)
    const [arrSearch, setArrSearch] = useState({
        id: 1,
        title: 'Dự án',
        list: [
            {
                id: 2,
                title: 'Thuê nhà',
            },
            {
                id: 3,
                title: 'Mua nhà',
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
            } gap-x-[0.13vw] select-none cursor-pointer flex items-center title-tl12-400-130 title14-400-130 whitespace-nowrap relative`}
        >
            {arrSearch.title}
            <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke={`${type === 'white' ? 'white' : '#D6A279'}`}
                className='w-[1vw] h-[1vw] max-lg:h-[1.5vw] max-lg:w-[1.5vw] max-md:w-[5vw] max-md:h-[3vw]'
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
                        } py-[0.5vw] max-md:py-[1.5vw] max-md:px-[3vw] px-[1vw] hover:bg-[#f3f4f7] title-tl12-400-130`}
                    >
                        {e.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}
