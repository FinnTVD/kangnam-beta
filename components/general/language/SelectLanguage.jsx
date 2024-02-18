'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import useStore from '@/app/[lang]/(store)/store'
import { memo } from 'react'

const arrHref = ['/en', '/kr', '/cn']
const arrLanguage = [
    {
        id: 1,
        title: 'Việt Nam',
        src: '/images/vn.svg',
        code: 'vi',
        languageCode: 'vi_VN',
    },
    {
        id: 2,
        title: 'English',
        src: '/images/english.svg',
        code: 'en',
        languageCode: 'en_US',
    },
    {
        id: 3,
        title: 'Korea',
        src: '/images/korea.svg',
        code: 'kr',
        languageCode: 'ko_KR',
    },
    {
        id: 4,
        title: 'China',
        src: '/images/china.svg',
        code: 'cn',
        languageCode: 'zh_CN',
    },
]
export const slugProjectHref = [
    {
        code: 'vi',
        href: '/du-an',
    },
    {
        code: 'en',
        href: '/projects',
    },
    {
        code: 'kr',
        href: '/분양',
    },
    {
        code: 'cn',
        href: '/项目',
    },
]

const SelectLanguage = ({ className, lang, t }) => {
    const setLanguage = useStore((state) => state.setLanguage)
    const slugDetailProject = useStore((state) => state.slugDetailProject)
    const slugDetailNews = useStore((state) => state.slugDetailNews)
    const categoryNav = useStore((state) => state.categoryNav)
    const pathName = usePathname()

    const handleHref = (lg, lgCode) => {
        if (slugDetailProject) {
            const item = slugDetailProject?.translations?.find((e) => e?.languageCode?.includes(lgCode))
            const lgNew = lg === 'vi' ? '' : lg + '/'
            if (slugDetailProject.hasOwnProperty('propertyCategory')) {
                if (item?.slug) {
                    return (
                        '/' +
                        lgNew +
                        slugDetailProject?.propertyCategory?.translations?.find((e) =>
                            e?.languageCode?.toLowerCase()?.includes(lg),
                        )?.alias +
                        '/' +
                        item?.slug
                    )
                } else {
                    const itemVN = slugDetailProject?.translations?.find((e) => e?.languageCode?.includes('vi_VN'))
                    return (
                        '/' +
                        lgNew +
                        slugDetailProject?.propertyCategory?.translations?.find((e) =>
                            e?.languageCode?.toLowerCase()?.includes(lg),
                        )?.alias +
                        '/' +
                        itemVN?.slug
                    )
                }
            } else {
                if (item?.slug) {
                    return (
                        '/' +
                        lgNew +
                        slugProjectHref?.find((e) => e?.code?.includes(lg))?.href.slice(1) +
                        '/' +
                        item?.slug
                    )
                } else {
                    const itemVN = slugDetailProject?.translations?.find((e) => e?.languageCode?.includes('vi_VN'))
                    return (
                        '/' +
                        lgNew +
                        slugProjectHref?.find((e) => e?.code?.includes(lg))?.href.slice(1) +
                        '/' +
                        itemVN?.slug
                    )
                }
            }
        }
        if (slugDetailNews) {
            const item = slugDetailNews?.translations?.find((e) => e?.languageCode?.includes(lgCode))
            const lgNew = lg === 'vi' ? '' : lg + '/'
            if (item?.slug) {
                return '/' + lgNew + 'news/' + item?.slug
            } else {
                const itemVN = slugDetailNews?.translations?.find((e) => e?.languageCode?.includes('vi_VN'))
                return '/' + lgNew + 'news/' + itemVN?.slug
            }
        }
        if (lg === 'vi') {
            if (decodeURI(pathName)?.includes(t?.Navbar?.listNav[0]?.href))
                return slugProjectHref?.find((e) => e?.code === lg)?.href
            if (categoryNav?.find((e) => e?.translations?.find((i) => i?.alias === decodeURI(pathName).slice(1)))) {
                return categoryNav
                    ?.find((e) => e?.translations?.find((i) => i?.alias === decodeURI(pathName).slice(1)))
                    ?.translations?.find((item) => item?.languageCode?.toLowerCase()?.includes(lg))?.alias
            }

            if (lang === 'vi') {
                return decodeURI(pathName)
            } else if (arrHref.includes(pathName)) {
                return '/'
            } else {
                return decodeURI(pathName).slice(3)
            }
        } else {
            // check projects
            if (decodeURI(pathName)?.includes(t?.Navbar?.listNav[0]?.href))
                return '/' + lg + slugProjectHref?.find((e) => e?.code === lg)?.href
            // check category
            if (categoryNav?.find((e) => e?.translations?.find((i) => i?.alias === decodeURI(pathName).slice(1)))) {
                return (
                    '/' +
                    lg +
                    '/' +
                    categoryNav
                        ?.find((e) => e?.translations?.find((i) => i?.alias === decodeURI(pathName).slice(1)))
                        ?.translations?.find((item) => item?.languageCode?.toLowerCase()?.includes(lg))?.alias
                )
            }
            if (lg === lang) {
                return decodeURI(pathName)
            }
            if (lang === 'vi') {
                return lg + decodeURI(pathName)
            } else {
                return '/' + lg + decodeURI(pathName).slice(3)
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
                            href={handleHref(e?.code, e?.languageCode)}
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
                            <span className='title16-600-150 max-md:title-mb14-600-150 whitespace-nowrap -tracking-[0.48px] block max-lg:title-tl12'>
                                {e?.title}
                            </span>
                        </Link>
                    </li>
                ))}
        </ul>
    )
}
export default memo(SelectLanguage)
