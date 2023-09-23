'use client'
import { useEffect, useState, useRef } from 'react'
import SelectDistrict from './SelectDistrict'
import SelectWard from './SelectWard'
import SelectCity from './SelectCity'
import { toast } from 'react-toastify'
import useStore from '@/app/[lang]/(store)/store'
import useSWR from 'swr'

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
const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function MapV3() {
    const mapRef = useRef() //lưu lại dom map
    const cityId = useStore((state) => state.cityId)
    console.log('🚀 ~ file: MapV3.jsx:87 ~ MapV3 ~ cityId:', cityId)
    const districtId = useStore((state) => state.districtId)
    console.log('🚀 ~ file: MapV3.jsx:89 ~ MapV3 ~ districtId:', districtId)
    const wardId = useStore((state) => state.wardId)
    console.log('🚀 ~ file: MapV3.jsx:91 ~ MapV3 ~ wardId:', wardId)
    const setCityId = useStore((state) => state.setCityId)
    const setDistrictId = useStore((state) => state.setDistrictId)
    const setWardId = useStore((state) => state.setWardId)
    const setHandleChangeCity = useStore((state) => state.setHandleChangeCity)
    const setHandleChangeDistrict = useStore((state) => state.setHandleChangeDistrict)
    const setHandleChangeWard = useStore((state) => state.setHandleChangeWard)
    const setHandleFlyMap = useStore((state) => state.setHandleFlyMap)
    const [levelZoom, setLevelZoom] = useState(9) //lưu level zoom
    const [isDrag, setIsDrag] = useState(false) // trigger sự kiện drag
    const [isFirst, setIsFirst] = useState(true)
    const [isFly, setIsFly] = useState(false)

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

    //get polyon build boundary
    const {
        data: dataVietMap,
        error: errorVietMap,
        isLoading: isLoadingVietMap,
    } = useSWR(
        `https://maps.vietmap.vn/api/boundaries/v3/info/${wardId || districtId || cityId}?apikey=${apiKey}`,
        fetcher,
    )

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
    console.log('🚀 ~ file: MapV3.jsx:94 ~ MapV3 ~ dataDistrict:', dataDistrict)

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
        }`,
        fetcher,
    )

    //
    const {
        data: dataMap,
        error: errorMap,
        isLoading: isLoadingMap,
    } = useSWR(
        `${process.env.NEXT_PUBLIC_API}/property/property-by-address?cityId=${cityId}${
            districtId ? '&districtId=' + districtId : ''
        }${wardId ? '&wardId=' + wardId : ''}`,
        fetcher,
    )
    console.log('🚀 ~ file: MapV3.jsx:130 ~ MapV3 ~ dataMap:', dataMap)

    useEffect(() => {
        if (typeof window === 'undefined' || !mapRef.current) return
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

            //add event zoom
            mapRef?.current?.on('zoomstart', function () {
                setLevelZoom(mapRef?.current?.getZoom())
            })
            //add event drag
            mapRef?.current?.on('dragstart', () => {
                setIsDrag((prev) => !prev)
            })
        }

        loadMap() //add map
        addTileMap()
        setHandleChangeCity(handleChangeCity)
        setHandleChangeDistrict(handleChangeDistrict)
        setHandleChangeWard(handleChangeWard)
        setHandleFlyMap(flyMap)
        return () => {
            setCityId(11)
            setDistrictId(null)
            setWardId(null)
        }
    }, [])

    useEffect(() => {
        if (dataVietMap && dataMap && isFirst) {
            addGeojsonLine(handleGeoWKT(dataVietMap?.geo_wkt))
            addMarkerTest(dataMap, levelZoom)
            setIsFirst(false)
        }
        if (mapRef.current && !isFirst && dataVietMap && dataMap) {
            let polygon = handleGeoWKT(dataVietMap?.geo_wkt)
            let a = handleAddMarker(dataMap, levelZoom)
            if (polygon) {
                let newData = {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'LineString',
                        coordinates: polygon,
                    },
                }
                mapRef.current?.getSource('marker-source')?.setData(newData)
            }
            if (a) {
                let markerData = {
                    type: 'FeatureCollection',
                    features: a,
                }
                mapRef.current?.getSource('marker1')?.setData(markerData)
            }
        }
    }, [dataVietMap, dataMap])

    useEffect(() => {
        if (!districtId) {
            setTitleDistrict({
                title: 'Quận/huyện',
                id: null,
            })
        }
        if (!wardId) {
            setTitleWard({
                title: 'Phường/xã',
                id: null,
            })
        }
    }, [cityId, districtId, wardId])

    // xử lý các marker theo sự kiên zoom và drag
    // useEffect(() => {
    //     // kiểm tra xem điểm giữa của khung hình đang là quân/huyện nào hay là phường/xã nào
    //     const getLocationCurrent = async () => {
    //         try {
    //             const ct = await mapRef.current?.getCenter()
    //             // call api theo tạo độ center của view map
    //             const res = await fetch(
    //                 `https://maps.vietmap.vn/api/reverse/v3?apikey=${apiKey}&lng=${ct?.lng}&lat=${ct?.lat}`,
    //             )
    //             // get data follow center viewport
    //             const data = await res.json()
    //             const one = dataMap?.find(
    //                 (e) => Number(e?.district_id) === data[0]?.boundaries[1]?.id, // boundaries[1]<=> district
    //             )
    //             if (Number(one?.count) <= 1) return
    //             if (levelZoom >= 11.5) {
    //                 setDistrictId(data[0]?.boundaries[1]?.id)
    //             }
    //             if (levelZoom >= 13.5) {
    //                 setWardId(data[0]?.boundaries[0]?.id) // boundaries[1]<=> ward
    //             }
    //         } catch (error) {
    //             console.log('error', error)
    //         }
    //     }
    //     getLocationCurrent()
    //     if (levelZoom >= 11.5 && levelZoom < 13.5) {
    //         setWardId(null)
    //     }
    //     if (districtId && levelZoom < 11.5) {
    //         setDistrictId(null)
    //     }
    // }, [levelZoom, isDrag])

    const addTileMap = () => {
        mapRef.current.on('load', function () {
            mapRef.current.addSource('traffic-tiles', {
                type: 'raster',
                // tiles: [`https://maps.vietmap.vn/api/dm/{z}/{x}/{y}@2x.png?apikey=${apiKey}`],
                // tiles: [`https://maps.vietmap.vn/api/tm/{z}/{x}/{y}@2x.png?apikey=${apiKey}`],
                tiles: [`https://maps.vietmap.vn/api/tf/{z}/{x}/{y}.png?apikey=${apiKey}`],
                tileSize: 256,
                // attribution: 'Map',
                id: 'vietmap.streets',
            })
            mapRef.current.addLayer({
                id: 'traffic-tiles',
                type: 'raster',
                source: 'traffic-tiles',
                minZoom: 8,
                maxZoom: 20,
            })
        })
    }

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
            //     // // mapRef.current.addSource('some id', {
            //     //     type: 'geojson',
            //     //     data: {
            //     //         type: 'FeatureCollection',
            //     //         features: [
            //     //             {
            //     //                 type: 'Feature',
            //     //                 properties: { name: 'Null Island' },
            //     //                 geometry: {
            //     //                     type: 'Point',
            //     //                     coordinates: [105.78234226958115, 21.920931262916405],
            //     //                 },
            //     //             },
            //     //         ],
            //     //     },
            //     // })
        })
    }

    const handleAddMarker = (dataMap, levelZoom) => {
        let a = []
        dataMap?.forEach((e) => {
            if (levelZoom >= 13.5) {
                a?.push({
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [e?.lng, e?.lat], // Tọa độ của marker 1
                    },
                    properties: {
                        // Các thuộc tính của marker 1
                    },
                })
            }
            if (levelZoom >= 11.5 && levelZoom < 13.5) {
                a?.push({
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [e?.ward_lng, e?.ward_lat], // Tọa độ của marker 1
                    },
                    properties: {
                        // Các thuộc tính của marker 1
                    },
                })
            }
            if (levelZoom < 11.5) {
                a?.push({
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [e?.district_lng, e?.district_lat], // Tọa độ của marker 1
                    },
                    properties: {
                        // Các thuộc tính của marker 1
                    },
                })
            }
        })
        return a
    }

    const addMarkerTest = (dataMap, levelZoom) => {
        let a = handleAddMarker(dataMap, levelZoom)
        console.log('🚀 ~ file: MapV3.jsx:614 ~ addMarkerTest ~ a:', a)
        mapRef.current.on('load', function () {
            const markerData = {
                type: 'FeatureCollection',
                features: a,
            }
            mapRef.current.addSource('marker1', {
                type: 'geojson',
                data: markerData,
            })

            mapRef.current.addLayer({
                id: 'marker-point',
                type: 'circle', // Loại layer (có thể là 'symbol', 'circle', 'line', hoặc 'fill' tùy vào nhu cầu)
                source: 'marker1', // ID của nguồn dữ liệu
                paint: {
                    'circle-radius': 8, // Kích thước của marker
                    'circle-color': 'red', // Màu sắc của marker
                },
            })

            mapRef.current.on('click', 'marker1', function (e) {
                new vietmapgl.Popup()
                    .setLngLat([105.81922371274908, 21.02171763717562])
                    .setHTML(`Country name: test`)
                    .addTo(mapRef.current)
            })
        })
    }

    // fly đến tỉnh/quận/xa
    const flyMap = (lat = 104.78234226958115, lon = 22.920931262916405, zoom = 9) => {
        mapRef.current?.flyTo({
            center: [Number(lat), Number(lon)],
            zoom: zoom,
            curve: 1,
        })
        setLevelZoom(zoom)
    }

    // handle change city
    const handleChangeCity = (id) => {
        if (!dataProvinces || !id) return

        const itemCity = dataProvinces?.find((i) => i?.city_id == id)
        if (!itemCity) {
            return notifyError('No data project in address city search!')
        }
        //set lại cityid
        setCityId(Number(id))
        // khi chuyển city thì setDistrictId và setWardId về null
        setDistrictId(null)
        setWardId(null)

        // fly zoom to city
        flyMap(itemCity?.city_lng, itemCity?.city_lat)
    }

    //handle change district
    const handleChangeDistrict = (id) => {
        if (!dataDistrict || !id) return
        const itemDistrict = dataDistrict?.find((e) => e?.district_id == id)
        if (typeof itemDistrict !== 'object') {
            return notifyError('No data project in address district search!')
        }
        setWardId(null)
        flyMap(itemDistrict?.district_lng, itemDistrict?.district_lat, 11.5)
    }

    //handle change ward
    const handleChangeWard = (id) => {
        if (!dataWard || !id) return
        const itemCity = dataWard?.find((i) => i?.ward_id == id)
        if (!itemCity) {
            return notifyError('No data project in address ward search!')
        }
        //delete marker before fly to city other

        flyMap(itemCity?.ward_lng, itemCity?.ward_lat, 13.5)
        // fly zoom to ward
    }

    return (
        <>
            <div
                ref={mapRef}
                style={{
                    position: 'relative',
                }}
                id='map'
                className='h-screen'
            >
                <div className='absolute top-0 left-0 flex w-full h-fit z-[1000] bg-white'>
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
                </div>
            </div>
        </>
    )
}
