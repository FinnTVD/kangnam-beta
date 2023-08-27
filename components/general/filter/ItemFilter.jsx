'use client'
import useClickOutSide from '@/hooks/useClickOutSide'
import { useEffect } from 'react'
import FilterCheckBox from './FilterCheckBox'
import useStore from '@/app/[lang]/(store)/store'

export default function ItemFilter({ setIndexFilter, indexFilter, index, e, isMobile }) {
    const propertyAreaType = useStore((state) => state.propertyAreaType)
    const propertyType = useStore((state) => state.propertyType)
    const propertyCategory = useStore((state) => state.propertyCategory)
    const [sideRef, isOutSide] = useClickOutSide()

    useEffect(() => {
        isOutSide && setIndexFilter(-1)
    }, [isOutSide])

    return (
        <li
            className={`${indexFilter === index ? 'bg-logo' : 'bg-white'} ${
                isMobile ? '' : 'relative'
            } rounded-[10vw] h-fit w-fit border border-solid border-logo relative`}
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
            <span
                className={`${
                    index === 1 && propertyAreaType?.length
                        ? ''
                        : index === 0 && propertyType?.length
                        ? ''
                        : index === 2 && propertyCategory?.length
                        ? ''
                        : 'hidden'
                } bg-logo w-[1.5vw] h-[1.5vw] flex justify-center items-center rounded-full title14-400-150 text-white absolute top-0 right-0 -translate-y-1/2 border border-solid border-white`}
            >
                {index === 1 && propertyAreaType?.length
                    ? propertyAreaType?.length
                    : index === 0 && propertyType?.length
                    ? propertyType?.length
                    : index === 2 && propertyCategory?.length
                    ? propertyCategory?.length
                    : ''}
            </span>
            <FilterCheckBox
                className={indexFilter !== index && 'hidden'}
                setIndexFilter={setIndexFilter}
                index={index}
                isOutSide={isOutSide}
            />
        </li>
    )
}
