'use client'
import Link from 'next/link'
import Button from '../general/Button'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Partner() {
    const imgArray = ['/partnerlogo.jpg', '/partnerlogo.jpg', '/logoVin.jpg', '/partnerlogo.jpg', '/partnerlogo.jpg', '/partnerlogo.jpg',
    '/partnerlogo.jpg', '/logoVin.jpg', '/partnerlogo.jpg', '/logoVin.jpg', '/logoVin.jpg', '/logoVin.jpg', '/logoVin.jpg']
    const imgBorder = ['bg-white h-[13.5625vw] flex justify-center items-center border border-0.5 rounded-tl-2xl', 
    'bg-white h-[13.5625vw] flex justify-center items-center border border-0.5 rounded-tr-2xl',
    'bg-white h-[13.5625vw] flex justify-center items-center border border-0.5 rounded-bl-2xl',
    'bg-white h-[13.5625vw] flex justify-center items-center border border-0.5 rounded-br-2xl',
    'bg-white h-[13.5625vw] flex justify-center items-center border border-0.5'
]
const arrPartner = []
    const numberOfPartner = Math.ceil(imgArray.length/10);
    for(let i=0; i<numberOfPartner; i++){
        if(i===numberOfPartner.length-1){
            arrPartner.push(imgArray.length-1);
        }
        else{
            arrPartner.push(10*(i+1));
        }
    }
    return (
        <section className="w-full px-120 pb-[15.625vw] pt-[9.625vw] relative">
            <div className='absolute bottom-[0.5vw] left-0 h-[6.25vw] w-full z-[-1]' style={{background: 'linear-gradient(0deg, #fff, #ffffff00)'}}></div>
            <div className='absolute opacity-70 left-0 top-0 w-full h-full z-[-1]' style={{background: 'linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 53.44%, #FFF 100%), white'}}></div>
            <div className='absolute opacity-30 left-0 top-0 w-full h-full z-[-1] bg-lightgray'></div>
            <Image src="/partner-bg.jpg" fill className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"></Image>
            <div className='flex justify-between items-end'>
                <div>
                    <span className='sub-title'>Tổng hợp các dự án</span>
                    <h2 className='title56 text-den mt-[0.62vw]'>Đối tác của chúng tôi</h2>
                </div>
                <Button href={'/'}>Trở thành đối tác</Button>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={24}
            >
            {arrPartner?.map((a, pIndex) => (
                <SwiperSlide key={pIndex}>
                    <div className='mt-[3.5vw] grid grid-cols-5'>
                {imgArray.slice(10*pIndex, a).map((item, index) => {
                if(index===0){
                    return(
                        <div className={imgBorder[0]}>
                            <div className='w-[55%] h-[45%] relative'>
                                <Image alt={`partner${index}`} fill src={item} quality={100} className='object-contain grayscale hover:grayscale-0 transition-grayscale duration-300'></Image>
                            </div>
                        </div>
                    )
                }
                else if(index===4){
                    return(
                        <div className={imgBorder[1]}>
                            <div className='w-[55%] h-[45%] relative'>
                                <Image alt={`partner${index}`} fill src={item} quality={100} className='object-contain grayscale hover:grayscale-0 transition-grayscale duration-300'></Image>
                            </div>
                        </div>
                    )
                }
                else if(index===imgArray.slice(10*pIndex, a).length-1){
                    return(
                        <div className={imgBorder[3]}>
                            <div className='w-[55%] h-[45%] relative'>
                                <Image alt={`partner${index}`} fill src={item} quality={100} className='object-contain grayscale hover:grayscale-0 transition-grayscale duration-300'></Image>
                            </div>
                        </div>
                    )
                }
                else if(index===5){
                    return(
                        <div className={imgBorder[2]}>
                            <div className='w-[55%] h-[45%] relative'>
                                <Image alt={`partner${index}`} fill src={item} quality={100} className='object-contain grayscale hover:grayscale-0 transition-grayscale duration-300'></Image>
                            </div>
                        </div>
                    )
                }
                else{
                    return(
                        <div className={imgBorder[4]}>
                            <div className='w-[55%] h-[45%] relative'>
                                <Image alt={`partner${index}`} fill src={item} quality={100} className='object-contain grayscale hover:grayscale-0 transition-grayscale duration-300'></Image>
                            </div>
                        </div>
                    )
                }
                })}
            </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </section>
    )
}
