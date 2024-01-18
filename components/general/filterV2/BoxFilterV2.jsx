'use client'

import { useState } from 'react'
import ItemFilterV2 from './ItemFilterV2'
import { useMediaQuery } from 'react-responsive'
import { usePathname } from 'next/navigation'
import { listSlugNavHire, slugProject } from '@/utils'
import ItemRangeV2 from './ItemRangeV2'
import ItemFilterStatus from './ItemFilterStatus'
import ItemFilterOther from './ItemFilterOther'
import ItemFilterInvestor from './ItemFilterInvestor'

export default function BoxFilterV2({ arrFilter, lang, t, isOther }) {
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

    return (
        <ul className={`flex gap-x-[1vw] max-md:gap-[2.5vw] select-none relative max-md:flex-wrap`}>
            {Array.isArray(arrFilter) &&
                arrFilter?.map((e, index) =>
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
                    ) : e?.slug?.includes('investor') ? (
                        <ItemFilterInvestor
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
                        translations: [
                            {
                                langCode: 'vi',
                                title: 'Thêm',
                            },
                            {
                                langCode: 'en',
                                title: 'Other',
                            },
                            {
                                langCode: 'kr',
                                title: '다른',
                            },
                            {
                                langCode: 'cn',
                                title: '其他',
                            },
                        ],
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
