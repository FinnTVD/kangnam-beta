'use client'
import useClickOutSide from '@/hooks/useClickOutSide'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { memo, useEffect, useState } from 'react'
import InputCheckBox from './InputCheckBox'
import useStore from '@/app/[lang]/(store)/store'

const ItemFilterInvestor = ({ item, indexFilter, setIndexFilter, index, lang, isMobile, t }) => {
    const router = useRouter()
    const pathName = usePathname()
    const searchParams = useSearchParams()
    const [dataNewInvestor, setDataNewInvestor] = useState([])
    const dataInvestor = useStore((state) => state.dataInvestor)

    const [sideRef, isOutSide] = useClickOutSide()
    // const lh = searchParams.get(item?.slug)?.split('--')
    const [lh, setLh] = useState(searchParams.get(item?.slug)?.split('--'))

    useEffect(() => {
        if (!dataInvestor) return
        const dataNew = []
        dataInvestor?.forEach((item) => {
            if (item.translations?.find((e) => e?.languageCode?.toLowerCase()?.includes(lang))?.investor) {
                dataNew.push(item.translations?.find((e) => e?.languageCode?.toLowerCase()?.includes(lang))?.investor)
            }
        })
        setDataNewInvestor([...new Set(dataNew)])
    }, [dataInvestor])

    useEffect(() => {
        setLh(searchParams.get(item?.slug)?.split('--'))
    }, [searchParams])

    useEffect(() => {
        isOutSide && setIndexFilter(-1)
    }, [isOutSide])

    const handleCheckValueInput = (e) => {
        e.preventDefault()

        const b = []

        Array.from(e?.target)?.map((i) => {
            if (i?.checked) {
                b.push(i?.id)
            }
        })
        const paramNew = new URLSearchParams(searchParams)

        paramNew.set('investor', encodeURI(b.join('--')))
        router.replace(pathName + '?' + paramNew.toString(), {
            scroll: false,
        })
        setIndexFilter(-1)
    }

    const handleReset = () => {
        const paramNew = new URLSearchParams(searchParams)
        paramNew.set('investor', '')
        router.replace(pathName + '?' + paramNew.toString(), {
            scroll: false,
        })
        setIndexFilter(-1)
    }

    return (
        <li
            ref={sideRef}
            className={`${indexFilter === index ? 'bg-logo' : 'bg-white'} ${
                dataNewInvestor?.length === 0 ? 'hidden' : ''
            } itemFilter-${index} rounded-[10vw] h-fit w-fit border border-solid border-logo md:relative`}
        >
            <div className='relative'>
                <span
                    className={`${
                        indexFilter === index ? 'text-white' : 'text-den'
                    } rounded-[10vw] title14-400-150 block py-[0.59vw] px-[1.5vw] max-md:py-[1.73vw] max-md:px-[4.43vw] cursor-pointer max-md:title-mb12-400-150 whitespace-nowrap max-md:box-content max-lg:title-tl12`}
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
                    <p className='text-den title16-600-150 whitespace-nowrap mb-[1vw] max-md:mb-[6.4vw] max-md:title-mb16-600-150 max-lg:title-tl16'>
                        {t?.projects?.filter1?.[item?.titleLang]}
                    </p>
                    <div
                        className={`grid grid-cols-2 gap-x-[2.3vw] gap-y-[1vw] max-md:gap-x-[9.07vw] max-md:gap-y-[4.27vw]`}
                    >
                        {Array.isArray(dataNewInvestor) &&
                            dataNewInvestor?.map((e, idx) => (
                                <InputCheckBox
                                    key={idx}
                                    e={{
                                        id: e,
                                        title: e,
                                    }}
                                    lang={lang}
                                    lh={lh}
                                    index={index}
                                    searchParams={searchParams}
                                />
                            ))}
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
export default memo(ItemFilterInvestor)
