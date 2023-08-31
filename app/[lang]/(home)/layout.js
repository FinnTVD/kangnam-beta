import Footer from '@/components/general/Footer'
import Header from '@/components/general/Header'
import { getDictionary } from '../dictionaries'

export const metadata = {
    title: 'KangNam',
    description: 'KangNam by OkHub',
}
export async function generateStaticParams() {
    return [{ lang: 'vi' }, { lang: 'en' }, { lang: 'kr' }, { lang: 'ch' }]
}

export default async function RootLayout({ children, params }) {
    const t = await getDictionary(params.lang)

    return (
        <html lang={params.lang}>
            <body
                suppressHydrationWarning={true}
                className={'__className_65281d'}
            >
                <Header
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
