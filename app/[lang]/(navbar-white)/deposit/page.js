import ConsignmentIndex from '@/components/consignment'
import { getDictionary } from '../../dictionaries'
import NavBarV2 from '@/components/general/NavBarV2'
import getData from '@/utils/getData'
import FeatureHome from '@/components/home/FeatureHome'

export default async function DepositPage({ params: { lang } }) {
    const t = await getDictionary(lang)
    const data = await getData('/site-infor')

    return (
        <>
            <header className='fixed top-0 left-0 w-screen bg-white h-fit shadow-boxFilter z-[999999999999]'>
                <NavBarV2
                    lang={lang}
                    t={t}
                />
                <FeatureHome dataInfo={data} />
            </header>
            <ConsignmentIndex
                t={t}
                lang={lang}
            />
        </>
    )
}
