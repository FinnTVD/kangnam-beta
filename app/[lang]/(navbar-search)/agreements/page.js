import IndexAgreements from '@/components/agreements'
import NavBarV2 from '@/components/general/NavBarV2'
import { getDictionary } from '../../dictionaries'

export default async function Agreements({ params }) {
    const t = await getDictionary(params.lang)
    
    return(
        <>
            <header className='fixed top-0 left-0 w-screen bg-white h-fit shadow-boxFilter z-[999999999999]'>
                <NavBarV2
                    lang={params.lang}
                    t={t}
                />
            </header>
            <IndexAgreements lang={params.lang}></IndexAgreements>
        </>
    )
}