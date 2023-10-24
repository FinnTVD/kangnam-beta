import Image from 'next/image'
import Link from 'next/link'
import src from '../../public/images/linear.png'
import people from '../../public/images/people.png'
import circleHouse from '../../public/images/circle-house.png'
import house from '../../public/images/house.png'
import check from '../../public/images/check.svg'
import pig from '../../public/images/pig.svg'
import watch from '../../public/images/watch.svg'
import bgWe from '../../public/images/bg-we.png'

export default function WeAre({ lang, t }) {
    return (
        <>
            <section
                id='weAre'
                className='relative w-full h-screen overflow-hidden bg-den-2'
            >
                <Image
                    className='z-0 object-cover'
                    src={bgWe}
                    alt='background we'
                    sizes='100vw'
                    placeholder='blur'
                    fill
                />
                <div className='relative z-10 flex justify-between h-full max-lg:flex-col'>
                    <div className='flex items-center pl-[7.5vw] px-mb10 max-lg:px-[3.2vw] max-md:pt-[13.33vw] max-lg:pt-[6vw]'>
                        <div
                            data-aos='fade-right'
                            data-aos-duration='1000'
                            className='w-[40.2vw] h-fit max-lg:w-full'
                        >
                            <span className='sub-title max-lg:tracking-[0.5px] max-lg:uppercase title-mb10-700-150 title-tl12-700-150'>
                                {t?.homepage?.section2?.subtitle}
                            </span>
                            <h2 className='text-vang-nhe mt-[0.12vw] mb-[1vw] max-lg:mt-[1.07vw] max-lg:mb-[2.27vw] max-md:mb-[4.27vw] -tracking-[1.12px] title56 title-tl38 title-mb25-700-130 max-lg:-tracking-[1.25px]'>
                                {t?.homepage?.section2?.title}
                            </h2>
                            <p className='text-vang-nhe title16-400-150 title-tl16-400-150 title-mb14-400-150 w-[38vw] max-lg:w-full'>
                                {t?.homepage?.section2?.description}
                            </p>
                            <ul className='flex my-[2.5vw] max-md:mt-[6.4vw] max-md:mb-[8.8vw] max-lg:mt-[3.4vw] max-lg:mb-[4.8vw] max-md:justify-between'>
                                <li className='flex flex-col items-center gap-y-[1vw] max-lg:gap-y-[2.93vw] max-lg:text-center max-md:w-[18.67vw] max-lg:w-fit'>
                                    <Image
                                        src={check}
                                        alt='check'
                                        className='w-[4.375vw] h-[4.375vw] max-lg:w-[7vw] max-lg:h-[7vw] max-md:w-[10.67vw] max-md:h-[10.67vw] object-cover'
                                    />
                                    <span className='text-vang-nhe title18-600-130 title-tl14-600-130 title-mb12-600-130'>
                                        {t?.homepage?.section2?.detail?.title1}
                                    </span>
                                </li>
                                <li className='flex flex-col items-center gap-y-[1vw] max-lg:gap-y-[2.93vw] max-lg:text-center ml-[3.75vw] mr-[3.12vw] max-md:w-[25.067vw] max-lg:w-fit'>
                                    <Image
                                        src={pig}
                                        alt='pig'
                                        className='w-[4.375vw] h-[4.375vw] max-lg:w-[7vw] max-lg:h-[7vw] max-md:w-[10.67vw] max-md:h-[10.67vw] object-cover'
                                    />
                                    <span className='text-vang-nhe title18-600-130 title-tl14-600-130 title-mb12-600-130'>
                                        {t?.homepage?.section2?.detail?.title2}
                                    </span>
                                </li>
                                <li className='flex flex-col items-center gap-y-[1vw] max-lg:gap-y-[2.93vw] max-lg:text-center max-md:w-[20vw] max-lg:w-fit'>
                                    <Image
                                        src={watch}
                                        alt='watch'
                                        className='w-[4.375vw] h-[4.375vw] max-lg:w-[7vw] max-lg:h-[7vw] max-md:w-[10.67vw] max-md:h-[10.67vw] object-cover'
                                    />
                                    <span className='text-vang-nhe title18-600-130 title-tl14-600-130 title-mb12-600-130'>
                                        {t?.homepage?.section2?.detail?.title3}
                                    </span>
                                </li>
                            </ul>
                            <div className='flex gap-x-[1.5vw] max-lg:gap-x-[2.67vw] relative z-[99999]'>
                                <Link
                                    href={'/' + lang + t?.Navbar?.listNav[0]?.href || '/' + lang + '/du-an'}
                                    className='group flex justify-center items-center gap-x-[0.5vw] max-lg:gap-x-[1vw] max-md:gap-x-[2.13vw] rounded-[10vw] py-[1vw] px-[2.06vw] max-md:py-[4vw] max-lg:py-[2vw] max-lg:px-[4.41vw] title-tl14-400-150 bg-transparent text-logo border border-solid border-logo title16-400-150 max-md:px-[8.41vw] max-md:box-content title-mb14-400-150 h-fit'
                                >
                                    {t?.homepage?.section2?.button?.secondary}
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='8'
                                        height='14'
                                        viewBox='0 0 8 14'
                                        fill='none'
                                        className='w-[0.6vw] h-auto group-hover:translate-x-2 transition-all duration-300 max-lg:w-[1.2vw] max-md:w-[1.6vw]'
                                    >
                                        <path
                                            d='M1 1L7 7L1 13'
                                            stroke='#D6A279'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                        />
                                    </svg>
                                </Link>
                                <Link
                                    href={'/' + lang + '/about-us'}
                                    className='flex justify-center gap-x-[0.5vw] max-lg:gap-x-[1vw] items-center group relative rounded-[10vw] text-white py-[1vw] px-[2.06vw] bg-logo title16-400-150 overflow-hidden title-mb14-400-150 max-lg:py-[2vw] max-lg:px-[4.67vw] title-tl14-400-150 max-md:py-[4vw] max-md:px-[6.67vw] max-md:box-content max-md:gap-x-[3.2vw] h-fit'
                                >
                                    {t?.homepage?.section2?.button?.primary}
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='8'
                                        height='14'
                                        viewBox='0 0 8 14'
                                        fill='none'
                                        className='w-[0.6vw] h-auto group-hover:translate-x-2 transition-all duration-300 max-lg:w-[1.2vw] max-md:w-[1.6vw]'
                                    >
                                        <path
                                            d='M1 1L7 7L1 13'
                                            stroke='white'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-end'>
                        <div className='h-[77.5vh] max-lg:h-[59.8vh] max-md:h-[38.8vh] w-[48.1875vw] max-lg:w-full relative z-10'>
                            <Image
                                data-aos='fade-up'
                                data-aos-delay='600'
                                src={house}
                                placeholder='blur'
                                alt='house'
                                className='object-fill z-[2]'
                                sizes='48.1875vw'
                                fill
                            />
                            <Image
                                data-aos='fade-up'
                                data-aos-delay='600'
                                src={circleHouse}
                                placeholder='blur'
                                alt='circle'
                                className='object-cover w-[35.5vw] h-[35.5vw] max-lg:w-[44.6vw] max-md:w-[63.6vw] max-lg:h-[44.6vw] max-md:h-[63.6vw] absolute -top-[3.81vw] max-lg:top-[4.49vw] max-md:-top-[13.51vw] left-[2.69vw] z-[1] max-lg:left-[38.46vw] max-md:left-[23.46vw]'
                            />
                            <Image
                                data-aos='fade'
                                data-aos-duration='500'
                                placeholder='blur'
                                data-aos-delay='1000'
                                src={people}
                                alt='people'
                                className='object-cover w-[33.875vw] h-[38.5625vw] max-lg:w-[47.62vw] max-md:w-[62.62vw] max-lg:h-[53.29vw] max-md:h-[71.29vw] absolute bottom-0 left-[5.68vw] z-[3] max-lg:left-[37%] max-md:left-1/2 max-md:-translate-x-1/2'
                            />
                        </div>
                    </div>
                </div>
                <Image
                    className='absolute top-0 left-0 object-cover z-[3] !h-[200vh] w-screen max-lg:!h-[164vh]'
                    src={src}
                    alt='linear'
                    placeholder='blur'
                />
            </section>
        </>
    )
}
