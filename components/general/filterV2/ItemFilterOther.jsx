'use client'
import useClickOutSide from '@/hooks/useClickOutSide'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { memo, useEffect, useState } from 'react'
import InputCheckBoxAdd from './InputCheckBoxAdd'

let dataBedRoom = [
    {
        id: 'beds-1',
        title: '1 phòng ngủ',
    },
    {
        id: 'beds-2',
        title: '2 phòng ngủ',
    },
    {
        id: 'beds-3',
        title: '3 phòng ngủ',
    },
    {
        id: 'beds-4plus',
        title: '4+ phòng ngủ',
    },
]
let dataBathRoom = [
    {
        id: 'baths-1',
        title: '1 phòng tắm',
    },
    {
        id: 'baths-2',
        title: '2 phòng tắm',
    },
    {
        id: 'baths-3',
        title: '3 phòng tắm',
    },
    {
        id: 'baths-4plus',
        title: '4+ phòng tắm',
    },
]
let originHouse = [
    {
        id: 'orients-north',
        title: 'Bắc',
    },
    {
        id: 'orients-west',
        title: 'Tây',
    },
    {
        id: 'orients-east',
        title: 'Đông',
    },
    {
        id: 'orients-south',
        title: 'Nam',
    },
    {
        id: 'orients-southeast',
        title: 'Đông Nam',
    },
    {
        id: 'orients-northeast',
        title: 'Đông Bắc',
    },
    {
        id: 'orients-southwest',
        title: 'Tây Nam',
    },
    {
        id: 'orients-northwest',
        title: 'Tây Bắc',
    },
]
const ItemFilterOther = ({ item, indexFilter, setIndexFilter, index, lang, isMobile, t }) => {
    const router = useRouter()
    const pathName = usePathname()
    const searchParams = useSearchParams()

    const [sideRef, isOutSide] = useClickOutSide()
    const handleGenderId = (slug) => {
        const init = searchParams.get(slug)?.split('--')
        if (!init) return []
        init?.forEach((e, index) => {
            if (e) {
                init[index] = slug + '-' + e
            }
        })
        return init?.filter((e) => e)
    }

    const [lhBed, setLhBed] = useState(handleGenderId('beds'))
    const [lhBath, setLBath] = useState(handleGenderId('baths'))
    const [lhOrigin, setLhOrigin] = useState(handleGenderId('orients'))

    useEffect(() => {
        setLhBed(handleGenderId('beds'))
        setLBath(handleGenderId('baths'))
        setLhOrigin(handleGenderId('orients'))
    }, [searchParams])

    useEffect(() => {
        isOutSide && setIndexFilter(-1)
    }, [isOutSide])

    const handleCheckValueInput = (e) => {
        e.preventDefault()
        const bed = []
        const bath = []
        const origin = []

        Array.from(e?.target)?.map((i) => {
            if (i?.checked) {
                if (i?.id?.includes('beds')) {
                    bed.push(i?.id?.slice(5))
                }
                if (i?.id?.includes('baths')) {
                    bath.push(i?.id?.slice(6))
                }
                if (i?.id?.includes('orients')) {
                    origin.push(i?.id?.slice(8))
                }
            }
        })

        const paramNew = new URLSearchParams(searchParams)
        paramNew.set('beds', bed?.join('--'))
        paramNew.set('baths', bath?.join('--'))
        paramNew.set('orients', origin?.join('--'))
        router.push(pathName + '?' + paramNew.toString(), {
            scroll: false,
        })
        setIndexFilter(-1)
    }

    const handleReset = () => {
        const paramNew = new URLSearchParams(searchParams)
        paramNew.set('beds', '')
        paramNew.set('baths', '')
        paramNew.set('orients', '')
        router.push(pathName + '?' + paramNew.toString(), {
            scroll: false,
        })
        setIndexFilter(-1)
    }

    return (
        <li
            ref={sideRef}
            className={`${
                indexFilter === index ? 'bg-logo' : 'bg-white'
            } itemFilter-${index} rounded-[10vw] h-fit w-fit border border-solid border-logo`}
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
                        lhBed?.length || lhBath?.length || lhOrigin?.length ? '' : 'hidden'
                    } bg-logo w-[1.5vw] h-[1.5vw] flex justify-center items-center rounded-full title14-400-150 text-white absolute top-0 right-0 -translate-y-1/2 border border-solid border-white max-md:w-[4.5vw] max-md:h-[4.5vw] title-mb12-400-150`}
                >
                    {lhBed?.length + lhBath?.length + lhOrigin?.length}
                </span>
            </div>
            <form
                onSubmit={handleCheckValueInput}
                autoComplete='false'
                className={`${
                    indexFilter === index ? '' : 'hidden'
                } absolute z-50 left-0 -bottom-[1.5vw] translate-y-full flex flex-col shadow-boxFilter rounded-[0.75vw] bg-white w-[55.3vw] gap-y-[2.3vw] max-md:gap-y-[6.4vw] transition-all duration-[2s] ease-linear max-md:w-[94vw] max-md:rounded-xl max-lg:w-[50vw] max-md:left-[2vw]`}
            >
                <div className='px-[1.5vw] pt-[1.5vw] max-md:pt-[6.4vw] max-md:px-[5.87vw]'>
                    <div className='flex '>
                        <div className='flex-1'>
                            <p className='text-den title16-600-150 whitespace-nowrap mb-[1vw] max-md:mb-[6.4vw] max-md:title-mb16-600-150 max-lg:title-tl16'>
                                Chọn số phòng ngủ
                            </p>
                            <div
                                className={`grid grid-cols-2 gap-x-[2.3vw] gap-y-[1vw] max-md:gap-x-[9.07vw] max-md:gap-y-[4.27vw]`}
                            >
                                {dataBedRoom?.map((e, idx) => (
                                    <InputCheckBoxAdd
                                        key={idx}
                                        e={e}
                                        lang={lang}
                                        lh={lhBed}
                                        index={index}
                                        searchParams={searchParams}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className='flex-1'>
                            <p className='text-den title16-600-150 whitespace-nowrap mb-[1vw] max-md:mb-[6.4vw] max-md:title-mb16-600-150 max-lg:title-tl16'>
                                Chọn số phòng tắm
                            </p>
                            <div
                                className={`grid grid-cols-2 gap-x-[2.3vw] gap-y-[1vw] max-md:gap-x-[9.07vw] max-md:gap-y-[4.27vw]`}
                            >
                                {dataBathRoom?.map((e, idx) => (
                                    <InputCheckBoxAdd
                                        key={idx}
                                        e={e}
                                        lang={lang}
                                        lh={lhBath}
                                        index={index}
                                        searchParams={searchParams}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='mt-[1.5vw]'>
                        <p className='text-den title16-600-150 whitespace-nowrap mb-[1vw] max-md:mb-[6.4vw] max-md:title-mb16-600-150 max-lg:title-tl16'>
                            Chọn hướng nhà
                        </p>
                        <div
                            className={`grid grid-cols-2 gap-x-[2.3vw] gap-y-[1vw] max-md:gap-x-[9.07vw] max-md:gap-y-[4.27vw] w-1/2`}
                        >
                            {originHouse?.map((e, idx) => (
                                <InputCheckBoxAdd
                                    key={idx}
                                    e={e}
                                    lang={lang}
                                    lh={lhOrigin}
                                    index={index}
                                    searchParams={searchParams}
                                />
                            ))}
                        </div>
                    </div>
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
                        <button className='py-[0.28vw] px-[1vw] rounded-[10vw] border border-solid border-logo text-logo title14-400-150 max-md:title-mb14-400-150 max-md:py-[1.2vw] max-md:px-[4.27vw] max-lg:title-tl14'>
                            {t?.projects?.filter1?.apply}
                        </button>
                    </div>
                </div>
            </form>
        </li>
    )
}
export default memo(ItemFilterOther)
