'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Form1({ handleNextSlide }) {
    const [selectedOption, setSelectedOption] = useState('sell')

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value)
    }
    const handleSubmitForm = (e) => {
        e.preventDefault()
        handleNextSlide()
    }
    return (
        <>
            <article className='flex shadow-input rounded-[1vw] w-full h-fit gap-x-[3.5vw] pt-[5.81vw] pb-[7.69vw] px-[2.5vw] '>
                <div className='flex-1'>
                    <h3 className='title45-800-150'>Thông tin cơ bản</h3>
                    <span className='text-black mt-[1.25vw] mb-[1vw] title16-400-150 block'>
                        Nhu cầu của bạn là gì?
                    </span>
                    <form
                        action=''
                        className=''
                        onSubmit={handleSubmitForm}
                    >
                        <div className='flex gap-x-[1.87vw]'>
                            <div className='flex gap-x-[0.69vw] items-center'>
                                <input
                                    type='radio'
                                    name='sell'
                                    id='sell'
                                    value='sell'
                                    checked={selectedOption === 'sell'}
                                    onChange={handleOptionChange}
                                    className='cursor-pointer'
                                />
                                <label
                                    htmlFor='sell'
                                    className='text-black cursor-pointer title16-400-150'
                                >
                                    Bán
                                </label>
                            </div>
                            <div className='flex gap-x-[0.69vw] items-center'>
                                <input
                                    type='radio'
                                    name='hire'
                                    id='hire'
                                    value='hire'
                                    checked={selectedOption === 'hire'}
                                    onChange={handleOptionChange}
                                    className='cursor-pointer'
                                />
                                <label
                                    htmlFor='hire'
                                    className='text-black cursor-pointer title16-400-150'
                                >
                                    Cho thuê
                                </label>
                            </div>
                            <div className='flex gap-x-[0.69vw] items-center'>
                                <input
                                    type='radio'
                                    name='sellandhire'
                                    id='sellandhire'
                                    value='sellandhire'
                                    checked={selectedOption === 'sellandhire'}
                                    onChange={handleOptionChange}
                                    className='cursor-pointer'
                                />
                                <label
                                    htmlFor='sellandhire'
                                    className='text-black cursor-pointer title16-400-150'
                                >
                                    Bán và cho thuê
                                </label>
                            </div>
                        </div>
                        <div className='flex gap-x-[1.5vw] mt-[2vw]'>
                            <div className='w-[17.1875vw] py-[1vw] px-[1.5vw] rounded-[6.25vw] border border-solid border-[#C5C5C5] flex justify-between items-center'>
                                <span className='text-[#646464] title16-400-150'>Căn hộ</span>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    className='w-[1.5vw] h-[1.5vw]'
                                >
                                    <path
                                        d='M16.1791 10.8985L15.5023 10.2217L12.0007 13.7209L8.49907 10.2217L7.82227 10.8985L12.0007 15.0793L16.1791 10.8985Z'
                                        fill='#C5C5C5'
                                    />
                                </svg>
                            </div>
                            <input
                                type='text'
                                className='flex-1 py-[1vw] px-[1.5vw] rounded-[6.25vw] outline-none border border-solid border-[#C5C5C5] text-den title16-400-150 placeholder:text-[#646464] placeholder:text-16pc placeholder:font-normal placeholder:leading-normal'
                                placeholder='Giá bán mong muốn *'
                            />
                        </div>
                        <input
                            type='text'
                            className='w-full py-[1vw] mt-[1.5vw] px-[1.5vw] rounded-[6.25vw] outline-none border border-solid border-[#C5C5C5] text-den title16-400-150 placeholder:text-[#646464] placeholder:text-16pc placeholder:font-normal placeholder:leading-normal'
                            placeholder='Địa chỉ *'
                        />
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
