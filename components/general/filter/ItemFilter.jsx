'use client'
import useClickOutSide from '@/hooks/useClickOutSide'
import { useEffect } from 'react'
import FilterCheckBox from './FilterCheckBox'

export default function ItemFilter({ setIndexFilter, indexFilter, index, e }) {
    const [sideRef, isOutSide] = useClickOutSide()
    useEffect(() => {
        isOutSide && setIndexFilter(-1)
    }, [isOutSide])
    return (
        <li
            className={`${
                indexFilter === index ? 'bg-logo' : 'bg-white'
            } relative rounded-[6.25vw] h-fit w-fit border border-solid border-logo`}
            ref={sideRef}
        >
            <span
                onClick={() => {
                    indexFilter !== index ? setIndexFilter(index) : setIndexFilter(-1)
                }}
                className={`${
                    indexFilter === index ? 'text-white' : 'text-den'
                } rounded-[6.25vw] title14-400-150 block py-[0.59vw] px-[1.5vw] cursor-pointer`}
            >
                {e}
            </span>
            <FilterCheckBox
                className={indexFilter !== index && 'hidden'}
                setIndexFilter={setIndexFilter}
            />
        </li>
    )
}
