'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import SelectSearch from '../general/SelectSearch'
import useDebounce from '@/hooks/useDebounce'
import useSWR from 'swr'
import useStore from '@/app/[lang]/(store)/store'
import { handleCheckLangCode, notifyError, scrollToSection } from '@/utils'
import useClickOutSide from '@/hooks/useClickOutSide'

const arrSuggest = [
    {
        title: 'vinhomes central park',
    },
    {
        title: 'lumiere boulevard',
    },
    {
        title: 'glory heights',
    },
]

const apiKey = 'c6a8fb5d25f0f32c87d1469f6847388c445850643364b94e'

const fetcher = (...args) => fetch(...args).then((res) => res.json())
const fetcherLang = (url, langCode) =>
    fetch(url, { headers: { 'x-language-code': langCode } }).then((res) => res.json())

export default function SearchHome({ data, lang }) {
    const [isClose, setIsClose] = useState(false)
    const [dataProject, setDataProject] = useState([])
    const valueSearch = useStore((state) => state.valueSearch)
    const setValueSearch = useStore((state) => state.setValueSearch)
    const setValueSearchPrev = useStore((state) => state.setValueSearchPrev)
    const debounceValue = useDebounce(valueSearch, 500)
    const cityId = useStore((state) => state.cityId)
    const districtId = useStore((state) => state.districtId)
    const wardId = useStore((state) => state.wardId)
    const setCityId = useStore((state) => state.setCityId)
    const setDistrictId = useStore((state) => state.setDistrictId)
    const setWardId = useStore((state) => state.setWardId)
    const handleChangeCity = useStore((state) => state.handleChangeCity)
    const handleChangeDistrict = useStore((state) => state.handleChangeDistrict)
    const handleChangeWard = useStore((state) => state.handleChangeWard)
    const handleFlyMap = useStore((state) => state.handleFlyMap)
    const setSelectSearch = useStore((state) => state.setSelectSearch)
    const boxMap = useStore((state) => state.boxMap)
    const setIsSubmit = useStore((state) => state.setIsSubmit)
    const isSubmit = useStore((state) => state.isSubmit)
    const dataDistrict = useStore((state) => state.dataDistrict)
    const dataProvinces = useStore((state) => state.dataProvinces)
    const dataWard = useStore((state) => state.dataWard)

    const [sideRef, isOutSide] = useClickOutSide()
    console.log('🚀 ~ file: SearchHome.jsx:55 ~ SearchHome ~ isOutSide:', isOutSide)

    const {
        data: dataSearch,
        isLoading: isLoadingSearch,
        error: errorSearch,
    } = useSWR(
        `https://maps.vietmap.vn/api/search/v3?apikey=${apiKey}${debounceValue ? '&text=' + debounceValue : ''}`,
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        },
    )
    console.log('🚀 ~ file: SearchHome.jsx:60 ~ SearchHome ~ dataSearch:', dataSearch)

    const {
        data: dataProjectCode,
        isLoading: isLoadingProjectCode,
        error: errorProjectCode,
    } = useSWR(
        `${process.env.NEXT_PUBLIC_API}/property?page=1&take=10${debounceValue ? '&q=' + debounceValue : ''}`,
        (url) => fetcherLang(url, handleCheckLangCode(lang)),
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        },
    )

    useEffect(() => {
        if (dataSearch?.length && debounceValue) {
            if (dataSearch[0]?.boundaries?.length === 1) {
                const obj1 = {
                    cityIdSearch: dataSearch[0]?.boundaries[0]?.id,
                }
                callDataProject(obj1)
            }
            if (dataSearch[0]?.boundaries?.length === 2) {
                const obj2 = {
                    districtIdSearch: dataSearch[0]?.boundaries[0]?.id,
                    cityIdSearch: dataSearch[0]?.boundaries[1]?.id,
                }
                callDataProject(obj2)
            }
            if (dataSearch[0]?.boundaries?.length === 3) {
                const obj3 = {
                    wardIdSearch: dataSearch[0]?.boundaries[0]?.id,
                    districtIdSearch: dataSearch[0]?.boundaries[1]?.id,
                    cityIdSearch: dataSearch[0]?.boundaries[2]?.id,
                }
                callDataProject(obj3)
            }
        }
    }, [dataSearch])

    useEffect(() => {
        isOutSide && setIsClose(false)
    }, [isOutSide])

    const callDataProject = async ({ cityIdSearch, districtIdSearch, wardIdSearch }) => {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API}/property?page=1&take=15${cityIdSearch ? '&cityId=' + cityIdSearch : ''}${
                districtIdSearch ? '&districtId=' + districtIdSearch : ''
            }${wardIdSearch ? '&wardId=' + wardIdSearch : ''}`,
        )
        const data = await res.json()
        setDataProject(data)
    }

    const handleSubmit = (e) => {
        e?.preventDefault()
        console.log('submit')
        setIsSubmit(!isSubmit)
        if (dataSearch?.length) {
            handleSelectValueSearch(dataSearch[0])
        } else if (dataProjectCode?.data?.length) {
            handleSelectValueProject(dataProjectCode?.data[0])
        } else if (dataProject?.data?.length) {
            handleSelectValueProject(dataProject?.data[0])
        }
        setIsClose(true)
        scrollToSection(boxMap)
    }

    const handleSelectValueSearch = (e) => {
        setValueSearch(e?.address)
        if (e?.ref_id?.includes('CITY')) {
            //nếu đang ở tỉnh đó và ở level zoom city thì không fly
            // if (e?.boundaries[0]?.id === cityId && !cityId && !wardId) return notifyError('Now, in current city!')
            // if (e?.boundaries[0]?.id === cityId && !districtId) return notifyError('Now, in current city!')
            handleChangeCity(e?.boundaries[0]?.id, dataProvinces)
        }
        if (e?.ref_id?.includes('DIST')) {
            // if (e?.boundaries[0]?.id === districtId && !wardId) return notifyError('Now, in current district!')
            if (e?.boundaries[1]?.id !== cityId) {
                setCityId(e?.boundaries[1]?.id)
            }
            setDistrictId(e?.boundaries[0]?.id)
            handleChangeDistrict(e?.boundaries[0]?.id, dataDistrict)
        }
        if (e?.ref_id?.includes('WARD')) {
            // if (e?.boundaries[0]?.id === wardId) return notifyError('Now, in current ward!')
            if (e?.boundaries[2]?.id !== cityId) {
                setCityId(e?.boundaries[2]?.id)
            }
            if (e?.boundaries[1]?.id !== districtId) {
                setDistrictId(e?.boundaries[1]?.id)
            }
            setWardId(e?.boundaries[0]?.id)
            handleChangeWard(e?.boundaries[0]?.id, dataWard)
        }
    }

    const handleSelectValueProject = (e) => {
        setValueSearch(e?.address?.display)
        if (Number(e?.address?.cityId) !== cityId) {
            setCityId(Number(e?.address?.cityId))
        }
        if (Number(e?.address?.districtId) !== districtId) {
            setDistrictId(Number(e?.address?.districtId))
        }
        if (Number(e?.address?.wardId) !== wardId) {
            setWardId(Number(e?.address?.wardId))
        }
        // setIsSelectProject(!isSelectProject)
        // setTimeout(() => {
        // 	handleChangeWard(e?.address?.wardId);
        // }, 1000);
        handleFlyMap(Number(e?.address?.lng), Number(e?.address?.lat), 17, 2000)
    }

    return (
        <div className='absolute top-[45%] -translate-y-1/2 left-[7.5vw] w-[calc(100vw-15vw)] max-md:w-[calc(100vw-5.34vw)] z-10 max-md:z-40 max-md:left-[2.67vw] max-md:top-[37.87vw] max-md:translate-y-0'>
            <p className='title18-400-160 title-mb12-400-160 text-white max-md:-tracking-[0.6px] title-tl14-400-160'>
                {data?.slogan || 'An tâm với 100% bất động sản được xác thực tại KANGNAM'}
            </p>
            <h1 className='mt-[0.5vw] max-md:mt-[1.07vw] mb-[1.87vw] max-md:mb-[4.27vw] text-white capitalize title60 title-mb22-800-130 max-md:-tracking-[0.66px] title-tl42'>
                {data?.title || 'Lựa chọn căn nhà ưng ý của bạn'}
            </h1>
            <div className='w-[54vw] max-md:w-full py-[1.53vw] max-md:py-[4.27vw] max-md:px-[6.4vw] px-[2.5vw] bg-white rounded-[6.25vw] backdrop-blur-[7.5px] flex justify-between items-center relative z-40'>
                <div className='flex items-center w-full'>
                    <SelectSearch />
                    <div className='border-l border-solid border-[#57534E] max-md:border-den02 opacity-30 h-[1.6875vw] max-md:h-[4.53vw] mx-[1vw] max-md:mx-[4.27vw]'></div>
                    <form
                        onSubmit={handleSubmit}
                        className='flex-1 flex items-center gap-x-[0.62vw] max-md:gap-x-[1.07vw] relative'
                    >
                        <label htmlFor='search'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='16'
                                height='17'
                                viewBox='0 0 16 17'
                                fill='none'
                                className='w-[1vw] h-[1vw] max-md:w-[4.2vw] max-md:h-[4.2vw] max-lg:w-[1.8vw] max-lg:h-[1.8vw]'
                            >
                                <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M7.19929 2.72722C6.58212 2.72003 5.96965 2.83469 5.39737 3.06456C4.82509 3.29442 4.30438 3.63492 3.8654 4.06632C3.42642 4.49773 3.0779 5.01146 2.84003 5.57776C2.60217 6.14405 2.47969 6.75165 2.47969 7.36536C2.47969 7.97906 2.60217 8.58666 2.84003 9.15296C3.0779 9.71925 3.42642 10.233 3.8654 10.6644C4.30438 11.0958 4.82509 11.4363 5.39737 11.6662C5.96965 11.896 6.58212 12.0107 7.19929 12.0035C8.42696 11.9892 9.59947 11.4942 10.4625 10.626C11.3256 9.75771 11.8096 8.58614 11.8096 7.36536C11.8096 6.14457 11.3256 4.973 10.4625 4.10474C9.59947 3.23647 8.42696 2.74152 7.19929 2.72722ZM1.57497 7.36631C1.56703 6.62685 1.70666 5.89316 1.98577 5.20771C2.26487 4.52226 2.67792 3.89864 3.201 3.37295C3.72409 2.84726 4.34682 2.42994 5.03318 2.14512C5.71953 1.8603 6.45588 1.71365 7.19961 1.71365C7.94333 1.71365 8.67968 1.8603 9.36603 2.14512C10.0524 2.42994 10.6751 2.84726 11.1982 3.37295C11.7213 3.89864 12.1343 4.52226 12.4134 5.20771C12.6926 5.89316 12.8322 6.62685 12.8242 7.36631C12.8084 8.83925 12.2089 10.2465 11.1558 11.2825C10.1027 12.3186 8.68104 12.8997 7.19961 12.8997C5.71817 12.8997 4.29654 12.3186 3.24343 11.2825C2.19032 10.2465 1.59077 8.83925 1.57497 7.36631Z'
                                    fill='#D6A279'
                                />
                                <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M10.7105 10.4576L14.3041 14.0212L13.6263 14.6977L10.0327 11.1334L10.7105 10.4576Z'
                                    fill='#D6A279'
                                />
                            </svg>
                        </label>
                        <input
                            className='w-full outline-none text-den title16-400-130 title-mb14-400-130'
                            type='text'
                            name='search'
                            id='search'
                            placeholder='Thành phố Hà Nội'
                            value={valueSearch}
                            onFocus={() => {
                                setIsClose(false)
                            }}
                            onChange={(e) => {
                                e?.target?.value && setIsClose(false)
                                setValueSearch(e?.target?.value)
                                setValueSearchPrev(e?.target?.value)
                            }}
                        />
                        {dataSearch && valueSearch && (
                            <ul
                                ref={sideRef}
                                className={`${
                                    isClose ? 'hidden' : ''
                                } absolute bottom-0 left-0 translate-y-full z-[1000] bg-white text-black w-full`}
                            >
                                {dataSearch && <li className='font-bold text-black'>Khu vực</li>}
                                {Array.isArray(dataSearch) &&
                                    dataSearch?.slice(0, 3)?.map((e, index) => (
                                        <li
                                            className='pl-[0.5vw]'
                                            onClick={() => {
                                                setIsSubmit(!isSubmit)
                                                setIsClose(true)
                                                handleSelectValueSearch(e)
                                                scrollToSection(boxMap)
                                                setSelectSearch('area')
                                            }}
                                            key={index}
                                        >
                                            {e?.address}
                                        </li>
                                    ))}
                                {Array.isArray(dataProjectCode?.data) && (
                                    <li className='font-bold text-black'>Từ khoá</li>
                                )}
                                {Array.isArray(dataProjectCode?.data) &&
                                    dataProjectCode?.data?.map((e, index) => (
                                        <li
                                            className='pl-[0.5vw] line-clamp-1'
                                            title={e?.translation?.name}
                                            onClick={() => {
                                                setIsSubmit(!isSubmit)
                                                setIsClose(true)
                                                handleSelectValueProject(e)
                                                scrollToSection(boxMap)
                                                setSelectSearch('word')
                                            }}
                                            key={index}
                                        >
                                            {e?.translation?.name}
                                        </li>
                                    ))}
                                {Array.isArray(dataProjectCode?.data) && (
                                    <li className='font-bold text-black'>Dự án</li>
                                )}
                                {Array.isArray(dataProject?.data) &&
                                    dataSearch?.length &&
                                    dataProject?.data?.map((e, index) => (
                                        <li
                                            className='pl-[0.5vw] line-clamp-1'
                                            title={e?.translation?.name}
                                            onClick={() => {
                                                setIsSubmit(!isSubmit)
                                                setIsClose(true)
                                                handleSelectValueProject(e)
                                                scrollToSection(boxMap)
                                                setSelectSearch(e?.translation?.name)
                                            }}
                                            key={index}
                                        >
                                            {e?.translation?.name}
                                        </li>
                                    ))}
                            </ul>
                        )}
                    </form>
                </div>
            </div>
            <div className='flex items-center my-[1.88vw] max-md:mt-[4.27vw] max-md:mb-[2.67vw] max-md:justify-between'>
                <span className='mr-[0.81vw] text-white title16-600-160 title-tl14-600-160 title-mb12-600-160'>
                    Gợi ý:
                </span>
                <ul className='flex gap-x-[0.5vw] max-md:gap-x-[1.33vw]'>
                    {data?.suggest?.slice(0, 6)?.map((e, index) => (
                        <li
                            key={index}
                            className='text-white px-[1.12vw] h-fit w-fit backdrop-blur-[3px] bg-suggest rounded-[6.25vw] py-[0.5vw] max-md:py-[1.33vw] max-md:px-[2.13vw] title14-400-150 title-mb10-400-150 title-tl12-400-150'
                            onClick={() => {
                                setValueSearch(e)
                                setIsClose(false)
                            }}
                        >
                            {e || arrSuggest[index]?.title}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='flex gap-x-[1.06vw] max-lg:gap-x-[3vw] max-md:gap-x-[2vw] max-md:gap-y-[2.67vw] max-md:flex-wrap'>
                <div className='py-[0.97vw] h-fit w-fit px-[1.5vw] border border-solid border-logo flex gap-x-[1vw] max-md:gap-x-[2.13vw] max-md:py-[2.67vw] max-md:px-[4vw] rounded-[6.25vw] items-center bg-category backdrop-blur-[7.5px]'>
                    <Image
                        src='/images/px.png'
                        alt='px'
                        width={32}
                        height={32}
                        priority
                        className='object-cover w-[2vw] h-[2vw] max-md:w-[4.8vw] max-lg:w-[3vw] max-lg:h-[3vw] max-md:h-[4.8vw]'
                    />
                    <span className='text-white title14-400-150 title-mb12-400-150 title-tl12-400-150'>Phân xưởng</span>
                </div>
                <div className='py-[0.97vw] h-fit w-fit px-[1.5vw] border border-solid border-logo flex gap-x-[1vw] max-md:gap-x-[2.13vw] max-md:py-[2.67vw] max-md:px-[4vw] rounded-[6.25vw] items-center bg-category backdrop-blur-[7.5px]'>
                    <Image
                        src='/images/cc.png'
                        alt='cc'
                        width={32}
                        height={32}
                        priority
                        className='object-cover w-[2vw] h-[2vw] max-md:w-[4.8vw] max-lg:w-[3vw] max-lg:h-[3vw] max-md:h-[4.8vw]'
                    />
                    <span className='text-white title14-400-150 title-mb12-400-150 title-tl12-400-150'>Chung cư</span>
                </div>
                <div className='py-[0.97vw] h-fit w-fit px-[1.5vw] border border-solid border-logo flex gap-x-[1vw] max-md:gap-x-[2.13vw] max-md:py-[2.67vw] max-md:px-[4vw] rounded-[6.25vw] items-center bg-category backdrop-blur-[7.5px]'>
                    <Image
                        src='/images/bt.png'
                        alt='bt'
                        width={32}
                        height={32}
                        priority
                        className='object-cover w-[2vw] h-[2vw] max-md:w-[4.8vw] max-lg:w-[3vw] max-lg:h-[3vw] max-md:h-[4.8vw]'
                    />
                    <span className='text-white title14-400-150 title-mb12-400-150 title-tl12-400-150'>Biệt thự</span>
                </div>
                <div className='py-[0.97vw] h-fit w-fit px-[1.5vw] border border-solid border-logo flex gap-x-[1vw] max-md:gap-x-[2.13vw] max-md:py-[2.67vw] max-md:px-[4vw] rounded-[6.25vw] items-center bg-category backdrop-blur-[7.5px]'>
                    <Image
                        src='/images/nmp.png'
                        alt='nmp'
                        width={32}
                        height={32}
                        priority
                        className='object-cover w-[2vw] h-[2vw] max-md:w-[4.8vw] max-lg:w-[3vw] max-lg:h-[3vw] max-md:h-[4.8vw]'
                    />
                    <span className='text-white title14-400-150 title-mb12-400-150 title-tl12-400-150'>
                        Nhà mặt phố
                    </span>
                </div>
                <div className='py-[0.97vw] h-fit w-fit px-[1.5vw] border border-solid border-logo flex gap-x-[1vw] max-md:gap-x-[2.13vw] max-md:py-[2.67vw] max-md:px-[4vw] rounded-[6.25vw] items-center bg-category backdrop-blur-[7.5px]'>
                    <Image
                        src='/images/dn.png'
                        alt='dn'
                        width={32}
                        height={32}
                        priority
                        className='object-cover w-[2vw] h-[2vw] max-md:w-[4.8vw] max-lg:w-[3vw] max-lg:h-[3vw] max-md:h-[4.8vw]'
                    />
                    <span className='text-white title14-400-150 title-mb12-400-150 title-tl12-400-150'>Đất nền</span>
                </div>
            </div>
        </div>
    )
}
