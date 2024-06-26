'use client'
import Button from '../general/Button'
import LatestNewsItem from '../general/LatestNewsItem'
import OtherNewsItem from '../general/OtherNewsItem'
import { useMediaQuery } from 'react-responsive'
import Skeleton from 'react-loading-skeleton'

const arrItem = new Array(5).fill(0)
export default function LatestNews({ t, lang, dataPostNews }) {
    const isTablet = useMediaQuery({ query: '(max-width: 1023px)' })

    return (
        <section className='w-full px-120 pb-[8.125vw] mt-[-6.25vw] relative max-md:mt-[3.7vw] px-mb10 max-md:pb-[20.8vw]'>
            <div className='flex items-end justify-between'>
                <div
                    data-aos='fade-right'
                    data-aos-duration='1000'
                >
                    <span className='sub-title max-md:title-mb12-600-160 max-md:leading-[1.5] max-md:tracking-[0.6px] max-lg:title-tl12'>
                        {t?.homepage?.section8?.subtitle}
                    </span>
                    <h2 className='title56 text-den mt-[0.62vw] max-md:title-mb25-700-130 max-md:tracking-[-0.75px] max-md:mt-[2.1vw] max-md:normal-case max-lg:title-tl38'>
                        {t?.homepage?.section8?.title}
                    </h2>
                </div>
                {!isTablet && (
                    <Button
                        stroke='white'
                        className='text-white border-none bg-logo'
                        href={'/news'}
                    >
                        {t?.homepage?.section8?.button}
                    </Button>
                )}
            </div>
            <div className='mt-[3.5vw] grid grid-cols-3 grid-rows-[16.875vw_16.875vw_16.875vw] gap-[1.5vw] max-md:grid-cols-1 max-md:grid-rows-[68.5vw_44.2vw_44.2vw] max-md:gap-[4.2vw] max-md:mt-[4.2vw] max-lg:grid-cols-1 max-lg:grid-rows-[66.6vw_28.2vw_28.2vw]'>
                <div className='col-span-2 row-span-2 max-lg:col-span-1 max-lg:row-span-1'>
                    {dataPostNews && dataPostNews?.length > 0 && (
                        <LatestNewsItem
                            newsItem={dataPostNews[0]}
                            t={t}
                            lang={lang}
                        />
                    )}
                    {!dataPostNews && (
                        <div className='group w-full h-full rounded-2xl flex overflow-hidden max-md:rounded-[10px] relative'>
                            <div className='absolute top-0 left-0 w-full h-full'>
                                <Skeleton
                                    width={'100%'}
                                    height={'100%'}
                                />
                            </div>
                        </div>
                    )}
                </div>
                {!dataPostNews &&
                    (isTablet ? arrItem?.slice(1, 3) : arrItem)?.map((e, index) => (
                        <div
                            key={index}
                            className='w-full h-full bg-white rounded-2xl backdrop-blur-2xl p-[1.5vw] max-md:rounded-[13px] max-md:p-[2.6vw] shadow-input max-md:shadow-newsDetailMb'
                        >
                            <div className='flex h-[11vw] items-center max-md:h-[30.1vw] max-lg:h-[20vw]'>
                                <div className='w-[45%] h-full rounded-lg max-md:rounded-[6.5px]'>
                                    <Skeleton
                                        width={'100%'}
                                        height={'100%'}
                                    ></Skeleton>
                                </div>
                                <div className='w-[50%] ml-[5%] flex flex-col'>
                                    <Skeleton
                                        count={2}
                                        width={'100%'}
                                    ></Skeleton>
                                    <div className='mt-[0.5vw]'>
                                        <Skeleton
                                            count={3}
                                            width={'100%'}
                                        ></Skeleton>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between mt-[1.125vw] max-md:mt-[2.1vw]'>
                                <div className='w-[4.437vw] h-[1.75vw] max-md:h-[6.1vw] max-md:w-[18.4vw]'>
                                    <Skeleton
                                        width={'100%'}
                                        height={'100%'}
                                    ></Skeleton>
                                </div>
                                <div className='w-[8.625vw] h-[1.3125vw] max-md:h-[4.5vw] max-md:w-[29.8vw]'>
                                    <Skeleton
                                        width={'100%'}
                                        height={'100%'}
                                    ></Skeleton>
                                </div>
                            </div>
                        </div>
                    ))}
                {!isTablet
                    ? dataPostNews?.slice(1, 6)?.map((news, index) => (
                          <div key={news?.id}>
                              <OtherNewsItem
                                  newsOtherItem={news}
                                  lang={lang}
                                  index={index}
                              />
                          </div>
                      ))
                    : dataPostNews?.slice(1, 3)?.map((news, index) => (
                          <div key={news?.id}>
                              <OtherNewsItem
                                  newsOtherItem={news}
                                  lang={lang}
                              />
                          </div>
                      ))}
            </div>
            {isTablet && (
                <Button
                    stroke='white'
                    href={lang === 'vn' ? '/news' : `/${lang}/news`}
                    span='max-md:text-14mb font-normal tracking-[-0.28px] max-lg:text-16tl'
                    icon='w-auto max-md:h-[4.5vw] max-lg:h-[2vw]'
                    className='bg-logo w-full mt-[8.26vw] justify-center text-white border-none max-md:gap-x-[3.2vw] max-md:py-[4.26vw]'
                >
                    {t?.homepage?.section8?.button}
                </Button>
            )}
        </section>
    )
}
