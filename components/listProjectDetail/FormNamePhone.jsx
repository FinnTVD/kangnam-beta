'use client'
import { useState } from 'react'
import InputCustom from '../consignment/InputCustom'
import Button from '../general/Button'

export default function FormNamePhone() {
    const [valueName, setValueName] = useState({
        value: '',
        validate: false,
    })
    const [valuePhone, setValuePhone] = useState({
        value: '',
        validate: false,
    })
    const handleChangeName = (e) => {
        setValueName({
            value: e.target.value,
            validate: false,
        })
    }
    const handleChangePhone = (e) => {
        if (/^\d*$/.test(e.target.value)) {
            setValuePhone({
                value: e.target.value,
                validate: false,
            })
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        !valueName?.value &&
            setValueName({
                ...valueName,
                validate: true,
            })
        !valuePhone?.value &&
            setValuePhone({
                ...valuePhone,
                validate: true,
            })
        if (valueName?.value && valuePhone?.value) {
            console.log('form:', valueName, valuePhone)
        }
    }
    return (
        <div className='rounded-[0.625vw] mt-[1.5vw] border border-solid border-den01 pt-[1.19vw] pb-[2vw] px-[1vw]'>
            <h3 className='title24-800-130 text-center text-den -tracking-[0.72px] mb-[1.5vw]'>Thông tin Liên hệ</h3>
            <form
                className='w-full'
                autoComplete='false'
                onSubmit={handleSubmit}
            >
                <InputCustom
                    labelContent={'Họ và tên'}
                    labelClass={'title14-400-150 title-mb12-400-150 text-den left-[0.5vw]'}
                    inputClass={
                        'w-full py-[0.78vw] px-[1vw] rounded-[10vw] outline-none border border-solid border-den03 text-den title16-400-150 focus:border-logo bg-white title-mb12-400-150 max-md:px-[4.27vw] max-md:py-[2.93vw]'
                    }
                    register={'name'}
                    value={valueName?.value}
                    validate={valueName?.validate}
                    onChange={handleChangeName}
                />
                <InputCustom
                    boxClass={'mt-[1vw] mb-[1.5vw]'}
                    labelContent={'Số điện thoại'}
                    labelClass={'title14-400-150 title-mb12-400-150 text-den left-[0.5vw]'}
                    inputClass={
                        'w-full py-[0.78vw] px-[1vw] rounded-[10vw] outline-none border border-solid border-den03 text-den title16-400-150 focus:border-logo bg-white title-mb12-400-150 max-md:px-[4.27vw] max-md:py-[2.93vw]'
                    }
                    type='tel'
                    register={'phone'}
                    value={valuePhone?.value}
                    validate={valuePhone?.validate}
                    onChange={handleChangePhone}
                />

                <div className='flex justify-center'>
                    <Button
                        className='border-none bg-logo shadow-submit'
                        span='text-white'
                        stroke='white'
                    >
                        Gửi thông tin
                    </Button>
                </div>
            </form>
        </div>
    )
}
