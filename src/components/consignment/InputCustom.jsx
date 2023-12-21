'use'
import Image from "next/image";
import { useState } from "react";

export default function InputCustom({
    boxClass,
    inputClass,
    labelClass,
    register,
    value,
    onChange,
    validate,
    labelContent,
    status,
    title,
    required = true,
    type = 'text',
    icon
}) {
    const [inputFocused, setInputFocused] = useState(false)
    return (
        <div className={`${boxClass ? boxClass : ''} relative`}>
            <input
                type={type}
                className={`${validate ? 'border-red-400' : 'border-[#C5C5C5]'} ${inputClass ? inputClass : ''} ${
                    value ? '' : 'focus-input-active'
                }`}
                id={register}
                value={value}
                name={register}
                onChange={onChange}
                autoComplete='false'
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
            />
            <div className={`flex gap-[0.25vw] absolute left-[1.5vw] bg-white transition-all duration-300 cursor-pointer max-md:left-[4.2vw] ${
                    (value || inputFocused) ? 'top-0 -translate-y-1/2' : 'top-1/2 -translate-y-1/2 '
                }`}>
                {icon && <Image src={icon} alt='form-icon' width={16} height={16} className="w-[1vw] max-lg:hidden"></Image>}
            <label
                htmlFor={register}
                className={`${validate ? 'text-red-400' : 'text-[#646464]'} ${
                    labelClass ? labelClass : ''
                } text-[#646464] select-none`}
            >
                {labelContent}
                {required && <span className='text-red-400'> *</span>}
            </label>
            </div>
            {status && title && (
                <p className='absolute bottom-0 left-0 translate-y-full pl-[1.5vw] text-den title14-600-150'>
                    {status && title}
                </p>
            )}
        </div>
    )
}
