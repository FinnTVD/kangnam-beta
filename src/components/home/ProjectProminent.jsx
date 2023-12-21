import SlideProjectProminent from './SlideProjectProminent'
import Button from '../general/Button'
import getData from '@/utils/getData'

export default async function ProjectProminent({ children, lang, t }) {
    const data = await getData('/home-page/property')
    return (
        <section className='w-screen px-120 py-[8.125vw] relative max-md:px-0 max-md:pb-[18.4vw]'>
            <div className='relative z-10 flex items-center justify-between'>
                <div
                    data-aos='fade-right'
                    data-aos-duration='1000'
                    className='px-mb10'
                >
                    <span className='sub-title max-md:hidden title-tl12-700-150'>
                        {t?.homepage?.section5?.subtitle}
                    </span>
                    <h2 className='title56 text-den mt-[0.62vw] max-md:mb-0 mb-[3vw] title-mb25-700-130 max-md:-tracking-[0.75px] title-tl38'>
                        {t?.homepage?.section5?.title}
                    </h2>
                    <span className='title-mb14-400-150 text-den opacity-[0.65] block mb-[4.27vw] md:hidden'>
                        {t?.homepage?.section5?.over} <span className='title-mb14-700-150'>{data?.length || '0'}</span>{' '}
                        {t?.homepage?.section5?.projectDistribution}
                    </span>
                </div>
                <Button
                    href={'/' + lang + t.Navbar.listNav[0].href || '/' + lang + '/du-an'}
                    className='border-none bg-logo max-md:hidden'
                    span='text-white'
                    stroke='white'
                >
                    {t?.homepage?.section5?.button}
                </Button>
            </div>
            <SlideProjectProminent
                lang={lang}
                dataHomePage={data}
            />
            <div className='px-mb10 md:hidden'>
                <Button
                    href={'/' + lang + t?.Navbar?.listNav[0]?.href || '/' + lang + '/du-an'}
                    className='border-none bg-logo max-md:mt-[6.19vw] md:hidden'
                    span='text-white'
                    stroke='white'
                    full={true}
                >
                    {t?.homepage?.section5?.button}
                </Button>
            </div>
            {children}
        </section>
    )
}
