import { getDictionary } from '../dictionaries'
import Footer from '@/components/general/Footer'
import FeatureHome from '@/components/home/FeatureHome'
import getData from '@/utils/getData'

export default async function RootLayout({ children, params }) {
    const data = await getData('/site-infor')
    const t = await getDictionary(params.lang)

    return (
        <>
            {children}
            <FeatureHome
                dataInfo={data}
                isOther={true}
                t={t}
            />
            <Footer
                lang={params.lang}
                t={t}
                dataInfo={data}
            />
        </>
    )
}
