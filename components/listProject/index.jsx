import NavBarV2 from '../general/NavBarV2'
import ListProject from './ListProject'

export default function IndexListProject({lang}) {
    return (
        <>
            <header className='fixed top-0 left-0 w-screen bg-white h-fit shadow-boxFilter z-[999999999999]'>
                <NavBarV2 lang={lang}/>
            </header>
            <main>
                <ListProject />
            </main>
        </>
    )
}
