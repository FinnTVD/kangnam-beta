'use client'
import Image from 'next/image'
import Link from 'next/link'
import BoxLanguage from './language/BoxLanguage'
import SearchGlobal from '../home/SearchGlobal'
import MegaMenu from './MegaMenu'

const objClass = {
    classContainer:
        'w-[23.125vw] py-[0.87vw] px-[1.75vw] max-md:w-[68.267vw] max-md:py-[3.06vw] max-md:px-[5.07vw] bg-white rounded-[10vw] flex justify-between items-center shadow-input border border-solid border-logo',
    classLine:
        'border-l border-solid border-den opacity-40 h-[1.0625vw] mx-[0.63vw] max-md:h-[2.67vw] max-md:mx-[3.2vw]',
    classForm: 'flex-1 flex items-center gap-x-[0.5vw] relative',
    isIcon: false,
    iconSmall: true,
    classInput:
        'outline-none text-den title16-400-130 mr-[1.5vw] max-md:mr-0 max-md:title-mb12-400-130 max-md:w-[29vw] max-lg:title-tl16',
    classList:
        'w-[36vw] absolute bottom-[-0.5vw] left-0 translate-y-full z-[1000] bg-white text-black px-[1.5vw] py-[1vw] rounded-[0.5vw] shadow-input',
}

export default function NavBar({ isHome, lang, t }) {
    return (
        <nav
            className={`${
                isHome ? 'px-120' : 'px-[3.75vw]'
            } absolute top-0 left-0 w-full z-40 py-[1.03vw] max-lg:py-[1.5vw] h-fit border-b border-solid border-white04 max-lg:hidden`}
        >
            <div className={`${isHome ? 'gap-x-[1.87vw]' : 'gap-x-[1.5vw]'} flex items-center justify-end w-full`}>
                <Link
                    href={`/${lang !== 'vi' ? lang : ''}`}
                    className='relative w-[3.52vw] brightness-0 invert mr-auto h-[4.5vw] block max-md:w-[8.267vw] max-md:h-[11.467vw] max-lg:w-[6vw] max-lg:h-[8vw]'
                >
                    <Image
                        className='object-cover select-none max-lg:object-contain'
                        src='/images/logo-no-bg.svg'
                        alt='logo'
                        sizes='3.52vw'
                        priority
                        fill
                    />
                </Link>
                <div className='justify-start flex-1 py-[0.5vw] hidden'>
                    <Link
                        href={`/${lang !== 'vi' ? lang : ''}`}
                        className='relative w-[3.5vw] h-[4.75vw] block'
                    >
                        <Image
                            className='object-contain select-none'
                            src='/images/logo-no-bg.svg'
                            alt='logo'
                            priority
                            sizes='3.5vw'
                            fill
                        />
                    </Link>
                </div>

                {!isHome && (
                    <SearchGlobal
                        lang={lang}
                        classContainer={objClass.classContainer}
                        classLine={objClass.classLine}
                        classForm={objClass.classForm}
                        isIcon={objClass.isIcon}
                        iconSmall={objClass.iconSmall}
                        classInput={objClass.classInput}
                        isHome={false}
                        classList={objClass.classList}
                    />
                )}

                <MegaMenu
                    isHome={isHome}
                    lang={lang}
                    t={t}
                />
                <div className='flex gap-x-[1.5vw] items-center'>
                    <Link
                        href={`${lang !== 'vi' ? '/' + lang + '/deposit' : '/deposit'}`}
                        className='bg-gradient-prominent shadow-prominent h-fit w-fit rounded-[6.25vw] py-[1vw] max-lg:py-[1.5vw] max-lg:px-[2.5vw] px-[2vw] text-d-9-d-9-d-9 title16-700-150 title-tl12-600-130'
                    >
                        {t?.Navbar?.button}
                    </Link>
                    <BoxLanguage
                        lang={lang}
                        t={t}
                    />
                </div>
            </div>
        </nav>
    )
}
