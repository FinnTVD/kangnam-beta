'use client'
import Image from 'next/image'
import Button from '../general/Button'
import Link from 'next/link'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import useResizeArea from '@/hooks/useResizeArea'

const schema = yup
    .object({
        fullName: yup.string().required('Vui lòng điền thông tin!'),
        numberPhone: yup
            .string()
            .test('is-number', 'Số điện thoại không hợp lệ!', (value) => {
                if (value && isNaN(value)) {
                    return false
                }
                return true
            })
            .required('Vui lòng điền thông tin!'),
        email: yup
            .string()
            .required('Vui lòng điền thông tin!')
            .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Email không hợp lệ!'),
    })
    .required()

export default function FormContact() {
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
        console.log(e)
    }

    return (
        <section className='px-120 pt-[8.12vw] pb-[6.88vw]'>
            <div className='flex gap-x-[2.25vw]'>
                <div className='w-[41vw] h-[46.8125vw] flex items-end rounded-[1vw] overflow-hidden px-[1.75vw] py-[2.44vw] relative'>
                    <Image
                        src='/images/form-contact.jpg'
                        alt='form-contact'
                        sizes='41vw'
                        fill
                        quality={100}
                        className='z-0 object-cover'
                    />
                    <div className='relative z-10 px-[1.75vw] pt-[1.5vw] pb-[2.31vw] rounded-[1vw] border border-solid border-white09 backdrop-blur-[11.1199px] bg-white07 w-full h-fit'>
                        <span className='sub-title'>Thông tin liên hệ</span>
                        <ul className='flex flex-col gap-y-[1vw]'>
                            <li className='flex gap-x-[0.5vw] items-center'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='20'
                                    height='20'
                                    viewBox='0 0 20 20'
                                    fill='none'
                                    className='w-[1.25vw] h-[1.25vw]'
                                >
                                    <path
                                        d='M10.0006 9.79297C10.4021 9.79297 10.7452 9.64999 11.0299 9.36403C11.3147 9.07809 11.457 8.73434 11.457 8.33278C11.457 7.93124 11.3141 7.58811 11.0281 7.30339C10.7422 7.01866 10.3984 6.8763 9.99684 6.8763C9.5953 6.8763 9.25217 7.01928 8.96745 7.30524C8.68273 7.59118 8.54037 7.93493 8.54037 8.33649C8.54037 8.73803 8.68334 9.08116 8.9693 9.36588C9.25525 9.65061 9.599 9.79297 10.0006 9.79297ZM9.9987 16.6888C11.8459 15.0082 13.2105 13.4839 14.0924 12.1159C14.9744 10.7478 15.4154 9.54297 15.4154 8.5013C15.4154 6.86533 14.8925 5.52578 13.8468 4.48266C12.8011 3.43953 11.5184 2.91797 9.9987 2.91797C8.47902 2.91797 7.19632 3.43953 6.15061 4.48266C5.10489 5.52578 4.58203 6.86533 4.58203 8.5013C4.58203 9.54297 5.03342 10.7478 5.9362 12.1159C6.83898 13.4839 8.19314 15.0082 9.9987 16.6888ZM9.9987 18.3346C7.76259 16.4319 6.09245 14.6645 4.98828 13.0326C3.88411 11.4006 3.33203 9.89019 3.33203 8.5013C3.33203 6.41797 4.00217 4.75825 5.34245 3.52214C6.68273 2.28602 8.23481 1.66797 9.9987 1.66797C11.7626 1.66797 13.3147 2.28602 14.6549 3.52214C15.9952 4.75825 16.6654 6.41797 16.6654 8.5013C16.6654 9.89019 16.1133 11.4006 15.0091 13.0326C13.9049 14.6645 12.2348 16.4319 9.9987 18.3346Z'
                                        fill='#57534E'
                                    />
                                </svg>
                                <span className='text-den-2 title16-400-150'>
                                    Villa e11, The Manor, KĐT mới Mỹ Đình - Mễ Trì, Nam từ Liêm, Hà Nội
                                </span>
                            </li>
                            <li className='flex gap-x-[0.5vw] items-center'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='20'
                                    height='21'
                                    viewBox='0 0 20 21'
                                    fill='none'
                                >
                                    <path
                                        d='M16.5625 18C14.8681 18 13.184 17.5833 11.5104 16.75C9.83681 15.9167 8.33333 14.8333 7 13.5C5.66667 12.1667 4.58333 10.6632 3.75 8.98958C2.91667 7.31597 2.5 5.63194 2.5 3.9375C2.5 3.66964 2.58928 3.44642 2.76785 3.26785C2.94642 3.08928 3.16964 3 3.4375 3H6.35417C6.54321 3 6.712 3.06597 6.86054 3.19792C7.00907 3.32986 7.10417 3.50694 7.14583 3.72917L7.70833 6.35417C7.73611 6.54861 7.73264 6.72569 7.69792 6.88542C7.66319 7.04514 7.59028 7.18056 7.47917 7.29167L5.39583 9.39583C6.17361 10.6875 7.04514 11.8125 8.01042 12.7708C8.97569 13.7292 10.0694 14.5417 11.2917 15.2083L13.2708 13.1667C13.4097 13.0139 13.5694 12.9062 13.75 12.8438C13.9306 12.7812 14.1111 12.7708 14.2917 12.8125L16.7708 13.3542C16.9835 13.401 17.1582 13.5065 17.2949 13.6706C17.4316 13.8346 17.5 14.0278 17.5 14.25V17.0625C17.5 17.3304 17.4107 17.5536 17.2321 17.7321C17.0536 17.9107 16.8304 18 16.5625 18ZM4.77083 8.25L6.45833 6.54167L5.97917 4.25H3.75C3.75 4.79167 3.83333 5.38542 4 6.03125C4.16667 6.67708 4.42361 7.41667 4.77083 8.25ZM12.4583 15.8125C13.0278 16.0764 13.6458 16.2917 14.3125 16.4583C14.9792 16.625 15.625 16.7222 16.25 16.75V14.5208L14.1042 14.0833L12.4583 15.8125Z'
                                        fill='#57534E'
                                    />
                                </svg>
                                <span className='text-den-2 title16-400-130'>+84 337858021 / +84 339625612</span>
                            </li>
                            <li className='flex gap-x-[0.5vw] items-center'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='20'
                                    height='21'
                                    viewBox='0 0 20 21'
                                    fill='none'
                                >
                                    <path
                                        d='M16.5625 18C14.8681 18 13.184 17.5833 11.5104 16.75C9.83681 15.9167 8.33333 14.8333 7 13.5C5.66667 12.1667 4.58333 10.6632 3.75 8.98958C2.91667 7.31597 2.5 5.63194 2.5 3.9375C2.5 3.66964 2.58928 3.44642 2.76785 3.26785C2.94642 3.08928 3.16964 3 3.4375 3H6.35417C6.54321 3 6.712 3.06597 6.86054 3.19792C7.00907 3.32986 7.10417 3.50694 7.14583 3.72917L7.70833 6.35417C7.73611 6.54861 7.73264 6.72569 7.69792 6.88542C7.66319 7.04514 7.59028 7.18056 7.47917 7.29167L5.39583 9.39583C6.17361 10.6875 7.04514 11.8125 8.01042 12.7708C8.97569 13.7292 10.0694 14.5417 11.2917 15.2083L13.2708 13.1667C13.4097 13.0139 13.5694 12.9062 13.75 12.8438C13.9306 12.7812 14.1111 12.7708 14.2917 12.8125L16.7708 13.3542C16.9835 13.401 17.1582 13.5065 17.2949 13.6706C17.4316 13.8346 17.5 14.0278 17.5 14.25V17.0625C17.5 17.3304 17.4107 17.5536 17.2321 17.7321C17.0536 17.9107 16.8304 18 16.5625 18ZM4.77083 8.25L6.45833 6.54167L5.97917 4.25H3.75C3.75 4.79167 3.83333 5.38542 4 6.03125C4.16667 6.67708 4.42361 7.41667 4.77083 8.25ZM12.4583 15.8125C13.0278 16.0764 13.6458 16.2917 14.3125 16.4583C14.9792 16.625 15.625 16.7222 16.25 16.75V14.5208L14.1042 14.0833L12.4583 15.8125Z'
                                        fill='#57534E'
                                    />
                                </svg>
                                <span className='text-den-2 title16-400-130'>+82 10-8413-1981</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex-1'>
                    <span className='sub-title'>Kết nối với chúng tôi</span>
                    <h2 className='text-den title56'>Điền thông tin</h2>
                    <form
                        className='flex flex-col gap-y-[2vw] mt-[1.25vw]'
                        autoComplete='false'
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className='relative'>
                            <input
                                type='text'
                                placeholder='Họ và tên *'
                                className='placeholder:text-16pc w-full placeholder:font-normal text-den title16-600-150 placeholder:leading-normal placeholder:opacity-70 placeholder:text-den py-[1vw] px-[2vw] flex-1 rounded-[6.25vw] outline-none shadow-input'
                                {...register('fullName')}
                            />
                            <p className='absolute -bottom-[0.5vw] left-0 translate-y-full pl-[2vw] text-red-400 title10-600-150'>
                                {errors.fullName?.message}
                            </p>
                        </div>
                        <div className='flex flex-1 gap-x-[1.5vw]'>
                            <div className='relative'>
                                <input
                                    type='text'
                                    placeholder='Số điện thoại *'
                                    className='placeholder:text-16pc placeholder:font-normal text-den title16-600-150 placeholder:leading-normal placeholder:opacity-70 placeholder:text-den py-[1vw] px-[2vw] flex-1 rounded-[6.25vw] outline-none shadow-input'
                                    {...register('numberPhone')}
                                />
                                <p className='absolute -bottom-[0.5vw] left-0 translate-y-full pl-[2vw] text-red-400 title10-600-150'>
                                    {errors.numberPhone?.message}
                                </p>
                            </div>
                            <div className='relative'>
                                <input
                                    type='text'
                                    placeholder='Email *'
                                    className='placeholder:text-16pc placeholder:font-normal text-den title16-600-150 placeholder:leading-normal placeholder:opacity-70 placeholder:text-den py-[1vw] px-[2vw] flex-1 rounded-[6.25vw] outline-none shadow-input'
                                    {...register('email')}
                                />
                                <p className='absolute -bottom-[0.5vw] left-0 translate-y-full pl-[2vw] text-red-400 title10-600-150'>
                                    {errors.email?.message}
                                </p>
                            </div>
                        </div>
                        <input
                            type='text'
                            placeholder='Địa chỉ'
                            className='placeholder:text-16pc placeholder:font-normal text-den title16-600-150 placeholder:leading-normal placeholder:opacity-70 placeholder:text-den py-[1vw] px-[2vw] flex-1 rounded-[6.25vw] outline-none shadow-input'
                            {...register('address')}
                        />
                        <textarea
                            onChange={handleResizeHeight}
                            ref={areaRef}
                            placeholder='Nội dung'
                            className='placeholder:text-16pc placeholder:font-normal text-den title16-600-150 placeholder:leading-normal placeholder:opacity-70 placeholder:text-den py-[1vw] px-[2vw] w-full rounded-[1vw] outline-none shadow-input focus:outline-[#d6a279] resize-none'
                            style={{
                                height: heightArea ? `${heightArea}px` : '10.375vw',
                            }}
                            {...register('content')}
                        ></textarea>
                        <Button
                            span='-tracking-[0.32px] text-white'
                            className='border-none bg-logo shadow-submit'
                            stroke='white'
                        >
                            Gửi thông tin
                        </Button>
                    </form>
                    <hr className='bg-[#D9D9D9] mt-[2.13vw] mb-[1.5vw]' />
                    <div className='flex items-start justify-between'>
                        <span className='w-fit text-20pc leading-[1.4] font-extrabold text-den'>Liên hệ ngay:</span>
                        <ul className='flex gap-x-[1vw]'>
                            <li>
                                <Link
                                    href='/'
                                    className='w-[2.5vw] h-[2.5vw] block'
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='40'
                                        height='40'
                                        viewBox='0 0 40 40'
                                        fill='none'
                                        className='w-full h-full'
                                    >
                                        <circle
                                            cx='20'
                                            cy='20'
                                            r='20'
                                            fill='#D6A279'
                                        />
                                        <path
                                            d='M21.0937 21.5754V28.4706H17.9263V21.5754H15.2949V18.7795H17.9263V17.7623C17.9263 13.9857 19.5039 12 22.8419 12C23.8652 12 24.1211 12.1645 24.6815 12.2985V15.0639C24.0541 14.9542 23.8774 14.8933 23.2257 14.8933C22.4521 14.8933 22.0379 15.1126 21.6602 15.5451C21.2826 15.9775 21.0937 16.7268 21.0937 17.7988V18.7856H24.6815L23.719 21.5814H21.0937V21.5754Z'
                                            fill='white'
                                        />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/'
                                    className='w-[2.5vw] h-[2.5vw] block'
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='40'
                                        height='40'
                                        viewBox='0 0 40 40'
                                        fill='none'
                                        className='w-full h-full'
                                    >
                                        <circle
                                            cx='20'
                                            cy='20'
                                            r='20'
                                            fill='#D6A279'
                                        />
                                        <path
                                            d='M23.433 12.6266L23.0356 12H20.6309V17.6431L20.6227 23.1551C20.6268 23.1961 20.6309 23.2411 20.6309 23.2821C20.6309 24.6621 19.5084 25.7883 18.1237 25.7883C16.739 25.7883 15.6165 24.6662 15.6165 23.2821C15.6165 21.902 16.739 20.7759 18.1237 20.7759C18.4105 20.7759 18.689 20.8291 18.9471 20.9192V18.1673C18.6809 18.1222 18.4064 18.0976 18.1237 18.0976C15.2683 18.1017 12.9414 20.4278 12.9414 23.2862C12.9414 26.1446 15.2683 28.4706 18.1278 28.4706C20.9873 28.4706 23.3142 26.1446 23.3142 23.2862V16.7299C24.3507 17.7659 25.6903 18.7774 27.1733 19.1009V16.2876C25.5633 15.575 23.9615 13.4701 23.433 12.6266Z'
                                            fill='white'
                                        />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/'
                                    className='w-[2.5vw] h-[2.5vw] block'
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='40'
                                        height='40'
                                        viewBox='0 0 40 40'
                                        fill='none'
                                        className='w-full h-full'
                                    >
                                        <circle
                                            cx='20'
                                            cy='20'
                                            r='20'
                                            fill='#D6A279'
                                        />
                                        <path
                                            d='M27.4128 27.0591H13.294C11.4048 27.0591 9.88281 25.3883 9.88281 23.3333V16.6671C9.88281 14.6038 11.4125 12.9414 13.294 12.9414H27.4128C29.3019 12.9414 30.824 14.6121 30.824 16.6671V23.3333C30.8316 25.3967 29.3019 27.0591 27.4128 27.0591Z'
                                            fill='white'
                                        />
                                        <path
                                            d='M24.0566 19.8959L18.1172 16.4709V23.3209L24.0566 19.8959Z'
                                            fill='#D6A279'
                                        />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/'
                                    className='w-[2.5vw] h-[2.5vw] block relative'
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='40'
                                        height='40'
                                        viewBox='0 0 40 40'
                                        fill='none'
                                        className='w-full h-full'
                                    >
                                        <circle
                                            cx='20'
                                            cy='20'
                                            r='20'
                                            fill='#D6A279'
                                        />
                                    </svg>
                                    <span className='absolute text-white -translate-x-1/2 -translate-y-1/2 text-14pc title top-1/2 left-1/2'>
                                        Zalo
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
