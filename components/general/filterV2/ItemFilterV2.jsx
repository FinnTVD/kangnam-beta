'use client'
import useClickOutSide from '@/hooks/useClickOutSide'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { memo, useCallback, useEffect, useState } from 'react'
import useSWR from 'swr'
import InputCheckBox from './InputCheckBox'
const fetcher = (...args) => fetch(...args).then((res) => res.json())

let dataNew = []
const ItemFilterV2 = ({ item, indexFilter, setIndexFilter, index, lang, isMobile }) => {
    const router = useRouter()
    const pathName = usePathname()
    const searchParams = useSearchParams()
    const [sideRef, isOutSide] = useClickOutSide()
    // const lh = searchParams.get(item?.slug)?.split('--')
    const [lh, setLh] = useState(searchParams.get(item?.slug)?.split('--'))
    const { data, isLoading, error } = useSWR(`${process.env.NEXT_PUBLIC_API}${item?.api}`, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })

    useEffect(() => {
        setLh(searchParams.get(item?.slug)?.split('--'))
    }, [searchParams])

    useEffect(() => {
        isOutSide && setIndexFilter(-1)
    }, [isOutSide])

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)

            if (!value) return params.toString().replace(name + '=', '')
            return params.toString()
        },
        [searchParams],
    )

    const handleCheckValueInput = (e) => {
        e.preventDefault()
        const b = []

        Array.from(e?.target)?.map((i) => {
            if (i?.checked) {
                b.push(i?.id)
            }
        })

        let search = b.join('--')

        router.push(pathName + '?' + createQueryString(item?.slug, search), {
            scroll: false,
        })
        setIndexFilter(-1)
    }

    if (item?.api === '/property-category' && isMobile) {
        dataNew = data?.data?.filter((e) => e?.id !== '05d52397-71a8-4ecf-9a86-ee37965332ef')
    } else {
        dataNew = data?.data
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
            <form
                onSubmit={handleCheckValueInput}
                autoComplete='false'
                className={`${
                    indexFilter === index ? '' : 'hidden'
                } absolute z-50 left-0 -bottom-[1.5vw] translate-y-full flex flex-col shadow-boxFilter rounded-[0.75vw] bg-white w-[20.875vw] gap-y-[2.3vw] max-md:gap-y-[6.4vw] transition-all duration-[2s] ease-linear max-md:w-[94vw] max-md:rounded-xl max-lg:w-[50vw]`}
            >
                <div className='px-[1.5vw] pt-[1.5vw] max-md:pt-[6.4vw] max-md:px-[5.87vw]'>
                    <p className='text-den title16-600-150 whitespace-nowrap mb-[1.5vw] max-md:mb-[6.4vw] max-md:title-mb16-600-150 max-lg:title-tl16'>
                        Chọn loại hình bất động sản
                    </p>
                    <div
                        className={`grid grid-cols-2 gap-x-[2.3vw] gap-y-[1vw] max-md:gap-x-[9.07vw] max-md:gap-y-[4.27vw]`}
                    >
                        {Array.isArray(dataNew) &&
                            dataNew?.map((e, index) => (
                                <InputCheckBox
                                    key={index}
                                    e={e}
                                    lang={lang}
                                    lh={lh}
                                    searchParams={searchParams}
                                />
                            ))}
                    </div>
                </div>
                <div className='border-t border-solid border-black01 flex justify-between items-center py-[1vw] px-[1.5vw] max-md:py-[5.6vw] max-md:px-[6.4vw]'>
                    <span
                        onClick={() => {
                            router.push(pathName + '?' + createQueryString(item?.slug, ''), {
                                scroll: false,
                            })
                            setIndexFilter(-1)
                        }}
                        className='cursor-pointer title14-400-150 text-den max-md:title-mb14-400-150 py-[0.28vw] pr-[1vw] max-md:py-[1.2vw] max-md:pr-[4.27vw] max-lg:title-tl14'
                    >
                        Đặt lại
                    </span>
                    <div className='flex gap-x-[0.63vw] max-md:gap-x-[2.67vw]'>
                        <div
                            onClick={() => setIndexFilter(-1)}
                            className='py-[0.28vw] px-[1vw] rounded-[10vw] border border-solid border-logo text-den title14-400-150 max-md:title-mb14-400-150 max-md:py-[1.2vw] max-md:px-[4.27vw] flex items-center justify-center cursor-pointer max-lg:title-tl14'
                        >
                            Hủy
                        </div>
                        <button className='py-[0.28vw] px-[1vw] rounded-[10vw] border border-solid border-logo text-logo title14-400-150 max-md:title-mb14-400-150 max-md:py-[1.2vw] max-md:px-[4.27vw] max-lg:title-tl14'>
                            Áp dụng
                        </button>
                    </div>
                </div>
            </form>
        </li>
    )
}
export default memo(ItemFilterV2)
