'use client'
import { useEffect, useState, useRef, memo, useCallback } from 'react'
import useStore from '@/app/[lang]/(store)/store'
import useSWR from 'swr'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import useDebounce from '@/hooks/useDebounce'
import {
    apiKey,
    cityIdDefault,
    findIdByAlias,
    latDefault,
    levelZoomDefault,
    levelZoomDistrictDefault,
    levelZoomWardDefault,
    lngDefault,
    slugProject,
} from '@/utils'
import * as vietmapgl from '/public/js/vietmap-gl.js'

//draw content popup marker
const handleRenderPopup = (itemProject, lang, acc) => {
    return `<div>
            <div class='${
                acc ? '' : 'hidden'
            } w-full border border-t border-[#656263] opacity-30 mt-[0.88vw] max-md:mt-[2.46vw]'></div>
            <div
                            key=${itemProject?.id}
                            class="flex gap-x-[0.88vw] mt-[0.88vw] max-md:mt-[2.46vw] max-md:gap-x-[2.46vw]"
                        >
                            <a class="outline-none" href="/${
                                itemProject?.propertyCategory?.translations?.find((e) =>
                                    e?.languageCode?.toLowerCase()?.includes(lang),
                                )?.alias ||
                                itemProject?.propertyCategory?.translations[0]?.alias ||
                                'du-an'
                            }/${
        itemProject?.translations?.find((e) => e?.languageCode?.toLowerCase()?.includes(lang))?.slug ||
        itemProject?.translations[0]?.slug
    }">
                                <img
                                    class="w-[5.4375vw] h-full block object-cover rounded-[0.25vw] max-md:w-[20.8vw] max-md:rounded-[0.7vw]"
                                    src=${itemProject?.firstImage ? itemProject?.firstImage : '/images/itemproject.jpg'}
                                    alt=${itemProject?.translation?.name}
                                />
                            </a>
                            <div class="w-[12.0625vw] max-md:w-[36vw]">
                            <a href="/${
                                itemProject?.propertyCategory?.translations?.find((e) =>
                                    e?.languageCode?.toLowerCase()?.includes(lang),
                                )?.alias ||
                                itemProject?.propertyCategory?.translations[0]?.alias ||
                                'du-an'
                            }/${
        itemProject?.translations?.find((e) => e?.languageCode?.toLowerCase()?.includes(lang))?.slug ||
        itemProject?.translations[0]?.slug
    }">
                                <h2 class='line-clamp-1 text-[0.75vw] font-avertaStdCY font-bold leading-[1.3] max-md:line-clamp-2 max-md:text-[3.2vw] max-md:leading-[1.3] max-md:mb-[1.5vw] mb-[0.37vw] text-den-2'>${
                                    itemProject?.translations?.find((e) =>
                                        e?.languageCode?.toLowerCase()?.includes(lang),
                                    )?.name ||
                                    itemProject?.translations[0]?.name ||
                                    'Chưa có thông tin!'
                                }
                                </h2>
                                </a>
                                <div
                                            title=${itemProject?.address?.display || 'Chưa có thông tin!'}
                                            class='flex items-center gap-x-[0.5vw] max-md:gap-x-[1.41vw]'
                                        >
                                        <div class='w-fit'>
                                            <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='15'
                                            height='14'
                                            viewBox='0 0 15 14'
                                            fill='none'
                                        >
                                            <path
                                                d='M7.33422 6.8551C7.6153 6.8551 7.8555 6.75502 8.0548 6.55485C8.25411 6.35468 8.35376 6.11406 8.35376 5.83297C8.35376 5.55189 8.25367 5.3117 8.0535 5.11239C7.85334 4.91309 7.61272 4.81344 7.33163 4.81344C7.05055 4.81344 6.81036 4.91352 6.61105 5.11369C6.41175 5.31385 6.31209 5.55448 6.31209 5.83557C6.31209 6.11665 6.41218 6.35684 6.61235 6.55614C6.81251 6.75545 7.05314 6.8551 7.33422 6.8551ZM7.33293 11.6822C8.62598 10.5058 9.58119 9.43878 10.1986 8.48114C10.8159 7.52351 11.1246 6.6801 11.1246 5.95094C11.1246 4.80576 10.7586 3.86807 10.0266 3.13788C9.29459 2.4077 8.3967 2.0426 7.33293 2.0426C6.26915 2.0426 5.37126 2.4077 4.63927 3.13788C3.90726 3.86807 3.54126 4.80576 3.54126 5.95094C3.54126 6.6801 3.85723 7.52351 4.48918 8.48114C5.12112 9.43878 6.06904 10.5058 7.33293 11.6822ZM7.33293 12.8343C5.76765 11.5023 4.59855 10.2652 3.82563 9.12281C3.05272 7.98045 2.66626 6.92316 2.66626 5.95094C2.66626 4.4926 3.13536 3.3308 4.07355 2.46552C5.01175 1.60024 6.0982 1.1676 7.33293 1.1676C8.56765 1.1676 9.65411 1.60024 10.5923 2.46552C11.5305 3.3308 11.9996 4.4926 11.9996 5.95094C11.9996 6.92316 11.6131 7.98045 10.8402 9.12281C10.0673 10.2652 8.8982 11.5023 7.33293 12.8343Z'
                                                fill='#926B4F'
                                            />
                                        </svg>
                                        </div>
                                            <span class='capitalize text-den font-avertaStdCY text-[0.75vw] font-normal leading-normal line-clamp-1 max-md:text-[2.67vw] max-md:leading-normal'>
                                                ${
                                                    itemProject?.address?.name +
                                                    ', ' +
                                                    itemProject?.address?.ward +
                                                    ', ' +
                                                    itemProject?.address?.district
                                                }
                                            </span>
                                        </div>
                                        <div class='flex items-center my-[0.06vw] gap-x-[0.5vw] max-md:gap-x-[1.41vw]'>
                                        <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                width='14'
                                                height='14'
                                                viewBox='0 0 14 14'
                                                fill='none'
                                            >
                                                <g clipPath='url(#clip0_546_2319)'>
                                                    <path
                                                        d='M10.1351 13.4157V11.0095H3.86426C3.63092 11.0095 3.42676 10.922 3.25176 10.747C3.07676 10.572 2.98926 10.3678 2.98926 10.1345V3.86365H0.583008V2.98865H2.98926V0.582397H3.86426V10.1345H13.4163V11.0095H11.0101V13.4157H10.1351ZM10.1351 9.25948V3.86365H4.73926V2.98865H10.1351C10.3684 2.98865 10.5726 3.07615 10.7476 3.25115C10.9226 3.42615 11.0101 3.63031 11.0101 3.86365V9.25948H10.1351Z'
                                                        fill='#926B4F'
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id='clip0_546_2319'>
                                                        <rect
                                                            width='14'
                                                            height='14'
                                                            fill='white'
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <span class=' text-den font-avertaStdCY text-[0.75vw] font-normal leading-normal line-clamp-1 max-md:text-[2.67vw]'>
                                                ${
                                                    itemProject?.translation?.size
                                                        ? itemProject?.translation?.size + ' m²'
                                                        : 'Chưa có thông tin!'
                                                }
                                            </span>
                                        </div>
                                        <div class='flex items-center gap-x-[0.5vw] max-md:gap-x-[1.41vw]'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                width='14'
                                                height='14'
                                                viewBox='0 0 14 14'
                                                fill='none'
                                            >
                                                <path
                                                    d='M6.57741 11.1862H7.37949V10.4279C7.97255 10.3598 8.43435 10.1775 8.76491 9.88102C9.09546 9.58449 9.26074 9.18831 9.26074 8.69248C9.26074 8.19665 9.11977 7.79317 8.83783 7.48206C8.55588 7.17095 8.07949 6.87442 7.40866 6.59248C6.84477 6.35915 6.43644 6.15012 6.18366 5.9654C5.93088 5.78067 5.80449 5.53276 5.80449 5.22165C5.80449 4.92026 5.91387 4.68206 6.13262 4.50706C6.35137 4.33206 6.65033 4.24456 7.02949 4.24456C7.32116 4.24456 7.57394 4.31262 7.78783 4.44873C8.00171 4.58484 8.18158 4.78901 8.32741 5.06123L9.02741 4.72581C8.86213 4.38554 8.64338 4.11817 8.37116 3.92373C8.09894 3.72929 7.7781 3.61262 7.40866 3.57373V2.82998H6.60658V3.57373C6.11074 3.64179 5.71942 3.82408 5.43262 4.12061C5.14581 4.41713 5.00241 4.78415 5.00241 5.22165C5.00241 5.69804 5.14824 6.0772 5.43991 6.35915C5.73158 6.64109 6.16908 6.90359 6.75241 7.14665C7.4038 7.41887 7.85102 7.66436 8.09408 7.88311C8.33713 8.10186 8.45866 8.37165 8.45866 8.69248C8.45866 9.00359 8.32984 9.25394 8.0722 9.44352C7.81456 9.63311 7.4913 9.7279 7.10241 9.7279C6.72324 9.7279 6.38539 9.62095 6.08887 9.40706C5.79234 9.19317 5.58574 8.90151 5.46908 8.53206L4.72533 8.77998C4.92949 9.2272 5.17984 9.57963 5.47637 9.83727C5.77289 10.0949 6.13991 10.2821 6.57741 10.3987V11.1862ZM7.00033 12.8341C6.2031 12.8341 5.44963 12.681 4.73991 12.3748C4.03019 12.0685 3.41039 11.6505 2.88053 11.1206C2.35067 10.5907 1.93262 9.97095 1.62637 9.26123C1.32012 8.55151 1.16699 7.79804 1.16699 7.00081C1.16699 6.19387 1.32012 5.43554 1.62637 4.72581C1.93262 4.01609 2.35067 3.39873 2.88053 2.87373C3.41039 2.34873 4.03019 1.93311 4.73991 1.62686C5.44963 1.32061 6.2031 1.16748 7.00033 1.16748C7.80727 1.16748 8.5656 1.32061 9.27532 1.62686C9.98505 1.93311 10.6024 2.34873 11.1274 2.87373C11.6524 3.39873 12.068 4.01609 12.3743 4.72581C12.6805 5.43554 12.8337 6.19387 12.8337 7.00081C12.8337 7.79804 12.6805 8.55151 12.3743 9.26123C12.068 9.97095 11.6524 10.5907 11.1274 11.1206C10.6024 11.6505 9.98505 12.0685 9.27532 12.3748C8.5656 12.681 7.80727 12.8341 7.00033 12.8341ZM7.00033 11.9591C8.38088 11.9591 9.55241 11.4755 10.5149 10.5081C11.4774 9.54074 11.9587 8.37165 11.9587 7.00081C11.9587 5.62026 11.4774 4.44873 10.5149 3.48623C9.55241 2.52373 8.38088 2.04248 7.00033 2.04248C5.62949 2.04248 4.46039 2.52373 3.49303 3.48623C2.52567 4.44873 2.04199 5.62026 2.04199 7.00081C2.04199 8.37165 2.52567 9.54074 3.49303 10.5081C4.46039 11.4755 5.62949 11.9591 7.00033 11.9591Z'
                                                    fill='#926B4F'
                                                />
                                            </svg>
                                            <span class='capitalize text-den font-avertaStdCY text-[0.75vw] font-normal leading-normal line-clamp-1 max-md:text-[2.67vw] max-md:leading-normal'>
                                                ${itemProject?.translation?.priceDisplay || 'Chưa có thông tin!'}
                                            </span>
                                        </div>
                            </div>
                        </div>
                        </div>`
}

