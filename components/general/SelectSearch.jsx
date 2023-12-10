'use client'

import useClickOutSide from '@/hooks/useClickOutSide'
import { memo, useEffect, useState } from 'react'
import useStore from '@/app/[lang]/(store)/store'
import { usePathname } from 'next/navigation'

const objProject = {
    id: '',
    translations: [
        {
            languageCode: 'vi_VN',
            name: 'Dự án',
            alias: 'du-an',
            propertyCategoryId: '',
        },
        {
            languageCode: 'en_US',
            alias: 'projects',
            name: 'Project',
            propertyCategoryId: '',
        },
        {
            languageCode: 'zh_CN',
            alias: '프로젝트',
            name: 'Project',
            propertyCategoryId: '',
        },
        {
            languageCode: 'ko_KR',
            alias: '분양',
            name: 'Project',
            propertyCategoryId: '',
        },
    ],
}

const SelectSearch = ({ type = 'dark', menu = false, lang, data }) => {
    const pathName = usePathname()
    const setListData = useStore((state) => state.setListData)
    const listData = useStore((state) => state.listData)
    const [isOpen, setIsOpen] = useState(false)
    const [sideRef, isOutSide] = useClickOutSide()

    useEffect(() => {
        isOutSide && setIsOpen(false)
    }, [isOutSide])

    useEffect(() => {
        if (data) {
            const dataNew = data?.data?.filter((e) =>
                e?.translations?.find((i) => i?.alias?.includes(pathName?.slice(1))),
            )
            dataNew?.length === 1 ? setListData(dataNew) : setListData([objProject, ...data?.data])
        }
    }, [data, pathName])

    const handleChangeSearch = (item) => {
        setListData([listData?.find((e) => e.id === item.id), ...listData?.filter((e) => e.id !== item.id)])
        setIsOpen(false)
        // handleCheckValueInput(item)
    }

    return (
        <div
            ref={sideRef}
            onClick={() => setIsOpen(!isOpen)}
            className={`${type === 'white' ? 'text-white' : 'text-den'} ${
                menu ? 'max-md:title-mb12-400-130' : 'max-md:title-mb14-400-130'
            } gap-x-[0.13vw] select-none cursor-pointer flex items-center max-lg:text-[2.56vw] title14-400-130 whitespace-nowrap relative`}
        >
            {listData[0]?.translations?.find((e) => e?.languageCode?.toLowerCase()?.includes(lang))?.name}
            {listData?.length > 1 && (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke={`${type === 'white' ? 'white' : '#D6A279'}`}
                    className='w-[1vw] h-[1vw] max-md:w-[5vw] max-md:h-[3vw] max-lg:w-[2.5vw] max-lg:h-auto'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                    />
                </svg>
            )}
            <ul
                style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}
                className={`${
                    !isOpen || isOutSide ? 'hidden' : ''
                } absolute top-[2.5vw] -left-[1vw] rounded-md bg-white py-[0.5vw] text-den max-md:top-[7.5vw] max-md:-left-[3vw] max-md:py-[1vw]`}
            >
                {listData?.length > 1 &&
                    listData?.slice(1)?.map((e, index) => (
                        <li
                            onClick={() => handleChangeSearch(e)}
                            key={index}
                            className={`${
                                menu ? 'title-mb12-400-130' : 'title-mb14-400-130'
                            } py-[0.5vw] max-md:py-[1.5vw] max-md:px-[3vw] px-[1vw] hover:bg-[#f3f4f7] title-tl12-400-130`}
                        >
                            {e?.translations?.find((i) => i?.languageCode?.toLowerCase()?.includes(lang))?.name}
                        </li>
                    ))}
            </ul>
        </div>
    )
}
export default memo(SelectSearch)
