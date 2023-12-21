'use client'
import Button from '../general/Button'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import useResizeArea from '@/hooks/useResizeArea'
import postData from '@/utils/postData'
import { notifyError, notifySuccess } from '@/utils'
import { ToastContainer } from 'react-toastify'

export default function FormAgreement({ t }) {
    const schema = yup
        .object({
            name: yup.string().required(t?.contact?.notification?.name?.required),
            phone: yup
                .string()
                .test('is-number', t?.contact?.notification?.phone?.invalid, (value) => {
                    if (value && isNaN(value)) {
                        return false
                    }
                    return true
                })
                .required(t?.contact?.notification?.phone?.required),
            email: yup
                .string()
                .required(t?.contact?.notification?.email?.required)
                .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, t?.contact?.notification?.email?.invalid),
        })
        .required()

    const [areaRef, heightArea, handleResizeHeight] = useResizeArea()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const handlePostDataForm = async (api, data) => {
        const res = await postData(api, data)
        if (res?.statusCode) {
            return notifyError(res?.error)
        }
        notifySuccess()
        reset()
    }

    const onSubmit = (e) => {
        const dataForm = {
            ...e,
            category: 'Giải đáp',
        }
        handlePostDataForm('/contact', dataForm)
    }

    return (
        <section className='pt-[4.12vw] '>
            <div>
                <span className='sub-title max-md:title-mb12-700-150 max-md:tracking-[0.6px] max-lg:title-tl12'>
                    Giải đáp thắc mắc
                </span>
                <form
                    className='flex flex-col gap-y-[2vw] mt-[1.25vw] max-md:mt-[4.27vw] max-md:gap-y-[5.33vw]'
                    autoComplete='false'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className='flex flex-1 gap-x-[1.5vw] max-md:gap-x-0 max-md:flex-col max-md:gap-y-[5.33vw]'>
                        <div className='relative flex-1'>
                            <input
                                type='text'
                                placeholder={`${errors.name?.message ?? 'Họ và tên *'}`}
                                className={`${
                                    errors.name?.message
                                        ? 'border-red-400 placeholder:text-red-400'
                                        : 'placeholder:text-den border-den03 placeholder:opacity-70'
                                } w-full placeholder:text-16pc placeholder:font-normal text-den title16-600-150 placeholder:leading-normal py-[1vw] px-[2vw] flex-1 rounded-[10vw] outline-none shadow-input border border-solid focus:border-[#d6a279] max-md:py-[4.27vw] max-md:px-[6.4vw] max-md:title-mb14-400-150 max-lg:title-tl14 max-md:placeholder:text-14mb max-lg:placeholder:text-[1.8vw]`}
                                {...register('name')}
                            />
                        </div>
                        <div className='relative flex-1'>
                            <input
                                type='text'
                                placeholder={`${errors.phone?.message ?? 'Số điện thoại *'}`}
                                className={`${
                                    errors.phone?.message
                                        ? 'border-red-400 placeholder:text-red-400'
                                        : 'placeholder:text-den border-den03 placeholder:opacity-70'
                                } w-full placeholder:text-16pc placeholder:font-normal text-den title16-600-150 placeholder:leading-normal py-[1vw] px-[2vw] flex-1 rounded-[10vw] outline-none shadow-input border border-solid focus:border-[#d6a279] max-md:py-[4.27vw] max-md:px-[6.4vw] max-md:title-mb14-400-150 max-lg:title-tl14 max-md:placeholder:text-14mb max-lg:placeholder:text-[1.8vw]`}
                                {...register('phone')}
                            />
                        </div>
                    </div>
                    <div className='flex flex-1 gap-x-[1.5vw] max-md:flex-col max-md:gap-y-[5.33vw]'>
                        <input
                            type='text'
                            placeholder={`${errors.email?.message ?? 'Email *'}`}
                            className={`${
                                errors.email?.message
                                    ? 'border-red-400 placeholder:text-red-400'
                                    : 'placeholder:text-den border-den03 placeholder:opacity-70'
                            } w-full placeholder:text-16pc placeholder:font-normal text-den title16-600-150 placeholder:leading-normal py-[1vw] px-[2vw] flex-1 rounded-[10vw] outline-none shadow-input border border-solid focus:border-[#d6a279] max-md:py-[4.27vw] max-md:px-[6.4vw] max-md:title-mb14-400-150 max-lg:title-tl14 max-md:placeholder:text-14mb max-lg:placeholder:text-[1.8vw]`}
                            {...register('email')}
                        />
                        <input
                            type='text'
                            placeholder='Địa chỉ'
                            className='placeholder:text-16pc placeholder:font-normal text-den title16-600-150 placeholder:leading-normal placeholder:opacity-70 placeholder:text-den py-[1vw] px-[2vw] flex-1 rounded-[10vw] outline-none shadow-input border border-solid border-den03 focus:border-[#d6a279] max-md:py-[4.27vw] max-md:px-[6.4vw] max-md:title-mb14-400-150 max-lg:title-tl14 max-md:placeholder:text-14mb max-lg:placeholder:text-[1.8vw]'
                            {...register('address')}
                        />
                    </div>

                    <textarea
                        onChange={handleResizeHeight}
                        ref={areaRef}
                        placeholder='Nội dung'
                        className={`${
                            heightArea ? 'h-[' + heightArea + 'px]' : 'h-[10.375vw] max-md:h-[42.93vw]'
                        } placeholder:text-16pc placeholder:font-normal border border-solid border-den03 text-den title16-600-150 placeholder:leading-normal placeholder:opacity-70 placeholder:text-den py-[1vw] px-[2vw] w-full rounded-[1vw] outline-none shadow-input focus:border-[#d6a279] resize-none max-md:py-[4.27vw] max-md:px-[6.4vw] max-md:title-mb14-400-150 max-lg:title-tl14 max-md:placeholder:text-14mb max-lg:placeholder:text-[1.8vw] max-md:rounded-[2.1vw]`}
                        // style={{
                        //     height: heightArea ? `${heightArea}px` : '10.375vw',
                        // }}
                        {...register('content')}
                    ></textarea>
                    <Button
                        span='-tracking-[0.32px] text-white'
                        className='border-none bg-logo md:shadow-submit !w-fit max-md:!w-full'
                        stroke='white'
                        full={true}
                        type='submit'
                    >
                        {t?.contact?.section2?.button}
                    </Button>
                </form>
            </div>
            <ToastContainer style={{ zIndex: '999999999999999' }} />
        </section>
    )
}
