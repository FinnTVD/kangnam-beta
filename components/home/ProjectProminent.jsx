'use client'
import SlideProjectProminent from './SlideProjectProminent'
import Button from '../general/Button'

export default function ProjectProminent({ children }) {
    return (
        <section className='w-screen px-120 py-[8.125vw] relative max-md:px-0 max-md:pb-[18.4vw]'>
            <div className='relative z-10 flex items-center justify-between'>
                <div className='px-mb10'>
                    <span className='sub-title max-md:hidden title-tl12-700-150'>Tổng hợp các dự án</span>
                    <h2 className='title56 text-den mt-[0.62vw] max-md:mb-0 mb-[3vw] title-mb25-700-130 max-md:-tracking-[0.75px] title-tl38'>
                        Dự án nổi bật
                    </h2>
                    <span className='title-mb14-400-150 text-den opacity-[0.65] block mb-[4.27vw] md:hidden'>
                        Hơn <span className='title-mb14-700-150'>20</span> dự án đang được phân phối
                    </span>
                </div>
                <Button
                    href='/projects'
                    className='border-none bg-logo max-md:hidden max-md:hidden'
                    span='text-white'
                    stroke='white'
                >
                    Xem tất cả
                </Button>
            </div>
            <SlideProjectProminent />
            <div className='px-mb10 md:hidden'>
                <Button
                    href='/projects'
                    className='border-none bg-logo max-md:mt-[6.19vw] md:hidden'
                    span='text-white'
                    stroke='white'
                    full={true}
                >
                    Tất cả dự án
                </Button>
            </div>
            {children}
        </section>
    )
}
