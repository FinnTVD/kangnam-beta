'use client'

import useStore from '@/app/[lang]/(store)/store'
import { apiKey } from '@/utils'
import { useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export default function MapV4() {
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
    const setLevelZoom = useStore((state) => state.setLevelZoom)
    const [isDrag, setIsDrag] = useState(false) // trigger sự kiện drag
    const [isFirst, setIsFirst] = useState(true)
    const [isFly, setIsFly] = useState(false)
    const searchParams = useSearchParams()
    const propertyType = searchParams.getAll('propertyTypeIds')
    const propertyAreaType = searchParams.getAll('propertyAreaTypeIds')
    const propertyCategoryType = searchParams.getAll('propertyCategoryIds')

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
            setMapRef(mapRef.current)
            //add event zoom
            // mapRef.current?.on('zoomstart', function () {
            //     setLevelZoom(mapRef?.current?.getZoom())
            // })
            //add event drag
            // mapRef.current?.on('dragstart', () => {
            //     setIsDrag((prev) => !prev)
            // })
        }

        loadMap() //add map
        // addTileMap()
        return () => {
            setCityId(11)
            setDistrictId(null)
            setWardId(null)
            setMapRef(null)
            setLevelZoom(9)
        }
    }, [])
    return (
        <section
            ref={mapRef}
            style={{
                position: 'relative',
            }}
            id='map'
        ></section>
    )
}
