'use client'

import { useState } from 'react'
import ItemFilterV2 from './ItemFilterV2'
import { useMediaQuery } from 'react-responsive'
import { usePathname } from 'next/navigation'
import { listSlugNavHire, slugProject } from '@/utils'
import ItemRangeV2 from './ItemRangeV2'
import ItemFilterStatus from './ItemFilterStatus'
import ItemFilterOther from './ItemFilterOther'

export default function BoxFilterV2({ arrFilter, lang, t, isOther, isHome = false }) {
    const [indexFilter, setIndexFilter] = useState(null)
    const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' })
    const pathName = usePathname()
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

    const handleGetElementParent = (a) => {
        const getParentElemnt = document.querySelector('.show-scroll');
        if(a == 'hidden') {
            console.log('hidden');
            getParentElemnt.classList.remove('scrollbar-hidden')
        } else {
            getParentElemnt.classList.add('scrollbar-hidden')
        }
        
    }

    return (
            <ul className='flex  scrollbar show-scroll max-sm:overflow-x-scroll click-show  gap-x-[1.5vw] max-md:gap-x-[2.5vw] select-none relative'>
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
                                click={(a) => handleGetElementParent(a)}
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
                                click={(a) => handleGetElementParent(a)}
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
                                click={(a) => handleGetElementParent(a)}
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
