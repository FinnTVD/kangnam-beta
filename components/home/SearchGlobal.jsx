'use client'
import { memo, useEffect, useState } from 'react'
import useSWR from 'swr'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
// 
import SelectSearch from '../general/SelectSearch'
import useStore from '@/app/[lang]/(store)/store'
import { apiKey, cityIdDefault, levelZoomDefault, levelZoomDistrictDefault, levelZoomWardDefault, notifyError, slugProject } from '@/utils'
import useClickOutSide from '@/hooks/useClickOutSide'
import useDebounce from '@/hooks/useDebounce'


const handleCheckPage = (pathName, listData) => {
    if (pathName === '/') return true
    //nếu ko đứng ỏ các page nằm ở listPage thì sẽ chuyển sang page có maphandleCheckPage
    for (const item of listData) {
        for (const translation of item?.translations) {
            if (translation?.alias?.toLowerCase()?.includes(pathName?.slice(1))) {
                return false
            }
        }
    }
    // Trường hợp không tìm thấy khớp nào
    return true
}

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const SearchGlobal = ({
    lang,
    iconSmall = false,
    classContainer,
    classLine,
    classForm,
    isIcon = false,
    classInput,
    classList,
    dark,
}) => {
    const router = useRouter()
    const pathName = usePathname()
    const searchParams = useSearchParams()

    const cityId = Number(searchParams.get('cityId'))
    const districtId = Number(searchParams.get('districtId'))
    const wardId = Number(searchParams.get('wardId'))
    
    const [dataProject, setDataProject] = useState([])
    const valueSearch = useStore((state) => state.valueSearch)
    const [dataSearch, setDataSearch] = useState([])
    const [dataProjectCode, setDataProjectCode] = useState([])
    const debounceValue = useDebounce(valueSearch, 500)

    const isClose = useStore((state) => state.isClose)
    const setIsClose = useStore((state) => state.setIsClose)
    const setValueSearch = useStore((state) => state.setValueSearch)
    const setValueSearchPrev = useStore((state) => state.setValueSearchPrev)
    const setIsRedirect = useStore((state) => state.setIsRedirect)
    const setSelectSearch = useStore((state) => state.setSelectSearch)
    const dataDistrict = useStore((state) => state.dataDistrict)
    const dataProvinces = useStore((state) => state.dataProvinces)
    const listData = useStore((state) => state.listData)

    const [sideRef, isOutSide] = useClickOutSide()
 
    const { data, isLoading, error } = useSWR(process.env.NEXT_PUBLIC_API + '/property-category', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })

    useEffect(() => {
        const callDataSearch = async () => {
            const res = await fetch(
                `https://maps.vietmap.vn/api/search/v3?apikey=${apiKey}${debounceValue ? '&text=' + debounceValue : ''
                }`,
            )
            const data = await res.json()
            if (data?.length && debounceValue) {
                if (data[0]?.boundaries?.length === 1) {
                    const obj1 = {
                        cityIdSearch: data[0]?.boundaries[0]?.id,
                    }
                    callDataProject(obj1)
                }
                if (data[0]?.boundaries?.length === 2) {
                    const obj2 = {
                        districtIdSearch: data[0]?.boundaries[0]?.id,
                        cityIdSearch: data[0]?.boundaries[1]?.id,
                    }
                    callDataProject(obj2)
                }
                if (data[0]?.boundaries?.length === 3) {
                    const obj3 = {
                        wardIdSearch: data[0]?.boundaries[0]?.id,
                        districtIdSearch: data[0]?.boundaries[1]?.id,
                        cityIdSearch: data[0]?.boundaries[2]?.id,
                    }
                    callDataProject(obj3)
                }
            }
            setDataSearch(data)
        }
        const callDataProjectCode = async () => {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API}/property?page=1&take=10${debounceValue ? '&q=' + debounceValue : ''}${listData[0]?.id ? '&propertyCategoryIds=' + listData[0]?.id : ''
                }`,
            )
            const data = await res.json()
            setDataProjectCode(data)
        }
        callDataSearch()
        callDataProjectCode()
    }, [debounceValue])

    useEffect(() => {
        isOutSide && setIsClose(true)
    }, [isOutSide])

    const callApiGetLngLat = async(refId,levelZoom,isCheck,paramNew)=>{
        const res = await fetch(`https://maps.vietmap.vn/api/place/v3?apikey=${apiKey}&refid=${refId}`)
        const data = await res.json()
        if (data) {
            paramNew.set('lng', data?.lng)
            paramNew.set('lat', data?.lat)
            paramNew.set('levelZoom', levelZoom)
            if(isCheck){
                router.push(
                '/' +
                listData[0]?.translations?.find((e) =>
                    e?.languageCode?.toLowerCase()?.includes(lang === 'ch' ? 'cn' : lang),
                )?.alias + '?' + paramNew.toString(), {
                scroll: false,
            })
            } else {
                router.push(pathName + '?' + paramNew.toString(), {
                    scroll: false,
                })
            }
        }
    }
    
    const callDataProject = async ({ cityIdSearch, districtIdSearch, wardIdSearch }) => {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API}/property?page=1&take=15${cityIdSearch ? '&cityId=' + cityIdSearch : ''}${districtIdSearch ? '&districtId=' + districtIdSearch : ''
            }${wardIdSearch ? '&wardId=' + wardIdSearch : ''}${listData[0]?.id ? '&propertyCategoryIds=' + listData[0]?.id : ''
            }`,
        )
        const data = await res.json()
        setDataProject(data)
    }

    const callDataWard = async (cityIdWard, districtIdWard, wardIdWard, refId,isCheck) => {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API}/property/property-by-address?cityId=${cityIdWard || cityIdDefault}&districtId=${districtIdWard}`,
        )
        const data = await res.json()
        const itemWard = data?.find((i) => i?.ward_id == wardIdWard)
        const paramNew = new URLSearchParams(searchParams)
        if (cityIdWard !== cityId) {
            paramNew.set('cityId', cityIdWard)
        }
        if (districtIdWard !== districtId) {
            paramNew.set('districtId', districtIdWard)
        }
        paramNew.set('wardId', wardIdWard)
        if (!itemWard) {
            callApiGetLngLat(refId,levelZoomWardDefault,isCheck,paramNew)
            return notifyError('No data project in address ward search!')
        }
        //delete marker before fly to city other
        if (
            !pathName?.includes(
                data?.data?.find((e) =>
                    e?.translation?.find((i) => i?.languageCode?.toLowerCase?.includes(lang === 'ch' ? 'cn' : lang)),
                )?.alias,
            ) &&
            !slugProject?.find((e) => e === pathName)
        ) {
            setIsRedirect(true)
            paramNew.set('lng', itemWard?.ward_lng)
            paramNew.set('lat', itemWard?.ward_lat)
            paramNew.set('levelZoom', levelZoomWardDefault)
            isCheck && router.push(
                '/' +
                listData[0]?.translations?.find((e) =>
                    e?.languageCode?.toLowerCase()?.includes(lang === 'ch' ? 'cn' : lang),
                )?.alias+ '?' + paramNew.toString(), {
                    scroll: false,
                }
            )
        } else {
            paramNew.set('lng', itemWard?.ward_lng)
            paramNew.set('lat', itemWard?.ward_lat)
            paramNew.set('levelZoom', levelZoomWardDefault)
            paramNew.set('isFly',1)
            router.push(pathName + '?' + paramNew.toString(), {
                scroll: false,
            })
        }
    }

    const handleSubmit = (e) => {
        e?.preventDefault()
        
        if (!valueSearch) return // khong search thi khong redirect
        
        if (dataSearch?.length >= 0) {
            handleSelectValueSearch(dataSearch[0])
        } else if (dataProjectCode?.data?.length >= 0) {
            handleSelectValueProject(dataProjectCode?.data[0])
        } else if (dataProject?.data?.length >= 0) {
            handleSelectValueProject(dataProject?.data[0])
        }
        setIsClose(true)
    }


    const handleSelectValueSearch = (e) => {
        if (!e) return
        setValueSearch(e?.address)
        const isCheck = handleCheckPage(pathName, listData)
        if (e?.ref_id?.includes('CITY')) {
            //set lại cityid
            const paramNew = new URLSearchParams(searchParams)
            cityId !== Number(e?.boundaries[0]?.id) && paramNew.set('cityId', e?.boundaries[0]?.id)
            paramNew.set('districtId', '')
            paramNew.set('wardId', '')
            if (!dataProvinces || !e?.boundaries[0]?.id) return router.push(pathName + '?' + paramNew.toString(), {
                scroll: false,
            })
            //nếu đang ở tỉnh đó và ở level zoom city thì không fly
            if (e?.boundaries[0]?.id === cityId && !cityId && !wardId) return notifyError('Now, in current city!')
            if (e?.boundaries[0]?.id === cityId && !districtId) return notifyError('Now, in current city!')

            const itemCity = dataProvinces?.find((i) => i?.city_id == e?.boundaries[0]?.id)
            if (!itemCity) {
                callApiGetLngLat(e?.ref_id,levelZoomDefault,isCheck,paramNew)
                return notifyError('No data project in address city search!')
            }
            if (
                !pathName?.includes(
                    data?.data?.find((e) =>
                        e?.translation?.find((i) =>
                            i?.languageCode?.toLowerCase?.includes(lang === 'ch' ? 'cn' : lang),
                        ),
                    )?.alias,
                ) && !slugProject?.find((e) => e === pathName)
            ) {
                setIsRedirect(true)
                paramNew.set('lng', itemCity?.city_lng)
                paramNew.set('lat', itemCity?.city_lat)
                paramNew.set('levelZoom', levelZoomDefault)
                isCheck && router.push(
                    '/' +
                    listData[0]?.translations?.find((e) =>
                        e?.languageCode?.toLowerCase()?.includes(lang === 'ch' ? 'cn' : lang),
                    )?.alias + '?' + paramNew.toString(), {
                    scroll: false,
                }
                )
            } else {
                paramNew.set('lng', itemCity?.city_lng)
                paramNew.set('lat', itemCity?.city_lat)
                paramNew.set('levelZoom', levelZoomDefault)
                paramNew.set('isFly',1)
                router.push(pathName + '?' + paramNew.toString(), {
                    scroll: false,
                })
            }
        }
        if (e?.ref_id?.includes('DIST')) {
            const paramNew = new URLSearchParams(searchParams)
            paramNew.set('districtId', e?.boundaries[0]?.id)
            e?.boundaries[1]?.id !== cityId && paramNew.set('cityId', e?.boundaries[1]?.id)
            if (!dataDistrict || !e?.boundaries[0]?.id) return router.push(pathName + '?' + paramNew.toString(), {
                    scroll: false,
            })
            // nếu đang là districtid đó và đang ở cấp quận thì return
            if (e?.boundaries[0]?.id === districtId && !wardId) return notifyError('Now, in current district!')
            const itemDistrict = dataDistrict?.find((i) => i?.district_id == e?.boundaries[0]?.id)
            if (typeof itemDistrict !== 'object') {
                callApiGetLngLat(e?.ref_id,levelZoomDistrictDefault,isCheck,paramNew)
                return notifyError('No data project in address district search!')
            }
            if (
                !pathName?.includes(
                    data?.data?.find((e) =>
                        e?.translation?.find((i) =>
                            i?.languageCode?.toLowerCase?.includes(lang === 'ch' ? 'cn' : lang),
                        ),
                    )?.alias,
                ) && !slugProject?.find((e) => e === pathName)
            ) {
                setIsRedirect(true)
                paramNew.set('lng', itemDistrict?.district_lng)
                paramNew.set('lat', itemDistrict?.district_lat)
                paramNew.set('levelZoom', levelZoomDistrictDefault)
                wardId && paramNew.set('wardId', '')
                isCheck && router.push('/' + listData[0]?.translations?.find((e) =>
                        e?.languageCode?.toLowerCase()?.includes(lang === 'ch' ? 'cn' : lang),
                    )?.alias+ '?' + paramNew.toString(), {
                        scroll: false,
                    }
                )
            }else{
                paramNew.set('lng', itemDistrict?.district_lng)
                paramNew.set('lat', itemDistrict?.district_lat)
                paramNew.set('levelZoom', levelZoomDistrictDefault)
                paramNew.set('isFly',1)
                wardId && paramNew.set('wardId', '')
                router.push(pathName + '?' + paramNew.toString(), {
                            scroll: false,
                    })
            }
        }
        if (!e?.ref_id?.includes('CITY') && !e?.ref_id?.includes('DIST')) {
            callDataWard(e?.boundaries[2]?.id, e?.boundaries[1]?.id, e?.boundaries[0]?.id, e?.ref_id,isCheck)
        }
    }


    const handleSelectValueProject = (e) => {
        const paramNew = new URLSearchParams(searchParams)
        if (
            !pathName?.includes(
                data?.data?.find((e) =>
                    e?.translation?.find((i) => i?.languageCode?.toLowerCase?.includes(lang === 'ch' ? 'cn' : lang)),
                )?.alias,
            ) &&
            !slugProject?.find((e) => e === pathName)
        ) {
            setIsRedirect(true)
            setValueSearch(e?.address?.display)
            if (Number(e?.address?.cityId) !== cityId) {
                paramNew.set('cityId',e?.address?.cityId)
            }
            if (Number(e?.address?.districtId) !== districtId) {
                paramNew.set('districtId',e?.address?.districtId)
            }
            if (Number(e?.address?.wardId) !== wardId) {
                paramNew.set('wardId',e?.address?.wardId)
            }
            paramNew.set('lng', e?.address?.lng)
            paramNew.set('lat', e?.address?.lat)
            paramNew.set('levelZoom', 15)
            handleCheckPage(pathName, listData) && router.push(
                        '/' +
                        listData[0]?.translations?.find((e) =>
                            e?.languageCode?.toLowerCase()?.includes(lang === 'ch' ? 'cn' : lang),
                        )?.alias+ '?' + paramNew.toString(), {
                            scroll: false,
                        }
                    )
        }else{
            setValueSearch(e?.address?.display)
            if (Number(e?.address?.cityId) !== cityId) {
                paramNew.set('cityId',e?.address?.cityId)
            }
            if (Number(e?.address?.districtId) !== districtId) {
                paramNew.set('districtId',e?.address?.districtId)
            }
            if (Number(e?.address?.wardId) !== wardId) {
                paramNew.set('wardId',e?.address?.wardId)
            }
            paramNew.set('lng', e?.address?.lng)
            paramNew.set('lat', e?.address?.lat)
            paramNew.set('levelZoom', 15)
            paramNew.set('isFly',1)
            
            router.push(pathName + '?' + paramNew.toString(), {
                scroll: false,
            })
        }
        
    }

    return (
        <div
            className={`${classContainer ||
                'w-[54vw] max-md:w-full py-[0.62vw] max-md:py-[4.27vw] max-md:px-[6.4vw] pl-[2.5vw] pr-[1.5vw] bg-white rounded-[6.25vw] backdrop-blur-[7.5px] flex justify-between items-center relative z-40'
                }`}
        >
            <div className='flex items-center w-full'>
                <SelectSearch
                    type={dark}
                    lang={lang}
                />
                <div
                    className={`${classLine ||
                        'border-l border-solid border-[#57534E] max-md:border-den02 opacity-30 h-[1.6875vw] max-md:h-[4.53vw] mx-[1vw] max-md:mx-[4.27vw]'
                        }`}
                ></div>
                <form
                    ref={sideRef}
                    onSubmit={handleSubmit}
                    className={`${classForm || 'flex-1 flex items-center gap-x-[0.62vw] max-md:gap-x-[1.07vw] relative'
                        }`}
                >
                    <label htmlFor='search'>
                        {iconSmall && (
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='16'
                                height='17'
                                viewBox='0 0 16 17'
                                fill='none'
                                className='w-[1vw] h-[1vw] max-md:w-[4.2vw] max-md:h-[4.2vw] max-lg:w-[2vw] max-lg:h-[2vw]'
                            >
                                <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M7.19929 2.72722C6.58212 2.72003 5.96965 2.83469 5.39737 3.06456C4.82509 3.29442 4.30438 3.63492 3.8654 4.06632C3.42642 4.49773 3.0779 5.01146 2.84003 5.57776C2.60217 6.14405 2.47969 6.75165 2.47969 7.36536C2.47969 7.97906 2.60217 8.58666 2.84003 9.15296C3.0779 9.71925 3.42642 10.233 3.8654 10.6644C4.30438 11.0958 4.82509 11.4363 5.39737 11.6662C5.96965 11.896 6.58212 12.0107 7.19929 12.0035C8.42696 11.9892 9.59947 11.4942 10.4625 10.626C11.3256 9.75771 11.8096 8.58614 11.8096 7.36536C11.8096 6.14457 11.3256 4.973 10.4625 4.10474C9.59947 3.23647 8.42696 2.74152 7.19929 2.72722ZM1.57497 7.36631C1.56703 6.62685 1.70666 5.89316 1.98577 5.20771C2.26487 4.52226 2.67792 3.89864 3.201 3.37295C3.72409 2.84726 4.34682 2.42994 5.03318 2.14512C5.71953 1.8603 6.45588 1.71365 7.19961 1.71365C7.94333 1.71365 8.67968 1.8603 9.36603 2.14512C10.0524 2.42994 10.6751 2.84726 11.1982 3.37295C11.7213 3.89864 12.1343 4.52226 12.4134 5.20771C12.6926 5.89316 12.8322 6.62685 12.8242 7.36631C12.8084 8.83925 12.2089 10.2465 11.1558 11.2825C10.1027 12.3186 8.68104 12.8997 7.19961 12.8997C5.71817 12.8997 4.29654 12.3186 3.24343 11.2825C2.19032 10.2465 1.59077 8.83925 1.57497 7.36631Z'
                                    fill={dark === 'white' ? 'white' : '#D6A279'}
                                />
                                <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M10.7105 10.4576L14.3041 14.0212L13.6263 14.6977L10.0327 11.1334L10.7105 10.4576Z'
                                    fill={dark === 'white' ? 'white' : '#D6A279'}
                                />
                            </svg>
                        )}
                    </label>
                    <input
                        className={`${classInput || 'w-full outline-none text-den title18-400-150 title-mb14-400-130 pr-[2vw]'
                            }`}
                        type='text'
                        name='search'
                        id='search'
                        placeholder='Thành phố Hà Nội'
                        value={valueSearch}
                        onFocus={() => {
                            if (
                                pathName?.includes(
                                    data?.data?.find((e) =>
                                        e?.translation?.find((i) =>
                                            i?.languageCode?.toLowerCase?.includes(lang === 'ch' ? 'cn' : lang),
                                        ),
                                    )?.alias,
                                ) ||
                                slugProject?.find((e) => e === pathName)
                            ) {
                                setIsRedirect(false)
                            }
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
                            className={`${isClose ? 'hidden' : ''} ${classList ||
                                'absolute bottom-0 left-[-1.5vw] translate-y-full z-[1000] bg-white text-black w-full px-[1.5vw] py-[1vw] rounded-[0.5vw] shadow-input max-md:title-mb12-400-150'
                                }`}
                        >
                            {dataSearch && <li className='font-bold text-black max-md:my-[1vw]'>Khu vực</li>}
                            {Array.isArray(dataSearch) &&
                                dataSearch?.slice(0, 3)?.map((e, index) => (
                                    <li
                                        className='pl-[0.5vw] line-clamp-2 max-md:py-[1vw] py-[0.3vw] hover:bg-slate-200 transition-all duration-200'
                                        onClick={() => {
                                            handleSelectValueSearch(e)
                                            setIsClose(true)
                                            setSelectSearch('area')
                                        }}
                                        key={index}
                                    >
                                        {e?.address}
                                    </li>
                                ))}
                            {Array.isArray(dataProjectCode?.data) && (
                                <li className='font-bold text-black max-md:my-[1vw]'>Từ khoá</li>
                            )}
                            {Array.isArray(dataProjectCode?.data) &&
                                dataProjectCode?.data?.map((e, index) => (
                                    <li
                                        className='pl-[0.5vw] line-clamp-1 max-md:line-clamp-2 max-md:py-[1vw] py-[0.3vw] hover:bg-slate-200 transition-all duration-200'
                                        title={
                                            e?.translations?.find((e) =>
                                                e?.languageCode?.toLowerCase()?.includes(lang === 'ch' ? 'cn' : lang),
                                            )?.name || e?.translations[0]?.name
                                        }
                                        onClick={() => {
                                            handleSelectValueProject(e)
                                            setIsClose(true)
                                            setSelectSearch('word')
                                        }}
                                        key={index}
                                    >
                                        {e?.translations?.find((e) =>
                                            e?.languageCode?.toLowerCase()?.includes(lang === 'ch' ? 'cn' : lang),
                                        )?.name || e?.translations[0]?.name}
                                    </li>
                                ))}
                            {Array.isArray(dataProjectCode?.data) && (
                                <li className='font-bold text-black max-md:my-[1vw]'>Dự án</li>
                            )}
                            {Array.isArray(dataProject?.data) &&
                                dataSearch?.length > 0 &&
                                dataProject?.data?.map((e, index) => (
                                    <li
                                        className='pl-[0.5vw] line-clamp-1 max-md:line-clamp-2 max-md:py-[1vw] py-[0.3vw] hover:bg-slate-200 transition-all duration-200'
                                        title={
                                            e?.translations?.find((e) =>
                                                e?.languageCode?.toLowerCase()?.includes(lang === 'ch' ? 'cn' : lang),
                                            )?.name || e?.translations[0]?.name
                                        }
                                        onClick={() => {
                                            setIsClose(true)
                                            handleSelectValueProject(e)
                                            setSelectSearch(
                                                e?.translations?.find((e) =>
                                                    e?.languageCode
                                                        ?.toLowerCase()
                                                        ?.includes(lang === 'ch' ? 'cn' : lang),
                                                )?.name || e?.translations[0]?.name,
                                            )
                                        }}
                                        key={index}
                                    >
                                        {e?.translations?.find((e) =>
                                            e?.languageCode?.toLowerCase()?.includes(lang === 'ch' ? 'cn' : lang),
                                        )?.name || e?.translations[0]?.name}
                                    </li>
                                ))}
                        </ul>
                    )}
                </form>
                {isIcon && (
                    <div
                        onClick={() => handleSubmit()}
                        className='w-[3.125vw] max-md:hidden cursor-pointer h-[3.125vw] rounded-full bg-logo flex justify-center items-center'
                    >
                        <div className='relative w-fit h-fit'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='26'
                                height='26'
                                viewBox='0 0 26 26'
                                fill='none'
                                className='object-cover h-[1.625vw] w-[1.625vw]'
                            >
                                <path
                                    d='M13.5417 22.75C7.85773 22.75 3.25 18.1423 3.25 12.4583C3.25 6.77439 7.85773 2.16666 13.5417 2.16666C19.2256 2.16666 23.8333 6.77439 23.8333 12.4583C23.8333 18.1423 19.2256 22.75 13.5417 22.75Z'
                                    stroke='white'
                                    strokeWidth='1.5'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                                <path
                                    d='M2.16666 23.8333L4.33333 21.6667'
                                    stroke='white'
                                    strokeWidth='1.5'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='11'
                                height='11'
                                viewBox='0 0 11 11'
                                fill='none'
                                className={`${valueSearch ? 'hidden' : ''
                                    } absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[0.66475vw] h-[0.66475vw]`}
                            >
                                <g clipPath='url(#clip0_2399_2436)'>
                                    <path
                                        d='M5.59091 0.0909119C7.78998 0.0909119 9.57954 1.89289 9.57954 4.10836C9.57954 7.25628 5.96584 10.5066 5.81205 10.6431C5.75127 10.6975 5.67257 10.7276 5.59099 10.7277C5.50941 10.7278 5.43065 10.6978 5.36976 10.6435C5.21598 10.5066 1.60227 7.25628 1.60227 4.10836C1.60227 1.89289 3.39184 0.0909119 5.59091 0.0909119ZM5.59091 6.29546C6.81276 6.29546 7.80682 5.3014 7.80682 4.07955C7.80682 2.8577 6.81276 1.86364 5.59091 1.86364C4.36905 1.86364 3.375 2.8577 3.375 4.07955C3.375 5.3014 4.36905 6.29546 5.59091 6.29546Z'
                                        fill='white'
                                    />
                                </g>
                                <defs>
                                    <clipPath id='clip0_2399_2436'>
                                        <rect
                                            width='10.6364'
                                            height='10.6364'
                                            fill='white'
                                            transform='matrix(-1 0 0 1 10.9091 0.0909119)'
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default memo(SearchGlobal)
