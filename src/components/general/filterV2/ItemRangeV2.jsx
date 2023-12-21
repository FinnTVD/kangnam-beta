'use client'
import useClickOutSide from '@/hooks/useClickOutSide'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { memo, useEffect, useState } from 'react'
import { listAreaProject, listAreaProjectP, listPriceHire, listPriceResale } from '@/utils'
import { SlidersCustom } from '@/components/ui/SlidersCustom'

const ItemRangeV2 = ({ item, indexFilter, setIndexFilter, index, t, isHire, isPrice, isProject, lang }) => {
    const router = useRouter()
    const pathName = usePathname()
    const searchParams = useSearchParams()
    const searchMin = searchParams.get(isPrice ? 'minPrice' : 'minArea')
    const searchMax = searchParams.get(isPrice ? 'maxPrice' : 'maxArea')

    const handleRenderMax = () => {
        if (isHire) {
            if (isPrice) {
                return 100
            } else {
                return 250
            }
        }
        if (isProject) {
            if (isPrice) {
                return 100
            } else {
                return 2000
            }
        }
        if (isPrice) {
            return 20
        } else {
            return 250
        }
    }
    const [priceRange, setPriceRange] = useState([searchMin || 0, searchMax || handleRenderMax()])
    const [isChangeRange, setIsChangeRange] = useState(searchMin && searchMax ? true : false)

    const [sideRef, isOutSide] = useClickOutSide()
    const handleGenderId = () => {
        const init = []
        const a = searchParams.get(isPrice ? 'minPrice' : 'minArea')
        const b = searchParams.get(isPrice ? 'maxPrice' : 'maxArea')
        a && init.push(a)
        b && init.push(b)
        return init
    }
    const [lh, setLh] = useState(handleGenderId())
    useEffect(() => {
        setLh(handleGenderId())
    }, [searchParams])

    useEffect(() => {
        isOutSide && setIndexFilter(-1)
    }, [isOutSide])

    const handlePriceRange = () => {
        const paramNew = new URLSearchParams(searchParams)
        if (isPrice) {
            paramNew.set('minPrice', priceRange[0] || '')
            paramNew.set('maxPrice', priceRange[1] || '')
        } else {
            paramNew.set('minArea', priceRange[0] || '')
            paramNew.set('maxArea', priceRange[1] || '')
        }

        router.push(pathName + '?' + paramNew.toString(), {
            scroll: false,
        })
        setIndexFilter(-1)
    }

    const handleClickPriceRange = (a, b) => {
        const paramNew = new URLSearchParams(searchParams)
        if (isPrice) {
            paramNew.set('minPrice', a || '')
            paramNew.set('maxPrice', b || '')
        } else {
            paramNew.set('minArea', a || '')
            paramNew.set('maxArea', b || '')
        }

        router.push(pathName + '?' + paramNew.toString(), {
            scroll: false,
        })
        setIsChangeRange(true)
        setIndexFilter(-1)
    }

    const handleChangeRange = (value) => {
        setIsChangeRange(false)
        setPriceRange(value)
    }
    const handleTitleFilter = (placeholder = '') => {
        if (isHire) {
            if (isPrice) {
                return ` ${placeholder ? placeholder + ' ' : ''}(${t?.projects?.filterSecond?.million} - VND)`
            } else {
                return ' (m²)'
            }
        } else {
            if (isPrice) {
                return ` ${placeholder ? placeholder + ' ' : ''}(${t?.projects?.filterSecond?.billion} - VND)`
            } else {
                return ' (m²)'
            }
        }
    }

    const handleReset = () => {
        const paramNew = new URLSearchParams(searchParams)
        if (isPrice) {
            paramNew.set('minPrice', '')
            paramNew.set('maxPrice', '')
            router.push(pathName + '?' + paramNew.toString(), {
                scroll: false,
            })
        } else {
            paramNew.set('minArea', '')
            paramNew.set('maxArea', '')
            router.push(pathName + '?' + paramNew.toString(), {
                scroll: false,
            })
        }

        setIndexFilter(-1)
    }

    const handleRenderAreaAndPrice = () => {
        if (isHire) {
            if (isPrice) {
                return listPriceHire
            } else {
                return listAreaProject
            }
        }
        if (isProject) {
            if (isPrice) {
                return listPriceHire
            } else {
                return listAreaProjectP
            }
        }
        if (isPrice) {
            return listPriceResale
        } else {
            return listAreaProject
        }
    }

    const handleRenderStep = () => {
        if (isHire) {
            if (isPrice) {
                return 5
            } else {
                return 10
            }
        }
        if (isProject) {
            if (isPrice) {
                return 5
            } else {
                return 50
            }
        }
        if (isPrice) {
            return 1
        } else {
            return 10
        }
    }

    return (
        <li
            ref={sideRef}
            className={`${
                indexFilter === index ? 'bg-logo' : 'bg-white'
            } itemFilter-${index} rounded-[10vw] h-fit w-fit border border-solid border-logo md:relative`}
        >
            <div className='relative'>
                <span
                    className={`${
                        indexFilter === index ? 'text-white' : 'text-den'
                    } rounded-[10vw] title14-400-150 block py-[0.59vw] px-[1.5vw] max-md:py-[1.73vw] max-md:px-[4.43vw] cursor-pointer max-md:title-mb12-400-150 max-md:whitespace-nowrap max-md:box-content max-lg:title-tl12`}
                    onClick={() => {
                        if (index === indexFilter) {
                            return setIndexFilter(-1)
                        }
                        setIndexFilter(index)
                    }}
                >
                    {item?.translations?.find((e) => e?.langCode === lang)?.title || item?.title}
                </span>
                <span
                    className={`${
                        lh?.length ? '' : 'hidden'
                    } bg-logo w-[1.5vw] h-[1.5vw] flex justify-center items-center rounded-full title14-400-150 text-white absolute top-0 right-0 -translate-y-1/2 border border-solid border-white max-md:w-[4.5vw] max-md:h-[4.5vw] title-mb12-400-150`}
                >
                    {lh?.length ? 1 : ''}
                </span>
            </div>
            <div
                className={`${
                    indexFilter === index ? '' : 'hidden'
                } absolute z-50 left-0 -bottom-[1.5vw] translate-y-full flex flex-col shadow-boxFilter rounded-[0.75vw] bg-white w-[22.875vw] gap-y-[2.3vw] max-md:gap-y-[6.4vw] transition-all duration-[2s] ease-linear max-md:w-[95vw] max-md:rounded-xl max-lg:w-[50vw]`}
            >
                <div className='px-[1.5vw] pt-[1.5vw] max-md:pt-[6.4vw] max-md:px-[5.87vw]'>
                    <p className='text-den title16-600-150 whitespace-nowrap mb-[0.5vw] max-md:mb-[6.4vw] max-md:title-mb16-600-150 max-lg:title-tl16'>
                        {t?.projects?.filter1?.[item?.titleLang] + handleTitleFilter()}
                    </p>

                    <ul className='grid grid-cols-2 gap-[0.5vw] max-lg:gap-[1.5vw]'>
                        {handleRenderAreaAndPrice()?.map((e, index) => (
                            <li
                                className={`${
                                    searchMin == e?.min && searchMax == e?.max && isChangeRange
                                        ? 'bg-[#d6a279] text-white'
                                        : 'bg-gray-400/20 text-den'
                                } cursor-pointer text-[0.75vw] max-lg:text-[1.75vw] py-[0.5vw] max-lg:py-[1vw] px-[1vw] font-bold rounded-md hover:bg-[#d6a279] hover:text-white max-sm:text-[3.45vw]`}
                                key={index}
                                onClick={() => {
                                    setPriceRange([e?.min, e?.max])
                                    handleClickPriceRange(e?.min, e?.max)
                                }}
                            >
                                {e?.title}
                            </li>
                        ))}
                    </ul>
                    <p className='text-den title16-600-150 whitespace-nowrap mt-[0.5vw] mb-[0.25vw] max-md:mb-[6.4vw] max-md:title-mb16-600-150 max-lg:title-tl16'>
                        {t?.projects?.filterSecond?.orSelect + handleTitleFilter(t?.projects?.filterSecond?.price)}
                    </p>
                    <SlidersCustom
                        isShowValue
                        // prefixValue='triệu'
                        handleValueChange={handleChangeRange}
                        value={[...priceRange]}
                        min={0}
                        max={handleRenderMax()}
                        step={handleRenderStep()}
                    />
                </div>
                <div className='border-t border-solid border-black01 flex justify-between items-center py-[1vw] px-[1.5vw] max-md:py-[5.6vw] max-md:px-[6.4vw]'>
                    <span
                        onClick={handleReset}
                        className='cursor-pointer title14-400-150 text-den max-md:title-mb14-400-150 py-[0.28vw] pr-[1vw] max-md:py-[1.2vw] max-md:pr-[4.27vw] max-lg:title-tl14'
                    >
                        {t?.projects?.filter1?.reset}
                    </span>
                    <div className='flex gap-x-[0.63vw] max-md:gap-x-[2.67vw]'>
                        <div
                            onClick={() => setIndexFilter(-1)}
                            className='py-[0.28vw] px-[1vw] rounded-[10vw] border border-solid border-logo text-den title14-400-150 max-md:title-mb14-400-150 max-md:py-[1.2vw] max-md:px-[4.27vw] flex items-center justify-center cursor-pointer max-lg:title-tl14'
                        >
                            {t?.projects?.filter1?.cancel}
                        </div>
                        <button
                            onClick={handlePriceRange}
                            className='py-[0.28vw] px-[1vw] rounded-[10vw] border border-solid border-logo text-logo title14-400-150 max-md:title-mb14-400-150 max-md:py-[1.2vw] max-md:px-[4.27vw] max-lg:title-tl14'
                        >
                            {t?.projects?.filter1?.apply}
                        </button>
                    </div>
                </div>
            </div>
        </li>
    )
}
export default memo(ItemRangeV2)
