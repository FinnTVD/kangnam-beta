import Image from 'next/image'
import Link from 'next/link'
import BoxLanguage from './BoxLanguage'
const listNav = [
    {
        id: 1,
        title: 'Trang chủ',
        href: '/',
    },
    {
        id: 2,
        title: 'Về chúng tôi',
        href: '/gioi-thieu',
    },
    {
        id: 3,
        title: 'Dự án',
        href: '/danh-sach-du-an',
    },
    {
        id: 4,
        title: 'Bán lại',
        href: '/',
    },
    {
        id: 5,
        title: 'Thỏa thuận & Pháp lí',
        href: '/thoa-thuan-va-phap-li',
    },
    {
        id: 6,
        title: 'Tin tức',
        href: '/danh-sach-tin-tuc',
    },
    {
        id: 7,
        title: 'Liên hệ',
        href: '/lien-he',
    },
]
const listNav1 = [
    {
        id: 1,
        title: 'Trang chủ',
        href: '/',
    },
    {
        id: 2,
        title: 'Về chúng tôi',
        href: '/gioi-thieu',
    },
    {
        id: 3,
        title: 'Dự án',
        href: '/danh-sach-du-an',
    },
    {
        id: 4,
        title: 'Bán lại',
        href: '/danh-sach-du-an/ban-lai',
    },
    {
        id: 5,
        title: 'Tin tức',
        href: '/danh-sach-tin-tuc',
    },
    {
        id: 6,
        title: 'Liên hệ',
        href: '/lien-he',
    },
]

export default function NavBar({ isHome = true }) {
    return (
        <nav
            className={`${
                isHome ? 'px-120' : 'px-[3.75vw]'
            } relative z-40 py-[1.03vw] h-fit border-b border-solid border-white04`}
        >
            <div className='flex items-center justify-end w-full gap-x-[2.5vw]'>
                <div
                    className={`${
                        isHome ? 'left-[7.5vw]' : 'left-[3.75vw]'
                    } py-[1.32vw] px-[1.95vw] bg-gradient-primary w-fit h-fit absolute top-0`}
                >
                    <Link
                        href='/'
                        className='relative w-[3.52vw] h-[5.5vw] block'
                    >
                        <Image
                            className='object-cover'
                            src='/logo.png'
                            alt='logo'
                            quality={100}
                            sizes='3.52vw'
                            fill
                        />
                    </Link>
                </div>
                <ul className='flex gap-x-[1.75vw] ml-[9.1875vw]'>
                    {listNav &&
                        listNav.map((e, index) => (
                            <li key={index}>
                                <Link
                                    className='block title16-600-130'
                                    href={e.href}
                                >
                                    {e.title}
                                </Link>
                            </li>
                        ))}
                </ul>
                <div className='flex gap-x-[1.5vw] items-center'>
                    <Link
                        href='/dang-tin'
                        className='bg-gradient-prominent shadow-prominent h-fit w-fit rounded-[6.25vw] py-[1vw] px-[2vw] text-d-9-d-9-d-9 title16-700-150'
                    >
                        {isHome ? 'Kí gửi BĐS' : 'Kí gửi nhà đất'}
                    </Link>
                    <BoxLanguage />
                </div>
            </div>
        </nav>
    )
}
