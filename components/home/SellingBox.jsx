'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Hiring from './Hiring'
import SellingRes from './SellingRes'
import { useCallback } from 'react'
import useSWR from 'swr'
import { categoryHireId, handleCheckLangCode, preventRefreshSwr } from '@/utils'
import { useMediaQuery } from 'react-responsive'

const fetcher = (url, langCode) =>
    fetch(`${process.env.NEXT_PUBLIC_API}${url}`, { headers: { 'x-language-code': langCode } }).then((res) =>
        res.json(),
    )

let propertyTypeParams = ''
let propertyAreaTypeParams = ''
let propertyCategoryTypeParams = ''

export default function SellingBox({ lang, t, dataSellingN, dataHiringN }) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathName = usePathname()
    const isTablet = useMediaQuery({
        query: '(max-width: 1023px)',
    })

    const propertyType = searchParams.getAll('propertyTypeIds')
    const propertyAreaType = searchParams.getAll('propertyAreaTypeIds')
    const propertyCategoryType = searchParams.getAll('propertyCategoryIds')

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

    const {
        data: dataSelling,
        error: errorSelling,
        isLoading: isLoadingSelling,
    } = useSWR(
        !isTablet
            ? undefined
            : `/property?take=20${propertyCategoryTypeParams ? propertyCategoryTypeParams : ''}${
                  propertyAreaTypeParams ? propertyAreaTypeParams : ''
              }${propertyTypeParams ? propertyTypeParams : ''}`,
        (url) => (isTablet ? fetcher(url, handleCheckLangCode(lang)) : undefined),
        preventRefreshSwr,
    )

    const {
        data: dataHiring,
        error: errorHiring,
        isLoading: isLoadingHiring,
    } = useSWR(
        `/property?propertyCategoryIds=${categoryHireId}${propertyAreaTypeParams ? propertyAreaTypeParams : ''}${
            propertyTypeParams ? propertyTypeParams : ''
        }`,
        (url) => (isTablet ? fetcher(url, handleCheckLangCode(lang)) : undefined),
        preventRefreshSwr,
    )

    if (dataHiring === undefined || dataSelling === undefined) return <SellingRes.Skeleton />
    if (dataHiring === null && !isLoadingHiring) return null
    if (dataSelling === null && !isLoadingSelling) return null

    return (
        <>
            <SellingRes
                lang={lang}
                t={t}
                data={dataSelling}
            />
            <Hiring
                lang={lang}
                t={t}
                data={dataHiring}
            />
        </>
    )
}
