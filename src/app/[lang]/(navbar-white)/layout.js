import Footer from '@/components/general/Footer'
import { getDictionary } from '../dictionaries'
import getData from '@/utils/getData'

export default async function RootLayout({ children, params }) {
    const data = await getData('/site-infor')
    const t = await getDictionary(params.lang)

    return (
        <>
            {children}
            <Footer
                lang={params.lang}
                t={t}
                dataInfo={data}
            />
        </>
    )
}
