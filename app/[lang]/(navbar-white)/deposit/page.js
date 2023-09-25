import ConsignmentIndex from '@/components/consignment'
import { getDictionary } from '../../dictionaries'
import NavBarV2 from '@/components/general/NavBarV2'

export default async function DepositPage({ params: { lang } }) {
    const t = await getDictionary(lang)
    return (
        <>
            <header className='fixed top-0 left-0 w-screen bg-white h-fit shadow-boxFilter z-[999999999999]'>
                <NavBarV2
                    lang={lang}
                    t={t}
                />
            </header>
            <ConsignmentIndex
                t={t}
                lang={lang}
            />
        </>
    )
}
