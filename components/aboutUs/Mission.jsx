'use client'
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"

export default function Mission(){
    gsap.registerPlugin(ScrollTrigger);
    const bgRef = useRef();
    // useEffect(() => {
    //     const bg = bgRef.current
    useEffect(() => {
    gsap.fromTo(bgRef.current, 
        {
            transform: 'scale(1.5)',
        },
        {
        scrollTrigger:{
            trigger: bgRef.current,
            scrub: true,
            start: 'top bottom',
            end: 'bottom center',
        },
        transform: 'scale(1)',
        }
    )
    }, [])
    return(
        <section className="relative px-[15.5625vw] pt-[13.375vw] pb-[14.5625vw] mt-[3.1875vw] overflow-hidden">
            <Image ref={bgRef} fill src="/mission-bg.png" className="top-0 left-0 opacity-60 z-[-2]"></Image>
            <div className="absolute top-0 left-0 w-full h-full bg-[#412A1A] bg-opacity-60 z-[-1]">
            </div>
            <div className="relative">
                <p className="text-[2.75vw] font-semibold text-white leading-[1.5] tracking-[-2.2px]"><strong className="font-bold text-">SỨ MỆNH</strong> của chúng tôi là <strong className="font-bold">THIẾT LẬP</strong> và <strong className="font-bold">THỰC THI</strong> những tiêu chuẩn cao nhất nhằm phục vụ lợi ích lớn nhất của Khách hàng cho mọi nhu cầu về <strong className="font-bold">BẤT ĐỘNG SẢN</strong></p>
                <Image width={91} height={80} src="/quotes.svg" className="absolute top-[-2.5vw] left-[-2.5vw] w-[5.6875vw]"></Image>
            </div>
        </section>
    )
}