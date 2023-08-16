'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function NavBarRes({ lang, t, isHome }) {
    return (
        <nav className='relative z-[9999]'>
            <div>
                <Link
                    href={`/${lang !== 'vn' ? lang : ''}`}
                    className='relative w-[10.67vw] h-[10.13vw] block mb-[0.53vw] mt-[2.13vw]'
                >
                    <Image
                        className='object-cover brightness-0 invert'
                        src='/images/logo-no-bg.svg'
                        alt='logo'
                        quality={100}
                        sizes='3.52vw'
                        fill
                    />
                </Link>
                <div>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='white'
                        className='w-[5.33vw] h-[3.6vw]'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                        />
                    </svg>
                </div>
            </div>
        </nav>
    )
}
