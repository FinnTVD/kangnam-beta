'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ContentPageOther({ post, lang, newsDetail, breadcrumb, t }) {
    const dataHeader = [
        {
            id: 1,
            title: t?.otherPageBanner[0]?.title,
            des: t?.otherPageBanner[0]?.des,
            end: t?.otherPageBanner[0]?.end,
            slug: t?.otherPageBanner[0]?.slug,
        },
        {
            id: 2,
            title: t?.otherPageBanner[1]?.title,
            des: t?.otherPageBanner[1]?.des,
            end: t?.otherPageBanner[1]?.end,
            slug: t?.otherPageBanner[1]?.slug,
        },
        {
            id: 3,
            title: t?.otherPageBanner[2]?.title,
            des: t?.otherPageBanner[2]?.des,
            end: t?.otherPageBanner[2]?.end,
            slug: t?.otherPageBanner[2]?.slug,
        },
        {
            id: 4,
            title: t?.otherPageBanner[3]?.title,
            des: t?.otherPageBanner[3]?.des,
            end: t?.otherPageBanner[3]?.end,
            slug: t?.otherPageBanner[3]?.slug,
        },
    ]
    const pathName = usePathname()
    const [data, setData] = useState(null)

    useEffect(() => {
        const data = dataHeader.filter((e) => pathName?.includes(e?.slug))
        setData(data[0])
    }, [pathName])

    return (
        <>
            <div className='absolute top-[30%] left-[7.5vw] w-fit z-10 px-mb10 max-md:left-0 max-md:w-full max-md:top-1/2 max-md:-translate-y-1/2'>
                <h1 className='leading-[1.23] -tracking-[3px] title60 w-[51.1875vw] mb-[1.87vw] line-clamp-3 title-mb25-700-150 max-lg:w-full max-md:-tracking-[1.25px] max-md:mb-[2.13vw] max-lg:title-tl42'>
                    {newsDetail ? newsDetail?.title : data?.title}
                </h1>
                <p className='w-[26.25vw] title20-400-150 line-clamp-3 max-lg:w-full max-md:title-mb14-400-150 max-lg:title-tl14'>
                    {data?.des}
                </p>
            </div>
            <div className='absolute right-[2.87vw] z-10 bottom-[1.94vw] bg-gradient-mark-home h-fit max-lg:hidden'>
                <div className='flex justify-normal pl-[9.5vw] pr-[3vw] gap-x-[3px] my-[0.35vw]'>
                    <span className='text-white font-bold title18-400-150 opacity-[0.65]'>
                        {t?.menuNav?.nav1?.[0]?.title}
                    </span>
                    <span className='font-extrabold text-white title18-400-150'>
                        {' '}
                        / {breadcrumb ? breadcrumb : data?.end}{' '}
                    </span>
                </div>
            </div>
        </>
    )
}
