'use client'
import Link from 'next/link'
import Button from '../general/Button'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { useMediaQuery } from 'react-responsive'

export default function Partner({t}) {
    const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' })
    const imgArray = ['/images/partnerlogo.jpg', '/images/partnerlogo.jpg', '/images/logoVin.jpg', '/images/partnerlogo.jpg', '/images/partnerlogo.jpg', '/images/partnerlogo.jpg',
    '/images/partnerlogo.jpg', '/images/logoVin.jpg', '/images/partnerlogo.jpg', '/images/logoVin.jpg', '/images/logoVin.jpg', '/images/logoVin.jpg', '/images/logoVin.jpg']

    const imgBorder = !isMobile? ['bg-white h-[13.5625vw] flex justify-center items-center border border-0.5 rounded-tl-2xl', 
    'bg-white h-[13.5625vw] flex justify-center items-center border border-0.5 rounded-tr-2xl',
    'bg-white h-[13.5625vw] flex justify-center items-center border border-0.5 rounded-bl-2xl',
    'bg-white h-[13.5625vw] flex justify-center items-center border border-0.5 rounded-br-2xl',
    'bg-white h-[13.5625vw] flex justify-center items-center border border-0.5'
] :
    ['bg-white bg-opacity-80 h-[22.6vw] flex justify-center items-center border border-0.5 rounded-tl-[16px]', 
    'bg-white bg-opacity-80 h-[22.6vw] flex justify-center items-center border border-0.5 rounded-tr-[16px]',
    'bg-white bg-opacity-80 h-[22.6vw] flex justify-center items-center border border-0.5 rounded-bl-[16px]',
    'bg-white bg-opacity-80 h-[22.6vw] flex justify-center items-center border border-0.5 rounded-br-[16px]',
    'bg-white bg-opacity-80 h-[22.6vw] flex justify-center items-center border border-0.5']
    const arrPartner = []
    const numberOfPartner = isMobile? Math.ceil(imgArray.length/9) : Math.ceil(imgArray.length/10);
    for(let i=0; i<numberOfPartner; i++){
        if(i===numberOfPartner.length-1){
            arrPartner.push(imgArray.length-1);
        }
        else{
            if(isMobile)
                arrPartner.push(9*(i+1));
            else
                arrPartner.push(10*(i+1));
        }
    }

    return (
        <section className="w-full px-120 pb-[15.625vw] pt-[9.625vw] relative max-md:px-mb10 max-md:pt-[17.06vw] max-md:pb-[27.2vw]">

            <div className='absolute bottom-[0.5vw] left-0 h-[6.25vw] w-full z-[-1]' style={{background: 'linear-gradient(0deg, #fff, #ffffff00)'}}></div>
            <div className='absolute opacity-70 left-0 top-0 w-full h-full z-[-1]' style={{background: 'linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 53.44%, #FFF 100%), white'}}></div>
            <div className='absolute opacity-30 left-0 top-0 w-full h-full z-[-1] bg-lightgray'></div>
            <Image src="/images/partner-bg.jpg" fill className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"></Image>

            <div className='absolute top-0 left-0 bg-opacity-30 h-full w-full z-[-1]' style={{background: 'linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 53.44%, #FFF 100%)'}}></div>
            <Image src="/images/partner-bg.jpg" fill className="absolute top-0 left-0 w-full h-full object-cover z-[-2] opacity-30"></Image>

            <div className='flex items-end justify-between'>
                <div className='max-md:flex max-md:flex-col max-md:items-center max-md:w-full'>
                    <span className='sub-title max-md:title-mb12-600-160 max-md:tracking-[0.6px]'>{t.homepagePartners.subtitle}</span>
                    <h2 className='title56 text-den mt-[0.62vw] max-md:title-mb25-700-130 max-md:tracking-[-0.75px] max-md:mt-0 max-md:normal-case'>{t.homepagePartners.title}</h2>
                </div>
                {!isMobile && <Button stroke='white' href={'/'} className='bg-[#D6A279] text-white border-none'>Trở thành đối tác</Button>}
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={24}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                speed={800}
                modules={[Autoplay]}
                className='mt-[3.5vw] max-md:mt-[6.4vw]'
            >
            {arrPartner?.map((a, pIndex) => (
                <SwiperSlide key={pIndex}>
                    <div className='grid grid-cols-5 max-md:grid-cols-3'>
                        {(isMobile? imgArray.slice(9*pIndex, a) : imgArray.slice(10*pIndex, a)).map((item, index) => {
                        if(!isMobile){
                            if(index===0){
                                return(
                                    <div className={imgBorder[0]} key={index}>
                                        <div className='w-[55%] h-[45%] relative'>
                                            <Image alt={`partner${index}`} fill src={item} quality={100} className='object-contain duration-300 grayscale hover:grayscale-0 transition-grayscale'></Image>
                                        </div>
                                    </div>
                                )
                            }
                            else if(index===4){
                                return(
                                    <div className={imgBorder[1]} key={index}>
                                        <div className='w-[55%] h-[45%] relative'>
                                            <Image alt={`partner${index}`} fill src={item} quality={100} className='object-contain duration-300 grayscale hover:grayscale-0 transition-grayscale'></Image>
                                        </div>
                                    </div>
                                )
                            }
                            else if(index===9){
                                return(
                                    <div className={imgBorder[3]} key={index}>
                                        <div className='w-[55%] h-[45%] relative'>
                                            <Image alt={`partner${index}`} fill src={item} quality={100} className='object-contain duration-300 grayscale hover:grayscale-0 transition-grayscale'></Image>
                                        </div>
                                    </div>
                                )
                            }
                            else if(index===5){
                                return(
                                    <div className={imgBorder[2]} key={index}>
                                        <div className='w-[55%] h-[45%] relative'>
                                            <Image alt={`partner${index}`} fill src={item} quality={100} className='object-contain duration-300 grayscale hover:grayscale-0 transition-grayscale'></Image>
                                        </div>
                                    </div>
                                )
                            }
                            else{
                                return(
                                    <div className={imgBorder[4]} key={index}>
                                        <div className='w-[55%] h-[45%] relative'>
                                            <Image alt={`partner${index}`} fill src={item} quality={100} className='object-contain duration-300 grayscale hover:grayscale-0 transition-grayscale'></Image>
                                        </div>
                                    </div>
                                )
                            }
                        }
                        else{
                            if(index===0){
                                return(
                                    <div className={imgBorder[0]} key={index}>
                                        <div className='w-[67.7%] h-[56.6%] relative'>
                                            <Image alt={`partner${index}`} fill src={item} quality={100} className='object-contain duration-300 grayscale hover:grayscale-0 transition-grayscale'></Image>
                                        </div>
                                    </div>
                                )
                            }
                            else if(index===2){
                                return(
                                    <div className={imgBorder[1]} key={index}>
                                        <div className='w-[67.7%] h-[56.6%] relative'>
                                            <Image alt={`partner${index}`} fill src={item} quality={100} className='object-contain duration-300 grayscale hover:grayscale-0 transition-grayscale'></Image>
                                        </div>
                                    </div>
                                )
                            }
                            else if(index===8){
                                return(
                                    <div className={imgBorder[3]} key={index}>
                                        <div className='w-[67.7%] h-[56.6%] relative'>
                                            <Image alt={`partner${index}`} fill src={item} quality={100} className='object-contain duration-300 grayscale hover:grayscale-0 transition-grayscale'></Image>
                                        </div>
                                    </div>
                                )
                            }
                            else if(index===6){
                                return(
                                    <div className={imgBorder[2]} key={index}>
                                        <div className='w-[67.7%] h-[56.6%] relative'>
                                            <Image alt={`partner${index}`} fill src={item} quality={100} className='object-contain duration-300 grayscale hover:grayscale-0 transition-grayscale'></Image>
                                        </div>
                                    </div>
                                )
                            }
                            else{
                                return(
                                    <div className={imgBorder[4]} key={index}>
                                        <div className='w-[67.7%] h-[56.6%] relative'>
                                            <Image alt={`partner${index}`} fill src={item} quality={100} className='object-contain duration-300 grayscale hover:grayscale-0 transition-grayscale'></Image>
                                        </div>
                                    </div>
                                )
                            }
                        }
                        })
                    }
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>
            {isMobile && <Button stroke='white' href={'/'} span='text-14mb font-normal tracking-[-0.28px]' icon='w-auto h-[4.5vw]' className='bg-[#D6A279] w-full mt-[8.26vw] justify-center text-white border-none gap-x-[3.2vw] py-[4.26vw]'>{t.homepagePartners.button}</Button>}
        </section>
    )
}
