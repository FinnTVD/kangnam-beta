'use client'
import Link from 'next/link'

export default function Button({
    children,
    href = '',
    className = '',
    stroke = '#412A1A',
    span = '',
    icon = '',
    full = false,
    onCLick = () => {},
}) {
    return (
        <>
            {href ? (
                <Link
                    href={href}
                    className={`${className} ${
                        full ? 'w-full justify-center' : ''
                    } flex gap-x-[0.75vw] items-center w-fit h-fit py-[1vw] px-[2.5vw] rounded-[10vw] border-[0.7px] border-solid border-nu text-nu max-md:py-[3.87vw] max-md:px-[6.4vw] max-md:gap-x-[3.2vw] group`}
                >
                    <span className={`${span} title16-400-150 title-mb14-400-150 max-md:-tracking-[0.28px]`}>
                        {children}
                    </span>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke={stroke}
                        className={`${icon} w-6 h-6 max-md:h-[3.6vw] max-md:w-[3.6vw] group-hover:translate-x-2 transition-transform duration-300`}
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M8.25 4.5l7.5 7.5-7.5 7.5'
                        />
                    </svg>
                </Link>
            ) : (
                <button
                    type='button'
                    className={`${className} ${
                        full ? 'w-full justify-center' : ''
                    } flex gap-x-[0.75vw] items-center w-fit h-fit py-[1vw] px-[2.5vw] rounded-[10vw] border-[0.7px] border-solid border-nu text-nu max-md:py-[3.87vw] max-md:px-[6.4vw] max-md:gap-x-[3.2vw] group`}
                    onClick={() => onCLick()}
                >
                    <span className={`${span} title16-400-150 title-mb14-400-150 max-md:-tracking-[0.28px]`}>
                        {children}
                    </span>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke={stroke}
                        className={`${icon} w-6 h-6 max-md:h-[3.6vw] max-md:w-[3.6vw] group-hover:translate-x-2 transition-transform duration-300`}
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M8.25 4.5l7.5 7.5-7.5 7.5'
                        />
                    </svg>
                </button>
            )}
        </>
    )
}
