'use client'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'

export default function Teams({ t }) {
    const isTablet = useMediaQuery({ query: '(max-width: 1023px)' })

    return (
        <section className='flex justify-end items-center px-120 pt-[6.125vw] pb-[9.5625vw] relative max-lg:justify-start max-md:pt-0 max-lg:pb-[78.1vw] max-md:px-0'>
            <div
                className='flex-col w-[41.625vw] max-lg:w-full px-mb10'
                data-aos='fade-up'
            >
                <div>
                    <span className='sub-title max-md:title-mb10-700-150 max-md:tracking-[0.5px] max-lg:title-tl12'>
                        {t?.aboutUs?.section3?.subtitle}
                    </span>
                    <h2 className='title56 text-den mt-[0.125vw] max-md:mt-[1.1vw] max-md:title-mb25-700-130 max-md:tracking-[-1.25px] max-lg:title-tl38'>
                        {t?.aboutUs?.section3?.title}
                    </h2>
                </div>
                <span className='mt-[1vw] text-den title16-400-150 inline-block max-md:title-mb14-400-150 max-md:mt-[2.6vw] max-lg:title-tl16'>
                    {t?.aboutUs?.section3?.description}
                </span>
            </div>
            <Image
                fill
                src={!isTablet ? '/images/about-us-team-bg.png' : '/images/about-us-team-bg-mobile.png'}
                className='object-cover top-0 left-0 z-[-1] max-lg:!top-auto max-lg:!bottom-0 max-lg:!h-[74.1vw]'
                alt='team-background'
            ></Image>
        </section>
    )
}
