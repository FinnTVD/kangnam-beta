'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const handleCheckLang = (lang, pathName) => {
    if (!lang || !pathName) return
    const path = pathName.split('/')
    if (path?.length > 2) {
        switch (lang) {
            case 'vn':
                return pathName.slice(3)
            case 'en':
                return '/en' + pathName.slice(3)
            case 'kr':
                return '/kr' + pathName.slice(3)
            case 'ch':
                return '/ch' + pathName.slice(3)
            default:
                break
        }
    } else {
        if (path[1] && lang !== 'vn') {
            switch (lang) {
                case 'vn':
                    return '/'
                case 'en':
                    return '/en' + pathName
                case 'kr':
                    return '/kr' + pathName
                case 'ch':
                    return '/ch' + pathName
                default:
                    break
            }
        } else {
            switch (lang) {
                case 'vn':
                    return '/'
                case 'en':
                    return '/en'
                case 'kr':
                    return '/kr'
                case 'ch':
                    return '/ch'
                default:
                    break
            }
        }
    }
}
export default function SelectLanguage({ className, lang }) {
    const pathName = usePathname()
    return (
        <ul
            id='box-select-language'
            className={`${className} absolute flex flex-col -bottom-[0.5vw] left-0 translate-y-full bg-white rounded-md w-[8vw] h-fit py-[0.5vw] z-[99999] text-black`}
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
                    href={handleCheckLang('vn', pathName)}
                    className='title16-600-150 whitespace-nowrap -tracking-[0.48px] block'
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
                    href={handleCheckLang('en', pathName)}
                    className='title16-600-150 whitespace-nowrap -tracking-[0.48px] block'
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
                    href={handleCheckLang('kr', pathName)}
                    className='title16-600-150 whitespace-nowrap -tracking-[0.48px] block'
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
                    href={handleCheckLang('ch', pathName)}
                    className='title16-600-150 whitespace-nowrap -tracking-[0.48px] block'
                >
                    China
                </Link>
            </li>
        </ul>
    )
}
