'use client'
import NavBar from './NavBar'
import SearchHome from '../home/SearchHome'
import classes from './headerV2.module.css'
import NavBarFixed from './NavBarFixed'
import { useMediaQuery } from 'react-responsive'
import NavBarRes from './NavBarRes'
import NavBarFixedRes from './NavBarFixedRes'
import { useRef } from 'react'
import IconBigLogo from '../icons/IconBigLogo'
import FeatureHome from '../home/FeatureHome'
import MegaMenuAll from './MegaMenuAll'

export default function Header({ lang, t, data, isHome, dataInfo, children, homePagePropertyType }) {
    const videoRef = useRef(null)
    const isMobile = useMediaQuery({
        query: '(max-width: 767.9px)',
    })
    const isTablet = useMediaQuery({
        query: '(max-width: 1023px)',
    })

    // useEffect(() => {
    //     // window.scrollTo({
    //     //     top: 0,
    //     //     behavior: 'smooth',
    //     // })
    // }, [])

    const handleScrollDown = () => {
        if (typeof window !== 'undefined') {
            const e = document.getElementById('header')
            window.scrollTo({
                top: e.offsetHeight,
                behavior: 'smooth',
            })
        }
    }

    return (
        <header
            id='header'
            className='relative w-screen h-fit bg-gradient-header1'
        >
            <div className={`h-screen max-md:h-[82vh] relative w-full`}>
                <video
                    ref={videoRef}
                    autoPlay
                    // poster='/images/thumnail.jpg'
                    poster={process.env.NEXT_PUBLIC_CDN_URL + '/images/public/thumnail.jpg'}
                    loop
                    className='absolute top-0 left-0 object-cover min-w-full min-h-full'
                    id='videoBanner'
                    type='video/mp4'
                    playsInline
                    muted
                >
                    {/* <source src='/images/videotest22.mp4'></source> */}
                    <source src={process.env.NEXT_PUBLIC_CDN_URL + '/images/public/videotest22.mp4'}></source>
                </video>

                <IconBigLogo className='z-10 w-[23.4375vw] max-lg:w-[45.4vw] h-[59.8vh] max-lg:top-[13vw] max-lg:right-[6.56vw] absolute right-[7.56vw] top-[18vh] max-md:w-[45.6vw] max-md:h-[64.26vw] max-md:top-[16.8vw] max-md:right-[4.8vw]' />
                <div className={`bg-gradient-header1 absolute z-[2] top-0 left-0 w-full h-full`}></div>
                {/* linear-white */}
                {/* <div className='absolute z-[1] bg-gradient-header2 top-0 left-0 w-full h-full'></div> */}
                <NavBarRes
                    isHome={isHome}
                    lang={lang}
                    t={t}
                />
                <NavBar
                    isHome={isHome}
                    lang={lang}
                    t={t}
                />

                {!isTablet ? (
                    <NavBarFixed
                        isHome={true}
                        lang={lang}
                        t={t}
                        isMobile={isMobile}
                    />
                ) : (
                    <NavBarFixedRes
                        isHome={isHome}
                        lang={lang}
                        t={t}
                    />
                )}
                <SearchHome
                    data={data}
                    lang={lang}
                    t={t}
                    homePagePropertyType={homePagePropertyType}
                />

                <div
                    onClick={handleScrollDown}
                    className='absolute bottom-[2vw] opacity-50 w-fit h-fit left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-y-[0.94vw] max-md:gap-y-[4vw] select-none cursor-pointer'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='25'
                        viewBox='0 0 24 25'
                        fill='none'
                        className={`${classes['btn-scroll-down']} w-[1.375vw] h-[1.375vw] max-lg:w-[3vw] max-lg:h-[3vw] max-md:w-[4.27vw] max-md:h-[4.27vw]`}
                    >
                        <path
                            d='M1 1L12 12L23 1'
                            stroke='white'
                            strokeWidth='2'
                        />
                        <path
                            d='M1 12L12 23L23 12'
                            stroke='white'
                            strokeWidth='2'
                        />
                    </svg>
                    <span className='uppercase text-14pc font-semibold leading-[1.28] tracking-[0.7px] max-md:text-10mb max-md:font-semibold max-md:leading-[1.8] max-md:tracking-[0.5px] max-md:uppercase text-white max-lg:title-tl14'>
                        {t?.scroll?.title}
                    </span>
                </div>
                {children}
                {!isMobile && (
                    <FeatureHome
                        dataInfo={dataInfo}
                        t={t}
                    />
                )}
            </div>
        </header>
    )
}
