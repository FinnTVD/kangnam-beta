'use client'

import { useEffect, useState } from 'react'
import ItemFilterV2 from './ItemFilterV2'
import { useMediaQuery } from 'react-responsive'
import { usePathname } from 'next/navigation'
import { listSlugNavHire, slugProject } from '@/utils'
import ItemRangeV2 from './ItemRangeV2'
import ItemFilterStatus from './ItemFilterStatus'
import ItemFilterOther from './ItemFilterOther'
import useStore from '@/app/[lang]/(store)/store'

export default function BoxFilterV2({ arrFilter, lang, t, isOther, isHome = false }) {
    const [indexFilter, setIndexFilter] = useState(null)
    const isScrollX = useStore((state) => state.isScrollX)
    const setIsScrollX = useStore((state) => state.setIsScrollX)
    const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' })
    const pathName = usePathname()
    useEffect(() => {
        if (indexFilter >= 0) {
            setIsScrollX(false)
        } else {
            setIsScrollX(true)
        }
    }, [indexFilter])
    let isHire = false
    let isProject = false
    listSlugNavHire.forEach((e) => {
        if (pathName.includes(e)) {
            return (isHire = true)
        }
    })
    slugProject.forEach((e) => {
        if (pathName?.includes(e)) {
            return (isProject = true)
        }
    })
    const handleCheckPriceAndArea = (slug) => {
        if (slug?.includes('price')) return true
        if (slug?.includes('area')) return true
        return false
    }

    return (
        <ul
            className={`${
                isMobile ? (isScrollX ? 'max-md:overflow-x-auto' : '') : ''
            } flex gap-x-[1.5vw] max-md:gap-x-[2.5vw] select-none relative`}
        >
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
                            isProject={isProject}
                            isHome={isHome}
                        />
                    ) : e?.slug?.includes('status') ? (
                        <ItemFilterStatus
                            key={index}
                            index={index}
                            item={e}
                            setIndexFilter={setIndexFilter}
                            indexFilter={indexFilter}
                            lang={lang}
                            isMobile={isMobile}
                            t={t}
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
