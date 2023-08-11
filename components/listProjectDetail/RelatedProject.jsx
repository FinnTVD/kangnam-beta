import Button from '../general/Button'
import SlideRelatedNews from './SlideRelatedProject'

export default function RelatedProject() {
    return (
        <section className='w-screen h-fit px-120 py-[6.25vw]'>
            <div className='w-full'>
                <div className='flex items-start justify-between mb-[1.87vw]'>
                    <div>
                        <span className='text-logo sub-title'>Danh sách dự án</span>
                        <h2 className='text-den title56 mt-[0.62vw]'>Dự án Liên quan</h2>
                    </div>
                    <Button
                        className='border-none bg-logo'
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
