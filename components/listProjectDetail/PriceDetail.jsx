'use client'

import { useEffect, useState } from 'react'

const handleCheckCode = (lang) => {
    switch (lang) {
        case 'en':
            return 'USD'
        case 'kr':
            return 'KRW'
        case 'ch':
            return 'CNY'
        default:
            return 'VND'
    }
}

export default function PriceDetail({ price, size, lang }) {
    const [value, setValue] = useState('')
    useEffect(() => {
        if (!size) return
        callApi(handleCheckCode(lang))
    }, [lang])

    const handleFormat = (value, lang) => {
        if (!value) return
        let a = value?.toString()?.split('.')
        let b = a[0].split('').reverse()
        const str = []
        for (let i = 0; i < b.length; i++) {
            if (i % 3 === 2 && b.length - 1 > i) {
                str.push(b[i])
                str.push(',')
            } else {
                str.push(b[i])
            }
        }
        let c = str.reverse()
        // let d = a?.length === 1 ? '' : '.' + a[1]
        let e = handleCheckCode(lang)
        return setValue('≈ ' + c.join('') + ' ' + e + '/m²')
    }
    const callApi = async (code) => {
        if (code === 'VND') return handleFormat(Number(price) / Number(size), lang)
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/currency/get-by-code?codeFrom=${code}&codeTo=VND`)
        const data = await res.json()
        return handleFormat(Number(price) / Number(data?.value), lang)
    }

    return (
        <span className='title16-400-125 max-md:title-mb16-400-125 text-[#888] relative inline-block tracking-[0.5px] max-lg:title-tl16'>
            {/* {callApi(handleCheckCode(lang))} */}
            {size ? value : ''}
        </span>
    )
}
