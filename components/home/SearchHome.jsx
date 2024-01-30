'use client'
import Image from 'next/image'
import useStore from '@/app/[lang]/(store)/store'
import SearchGlobal from './SearchGlobal'
import { useCallback } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function SearchHome({ data, lang, t, homePagePropertyType }) {
    const setValueSearch = useStore((state) => state.setValueSearch)
    const setIsClose = useStore((state) => state.setIsClose)
    const router = useRouter()
    const pathName = usePathname()
    const searchParams = useSearchParams()

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)

            return params.toString()
        },
        [searchParams],
    )

    const handleFilter = (e) => {
        const b = []
        b.push(e?.id)
        let search = b.join('--')
        router.replace(pathName + '?' + createQueryString('propertyTypeIds', search), {
            scroll: false,
        })
        if (typeof window !== 'undefined') {
            const imgMapDetail = document.getElementById('boxMap')
            if (imgMapDetail) {
                imgMapDetail?.scrollIntoView({ behavior: 'smooth' })
            } else {
                const selling = document.getElementById('selling')
                selling?.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }

    const handleChangeSuggestLang = (init) => {
        switch (lang) {
            case 'vi':
                return data?.suggest?.slice(0, init)
            case 'en':
                return data?.suggestEn?.slice(0, init)
            case 'kr':
                return data?.suggestKo?.slice(0, init)
            case 'cn':
                return data?.suggestCn?.slice(0, init)
            default:
                return data?.suggest?.slice(0, init)
        }
    }
    return (
        <div className='absolute top-[45%] -translate-y-1/2 left-[7.5vw] w-[calc(100vw-15vw)] max-md:w-[calc(100vw-5.34vw)] z-10 max-md:z-40 max-md:left-[2.67vw] max-md:top-[37.87vw] max-md:translate-y-0'>
            <p className='title18-400-160 title-mb12-400-160 text-white max-md:-tracking-[0.6px] title-tl14-400-160 font-semibold uppercase max-lg:hidden'>
                {t?.homepage?.section1?.subtitle}
            </p>
            <h1 className='mt-[0.5vw] max-md:mt-[1.07vw] mb-[1.87vw] max-md:mb-[4.27vw] text-white capitalize title60 title-mb22-800-130 max-md:-tracking-[0.66px] title-tl42'>
                {t?.homepage?.section1?.title}
            </h1>
            <SearchGlobal
                isIcon={true}
                lang={lang}
            />
            <div className='flex items-center my-[1.88vw] max-md:mt-[4.27vw] max-md:mb-[2.67vw]'>
                <span className='mr-[0.81vw] max-md:mr-[4.27vw] text-white title16-600-160 max-lg:title-tl14-600-160 max-md:title-mb12-600-160 whitespace-nowrap'>
                    {t?.homepage?.section1?.suggest}:
                </span>
                <ul className='flex gap-[0.5vw] max-md:gap-x-[1.33vw] flex-wrap max-md:gap-y-[1.5vw]'>
                    {handleChangeSuggestLang(10)?.map((e, index) => (
                        <li
                            key={index}
                            className='text-white px-[1.12vw] h-fit w-fit backdrop-blur-[3px] bg-suggest rounded-[6.25vw] py-[0.5vw] max-md:py-[1.33vw] max-md:px-[2.13vw] cursor-pointer title14-400-150 title-mb10-400-150 title-tl12-400-150 whitespace-nowrap'
                            onClick={() => {
                                setValueSearch(e)
                                setTimeout(() => {
                                    setIsClose(false)
                                }, 500)
                            }}
                        >
                            {e}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='flex gap-x-[1.06vw] gap-y-[1vw] max-lg:gap-x-[3vw] max-md:gap-x-[2vw] max-md:gap-y-[2.67vw] max-lg:gap-y-[2vw] flex-wrap'>
                {homePagePropertyType?.length > 0 &&
                    homePagePropertyType?.map((e, index) => (
                        <div
                            key={index}
                            onClick={() => handleFilter(e)}
                            className='py-[0.85vw] group h-fit w-fit cursor-pointer px-[1.25vw] border border-solid border-logo flex gap-x-[0.5vw] max-md:gap-x-[2.13vw] max-md:py-[2.67vw] max-md:px-[4vw] rounded-[6.25vw] items-center bg-category backdrop-blur-[7.5px]'
                        >
                            <Image
                                src={e?.icon || '/images/px.png'}
                                alt={
                                    e?.translations?.find((i) => i?.languageCode?.toLowerCase()?.includes(lang))
                                        ?.name || e?.title
                                }
                                width={40}
                                height={40}
                                priority
                                className='object-cover transition-all duration-150 group-hover:scale-125 w-[1.5vw] h-[1.5vw] max-md:w-[4.8vw] max-lg:w-[3vw] max-lg:h-[3vw] max-md:h-[4.8vw]'
                            />
                            <span className='text-white title14-400-150 title-mb12-400-150 relative title-tl12-400-150 before:absolute before:content-[""] before:top-0 before:left-0 before:w-full before:h-full before:border-b before:border-white before:scale-x-0 before:origin-right before:transition-transform before:duration-300 group-hover:before:scale-x-100 group-hover:before:origin-left whitespace-nowrap inline-block'>
                                {e?.translations?.find((i) => i?.languageCode?.toLowerCase()?.includes(lang))?.name ||
                                    e?.title}
                            </span>
                        </div>
                    ))}
            </div>
        </div>
    )
}
