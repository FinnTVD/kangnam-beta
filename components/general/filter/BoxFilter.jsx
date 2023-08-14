'use client'

import { useState } from 'react'
import ItemFilter from './ItemFilter'

const arrFilter = ['Loại hình', 'Địa điểm', 'Cho thuê', 'Mua lại']

export default function BoxFilter() {
    const [indexFilter, setIndexFilter] = useState(null)

    return (
        <ul className='flex gap-x-[1.5vw] select-none'>
            {arrFilter &&
                arrFilter.map((e, index) => (
                    <ItemFilter
                        key={index}
                        index={index}
                        e={e}
                        setIndexFilter={setIndexFilter}
                        indexFilter={indexFilter}
                    />
                ))}
        </ul>
    )
}
