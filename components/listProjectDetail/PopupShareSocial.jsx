'use client'

import useStore from '@/app/[lang]/(store)/store'
import SocialMedia from '../home/SocialMedia'

const dataInfo = [
    {
        title: 'test',
    },
    {
        title: 'test',
    },
    {
        title: 'test',
    },
    {
        title: 'test',
    },
    {
        title: 'test',
    },
    {
        title: 'test',
    },
]

export default function PopupShareSocial() {
    const isPopupShare = useStore((state) => state.isPopupShare)
    const setIsPopupShare = useStore((state) => state.setIsPopupShare)
    return (
        <div
            className={`${
                isPopupShare ? 'flex' : 'hidden'
            } fixed z-[999999999] bg-white rounded-[7.25vw] h-[4vw] max-md:h-[15vw] w-fit px-[4vw] bottom-[3vh] left-1/2 -translate-x-1/2 items-center justify-center border border-solid border-logo max-md:bottom-[8vh]`}
        >
            <div className='relative flex items-center justify-center w-full h-full'>
                <SocialMedia
                    dataInfo={dataInfo}
                    className='flex gap-x-[2vw] w-fit max-md:gap-x-[4vw]'
                />
            </div>
            <div
                style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}
                className='w-[2vw] h-[2vw] max-md:w-[6vw] max-md:h-[6vw] bg-white rounded-full flex justify-center items-center absolute top-0 right-0 -translate-y-1/2 cursor-pointer'
                onClick={() => {
                    setIsPopupShare(false)
                }}
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='black'
                    className='w-[1vw] h-[1vw] max-md:w-[4vw] max-md:h-[4vw]'
                >
                    <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M6 18 18 6M6 6l12 12'
                    />
                </svg>
            </div>
        </div>
    )
}
