'use client'

import { useState } from 'react'
import ItemFilterV2 from './ItemFilterV2'

export default function BoxFilterV2({ arrFilter }) {
    const [indexFilter, setIndexFilter] = useState(null)

    return (
        <ul className='flex gap-x-[1.5vw] max-md:gap-x-[2.5vw] select-none relative'>
            {arrFilter &&
                arrFilter.map((e, index) => (
                    <ItemFilterV2
                        key={index}
                        index={index}
                        item={e}
                        setIndexFilter={setIndexFilter}
                        indexFilter={indexFilter}
                    />
                ))}
        </ul>
    )
}
