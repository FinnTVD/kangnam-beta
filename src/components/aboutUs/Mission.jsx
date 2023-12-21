'use client'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'
import classes from './MissionStyle.module.css'

export default function Mission({ t }) {
    gsap.registerPlugin(ScrollTrigger)
    const bgRef = useRef()

    useLayoutEffect(() => {
        gsap.fromTo(
            bgRef.current,
            {
                transform: 'scale(1.5)',
            },
            {
                scrollTrigger: {
                    trigger: bgRef.current,
                    scrub: true,
                    start: 'top bottom',
                    end: 'bottom center',
                },
                transform: 'scale(1)',
            },
        )
    }, [])

    return (
        <section className='relative px-[15.5625vw] pt-[13.375vw] pb-[14.5625vw] mt-[3.1875vw] overflow-hidden max-md:pt-[39.7vw] max-md:pb-[34.9vw] max-md:pl-[5.8vw] max-md:pr-[2.6vw]'>
            <Image
                ref={bgRef}
                fill
                src='/images/mission-bg.png'
                className='top-0 left-0 opacity-60 z-[-2] object-cover'
                alt='mission-background'
                sizes='100vw'
            ></Image>
            <div className='absolute top-0 left-0 w-full h-full bg-[#412A1A] bg-opacity-60 z-[-1]'></div>
            <div className='relative'>
                <div
                    className={classes['mission-description']}
                    dangerouslySetInnerHTML={{ __html: t?.aboutUs?.section4?.description }}
                ></div>
                <Image
                    width={91}
                    height={80}
                    src='/images/quotes.svg'
                    className='absolute top-[-2.5vw] left-[-2.5vw] w-[5.6875vw] max-md:w-[17vw] max-md:top-[-8vw]'
                    alt='quotes-icon'
                ></Image>
            </div>
        </section>
    )
}
