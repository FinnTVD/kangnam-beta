'use client'
import useResizeArea from '@/hooks/useResizeArea'
import Image from 'next/image'
import classes from './form2.module.css'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup
    .object({
        fullName: yup.string().required('Vui lòng điền đầy đủ họ và tên!'),
        numberPhone: yup
            .string()
            .test('is-number', 'Số điện thoại không hợp lệ!', (value) => {
                if (value && isNaN(value)) {
                    return false
                }
                return true
            })
            .required('Vui lòng điền số điện thoại!'),
        email: yup.string().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Email không hợp lệ!'),
    })
    .required()

export default function Form2({ handlePrevSlide, handleNextSlide }) {
    const [areaRef, heightArea, handleResizeHeight] = useResizeArea()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (e) => {
        console.log('🚀 ~ file: Form2.jsx:38 ~ onSubmit ~ e:', e)
        handleNextSlide()
    }

    return (
        <>
            <article className='flex relative items-center shadow-input rounded-[1vw] w-full h-fit gap-x-[3.5vw] pt-[5.81vw] pb-[7.69vw] px-[2.5vw] '>
                <div
                    onClick={handlePrevSlide}
                    className='absolute left-[2.75vw] top-[2.25vw] flex py-[0.5vw] gap-x-[0.56vw] items-center cursor-pointer pr-[1vw]'
                >
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
                    <span className='text-nu title16-400-150'>Trở lại</span>
                </div>
                <div className='relative flex-1'>
                    <h3 className='title45-800-150'>Thông tin liên hệ</h3>
                    <form
                        autoComplete='false'
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className='flex gap-x-[0.5vw] my-[1.25vw]'>
                            <input
                                type='checkbox'
                                name='ourHouse'
                                id='ourHouse'
                                className={`${classes['ourHouse']} cursor-pointer`}
                            />
                            <label
                                htmlFor='ourHouse'
                                className={`${classes['label-ourHouse']} select-none text-[#9E9E9E] cursor-pointer title16-400-150 focus:text-den`}
                            >
                                Tôi là chủ nhà
                            </label>
                        </div>
                        <div className='flex gap-x-[1vw] mt-[2vw]'>
                            <div className='flex-1'>
                                <input
                                    type='text'
                                    className={`${
                                        errors.fullName?.message
                                            ? 'border-red-400 placeholder:text-red-400'
                                            : 'border-[#C5C5C5] placeholder:text-[#646464]'
                                    } w-full py-[1vw] px-[1.5vw] rounded-[6.25vw] outline-none border border-solid text-den title16-400-150 placeholder:text-16pc placeholder:font-normal placeholder:leading-normal`}
                                    placeholder={`${errors.fullName?.message ?? 'Họ và tên *'}`}
                                    {...register('fullName')}
                                />
                            </div>
                            <div className='flex-1'>
                                <input
                                    type='tel'
                                    className={`${
                                        errors.numberPhone?.message
                                            ? 'border-red-400 placeholder:text-red-400'
                                            : 'border-[#C5C5C5] placeholder:text-[#646464]'
                                    } w-full py-[1vw] px-[1.5vw] rounded-[6.25vw] outline-none border border-solid border-[#C5C5C5] text-den title16-400-150 placeholder:text-[#646464] placeholder:text-16pc placeholder:font-normal placeholder:leading-normal`}
                                    placeholder={`${errors.numberPhone?.message ?? 'Số điện thoại *'}`}
                                    {...register('numberPhone')}
                                />
                            </div>
                        </div>
                        <input
                            type='text'
                            className='w-full py-[1vw] my-[1vw] px-[1.5vw] rounded-[6.25vw] outline-none border border-solid border-[#C5C5C5] text-den title16-400-150 placeholder:text-[#646464] placeholder:text-16pc placeholder:font-normal placeholder:leading-normal'
                            placeholder='Email'
                            {...register('email')}
                        />
                        <textarea
                            ref={areaRef}
                            onChange={handleResizeHeight}
                            className='py-[1vw] px-[1.5vw] resize-none rounded-[1vw] text-den border border-solid border-[#C5C5C5] w-full'
                            placeholder='Lời nhắn'
                            {...register('note')}
                            style={{
                                height: heightArea ? `${heightArea}px` : '8.625vw',
                            }}
                        ></textarea>
                        <button className='flex gap-x-[0.56vw] items-center py-[0.5vw] mt-[1.5vw] w-fit h-fit ml-auto'>
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
                    {/* <div className='absolute bottom-0 left-0'>
                        <p className='pl-[1.5vw] text-red-400 title14-600-150'>{errors.fullName?.message}</p>
                        <p className='pl-[1.5vw] text-red-400 title14-600-150'>{errors.numberPhone?.message}</p>
                    </div> */}
                </div>
                <div className='relative w-[28.8125vw] h-[31.875vw] rounded-[1vw] overflow-hidden'>
                    <Image
                        className='object-cover'
                        src='/images/form1.jpg'
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
