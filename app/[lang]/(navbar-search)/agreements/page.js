import IndexAgreements from '@/components/agreements'
import NavBarV2 from '@/components/general/NavBarV2'
import { getDictionary } from '../../dictionaries'
import getData from '@/utils/getData'
import FeatureHome from '@/components/home/FeatureHome'

export default async function Agreements({ params }) {
    const t = await getDictionary(params.lang)
    const data = await getData('/site-infor')

    return (
        <>
            <header className='fixed top-0 left-0 w-screen bg-white h-fit shadow-boxFilter z-[999999999999]'>
                <NavBarV2
                    lang={params.lang}
                    t={t}
                />
                <FeatureHome dataInfo={data} />
            </header>
            <IndexAgreements lang={params.lang}></IndexAgreements>
        </>
    )
}
