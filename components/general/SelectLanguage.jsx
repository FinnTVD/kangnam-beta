'use client'
import Link from 'next-intl/link'
import Image from 'next/image'
export default function SelectLanguage({ className }) {
    return (
        <ul
            className={`${className} absolute flex flex-col -bottom-[0.5vw] left-0 translate-y-full bg-logo rounded-lg w-[8vw] h-fit py-[0.5vw] z-40 active:bg-den`}
        >
            <li className='cursor-pointer select-none flex items-center gap-x-[0.5vw] w-full px-[0.5vw] py-[0.25vw] hover:bg-[#57534e80]'>
                <Image
                    className='w-[1.75vw] h-[1.125vw] object-cover rounded-[3px]'
                    src='/images/vn.svg'
                    alt='viet nam'
                    quality={100}
                    width={28}
                    height={18}
                />
                <Link
                    href='/'
                    className='title16-600-150 whitespace-nowrap -tracking-[0.48px] block'
                    locale='vn'
                >
                    Việt Nam
                </Link>
            </li>
            <li className='cursor-pointer select-none flex items-center gap-x-[0.5vw] w-full px-[0.5vw] py-[0.25vw] hover:bg-[#57534e80]'>
                <Image
                    className='w-[1.75vw] h-[1.125vw] object-cover rounded-[3px]'
                    src='/images/english.svg'
                    alt='english'
                    quality={100}
                    width={28}
                    height={18}
                />
                <Link
                    href='/'
                    className='title16-600-150 whitespace-nowrap -tracking-[0.48px] block'
                    locale='en'
                >
                    English
                </Link>
            </li>
            <li className='cursor-pointer select-none flex items-center gap-x-[0.5vw] w-full px-[0.5vw] py-[0.25vw] hover:bg-[#57534e80]'>
                <Image
                    className='w-[1.75vw] h-[1.125vw] object-cover rounded-[3px]'
                    src='/images/korea.svg'
                    alt='korea'
                    quality={100}
                    width={28}
                    height={18}
                />
                <Link
                    href='/'
                    className='title16-600-150 whitespace-nowrap -tracking-[0.48px] block'
                    locale='kr'
                >
                    Korea
                </Link>
            </li>
            <li className='cursor-pointer select-none flex items-center gap-x-[0.5vw] w-full px-[0.5vw] py-[0.25vw] hover:bg-[#57534e80]'>
                <Image
                    className='w-[1.75vw] h-[1.125vw] object-cover rounded-[3px]'
                    src='/images/china.svg'
                    alt='china'
                    quality={100}
                    width={28}
                    height={18}
                />
                <Link
                    href='/'
                    className='title16-600-150 whitespace-nowrap -tracking-[0.48px] block'
                    locale='ch'
                >
                    China
                </Link>
            </li>
        </ul>
    )
}
