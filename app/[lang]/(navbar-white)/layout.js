import Footer from '@/components/general/Footer'
import { getDictionary } from '../dictionaries'

export const metadata = {
    title: 'Danh sách dự án',
    description: 'KangNam by OkHub',
}

export default async function RootLayout({ children, params }) {
    const t = await getDictionary(params.lang)

    return (
        <>
            {children}
            <Footer
                lang={params.lang}
                t={t}
            />
        </>
    )
}
