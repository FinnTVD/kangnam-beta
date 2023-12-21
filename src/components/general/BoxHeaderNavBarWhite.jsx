import NavBarV2 from './NavBarV2'

export default function BoxHeaderNavBarWhite({ lang, t }) {
    return (
        <header className='fixed top-0 left-0 w-screen bg-white h-fit shadow-boxFilter z-[999999999999]'>
            <NavBarV2
                lang={lang}
                t={t}
            />
        </header>
    )
}
