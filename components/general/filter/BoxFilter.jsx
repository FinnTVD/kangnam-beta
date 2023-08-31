'use client'

import { useEffect, useState } from 'react'
import ItemFilter from './ItemFilter'
import { useMediaQuery } from 'react-responsive'

// const arrFilter = ['Loại hình', 'Địa điểm', 'Cho thuê', 'Mua lại']
export default function BoxFilter({ arrFilter }) {
    const [indexFilter, setIndexFilter] = useState(null)
    const isMobile = useMediaQuery({
        query: '(max-width: 767.9px)',
    })

    return (
        <ul className='flex gap-x-[1.5vw] max-md:justify-between select-none relative'>
            {arrFilter &&
                arrFilter.map((e, index) => (
                    <ItemFilter
                        key={index}
                        index={index}
                        e={e}
                        setIndexFilter={setIndexFilter}
                        indexFilter={indexFilter}
                        isMobile={isMobile}
                    />
                ))}
        </ul>
    )
}
