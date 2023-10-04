'use client'
import { useEffect, useState, useRef, memo } from 'react'
import SelectDistrict from './SelectDistrict'
import SelectWard from './SelectWard'
import SelectCity from './SelectCity'
import { toast } from 'react-toastify'
import useStore from '@/app/[lang]/(store)/store'
import useSWR from 'swr'
import { useSearchParams } from 'next/navigation'
import useDebounce from '@/hooks/useDebounce'

const apiKey = 'c6a8fb5d25f0f32c87d1469f6847388c445850643364b94e'

const handleGeoWKT = (str) => {
    return str
        ?.slice(16, str?.length - 3)
        ?.split(', ')
        ?.map((capSo) => {
            let [so1, so2] = capSo?.split(' ')?.map(parseFloat)
            return [so1, so2]
        })
}

const initial = {
    district: null,
    ward: null,
    detail: null,
}

const notifyError = (title) =>
    toast.error(title || 'Something went wrong!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
    })

let propertyTypeParams = ''
let propertyAreaTypeParams = ''
let propertyCategoryTypeParams = ''
let listMarkerOut = []
const fetcher = (...args) => fetch(...args).then((res) => res.json())
const MapV3 = ({ lang }) => {
    const mapRef = useRef(null) //lưu lại dom map
    const cityId = useStore((state) => state.cityId)
    const districtId = useStore((state) => state.districtId)
    const wardId = useStore((state) => state.wardId)
    const setCityId = useStore((state) => state.setCityId)
    const setDistrictId = useStore((state) => state.setDistrictId)
    const setWardId = useStore((state) => state.setWardId)
    const setDataDistrict = useStore((state) => state.setDataDistrict)
    const setDataProvinces = useStore((state) => state.setDataProvinces)
    const setDataWard = useStore((state) => state.setDataWard)
    const setMapRef = useStore((state) => state.setMapRef)
    const levelZoom = useStore((state) => state.levelZoom)
    // const levelZoomDebounce = useDebounce(levelZoom, 500)
    const setLevelZoom = useStore((state) => state.setLevelZoom)
    const [isDrag, setIsDrag] = useState(false) // trigger sự kiện drag
    const isDragDebounce = useDebounce(isDrag, 500) // trigger sự kiện drag
    const [isFirst, setIsFirst] = useState(true)
    const [isFly, setIsFly] = useState(false)
    const [dataMap, setDataMap] = useState(null)
    const searchParams = useSearchParams()
    const propertyType = searchParams.getAll('propertyTypeIds')
    const propertyAreaType = searchParams.getAll('propertyAreaTypeIds')
    const propertyCategoryType = searchParams.getAll('propertyCategoryIds')

    const [titleCity, setTitleCity] = useState({
        title: '',
        id: null,
    })
    const [titleDistrict, setTitleDistrict] = useState({
        title: 'Quận/huyện',
        id: null,
    })
    const [titleWard, setTitleWard] = useState({
        title: 'Phường/xã',
        id: null,
    })

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
    } = useSWR(`${process.env.NEXT_PUBLIC_API}/property/property-by-address?cityId=${cityId || 11}`, fetcher)

    // get list ward count
    const {
        data: dataWard,
        error: errorWard,
        isLoading: isLoadingWard,
    } = useSWR(
        `${process.env.NEXT_PUBLIC_API}/property/property-by-address?cityId=${cityId}&districtId=${districtId}`,
        fetcher,
    )
    //
    const {
        data: dataItemMap,
        error: errorItemMap,
        isLoading: isLoadingItemMap,
    } = useSWR(
        `${process.env.NEXT_PUBLIC_API}/property?cityId=${cityId}${districtId ? '&districtId=' + districtId : ''}${
            wardId ? '&wardId=' + wardId : ''
        }${propertyCategoryTypeParams ? propertyCategoryTypeParams : ''}${
            propertyAreaTypeParams ? propertyAreaTypeParams : ''
        }${propertyTypeParams ? propertyTypeParams : ''}`,
        fetcher,
    )

    // const {
    //     data: dataMap,
    //     error: errorMap,
    //     isLoading: isLoadingMap,
    // } = useSWR(
    //     `${process.env.NEXT_PUBLIC_API}/property/property-by-address?cityId=${cityId}${
    //         districtId ? '&districtId=' + districtId : ''
    //     }${wardId ? '&wardId=' + wardId : ''}`,
    //     fetcher,
    // )
    // console.log('🚀 ~ file: MapV3.jsx:168 ~ MapV3 ~ dataMap:', dataMap)

    useEffect(() => {
        if (typeof window === 'undefined' || !mapRef?.current) return
        const loadMap = () => {
            if (!window.vietmapgl || typeof window === 'undefined') return
            mapRef.current = new window.vietmapgl.Map({
                container: 'map',
                style: `https://maps.vietmap.vn/mt/tm/style.json?apikey=${apiKey}`,
                center: [105.85379875200005, 21.028354507000074], //ha noi center
                zoom: 9,
                pitch: 0, // góc nhìn từ trên cao nhìn xuống,
                // bearing: 90,
            })
            mapRef.current?.scrollZoom.disable()
            mapRef.current?.addControl(
                new window.vietmapgl.NavigationControl({
                    visualizePitch: true,
                    showZoom: true,
                    showCompass: true,
                }),
            )

            //add event zoom
            mapRef.current?.on('zoomstart', function () {
                setLevelZoom(mapRef?.current?.getZoom())
            })
            //add event drag
            mapRef.current?.on('dragstart', () => {
                setIsDrag((prev) => !prev)
            })
        }

        loadMap() //add map
        setMapRef(mapRef.current)
        // addTileMap()
        return () => {
            setCityId(11)
            setDistrictId(null)
            setWardId(null)
            setMapRef(null)
            setLevelZoom(9)
        }
    }, [])

    useEffect(() => {
        const callApiBorder = async () => {
            const res = await fetch(
                `https://maps.vietmap.vn/api/boundaries/v3/info/${wardId || districtId || cityId}?apikey=${apiKey}`,
            )
            const data = await res.json()
            if (data && isFirst) {
                addGeojsonLine(handleGeoWKT(data?.geo_wkt))
            }
            if (!isFirst && data) {
                const polygon = handleGeoWKT(data?.geo_wkt)
                let newPolygon = polygon.filter((e) => !isNaN(e[0] && !isNaN(e[1])))
                if (newPolygon) {
                    const newData = {
                        type: 'Feature',
                        properties: {},
                        geometry: {
                            type: 'LineString',
                            coordinates: newPolygon,
                        },
                    }
                    mapRef.current?.getSource('marker-source')?.setData(newData)
                }
            }
        }
        callApiBorder()
        setIsFirst(false)

        const callApi = async () => {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API}/property/property-by-address?cityId=${cityId}${
                    districtId ? '&districtId=' + districtId : ''
                }${wardId ? '&wardId=' + wardId : ''}`,
            )
            const data = await res.json()
            if (data) {
                addMarkerV2(data, mapRef.current?.getZoom() || 9)
                setIsFirst(false)
                setDataMap(data)
            }
        }
        callApi()
    }, [cityId, districtId, wardId])

    useEffect(() => {
        dataProvinces && setDataProvinces(dataProvinces)
        dataDistrict && setDataDistrict(dataDistrict)
        dataWard && setDataWard(dataWard)
    }, [dataProvinces, dataDistrict, dataWard])

    // useEffect(() => {
    //     if (!districtId) {
    //         setTitleDistrict({
    //             title: 'Quận/huyện',
    //             id: null,
    //         })
    //     }
    //     if (!wardId) {
    //         setTitleWard({
    //             title: 'Phường/xã',
    //             id: null,
    //         })
    //     }
    // }, [cityId, districtId, wardId])

    // xử lý các marker theo sự kiên zoom và drag
    useEffect(() => {
        // kiểm tra xem điểm giữa của khung hình đang là quân/huyện nào hay là phường/xã nào
        const getLocationCurrent = async () => {
            const ct = await mapRef.current?.getCenter()
            // call api theo tạo độ center của view map
            const res = await fetch(
                `https://maps.vietmap.vn/api/reverse/v3?apikey=${apiKey}&lng=${ct?.lng}&lat=${ct?.lat}`,
            )
            // get data follow center viewport
            const data = await res.json()
            const one = dataMap?.find(
                (e) => Number(e?.district_id) === data[0]?.boundaries[1]?.id, // boundaries[1]<=> district
            )
            if (Number(one?.count) <= 1) return
            if (levelZoom >= 11.5) {
                setDistrictId(data[0]?.boundaries[1]?.id)
            }
            if (levelZoom >= 13.5) {
                setWardId(data[0]?.boundaries[0]?.id) // boundaries[1]<=> ward
            }
        }
        getLocationCurrent()
        if (levelZoom >= 11.5 && levelZoom < 13.5) {
            setWardId(null)
        }
        if (districtId && levelZoom < 11.5) {
            setDistrictId(null)
            wardId && setWardId(null)
        }
    }, [levelZoom, isDragDebounce])

    if (propertyType?.length > 0 && propertyType[0]) {
        propertyTypeParams = propertyType[0]
            .split('--')
            .reduce((accumulator, currentValue) => accumulator + '&propertyTypeIds=' + currentValue, '')
    } else {
        propertyTypeParams = ''
    }

    if (propertyAreaType?.length > 0 && propertyAreaType[0]) {
        propertyAreaTypeParams = propertyAreaType[0]
            .split('--')
            .reduce((accumulator, currentValue) => accumulator + '&propertyAreaTypeIds=' + currentValue, '')
    } else {
        propertyAreaTypeParams = ''
    }

    if (propertyCategoryType?.length > 0 && propertyCategoryType[0]) {
        propertyCategoryTypeParams = propertyCategoryType[0]
            .split('--')
            .reduce((accumulator, currentValue) => accumulator + '&propertyCategoryIds=' + currentValue, '')
    } else {
        propertyCategoryTypeParams = ''
    }
    // const addTileMap = () => {
    //     mapRef.current.on('load', function () {
    //         mapRef.current.addSource('traffic-tiles', {
    //             type: 'raster',
    //             // tiles: [`https://maps.vietmap.vn/api/dm/{z}/{x}/{y}@2x.png?apikey=${apiKey}`],
    //             // tiles: [`https://maps.vietmap.vn/api/tm/{z}/{x}/{y}@2x.png?apikey=${apiKey}`],
    //             tiles: [`https://maps.vietmap.vn/api/tf/{z}/{x}/{y}.png?apikey=${apiKey}`],
    //             tileSize: 256,
    //             // attribution: 'Map',
    //             id: 'vietmap.streets',
    //         })
    //         mapRef.current.addLayer({
    //             id: 'traffic-tiles',
    //             type: 'raster',
    //             source: 'traffic-tiles',
    //             minZoom: 8,
    //             maxZoom: 20,
    //         })
    //     })
    // }

    const addGeojsonLine = (dataPolygon) => {
        if (!dataPolygon) return
        mapRef.current.on('load', function () {
            mapRef.current.addSource('marker-source', {
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
            mapRef.current.addLayer({
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

    const callDataPopup = async (e) => {
        console.log('🚀 ~ file: MapV3.jsx:362 ~ callDataPopup ~ e:', e)
        // const res = await fetch(`${process.env.NEXT_PUBLIC_API}/property?${handleSelectId(e, levelZoom)}`)
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API}/property?cityId=${cityId}${districtId ? '&districtId=' + districtId : ''}${
                wardId ? '&wardId=' + wardId : ''
            }`,
        )
        const data = await res.json()
        console.log('🚀 ~ file: MapV3.jsx:363 ~ callDataPopup ~ data:', data)
        let childNode = ''
        if (data) {
            childNode = data?.data?.reduce(
                (acc, itemProject) =>
                    acc +
                    `<div
                            key=${itemProject?.id}
                            class="flex gap-x-[0.88vw] mt-[0.5vw]"
                        >
                            <a class="outline-none" href="/${
                                itemProject?.propertyCategory?.translations?.find((e) =>
                                    e?.languageCode?.toLowerCase()?.includes(lang === 'ch' ? 'cn' : lang),
                                )?.alias || itemProject?.propertyCategory?.translations[0]?.alias
                            }/${
                        itemProject?.translations?.find((e) =>
                            e?.languageCode?.toLowerCase()?.includes(lang === 'ch' ? 'cn' : lang),
                        )?.slug || itemProject?.translations[0]?.slug
                    }">
                                <img
                                    class="w-[5.4375vw] h-full block object-cover"
                                    src=${itemProject?.firstImage ? itemProject?.firstImage : '/images/itemproject.jpg'}
                                    alt=${itemProject?.translation?.name}
                                />
                            </a>
                            <div class="w-[12.0625vw]">
                            <a href="/${
                                itemProject?.propertyCategory?.translations?.find((e) =>
                                    e?.languageCode?.toLowerCase()?.includes(lang === 'ch' ? 'cn' : lang),
                                )?.alias || itemProject?.propertyCategory?.translations[0]?.alias
                            }/${
                        itemProject?.translations?.find((e) =>
                            e?.languageCode?.toLowerCase()?.includes(lang === 'ch' ? 'cn' : lang),
                        )?.slug || itemProject?.translations[0]?.slug
                    }">
                                <h2 class='line-clamp-1'>${itemProject?.translation?.name ?? ''}</h2>
                                </a>
                                <div
                                            title=${itemProject?.address?.display}
                                            class='flex items-center'
                                        >
                                        <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='15'
                                        height='14'
                                        viewBox='0 0 15 14'
                                        fill='none'
                                        class="h-[1vw] w-[3vw]"
                                    >
                                        <path
                                            d='M7.33422 6.8551C7.6153 6.8551 7.8555 6.75502 8.0548 6.55485C8.25411 6.35468 8.35376 6.11406 8.35376 5.83297C8.35376 5.55189 8.25367 5.3117 8.0535 5.11239C7.85334 4.91309 7.61272 4.81344 7.33163 4.81344C7.05055 4.81344 6.81036 4.91352 6.61105 5.11369C6.41175 5.31385 6.31209 5.55448 6.31209 5.83557C6.31209 6.11665 6.41218 6.35684 6.61235 6.55614C6.81251 6.75545 7.05314 6.8551 7.33422 6.8551ZM7.33293 11.6822C8.62598 10.5058 9.58119 9.43878 10.1986 8.48114C10.8159 7.52351 11.1246 6.6801 11.1246 5.95094C11.1246 4.80576 10.7586 3.86807 10.0266 3.13788C9.29459 2.4077 8.3967 2.0426 7.33293 2.0426C6.26915 2.0426 5.37126 2.4077 4.63927 3.13788C3.90726 3.86807 3.54126 4.80576 3.54126 5.95094C3.54126 6.6801 3.85723 7.52351 4.48918 8.48114C5.12112 9.43878 6.06904 10.5058 7.33293 11.6822ZM7.33293 12.8343C5.76765 11.5023 4.59855 10.2652 3.82563 9.12281C3.05272 7.98045 2.66626 6.92316 2.66626 5.95094C2.66626 4.4926 3.13536 3.3308 4.07355 2.46552C5.01175 1.60024 6.0982 1.1676 7.33293 1.1676C8.56765 1.1676 9.65411 1.60024 10.5923 2.46552C11.5305 3.3308 11.9996 4.4926 11.9996 5.95094C11.9996 6.92316 11.6131 7.98045 10.8402 9.12281C10.0673 10.2652 8.8982 11.5023 7.33293 12.8343Z'
                                            fill='#926B4F'
                                        />
                                    </svg>
                                            <span class='ml-[0.5vw] mr-[0.25vw] text-nau-nhat title14-700-150 whitespace-nowrap'>
                                                Địa chỉ:
                                            </span>
                                            <span class='capitalize text-den title14-400-150 line-clamp-1'>
                                                ${
                                                    itemProject?.address?.name +
                                                    ', ' +
                                                    itemProject?.address?.ward +
                                                    ', ' +
                                                    itemProject?.address?.district
                                                }
                                            </span>
                                        </div>
                                        <div class='flex items-center my-[0.5vw]'>
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
                                            <span class='ml-[0.5vw] mr-[0.25vw] text-nau-nhat title14-700-150'>
                                                Diện tích:
                                            </span>
                                            <span class=' text-den title14-400-150'>
                                                ${itemProject?.translation?.size + ' m²'}
                                            </span>
                                        </div>
                                        <div class='flex items-center'>
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
                                            <span class='ml-[0.5vw] mr-[0.25vw] text-nau-nhat title14-700-150'>
                                                Mức giá:
                                            </span>
                                            <span class='capitalize text-den title14-400-150'>
                                                ${itemProject?.translation?.priceDisplay}
                                            </span>
                                        </div>
                            </div>
                        </div>`,
                '',
            )
        }
        const marker = new vietmapgl.Marker()
            .setLngLat(e.coor)
            .addTo(mapRef.current)
            .setPopup(
                new vietmapgl.Popup().setHTML(`
                        <div style="width:fit-content;${
                            data?.data?.length > 3
                                ? 'height:20.625vw;overflow-x:hidden;overflow-y:scroll'
                                : 'height:fit-content;'
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

    const addMarkerV2 = (data, levelZoom) => {
        if (!data || !levelZoom) return
        const listMarker = []
        listMarkerOut?.forEach((e) => e?.remove())
        // listMarkerOut = new Array()
        data?.forEach((e) => {
            if (levelZoom >= 13.5) {
                listMarker?.push({
                    coor: [parseFloat(e?.lng), parseFloat(e?.lat)],
                    count: parseFloat(e?.count),
                    id: e?.id,
                })
            }
            if (levelZoom >= 11.5 && levelZoom < 13.5) {
                listMarker?.push({
                    coor: [parseFloat(e?.ward_lng), parseFloat(e?.ward_lat)],
                    count: parseFloat(e?.count),
                    id: e?.ward_id,
                })
            }
            if (levelZoom < 11.5) {
                listMarker?.push({
                    coor: [parseFloat(e?.district_lng), parseFloat(e?.district_lat)],
                    count: parseFloat(e?.count),
                    id: e?.district_id,
                })
            }
        })
        listMarker?.forEach((e) => {
            callDataPopup(e)
        })
    }

    // const handleAddMarker = (dataMap, levelZoom) => {
    //     const a = []
    //     const divElement = document.createElement('div')
    //     divElement.textContent = 1
    //     divElement.setAttribute('data-marker', '1')
    //     dataMap?.forEach((e) => {
    //         if (levelZoom >= 13.5) {
    //             a?.push({
    //                 type: 'Feature',
    //                 geometry: {
    //                     type: 'Point',
    //                     coordinates: [Number(e?.lng), Number(e?.lat)], // Tọa độ của marker 1
    //                 },
    //             })
    //         }
    //         if (levelZoom >= 11.5 && levelZoom < 13.5) {
    //             a?.push({
    //                 type: 'Feature',
    //                 geometry: {
    //                     type: 'Point',
    //                     coordinates: [Number(e?.ward_lng), Number(e?.ward_lat)], // Tọa độ của marker 1
    //                 },
    //             })
    //         }
    //         if (levelZoom < 11.5) {
    //             a?.push({
    //                 type: 'Feature',
    //                 geometry: {
    //                     type: 'Point',
    //                     coordinates: [Number(e?.district_lng), Number(e?.district_lat)], // Tọa độ của marker 1
    //                 },
    //             })
    //         }
    //     })
    //     return a
    // }

    // const addMarkerTest = (dataMap, levelZoom) => {
    //     if (!dataMap || !levelZoom || !mapRef.current) return
    //     const a = handleAddMarker(dataMap, levelZoom)
    //     // typeof mapRef.current?.on === 'function' &&
    //     mapRef.current?.on('load', function () {
    //         const markerData = {
    //             type: 'FeatureCollection',
    //             features: a,
    //         }
    //         mapRef.current?.addSource('marker1', {
    //             type: 'geojson',
    //             data: markerData,
    //         })

    //         mapRef.current?.addLayer({
    //             id: 'marker-point',
    //             type: 'circle', // Loại layer (có thể là 'symbol', 'circle', 'line', hoặc 'fill' tùy vào nhu cầu)
    //             source: 'marker1', // ID của nguồn dữ liệu
    //             paint: {
    //                 'circle-radius': 8, // Kích thước của marker
    //                 'circle-color': 'red', // Màu sắc của marker
    //             },
    //         })
    //     })
    // }

    // fly đến tỉnh/quận/xa
    // const flyMap = (lat = 104.78234226958115, lon = 22.920931262916405, zoom = 9) => {
    //     mapRef.current?.flyTo({
    //         center: [Number(lat), Number(lon)],
    //         zoom: zoom,
    //         curve: 1,
    //     })
    //     setLevelZoom(zoom)
    // }

    // // handle change city
    // const handleChangeCity = (id) => {
    //     if (!dataProvinces || !id) return
    //     const itemCity = dataProvinces?.find((i) => i?.city_id == id)
    //     if (!itemCity) {
    //         return notifyError('No data project in address city search!')
    //     }
    //     //set lại cityid
    //     cityId !== Number(id) && setCityId(Number(id))
    //     // khi chuyển city thì setDistrictId và setWardId về null
    //     setDistrictId(null)
    //     setWardId(null)
    //     flyMap(itemCity?.city_lng, itemCity?.city_lat)
    //     // fly zoom to city
    // }

    // //handle change district
    // const handleChangeDistrict = (id) => {
    //     if (!dataDistrict || !id) return
    //     const itemDistrict = dataDistrict?.find((e) => e?.district_id == id)
    //     if (typeof itemDistrict !== 'object') {
    //         return notifyError('No data project in address district search!')
    //     }
    //     !wardId && setWardId(null)
    //     flyMap(itemDistrict?.district_lng, itemDistrict?.district_lat, 11.5)
    // }

    // //handle change ward
    // const handleChangeWard = (id) => {
    //     if (!dataWard || !id) return
    //     const itemCity = dataWard?.find((i) => i?.ward_id == id)
    //     if (!itemCity) {
    //         return notifyError('No data project in address ward search!')
    //     }
    //     flyMap(itemCity?.ward_lng, itemCity?.ward_lat, 13.5)
    //     // fly zoom to ward
    // }

    return (
        <>
            <div
                ref={mapRef}
                style={{
                    position: 'relative',
                }}
                id='map'
                className=''
            >
                <div
                    onClick={() => {
                        console.log('listMarkerOut', listMarkerOut)
                        listMarkerOut?.forEach((e) => e?.remove())
                    }}
                    className='absolute top-0 left-0 w-[50px] h-[50px] bg-black text-white flex items-center justify-center z-[9999] cursor-pointer'
                >
                    Remove Maker
                </div>
                {/* <div className='absolute top-0 left-0 flex w-full h-fit z-[1000] bg-white'>
                    <SelectCity
                        data={dataProvinces}
                        handleChangeCity={handleChangeCity}
                        titleCity={titleCity}
                        setTitleCity={setTitleCity}
                        districtId={districtId}
                        wardId={wardId}
                        cityId={cityId}
                    />
                    {dataDistrict?.length > 0 && (
                        <SelectDistrict
                            data={dataDistrict?.filter((e) => e?.district_id != 0)}
                            districtId={districtId}
                            wardId={wardId}
                            setDistrictId={setDistrictId}
                            handleChangeDistrict={handleChangeDistrict}
                            titleDistrict={titleDistrict}
                            setTitleDistrict={setTitleDistrict}
                        />
                    )}
                    <SelectWard
                        className={`${districtId && dataWard ? '' : 'hidden'}`}
                        data={dataWard}
                        wardId={wardId}
                        setWardId={setWardId}
                        handleChangeWard={handleChangeWard}
                        titleWard={titleWard}
                        setTitleWard={setTitleWard}
                    />
                </div> */}
            </div>
        </>
    )
}
export default memo(MapV3)
