'use client'
import ListNewsCategorized from './ListNewsCategorized'
import { useEffect, useRef, useState } from 'react'
import ReactPaginate from 'react-paginate'
import classes from './ListNewsStyles.module.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())
const listNews = new Array(9).fill(0)

export default function ListNews({ t }) {
    const [category, setCategory] = useState('Thị trường')
    const [pageNumber, setPageNumber] = useState(1)

    const {
        data: categories,
        error: errorCategories,
        isLoading: isLoadingCategories,
    } = useSWR(process.env.NEXT_PUBLIC_API + `/post-type`, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })
    console.log(categories)

    const {
        data: dataNews,
        error: errorNews,
        isLoading: isLoadingNews,
    } = useSWR(process.env.NEXT_PUBLIC_API + `/post?page=${pageNumber}&take=12`, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })
    console.log(dataNews)
    const categoryStyle =
        'border border-[#D6A279] rounded-full py-[0.625vw] px-[1.5vw] title14-400-150 cursor-pointer max-md:title-mb14-400-150 max-md:py-[2.6vw] max-md:px-[6.4vw] whitespace-nowrap'
    const newsCategorizedRef = useRef()
    return (
        <section
            className='px-120 pt-[6.875vw] pb-[8.125vw] max-md:pl-[2.6vw] max-md:pr-0 max-md:pb-[16vw] max-md:pt-[13.3vw]'
            ref={newsCategorizedRef}
        >
            <div className='flex items-center justify-between max-md:flex-col max-md:items-start max-md:justify-normal'>
                <div>
                    <span className='sub-title max-md:title-mb10-700-150 max-md:tracking-[0.5px]'>
                        {t.newsList.subtitle} {category}
                    </span>
                    <h2 className='title56 text-den mt-[0.62vw] max-md:title-mb25-700-130 max-md:tracking-[-1.25px] max-md:normal-case max-md:mt-[1.1vw]'>
                        {t.newsList.title} {category}
                    </h2>
                </div>
                <div
                    className={`${classes['news-categories']} flex gap-[1.5vw] max-md:gap-[2.6vw] max-md:mt-[2.6vw] flex-nowrap max-md:overflow-scroll max-md:w-full`}
                >
                    {categories?.data?.map((e, index) => (
                        <span
                            key={index}
                            className={
                                e?.name === category
                                    ? `${categoryStyle} bg-[#D6A279] text-white`
                                    : `${categoryStyle} bg-transparent text-den`
                            }
                            onClick={() => {
                                setCategory(e?.name)
                            }}
                        >
                            {e?.name}
                        </span>
                    ))}
                </div>
            </div>
            {isLoadingNews && (
                <div className='mt-[2.5vw]'>
                    <div className='flex gap-x-[1.5vw] h-[35.25vw] mb-[3.75vw]'>
                        <div className=' w-[56.1875vw] h-full'>
                            <Skeleton height={'35.25vw'} />
                        </div>
                        <div className='flex flex-1 flex-col gap-y-[1.5vw] h-full'>
                            <div className='flex-1'>
                                <Skeleton height={'100%'} />
                            </div>
                            <div className='flex-1'>
                                <Skeleton height={'100%'} />
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 grid-rows-3 gap-x-[1.56vw] gap-y-[2vw]'>
                        {listNews &&
                            listNews.map((e, index) => (
                                <div
                                    className='w-full h-[31.4375vw]'
                                    key={index}
                                >
                                    <Skeleton height={'31.4375vw'} />
                                </div>
                            ))}
                    </div>
                </div>
            )}
            {dataNews && (
                <>
                    <ListNewsCategorized
                        list={dataNews?.data}
                        t={t}
                    />
                    <ReactPaginate
                        breakLabel='...'
                        nextLabel='Next'
                        onPageChange={(e) => setPageNumber(e.selected + 1)}
                        pageRangeDisplayed={5}
                        pageCount={Math.ceil(dataNews?.meta?.pageCount) || 1}
                        renderOnZeroPageCount={null}
                        previousLabel='Previous'
                        forcePage={pageNumber - 1}
                        pageClassName={classes.page}
                        activeClassName={classes.selected}
                        onClick={() => {
                            newsCategorizedRef?.current?.scrollIntoView({ behavior: 'smooth' })
                        }}
                        className={classes['news-pagination']}
                    />
                </>
            )}
        </section>
    )
}
