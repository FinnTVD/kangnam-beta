import Footer from '@/components/general/Footer'
import { getDictionary } from '../dictionaries'
import BoxHeader from '@/components/home/BoxHeader'

export const metadata = {
    title: 'KangNam',
    description: 'KangNam by OkHub',
}

export default async function RootLayout({ children, params }) {
    const t = await getDictionary(params.lang)

    return (
        <>
            <BoxHeader
                lang={params.lang}
                t={t}
            />
            {children}
            <Footer
                lang={params.lang}
                t={t}
            />
        </>
    )
}
