'use client'
import useClickOutSide from '@/hooks/useClickOutSide'
import { useEffect } from 'react'
import FilterCheckBox from './FilterCheckBox'

export default function ItemFilter({ setIndexFilter, indexFilter, index, e, isMobile }) {
    const [sideRef, isOutSide] = useClickOutSide()
    useEffect(() => {
        isOutSide && setIndexFilter(-1)
    }, [isOutSide])
    return (
        <li
            className={`${indexFilter === index ? 'bg-logo' : 'bg-white'} ${
                isMobile ? '' : 'relative'
            } rounded-[10vw] h-fit w-fit border border-solid border-logo`}
            ref={sideRef}
        >
            <span
                onClick={() => {
                    indexFilter !== index ? setIndexFilter(index) : setIndexFilter(-1)
                }}
                className={`${
                    indexFilter === index ? 'text-white' : 'text-den'
                } rounded-[10vw] title14-400-150 block py-[0.59vw] px-[1.5vw] max-md:py-[1.73vw] max-md:px-[4.43vw] cursor-pointer title-mb12-400-150 max-md:whitespace-nowrap max-md:box-content`}
            >
                {e}
            </span>
            <FilterCheckBox
                className={indexFilter !== index && 'hidden'}
                setIndexFilter={setIndexFilter}
                index={index}
            />
        </li>
    )
}