const removeZeroSubArrays = (arr) => {
    return arr.filter((subarr) => {
        return !subarr.some((element) => isNaN(element) || element === 0)
    })
}

//xử lý chuỗi geoWKT trả về từ api border
const handleGeoWKT = (str) => {
    const a = str
        ?.slice(16, str?.length - 3)
        ?.split(', ')
        ?.map((capSo) => {
            let [so1, so2] = capSo?.split(' ')?.map(parseFloat)
            return [so1, so2]
        })
    const b = removeZeroSubArrays(a)
    return b
    // return removeZeroSubArrays(str)
}

let propertyTypeParams = ''
let propertyAreaTypeParams = ''
let propertyCategoryTypeParams = ''
let propertyBedsParams = ''
let propertyBathsParams = ''
let propertyOrientsParams = ''
let listMarkerOut = [] //lưu lại các marker
let mapRef = null

const fetcher = (...args) => fetch(...args).then((res) => res.json())
const MapV5 = ({ lang, dataSlug = '' }) => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathName = usePathname()
    // const mapRef = useRef(null) //lưu lại dom map

    const cityId = Number(searchParams.get('cityId'))
    const districtId = Number(searchParams.get('districtId'))
    const wardId = Number(searchParams.get('wardId'))
    const levelZoom = Number(searchParams.get('levelZoom'))
    const lng = Number(searchParams.get('lng'))
    const lat = Number(searchParams.get('lat'))
    const isFly = Boolean(searchParams.get('isFly'))

    const propertyType = searchParams.getAll('propertyTypeIds')
    const propertyAreaType = searchParams.getAll('propertyAreaTypeIds')
    const propertyCategoryType = searchParams.getAll('propertyCategoryIds')
    const minPrice = searchParams.get('minPrice')
    const maxPrice = searchParams.get('maxPrice')
    const minArea = searchParams.get('minArea')
    const maxArea = searchParams.get('maxArea')
    const propertyBeds = searchParams.get('beds')
    const propertyBaths = searchParams.get('baths')
    const propertyOrients = searchParams.get('orients')

    const isRedirect = useStore((state) => state.isRedirect)
    const setIsRedirect = useStore((state) => state.setIsRedirect)

    const setDataDistrict = useStore((state) => state.setDataDistrict)
    const setDataProvinces = useStore((state) => state.setDataProvinces)
    const setDataWard = useStore((state) => state.setDataWard)

    const [isDrag, setIsDrag] = useState(false) // trigger sự kiện drag
    const isDragDebounce = useDebounce(isDrag, 500) // trigger sự kiện drag
    const [isFirst, setIsFirst] = useState(true)
    const [dataMap, setDataMap] = useState(null)

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)

            return params.toString()
        },
        [searchParams],
    )

    if (propertyType?.length > 0 && propertyType[0]) {
        propertyTypeParams = propertyType[0]
            .split('--')
            .reduce((accumulator, currentValue) => accumulator + '&propertyTypeIds=' + currentValue, '')
        router.push(pathName + '?' + createQueryString('page', 1), {
            scroll: false,
        })
    } else {
        propertyTypeParams = ''
    }
    if (propertyAreaType?.length > 0 && propertyAreaType[0]) {
        propertyAreaTypeParams = propertyAreaType[0]
            .split('--')
            .reduce((accumulator, currentValue) => accumulator + '&propertyAreaTypeIds=' + currentValue, '')
        router.push(pathName + '?' + createQueryString('page', 1), {
            scroll: false,
        })
    } else {
        propertyAreaTypeParams = ''
    }
    if (propertyCategoryType?.length > 0 && propertyCategoryType[0]) {
        propertyCategoryTypeParams = propertyCategoryType[0]
            .split('--')
            .reduce((accumulator, currentValue) => accumulator + '&propertyCategoryIds=' + currentValue, '')
        router.push(pathName + '?' + createQueryString('page', 1), {
            scroll: false,
        })
    } else {
        propertyCategoryTypeParams = ''
    }

    if (propertyBeds) {
        propertyBedsParams = propertyBeds
            ?.split('--')
            ?.reduce((accumulator, currentValue) => accumulator + '&beds=' + currentValue, '')
        router.push(pathName + '?' + createQueryString('page', 1), {
            scroll: false,
        })
    } else {
        propertyBedsParams = ''
    }
    if (propertyBaths) {
        propertyBathsParams = propertyBaths
            ?.split('--')
            ?.reduce((accumulator, currentValue) => accumulator + '&baths=' + currentValue, '')
        router.push(pathName + '?' + createQueryString('page', 1), {
            scroll: false,
        })
    } else {
        propertyBathsParams = ''
    }
    if (propertyOrients) {
        propertyOrientsParams = propertyOrients
            ?.split('--')
            ?.reduce((accumulator, currentValue) => accumulator + '&orients=' + currentValue, '')
        router.push(pathName + '?' + createQueryString('page', 1), {
            scroll: false,
        })
    } else {
        propertyOrientsParams = ''
    }

    // get list provinces count
    const {
        data: dataProvinces,
        error: errorProvinces,
        isLoading: isLoadingProvinces,
    } = useSWR(`${process.env.NEXT_PUBLIC_API}/property/property-by-address`, fetcher)

    // get list district count
    const {
        data: dataDistrict,
        error: errorDistrict,
        isLoading: isLoadingDistrict,
    } = useSWR(`${process.env.NEXT_PUBLIC_API}/property/property-by-address?cityId=${cityId || cityIdDefault}`, fetcher)

    // get list ward count
    const {
        data: dataWard,
        error: errorWard,
        isLoading: isLoadingWard,
    } = useSWR(
        `${process.env.NEXT_PUBLIC_API}/property/property-by-address?cityId=${cityId}&districtId=${districtId}`,
        fetcher,
    )

    // init add map
    useEffect(() => {
        if (typeof window === 'undefined') return
        const loadMap = () => {
            if (!vietmapgl || typeof window === 'undefined') return
            mapRef = new vietmapgl.Map({
                container: 'map',
                style: `https://maps.vietmap.vn/mt/tm/style.json?apikey=${apiKey}`,
                center: [Number(lng) || lngDefault, Number(lat) || latDefault], //ha noi center
                zoom: levelZoom || levelZoomDefault,
                pitch: 0, // góc nhìn từ trên cao nhìn xuống,
                // bearing: 0,
            })
            mapRef?.scrollZoom.disable() // disable scrollZoom

            // init add controls
            mapRef?.addControl(
                new vietmapgl.NavigationControl({
                    visualizePitch: true,
                    showZoom: true,
                    showCompass: true,
                }),
            )

            //add event zoom
            mapRef?.on('zoomend', function () {
                if (isFly) return
                const paramNew = new URLSearchParams(searchParams)
                paramNew.set('levelZoom', Math.round(Number(mapRef?.getZoom())))
                router.push(pathName + '?' + paramNew.toString(), {
                    scroll: false,
                })
            })

            //add event drag
            mapRef?.on('dragstart', () => {
                setIsDrag((prev) => !prev)
            })
        }
        loadMap() //add map
        const mapKN = document.getElementById('mapKN')
        mapKN &&
            mapKN.addEventListener('mouseover', () => {
                setIsRedirect(false)
            })
        // return () => {
        //     if (!dataSlug || !Array.isArray(dataSlug) || isRedirect) return
        //     if (
        //         pathName?.includes(
        //             dataSlug?.find((e) =>
        //                 e?.translation?.find((i) =>
        //                     i?.languageCode?.toLowerCase?.includes( lang),
        //                 ),
        //             )?.alias,
        //         ) ||
        //         slugProject?.find((e) => e === pathName)
        //     ) {
        //     }
        // }
    }, [])

    useEffect(() => {
        if (!mapRef) return
        if (isFly && lng && lat && typeof mapRef?.flyTo === 'function') {
            mapRef?.flyTo({
                center: [Number(lng), Number(lat)],
                zoom: levelZoom || levelZoomDefault,
                curve: 1,
            })
        }
    }, [isFly, lng, lat, mapRef])

    useEffect(() => {
        const callApiBorder = async () => {
            const res = await fetch(
                `https://maps.vietmap.vn/api/boundaries/v3/info/${
                    wardId || districtId || cityId || cityIdDefault
                }?apikey=${apiKey}`,
            )
            const data = await res.json()
            if (data && isFirst) {
                addGeojsonLine(handleGeoWKT(data?.geo_wkt))
            }
            if (!isFirst && data) {
                const polygon = handleGeoWKT(data?.geo_wkt)
                let newPolygon = polygon.filter((e) => !isNaN(e[0] && !isNaN(e[1])))
                if (newPolygon && typeof mapRef?.getSource === 'function') {
                    const newData = {
                        type: 'Feature',
                        properties: {},
                        geometry: {
                            type: 'LineString',
                            coordinates: newPolygon,
                        },
                    }
                    mapRef?.getSource('marker-source')?.setData(newData)
                }
            }
        }
        callApiBorder() // draw border
        setIsFirst(false)

        const callApi = async () => {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API}/property/property-by-address?cityId=${cityId || cityIdDefault}${
                    districtId ? '&districtId=' + districtId : ''
                }${wardId ? '&wardId=' + wardId : ''}${findIdByAlias(pathName, dataSlug)}${
                    propertyCategoryTypeParams ? propertyCategoryTypeParams : ''
                }${propertyAreaTypeParams ? propertyAreaTypeParams : ''}${
                    propertyTypeParams ? propertyTypeParams : ''
                }${propertyBedsParams ? propertyBedsParams : ''}${propertyBathsParams ? propertyBathsParams : ''}${
                    propertyOrientsParams ? propertyOrientsParams : ''
                }${minPrice ? '&minPrice=' + minPrice + '000000000' : ''}${
                    maxPrice ? '&maxPrice=' + maxPrice + '000000000' : ''
                }${minArea ? '&minArea=' + minArea : ''}${maxArea ? '&maxArea=' + maxArea : ''}`,
            )
            const data = await res.json() //data marker
            if (data && typeof mapRef?.getZoom === 'function') {
                setIsFirst(false)
                setDataMap(data)
                addMarkerV2(data, mapRef?.getZoom() || levelZoomDefault)
            }
        }
        callApi()
    }, [cityId, wardId, districtId, mapRef,searchParams])

    useEffect(() => {
        dataProvinces && setDataProvinces(dataProvinces)
        dataDistrict && setDataDistrict(dataDistrict)
        dataWard && setDataWard(dataWard)
    }, [dataProvinces, dataDistrict, dataWard])

    // xử lý các marker theo sự kiên zoom và drag
    useEffect(() => {
        if (isFly || isRedirect || typeof mapRef?.getCenter !== 'function') return
        // kiểm tra xem điểm giữa của khung hình đang là quân/huyện nào hay là phường/xã nào
        const getLocationCurrent = async () => {
            const ct = await mapRef?.getCenter()
            // call api theo tạo độ center của view map
            const res = await fetch(
                `https://maps.vietmap.vn/api/reverse/v3?apikey=${apiKey}&lng=${ct?.lng}&lat=${ct?.lat}`,
            )
            // get data follow center viewport
            const data = await res.json()
            if (!data) return
            const paramNew = new URLSearchParams(searchParams)
            const one = dataMap?.find(
                (e) => Number(e?.district_id) === data[0]?.boundaries[1]?.id, // boundaries[1]<=> district
            )
            if (Number(one?.count) <= 1) return
            if (levelZoom >= levelZoomDistrictDefault) {
                paramNew.set('districtId', data[0]?.boundaries[1]?.id)
                paramNew.set('lng', ct?.lng)
                paramNew.set('lat', ct?.lat)
            }
            if (levelZoom >= levelZoomWardDefault) {
                // setWardId(data[0]?.boundaries[0]?.id) // boundaries[1]<=> ward
                paramNew.set('wardId', data[0]?.boundaries[0]?.id)
                paramNew.set('lng', ct?.lng)
                paramNew.set('lat', ct?.lat)
            }
            if (levelZoom >= levelZoomDistrictDefault && levelZoom < levelZoomWardDefault) {
                // setWardId(null)
                paramNew.set('wardId', '')
            }
            if (districtId && levelZoom < levelZoomDistrictDefault) {
                paramNew.set('districtId', '')
                wardId && paramNew.set('wardId', '')
            }
            if (!districtId && levelZoom < levelZoomDistrictDefault) {
                searchParams?.size && data[0]?.boundaries[2]?.id && paramNew.set('cityId', data[0]?.boundaries[2]?.id)
            }
            router.push(pathName + '?' + paramNew.toString(), {
                scroll: false,
            })
        }
        getLocationCurrent()
    }, [levelZoom, isDragDebounce, mapRef])

    // if (propertyType?.length > 0 && propertyType[0]) {
    //     propertyTypeParams = propertyType[0]
    //         .split('--')
    //         .reduce((accumulator, currentValue) => accumulator + '&propertyTypeIds=' + currentValue, '')
    // } else {
    //     propertyTypeParams = ''
    // }

    // if (propertyAreaType?.length > 0 && propertyAreaType[0]) {
    //     propertyAreaTypeParams = propertyAreaType[0]
    //         .split('--')
    //         .reduce((accumulator, currentValue) => accumulator + '&propertyAreaTypeIds=' + currentValue, '')
    // } else {
    //     propertyAreaTypeParams = ''
    // }

    // if (propertyCategoryType?.length > 0 && propertyCategoryType[0]) {
    //     propertyCategoryTypeParams = propertyCategoryType[0]
    //         .split('--')
    //         .reduce((accumulator, currentValue) => accumulator + '&propertyCategoryIds=' + currentValue, '')
    // } else {
    //     propertyCategoryTypeParams = ''
    // }

    //function add border
    const addGeojsonLine = (dataPolygon) => {
        if (!dataPolygon || !mapRef) return
        mapRef.on('load', function () {
            mapRef.addSource('marker-source', {
                type: 'geojson',
                data: {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'LineString',
                        coordinates: dataPolygon,
                    },
                },
            })
            mapRef.addLayer({
                id: 'marker-layer',
                type: 'line',
                source: 'marker-source',
                layout: {
                    'line-join': 'round',
                    'line-cap': 'round',
                },
                paint: {
                    'line-color': 'red',
                    'line-width': 1,
                },
            })
        })
    }

    //call data + add marker detail project
    const callDataAddressDetail = async (e) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/property/property-by-refid/${e?.id}`)
        const data = await res.json()
        if (!data) return
        if (Array.isArray(data) && data?.length) {
            let childNode = data?.reduce((acc, itemProject) => acc + handleRenderPopup(itemProject, lang), '')
            const marker = new vietmapgl.Marker()
                .setLngLat(e.coor)
                .addTo(mapRef)
                .setPopup(
                    new vietmapgl.Popup().setHTML(`
                        <div class="${data?.length > 3 ? 'popupMarkerKNList' : 'popupMarkerKN'}">
                            ${childNode}
                        </div>
                        `),
                )

            const customIcon = document.createElement('img')
            customIcon.src = '/images/cluster.png' // Đường dẫn đến biểu tượng tùy chỉnh
            customIcon.style.width = '40px' // Điều chỉnh kích thước tùy ý
            customIcon.style.height = '40px'

            const textElm = document.createElement('p')
            textElm.innerText = e.count.toString()
            textElm.className = 'text-cluster'
            // Đặt nội dung DOM của marker là biểu tượng tùy chỉnh

            const markerElement = marker.getElement()

            // Lấy danh sách tất cả các phần tử con của marker
            const childElements = markerElement.children

            // Tìm và xóa phần tử SVG con (ví dụ: xóa phần tử có class "svg-class-name")
            for (let i = 0; i < childElements.length; i++) {
                const childElement = childElements[i]

                // Kiểm tra nếu phần tử con là một phần tử SVG và có class bạn muốn xóa
                if (childElement.tagName === 'svg') {
                    // Xóa phần tử SVG khỏi marker
                    markerElement.removeChild(childElement)
                    break // Thoát khỏi vòng lặp sau khi xóa
                }
            }
            marker.getElement().appendChild(customIcon)
            marker.getElement().appendChild(textElm)
            listMarkerOut?.push(marker)
        }
    }

    const callDataPopup = async (listMarker) => {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API}/property?take=50&cityId=${cityId || cityIdDefault}${
                districtId ? '&districtId=' + districtId : ''
            }${wardId ? '&wardId=' + wardId : ''}${findIdByAlias(pathName, dataSlug)}${
                propertyCategoryTypeParams ? propertyCategoryTypeParams : ''
            }${propertyAreaTypeParams ? propertyAreaTypeParams : ''}${propertyTypeParams ? propertyTypeParams : ''}${
                propertyBedsParams ? propertyBedsParams : ''
            }${propertyBathsParams ? propertyBathsParams : ''}${propertyOrientsParams ? propertyOrientsParams : ''}${
                minPrice ? '&minPrice=' + minPrice + '000000000' : ''
            }${maxPrice ? '&maxPrice=' + maxPrice + '000000000' : ''}${minArea ? '&minArea=' + minArea : ''}${
                maxArea ? '&maxArea=' + maxArea : ''
            }`,
        )
        const data = await res.json() // data popup
        if (!data) return

        // handle create popup follow levelZoom
        listMarker?.forEach((e) => {
            if (data) {
                if (levelZoom >= levelZoomWardDefault) {
                    callDataAddressDetail(e)
                }
                if (levelZoom >= levelZoomDistrictDefault && levelZoom < levelZoomWardDefault) {
                    let childNode = data?.data
                        ?.filter((item) => item?.address?.wardId?.includes(e?.id))
                        ?.reduce((acc, itemProject) => acc + handleRenderPopup(itemProject, lang), '')
                    const marker = new vietmapgl.Marker()
                        .setLngLat(e.coor)
                        .addTo(mapRef)
                        .setPopup(
                            new vietmapgl.Popup().setHTML(`
                        <div class="${
                            data?.data?.filter((item) => item?.address?.wardId?.includes(e?.id))?.length > 3
                                ? 'popupMarkerKNList'
                                : 'popupMarkerKN'
                        }">
                            ${childNode}
                        </div>
                        `),
                        )
                    const customIcon = document.createElement('img')
                    customIcon.src = '/images/cluster.png' // Đường dẫn đến biểu tượng tùy chỉnh
                    customIcon.style.width = '40px' // Điều chỉnh kích thước tùy ý
                    customIcon.style.height = '40px'

                    const textElm = document.createElement('p')
                    textElm.innerText = e.count.toString()
                    textElm.className = 'text-cluster'
                    // Đặt nội dung DOM của marker là biểu tượng tùy chỉnh

                    const markerElement = marker.getElement()

                    // Lấy danh sách tất cả các phần tử con của marker
                    const childElements = markerElement.children

                    // Tìm và xóa phần tử SVG con (ví dụ: xóa phần tử có class "svg-class-name")
                    for (let i = 0; i < childElements.length; i++) {
                        const childElement = childElements[i]

                        // Kiểm tra nếu phần tử con là một phần tử SVG và có class bạn muốn xóa
                        if (childElement.tagName === 'svg') {
                            // Xóa phần tử SVG khỏi marker
                            markerElement.removeChild(childElement)
                            break // Thoát khỏi vòng lặp sau khi xóa
                        }
                    }
                    marker.getElement().appendChild(customIcon)
                    marker.getElement().appendChild(textElm)
                    listMarkerOut?.push(marker)
                }
                if (levelZoom < levelZoomDistrictDefault) {
                    let childNode = data?.data
                        ?.filter((item) => item?.address?.districtId?.includes(e?.id))
                        ?.reduce((acc, itemProject) => acc + handleRenderPopup(itemProject, lang, acc), '')
                    const marker = new vietmapgl.Marker()
                        .setLngLat(e.coor)
                        .addTo(mapRef)
                        .setPopup(
                            new vietmapgl.Popup().setHTML(`
                        <div class="${
                            data?.data?.filter((item) => item?.address?.districtId?.includes(e?.id))?.length > 3
                                ? 'popupMarkerKNList'
                                : 'popupMarkerKN'
                        }">
                            ${childNode}
                        </div>
                            `),
                        )

                    const customIcon = document.createElement('img')
                    customIcon.src = '/images/cluster.png' // Đường dẫn đến biểu tượng tùy chỉnh
                    customIcon.style.width = '40px' // Điều chỉnh kích thước tùy ý
                    customIcon.style.height = '40px'

                    const textElm = document.createElement('p')
                    textElm.innerText = e.count.toString()
                    textElm.className = 'text-cluster'
                    // Đặt nội dung DOM của marker là biểu tượng tùy chỉnh

                    const markerElement = marker.getElement()

                    // Lấy danh sách tất cả các phần tử con của marker
                    const childElements = markerElement.children

                    // Tìm và xóa phần tử SVG con (ví dụ: xóa phần tử có class "svg-class-name")
                    for (let i = 0; i < childElements.length; i++) {
                        const childElement = childElements[i]

                        // Kiểm tra nếu phần tử con là một phần tử SVG và có class bạn muốn xóa
                        if (childElement.tagName === 'svg') {
                            // Xóa phần tử SVG khỏi marker
                            markerElement.removeChild(childElement)
                            break // Thoát khỏi vòng lặp sau khi xóa
                        }
                    }
                    marker.getElement().appendChild(customIcon)
                    marker.getElement().appendChild(textElm)
                    listMarkerOut?.push(marker)
                }
            }
        })
        setTimeout(() => {
            if (isFly) {
                const paramNew = new URLSearchParams(searchParams)
                paramNew.set('isFly', '')
                router.push(pathName + '?' + paramNew.toString(), {
                    scroll: false,
                })
            }
        }, 2000)
    }

    const addMarkerV2 = (data, levelZoom) => {
        if (!data || !levelZoom) return
        const listMarker = []
        listMarkerOut?.forEach((e) => e?.remove())
        listMarkerOut = []
        data?.forEach((e) => {
            if (e?.ref_id) {
                listMarker?.push({
                    coor: [parseFloat(e?.lng), parseFloat(e?.lat)],
                    count: parseFloat(e?.count),
                    id: e?.ref_id,
                })
            }
            if (e?.ward_id) {
                listMarker?.push({
                    coor: [parseFloat(e?.ward_lng), parseFloat(e?.ward_lat)],
                    count: parseFloat(e?.count),
                    id: e?.ward_id,
                })
            }
            if (e?.district_id) {
                listMarker?.push({
                    coor: [parseFloat(e?.district_lng), parseFloat(e?.district_lat)],
                    count: parseFloat(e?.count),
                    id: e?.district_id,
                })
            }
        })
        callDataPopup(listMarker)
    }

    return (
        <div id='mapKN'>
            <div
                ref={mapRef}
                style={{
                    position: 'relative',
                }}
                id='map'
                className=''
            ></div>
        </div>
    )
}
export default memo(MapV5)
