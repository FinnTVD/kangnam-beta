import getData from '@/utils/getData'
import { getDictionary } from '../dictionaries'
import Footer from '@/components/general/Footer'
import FeatureHome from '@/components/home/FeatureHome'

export const metadata = {
    title: 'Danh sách dự án',
    description: 'KangNam by OkHub',
}

export default async function RootLayout({ children, params }) {
    const data = await getData('/site-infor')
    const t = await getDictionary(params.lang)

    return (
        <>
            {children}
            <FeatureHome
                dataInfo={data}
                isOther={true}
            />
            <Footer
                lang={params.lang}
                t={t}
                dataInfo={data}
            />
        </>
    )
}
