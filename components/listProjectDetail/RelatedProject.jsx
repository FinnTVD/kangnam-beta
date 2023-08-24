import Button from '../general/Button'
import SlideRelatedNews from './SlideRelatedProject'

export default function RelatedProject() {
    return (
        <section className='w-screen h-fit px-120 py-[6.25vw] max-md:px-0'>
            <div className='w-full'>
                <div className='flex items-start justify-between mb-[1.87vw] max-md:mb-[6.4vw]'>
                    <div className='px-mb10 max-md:w-full'>
                        <span className='text-logo sub-title title-mb12-700-150 max-md:tracking-[0.6px]'>
                            Danh sách dự án
                        </span>
                        <h2 className='text-den title56 mt-[0.62vw] max-md:mt-[1.07vw] title-mb25-700-130 max-md:-tracking-[1.25px]'>
                            Dự án Liên quan
                        </h2>
                    </div>
                    <Button
                        href='/danh-sach-du-an'
                        className='border-none bg-logo max-md:hidden'
                        span='text-white'
                        stroke='white'
                    >
                        Xem tất cả
                    </Button>
                </div>
                <SlideRelatedNews />
            </div>
        </section>
    )
}
