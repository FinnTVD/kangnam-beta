'use client'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
const schema = yup
    .object({
        fullName: yup.string().required('Vui lòng điền họ tên!'),
    })
    .required()
export default function TestPage() {
    const [data, setData] = useState(null)
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
        setData(e)
    }
    return (
        <div className=' w-screen h-[100vh] flex justify-center items-center bg-black'>
            <form
                action=''
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    type='text'
                    className='text-black'
                    {...register('fullName')}
                />
                <button>submit</button>
            </form>
        </div>
    )
}
