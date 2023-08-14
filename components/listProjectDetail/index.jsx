import NavBarV2 from '../general/NavBarV2'
import RelatedProject from './RelatedProject'

export default function IndexProjectDetail({ lang }) {
    return (
        <>
            <header className='fixed top-0 left-0 w-screen bg-white h-fit shadow-boxFilter z-[999999999999]'>
                <NavBarV2 lang={lang} />
            </header>  
            <main>
                <section className='mt-[7.57vw]'>
                    <h1 className='text-center text-den title60'>Chi tiet du an</h1>
                </section>
                <RelatedProject />
            </main>
        </>
    )
}
