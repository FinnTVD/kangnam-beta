'use client'
const arrFilter = new Array(10).fill(0)
import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function FilterCheckBox({ className, setIndexFilter, index }) {
    const { data, error, isLoading } = useSWR(
        process.env.NEXT_PUBLIC_API + `${index === 1 ? '/property-area-type' : '/property-type'}`,
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        },
    )
    console.log('🚀 ~ file: BoxFilter.jsx:16 ~ BoxFilter ~ data:', data)
    return (
        <div
            className={`${className} absolute z-50 left-0 -bottom-[1.5vw] translate-y-full flex flex-col shadow-boxFilter rounded-[0.75vw] bg-white w-[20.875vw] gap-y-[2.3vw] max-md:gap-y-[6.4vw] transition-all duration-[2s] ease-linear max-md:w-[94vw] max-md:rounded-xl`}
        >
            <div className='px-[1.5vw] pt-[1.5vw] max-md:pt-[6.4vw] max-md:px-[5.87vw]'>
                <p className='text-den title16-600-150 whitespace-nowrap mb-[1.5vw] max-md:mb-[6.4vw] title-mb16-600-150'>
                    Chọn loại hình bất động sản
                </p>
                <div className='grid grid-cols-2 gap-x-[2.3vw] gap-y-[1vw] max-md:gap-x-[9.07vw] max-md:gap-y-[4.27vw]'>
                    {data &&
                        data?.data?.map((e, index) => (
                            <div
                                key={index}
                                className='w-fit flex items-center gap-x-[0.75vw] max-md:gap-x-[3.2vw]'
                            >
                                <input
                                    type='checkbox'
                                    name={`filter${index}`}
                                    id={`filter${index}`}
                                    className='w-[1.5vw] h-[1.5vw] max-md:w-[6.4vw] max-md:h-[6.4vw] outline-none border border-solid border-den02'
                                />
                                <label
                                    className='title14-400-150 text-den cursor-pointer title-mb14-400-150 w-[5.5625vw] max-md:w-[23.74vw] max-md:whitespace-normal'
                                    htmlFor={`filter${index}`}
                                >
                                    {e?.name}
                                </label>
                            </div>
                        ))}
                </div>
            </div>
            <div className='border-t border-solid border-black01 flex justify-between items-center py-[1vw] px-[1.5vw] max-md:py-[5.6vw] max-md:px-[6.4vw]'>
                <span className='title14-400-150 text-den title-mb14-400-150'>Đặt lại</span>
                <div className='flex gap-x-[0.63vw] max-md:gap-x-[2.67vw]'>
                    <button
                        onClick={() => setIndexFilter(-1)}
                        className='py-[0.28vw] px-[1vw] rounded-[10vw] border border-solid border-logo text-den title14-400-150 title-mb14-400-150 max-md:py-[1.2vw] max-md:px-[4.27vw]'
                    >
                        Hủy
                    </button>
                    <button className='py-[0.28vw] px-[1vw] rounded-[10vw] border border-solid border-logo text-logo title14-400-150 title-mb14-400-150 max-md:py-[1.2vw] max-md:px-[4.27vw]'>
                        Áp dụng
                    </button>
                </div>
            </div>
        </div>
    )
}
