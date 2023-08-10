'use client'

import { useState } from 'react'
import FilterCheckBox from './FilterCheckBox'

const arrFilter = ['Loại hình', 'Địa điểm', 'Cho thuê', 'Mua lại']

export default function BoxFilter() {
    const [indexFilter, setIndexFilter] = useState(null)

    return (
        <ul className='flex gap-x-[1.5vw] select-none'>
            {arrFilter &&
                arrFilter.map((e, index) => (
                    <li
                        key={index}
                        className={`${
                            indexFilter === index ? 'bg-logo' : 'bg-white'
                        } relative rounded-[6.25vw] h-fit w-fit border border-solid border-logo shadow-filter`}
                    >
                        <span
                            onClick={() => {
                                indexFilter !== index ? setIndexFilter(index) : setIndexFilter(-1)
                            }}
                            className={`${
                                indexFilter === index ? 'text-white' : 'text-den'
                            } rounded-[6.25vw] title14-400-150 block py-[0.59vw] px-[1.5vw] cursor-pointer`}
                        >
                            {e}
                        </span>
                        <FilterCheckBox
                            className={indexFilter !== index && 'hidden'}
                            setIndexFilter={setIndexFilter}
                        />
                    </li>
                ))}
        </ul>
    )
}
