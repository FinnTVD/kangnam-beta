'use client'
import useClickOutSide from '@/hooks/useClickOutSide'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { memo, useEffect, useState } from 'react'
import { latDefault, levelZoomDefault, listAreaProject, listPriceHire, listPriceResale, lngDefault } from '@/utils'
import { SlidersCustom } from '@/components/ui/SlidersCustom'

const ItemRangeV2 = ({ item, indexFilter, setIndexFilter, index, lang, isMobile, t, isHire, isPrice }) => {
    const router = useRouter()
    const pathName = usePathname()
    const searchParams = useSearchParams()
    const searchMin = searchParams.get(isPrice ? 'minPrice' : 'minArea')
    const searchMax = searchParams.get(isPrice ? 'maxPrice' : 'maxArea')
    const handleInitEnd = () => {
        if (isHire) {
            if (isPrice) {
                return 100
            } else {
                return 250
            }
        } else {
            if (isPrice) {
                return 20
            } else {
                return 250
            }
        }
    }

    const [priceRange, setPriceRange] = useState([searchMin || 0, searchMax || handleInitEnd()])
    const [isChangeRange, setIsChangeRange] = useState(searchMin && searchMax ? true : false)

    const [sideRef, isOutSide] = useClickOutSide()
    // const lh = searchParams.get(item?.slug)?.split('--')
    const [lh, setLh] = useState(searchParams.get(item?.slug)?.split('--'))
    useEffect(() => {
        setLh(searchParams.get(item?.slug)?.split('--'))
    }, [searchParams])

    useEffect(() => {
        isOutSide && setIndexFilter(-1)
    }, [isOutSide])

    const handlePriceRange = () => {
        const paramNew = new URLSearchParams(searchParams)
        if (isPrice) {
            paramNew.set('minPrice', priceRange[0])
            paramNew.set('maxPrice', priceRange[1])
        } else {
            paramNew.set('minArea', priceRange[0])
            paramNew.set('maxArea', priceRange[1])
        }

        router.push(pathName + '?' + paramNew.toString(), {
            scroll: false,
        })
        setIndexFilter(-1)
    }

    const handleClickPriceRange = (a, b) => {
        const paramNew = new URLSearchParams(searchParams)
        if (isPrice) {
            paramNew.set('minPrice', a)
            paramNew.set('maxPrice', b)
        } else {
            paramNew.set('minArea', a)
            paramNew.set('maxArea', b)
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
                return ` ${placeholder ? placeholder + ' ' : ''}(triệu - VND)`
            } else {
                return ' (m²)'
            }
        } else {
            if (isPrice) {
                return ` ${placeholder ? placeholder + ' ' : ''}(tỷ - VND)`
            } else {
                return ' (m²)'
            }
        }
    }

    const handleReset = () => {
        if (index === 1) {
            const paramNew = new URLSearchParams(searchParams)
            paramNew.set(item?.slug, '')
            paramNew.set('districtId', '')
            paramNew.set('wardId', '')
            paramNew.set('cityId', '')
            paramNew.set('isFly', 1)
            paramNew.set('levelZoom', levelZoomDefault)
            paramNew.set('lng', lngDefault)
            paramNew.set('lat', latDefault)
            router.push(pathName + '?' + paramNew.toString(), {
                scroll: false,
            })
        } else {
            const paramNew = new URLSearchParams(searchParams)
            paramNew.set(item?.slug, '')
            router.push(pathName + '?' + paramNew.toString(), {
                scroll: false,
            })
        }
        setIndexFilter(-1)
        window.localStorage.removeItem('dataArea')
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
                    {item?.title}
                </span>
                <span
                    className={`${
                        lh?.length && lh[0] ? '' : 'hidden'
                    } bg-logo w-[1.5vw] h-[1.5vw] flex justify-center items-center rounded-full title14-400-150 text-white absolute top-0 right-0 -translate-y-1/2 border border-solid border-white max-md:w-[4.5vw] max-md:h-[4.5vw] title-mb12-400-150`}
                >
                    {lh?.length && lh[0] ? lh?.length : ''}
                </span>
            </div>
            <div
                className={`${
                    indexFilter === index ? '' : 'hidden'
                } absolute z-50 left-0 -bottom-[1.5vw] translate-y-full flex flex-col shadow-boxFilter rounded-[0.75vw] bg-white w-[20.875vw] gap-y-[2.3vw] max-md:gap-y-[6.4vw] transition-all duration-[2s] ease-linear max-md:w-[94vw] max-md:rounded-xl max-lg:w-[50vw]`}
            >
                <div className='px-[1.5vw] pt-[1.5vw] max-md:pt-[6.4vw] max-md:px-[5.87vw]'>
                    <p className='text-den title16-600-150 whitespace-nowrap mb-[0.5vw] max-md:mb-[6.4vw] max-md:title-mb16-600-150 max-lg:title-tl16'>
                        {t?.projects?.filter1?.[item?.slug] + handleTitleFilter()}
                    </p>
                    {isHire ? (
                        isPrice ? (
                            <>
                                <ul className='grid grid-cols-2 gap-[0.5vw] '>
                                    {listPriceHire?.map((e, index) => (
                                        <li
                                            className={`${
                                                searchMin == e?.min && searchMax == e?.max && isChangeRange
                                                    ? 'bg-[#d6a279] text-white'
                                                    : 'bg-gray-400/20 text-den'
                                            } cursor-pointer text-[0.75vw] py-[0.5vw] px-[1vw] font-bold rounded-md hover:bg-[#d6a279] hover:text-white`}
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
                                    {'Hoặc chọn' + handleTitleFilter('giá')}
                                </p>
                                <SlidersCustom
                                    isShowValue
                                    // prefixValue='triệu'
                                    handleValueChange={handleChangeRange}
                                    value={[...priceRange]}
                                    min={0}
                                    max={100}
                                    step={1}
                                />
                            </>
                        ) : (
                            <>
                                <ul className='grid grid-cols-2 gap-[0.5vw] '>
                                    {listAreaProject?.map((e, index) => (
                                        <li
                                            className={`${
                                                searchMin == e?.min && searchMax == e?.max && isChangeRange
                                                    ? 'bg-[#d6a279] text-white'
                                                    : 'bg-gray-400/20 text-den'
                                            } cursor-pointer text-[0.75vw] py-[0.5vw] px-[1vw] font-bold rounded-md hover:bg-[#d6a279] hover:text-white`}
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
                                    {'Hoặc chọn' + handleTitleFilter('giá')}
                                </p>
                                <SlidersCustom
                                    isShowValue
                                    // prefixValue='triệu'
                                    handleValueChange={handleChangeRange}
                                    value={[...priceRange]}
                                    min={0}
                                    max={250}
                                    step={1}
                                />
                            </>
                        )
                    ) : (
                        <>
                            <ul className='grid grid-cols-2 gap-[0.5vw]'>
                                {listPriceResale?.map((e, index) => (
                                    <li
                                        className={`${
                                            searchMin == e?.min && searchMax == e?.max && isChangeRange
                                                ? 'bg-[#d6a279] text-white'
                                                : 'bg-gray-400/20 text-den'
                                        } cursor-pointer text-[0.75vw] py-[0.5vw] px-[1vw] font-bold rounded-md hover:bg-[#d6a279] hover:text-white`}
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
                                {'Hoặc chọn' + handleTitleFilter('giá')}
                            </p>
                            <SlidersCustom
                                isShowValue
                                // prefixValue='tỷ'
                                value={[...priceRange]}
                                handleValueChange={handleChangeRange}
                                min={0}
                                max={20}
                                step={0.5}
                            />
                        </>
                    )}
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
