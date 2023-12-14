'use client'

import { useEffect, useState } from 'react'
import ItemFilterV2 from './ItemFilterV2'
import { useMediaQuery } from 'react-responsive'
import { usePathname } from 'next/navigation'
import { listSlugNavHire, slugProject } from '@/utils'
import ItemRangeV2 from './ItemRangeV2'
import ItemFilterStatus from './ItemFilterStatus'
import ItemFilterOther from './ItemFilterOther'

export default function BoxFilterV2({ arrFilter, lang, t, isOther, isHome = false }) {
    const [indexFilter, setIndexFilter] = useState(null)
    const [isScrollX, setIsScrollX] = useState(false)
    const [count, setCount] = useState(0)
    
    const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' })
    const pathName = usePathname()
    useEffect(() => {
        console.log('isMobile', isMobile);
        if(count >  0) {
            if (indexFilter >= 0) {
                setIsScrollX(false)
            } else {
                setIsScrollX(true)
                setCount(2)
            }
        }
        if(isMobile) {
            setCount(1)
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
            isScrollX || count == 0 ? 'max-md:overflow-x-scroll ' : ''
        } flex max-md:pt-[2vw] max-sm:h-[10vw] gap-x-[1.5vw] max-md:gap-x-[2.5vw] select-none  max-md:overflow-x-scroll max-md:pb-[9.2vw]`}
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

            {isOther && (
                <ItemFilterOther
                    setIndexFilter={setIndexFilter}
                    indexFilter={indexFilter}
                    lang={lang}
                    item={{
                        id: 6,
                        title: 'Thêm',
                        slug: 'add',
                        titleLang: 'add',
                        api: '/add',
                    }}
                    isMobile={isMobile}
                    t={t}
                />
            )}
        </ul>
    )
}
