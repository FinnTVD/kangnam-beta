import SlideProjectProminent from './SlideProjectProminent'
import Button from '../general/Button'

export default function ProjectProminent({ children }) {
    return (
        <section className='w-screen px-120 py-[8.125vw] relative'>
            <div className='relative z-10 flex items-center justify-between'>
                <div>
                    <span className='sub-title'>Tổng hợp các dự án</span>
                    <h2 className='title56 text-den mt-[0.62vw] mb-[3vw]'>Dự án nổi bật</h2>
                </div>
                <Button
                    href='/danh-sach-du-an'
                    className='border-none bg-logo'
                    span='text-white'
                    stroke='white'
                >
                    Xem tất cả
                </Button>
            </div>
            <SlideProjectProminent />
            {children}
        </section>
    )
}
