'use client'
import SlideProjectProminent from './SlideProjectProminent'
import Button from '../general/Button'
import { useMediaQuery } from 'react-responsive'

export default function ProjectProminent({ children }) {
    const isMobile = useMediaQuery({
        query: '(max-width: 767.9px)',
    })
    return (
        <section className='w-screen px-120 py-[8.125vw] relative max-md:px-0 max-md:pb-[18.4vw]'>
            <div className='relative z-10 flex items-center justify-between'>
                <div className='px-mb10'>
                    <span className='sub-title max-md:hidden'>Tổng hợp các dự án</span>
                    <h2 className='title56 text-den mt-[0.62vw] max-md:mb-0 mb-[3vw] title-mb25-700-130 max-md:-tracking-[0.75px]'>
                        Dự án nổi bật
                    </h2>
                    <span className='title-mb14-400-150 text-den opacity-[0.65] block mb-[4.27vw] md:hidden'>
                        Hơn <span className='title-mb14-700-150'>20</span> dự án đang được phân phối
                    </span>
                </div>
                {!isMobile && (
                    <Button
                        href='/danh-sach-du-an'
                        className='border-none bg-logo'
                        span='text-white'
                        stroke='white'
                    >
                        Xem tất cả
                    </Button>
                )}
            </div>
            <SlideProjectProminent isMobile={isMobile} />
            {isMobile && (
                <div className='px-mb10'>
                    <Button
                        href='/danh-sach-du-an'
                        className='border-none bg-logo max-md:mt-[6.19vw]'
                        span='text-white'
                        stroke='white'
                        full={true}
                    >
                        Tất cả dự án
                    </Button>
                </div>
            )}
            {children}
        </section>
    )
}
