import Footer from '@/components/general/Footer'
import { getDictionary } from '../dictionaries'
import BoxHeader from '@/components/home/BoxHeader'
import getData from '@/utils/getData'

export default async function RootLayout({ children, params }) {
    console.log('🚀 ~ file: layout.js:7 ~ RootLayout ~ params:', params)
    const data = await getData('/site-infor')
    const t = await getDictionary(params.lang)
    return (
        <>
            <BoxHeader
                lang={params.lang}
                t={t}
                dataInfo={data}
            />
            {children}
            <Footer
                lang={params.lang}
                t={t}
                dataInfo={data}
            />
        </>
    )
}
