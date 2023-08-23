import HeaderV2 from '@/components/general/HeaderV2'
import { getDictionary } from '../dictionaries'
import Footer from '@/components/general/Footer'

export const metadata = {
    title: 'Danh sách dự án',
    description: 'KangNam by OkHub',
}
export async function generateStaticParams() {
    return [{ lang: 'vn' }, { lang: 'en' }, { lang: 'kr' }, { lang: 'ch' }]
}

export default async function RootLayout({ children, params }) {
    const t = await getDictionary(params.lang)

    return (
        <html lang={params.lang}>
            <body
                suppressHydrationWarning={true}
                className='__className_65281d'
            >
                <HeaderV2
                    lang={params.lang}
                    t={t}
                />
                {children}
                <Footer
                    lang={params.lang}
                    t={t}
                />
            </body>
        </html>
    )
}
