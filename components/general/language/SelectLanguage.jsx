'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import useStore from '@/app/[lang]/(store)/store'

const arrHref = ['/en', '/kr', '/ch']
const arrLanguage = [
    {
        id: 1,
        title: 'Việt Nam',
        src: '/images/vn.svg',
        code: 'vi',
    },
    {
        id: 2,
        title: 'English',
        src: '/images/english.svg',
        code: 'en',
    },
    {
        id: 3,
        title: 'Korea',
        src: '/images/korea.svg',
        code: 'kr',
    },
    {
        id: 4,
        title: 'China',
        src: '/images/china.svg',
        code: 'ch',
    },
]

export default function SelectLanguage({ className, lang }) {
    const language = useStore((state) => state.language)
    const setLanguage = useStore((state) => state.setLanguage)
    const pathName = usePathname()
    console.log('🚀 ~ file: SelectLanguage.jsx:38 ~ SelectLanguage ~ pathName:', pathName)

    const handleHref = (lg) => {
        if (lg === 'vi') {
            if (lang === 'vi') {
                return pathName
            } else if (arrHref.includes(pathName)) {
                return '/'
            } else {
                return pathName.slice(3)
            }
        } else {
            if (lg === lang) {
                return pathName
            }
            if (lang === 'vi') {
                return lg + pathName
            } else {
                return '/' + lg + pathName.slice(3)
            }
        }
    }

    const handleChangeLanguage = (code) => {
        setLanguage(code)
    }

    return (
        <ul
            id='box-select-language'
            className={`${className} absolute flex flex-col -bottom-[0.5vw] left-0 translate-y-full bg-white rounded-md w-[8vw] max-lg:w-[12vw] h-fit py-[0.5vw] z-[99999] text-black max-md:w-[27.5vw] max-md:-left-[2.13vw] max-md:py-[1vw] max-md:-bottom-[1vw]`}
        >
            {arrLanguage &&
                arrLanguage?.map((e) => (
                    <li key={e?.id}>
                        <Link
                            className='cursor-pointer select-none max-md:py-[1vw] flex items-center gap-x-[0.5vw] max-md:px-[2.13vw] max-md:gap-x-[2.4vw] w-full px-[0.5vw] py-[0.25vw] hover:bg-[#57534e80]'
                            href={handleHref(e?.code)}
                            replace
                            scroll={false}
                            onClick={() => handleChangeLanguage(e?.code)}
                        >
                            <Image
                                className='w-[1.75vw] h-[1.125vw] max-lg:w-[2.5vw] max-lg:h-[1.875vw] max-md:w-[6.13vw] max-md:h-[3.73vw] object-cover rounded-[3px]'
                                src={e?.src}
                                alt={e?.title}
                                width={28}
                                height={18}
                            />
                            <span className='title16-600-150 title-tl12-600-150 title-mb14-600-150 whitespace-nowrap -tracking-[0.48px] block'>
                                {e?.title}
                            </span>
                        </Link>
                    </li>
                ))}
        </ul>
    )
}
