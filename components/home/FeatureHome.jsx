'use client'

import BoxCurrency from './BoxCurrency'
import SocialMedia from './SocialMedia'
import { useEffect, useState } from 'react'
import useClickOutSide from '@/hooks/useClickOutSide'
import useStore from '@/app/[lang]/(store)/store'
import IconSocial from '../icons/IconSocial'
import IconChangeCurrency from '../icons/IconChangeCurrency'
import IconCall from '../icons/IconCall'
import Link from 'next/link'
import IconYoutube from '../icons/IconYoutube'
export default function FeatureHome({ dataInfo, isOther = false }) {
    const isFeatureHome = useStore((state) => state.isFeatureHome)
    const setIsFeatureHome = useStore((state) => state.setIsFeatureHome)

    const [isShow, setIsShow] = useState(null)
    const [sideRef, isOutSide] = useClickOutSide()

    useEffect(() => {
        if (typeof window === 'undefined') return
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        isOutSide && setIsShow(false)
    }, [isOutSide])

    const handleScroll = () => {
        setIsShow(false)
    }

    const handleCurrently = () => {
        setIsShow(!isShow)
    }

    return (
        <ul
            id='listFeature'
            className='fixed right-[1.94vw] bottom-[1.86vw] z-[9999] gap-y-[1vw] flex flex-col transition-all duration-500 ease-linear select-none max-md:hidden'
        >
            <div
                onClick={() =>
                    setIsFeatureHome({
                        isStandMap: true,
                        isContain: true,
                    })
                }
                className={`${
                    isFeatureHome?.isStandMap && !isFeatureHome?.isContain ? '' : 'hidden'
                } absolute cursor-pointer top-[-2.5vw] right-[-1.5vw] flex items-center justify-center w-fit h-fit rounded-full bg-white`}
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='black'
                    class='w-[2.5vw] h-[2.5vw] p-[0.5vw]'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M6 18L18 6M6 6l12 12'
                    />
                </svg>
            </div>

            <li
                className={`${
                    isFeatureHome?.isContain && !isOther ? 'active1' : ''
                } item-social transition-all duration-200 ease-linear group relative w-[3vw] h-[3vw] cursor-pointer shadow-feature flex justify-center items-center bg-logo rounded-full `}
            >
                <Link
                    href={'https://blog.naver.com/hanoi-kn'}
                    target='_blank'
                    className='uppercase text-[0.6vw] font-bold text-white w-full h-full flex justify-center items-center rounded-full'
                >
                    NAVER
                </Link>
            </li>
            <li
                className={`${
                    isFeatureHome?.isContain && !isOther ? 'active1' : ''
                } item-social transition-all duration-200 ease-linear group relative w-[3vw] h-[3vw] cursor-pointer shadow-feature flex justify-center items-center bg-logo rounded-full`}
            >
                <Link
                    href={'https://www.youtube.com/@kangnamland/featured'}
                    target='_blank'
                    className='w-full h-full flex justify-center items-center'
                >
                    <IconYoutube className='object-contain w-[2vw] h-[2vw] group-hover:scale-125 transition-all duration-200 ease-linear' />
                </Link>
            </li>
            <li
                className={`${
                    isFeatureHome?.isContain && !isOther ? 'active1' : ''
                } item-social transition-all duration-200 ease-linear group relative w-[3vw] h-[3vw] cursor-pointer shadow-feature flex justify-center items-center bg-logo rounded-full before:content-normal before:w-[10.64vw] before:h-[25vw] before:bg-transparent hover:before:block before:hidden before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:-translate-x-[58%]`}
            >
                <IconSocial className='object-contain w-[2vw] h-[2vw] group-hover:scale-125 transition-all duration-200 ease-linear' />
                <SocialMedia dataInfo={dataInfo} />
            </li>
            <li
                className={`${
                    isFeatureHome?.isContain && !isOther ? 'active2' : ''
                } item-social transition-all duration-200 ease-linear relative w-[3vw] h-[3vw] shadow-feature bg-logo rounded-full group`}
                ref={sideRef}
            >
                <div
                    onClick={handleCurrently}
                    className='relative flex items-center justify-center w-full h-full rounded-full cursor-pointer '
                >
                    <IconChangeCurrency className='object-contain w-[2vw] h-[2vw] group-hover:scale-125 transition-all duration-200 ease-linear' />
                </div>
                <BoxCurrency className={!isShow || isOutSide ? 'hidden' : ''} />
            </li>
            <li
                className={`${
                    isFeatureHome?.isContain && !isOther ? 'active3' : ''
                } item-social transition-all duration-200 ease-linear w-[3vw] h-[3vw] cursor-pointer shadow-feature flex justify-center items-center bg-logo rounded-full group`}
            >
                <Link
                    className=''
                    href={`tel:${dataInfo?.phone?.split('|')[0]}`}
                >
                    <IconCall className='object-contain w-[2vw] h-[2vw] group-hover:scale-125 transition-all duration-200 ease-linear' />
                </Link>
            </li>
        </ul>
    )
}
