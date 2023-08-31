'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import useStore from '@/app/[lang]/(store)/store'

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
    const setLanguage = useStore((state) => state.setLanguage)
    const slugDetailProject = useStore((state) => state.slugDetailProject)
    const pathName = usePathname()

    const handleHref = (lg) => {
        const path = pathName.split('/')
        const pathNew = path
            ?.slice(lang === 'vi' ? 1 : 2)
            .reduce((accumulator, currentValue) => accumulator + '/' + currentValue, '')
        if (slugDetailProject) {
            const item = slugDetailProject?.translations?.find((e) => e?.languageCode?.includes(lg))
            const lgNew = lg === 'vi' ? '' : lg + '/'
            return '/' + lgNew + slugDetailProject?.propertyCategory?.alias + '/' + item?.slug
        }
        if (lang === 'vi') {
            const lgNew = lg === 'vi' ? '' : '/' + lg
            return lgNew + pathNew
        }
        return '/' + lg === 'vi' ? '' : lg
    }

    const handleChangeLanguage = (code) => {
        setLanguage(code)
    }

    return (
        <ul
            id='box-select-language'
            className={`${className} absolute flex flex-col -bottom-[0.5vw] left-0 translate-y-full bg-white rounded-md w-[8vw] h-fit py-[0.5vw] z-[99999] text-black max-md:w-[27.5vw] max-md:-left-[2.13vw] max-md:py-[1vw] max-md:-bottom-[1vw]`}
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
                                className='w-[1.75vw] h-[1.125vw] max-md:w-[6.13vw] max-md:h-[3.73vw] object-cover rounded-[3px]'
                                src={e?.src}
                                alt={e?.title}
                                width={28}
                                height={18}
                            />
                            <span className='title16-600-150 title-mb14-600-150 whitespace-nowrap -tracking-[0.48px] block'>
                                {e?.title}
                            </span>
                        </Link>
                    </li>
                ))}
        </ul>
    )
}
