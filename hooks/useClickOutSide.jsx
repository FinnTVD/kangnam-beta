'use client'

import { useEffect, useRef, useState } from 'react'

export default function useClickOutSide() {
    const [isOutSide, setIsOutSide] = useState(false)
    const sideRef = useRef()
    useEffect(() => {
        if (typeof window === 'undefined') return
        document.addEventListener('click', handleClickOutSide, true)
    }, [])

    const handleClickOutSide = (e) => {
        if (!sideRef?.current?.contains(e.target)) {
            //in side
            setIsOutSide(true)
        } else {
            //out side
            setIsOutSide(false)
        }
    }
    return [sideRef, isOutSide]
}
