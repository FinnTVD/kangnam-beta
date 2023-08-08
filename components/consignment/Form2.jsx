'use client'
import useResizeArea from '@/hooks/useResizeArea'
import Image from 'next/image'


export default function Form2({ handlePrevSlide, handleNextSlide }) {
    const [areaRef, heightArea, handleResizeHeight] = useResizeArea()
    const handleSubmitForm = (e) => {
        e.preventDefault()
        handleNextSlide()
    }
    return (
        <>
            <article className='flex relative items-center shadow-input rounded-[1vw] w-full h-fit gap-x-[3.5vw] pt-[5.81vw] pb-[7.69vw] px-[2.5vw] '>
                <div className='absolute left-[2.75vw] top-[2.25vw] flex py-[0.5vw] gap-x-[0.56vw] items-center cursor-pointer'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='8'
                        height='14'
                        viewBox='0 0 8 14'
                        fill='none'
                        className='w-[0.375vw] h-[0.75vw]'
                    >
                        <path
                            d='M7 13L1 7L7 1'
                            stroke='#412A1A'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                    <span
                        onClick={handlePrevSlide}
                        className='text-nu title16-400-150'
                    >
                        Trở lại
                    </span>
                </div>
                <div className='relative flex-1'>
                    <h3 className='title45-800-150'>Thông tin liên hệ</h3>
                    <form
                        action=''
                        className=''
                        onSubmit={handleSubmitForm}
                    >
                        <div className='flex gap-x-[0.5vw] my-[1.25vw]'>
                            <input
                                type='checkbox'
                                name='ourHouse'
                                id='ourHouse'
                                className='cursor-pointer'
                            />
                            <label
                                htmlFor='ourHouse'
                                className='text-[#9E9E9E] cursor-pointer title16-400-150'
                            >
                                Tôi là chủ nhà
                            </label>
                        </div>
                        <div className='flex gap-x-[1vw] mt-[2vw]'>
                            <input
                                type='text'
                                className='flex-1 py-[1vw] px-[1.5vw] rounded-[6.25vw] outline-none border border-solid border-[#C5C5C5] text-den title16-400-150 placeholder:text-[#646464] placeholder:text-16pc placeholder:font-normal placeholder:leading-normal'
                                placeholder='Họ và tên *'
                            />
                            <input
                                type='tel'
                                className='flex-1 py-[1vw] px-[1.5vw] rounded-[6.25vw] outline-none border border-solid border-[#C5C5C5] text-den title16-400-150 placeholder:text-[#646464] placeholder:text-16pc placeholder:font-normal placeholder:leading-normal'
                                placeholder='Số điện thoại *'
                            />
                        </div>
                        <input
                            type='email'
                            className='w-full py-[1vw] my-[1vw] px-[1.5vw] rounded-[6.25vw] outline-none border border-solid border-[#C5C5C5] text-den title16-400-150 placeholder:text-[#646464] placeholder:text-16pc placeholder:font-normal placeholder:leading-normal'
                            placeholder='Email'
                        />
                        <textarea
                            ref={areaRef}
                            onChange={handleResizeHeight}
                            name='note'
                            id='note'
                            className='py-[1vw] px-[1.5vw] resize-none rounded-[1vw] text-den border border-solid border-[#C5C5C5] w-full'
                            placeholder='Lời nhắn'
                            style={{
                                height: heightArea ? `${heightArea}px` : '8.625vw',
                            }}
                        ></textarea>
                        <button className='flex gap-x-[0.56vw] items-center py-[0.5] mt-[2vw] w-fit h-fit ml-auto'>
                            <span className='text-nu title16-600-150'>Tiếp tục</span>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='8'
                                height='14'
                                viewBox='0 0 8 14'
                                fill='none'
                                className='w-[0.375vw] h-[0.75vw]'
                            >
                                <path
                                    d='M1 1L7 7L1 13'
                                    stroke='#412A1A'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                        </button>
                    </form>
                </div>
                <div className='relative w-[28.8125vw] h-[31.875vw] rounded-[1vw] overflow-hidden'>
                    <Image
                        className='object-cover'
                        src='/form1.jpg'
                        alt='form1'
                        sizes='w-[28.8125vw]'
                        fill
                        quality={100}
                    />
                </div>
            </article>
        </>
    )
}
