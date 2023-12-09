'use client'

import { useState } from 'react'
import ItemFilterV2 from './ItemFilterV2'
import { useMediaQuery } from 'react-responsive'
import { usePathname } from 'next/navigation'
import { listSlugNavHire } from '@/utils'
import ItemRangeV2 from './ItemRangeV2'

export default function BoxFilterV2({ arrFilter, lang, t }) {
    const [indexFilter, setIndexFilter] = useState(null)
    const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' })
    const pathName = usePathname()
    let isHire
    listSlugNavHire.forEach((e) => {
        if (pathName.includes(e)) {
            isHire = true
            return
        }
    })
    const handleCheckPriceAndArea = (slug) => {
        if (slug?.includes('price')) return true
        if (slug?.includes('area')) return true
        return false
    }

    return (
        <ul className='flex gap-x-[1.5vw] max-md:gap-x-[2.5vw] select-none relative'>
            {arrFilter &&
                arrFilter.map((e, index) =>
                    handleCheckPriceAndArea(e?.slug) ? (
                        <ItemRangeV2
                            key={index}
                            index={index}
                            item={e}
                            setIndexFilter={setIndexFilter}
                            indexFilter={indexFilter}
                            lang={lang}
                            isMobile={isMobile}
                            t={t}
                            isHire={isHire}
                            isPrice={e?.slug?.includes('price')}
                        />
                    ) : (
                        <ItemFilterV2
                            key={index}
                            index={index}
                            item={e}
                            setIndexFilter={setIndexFilter}
                            indexFilter={indexFilter}
                            lang={lang}
                            isMobile={isMobile}
                            t={t}
                        />
                    ),
                )}
        </ul>
    )
}
