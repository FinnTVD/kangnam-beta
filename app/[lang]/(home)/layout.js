import Footer from '@/components/general/Footer'
import { getDictionary } from '../dictionaries'
import BoxHeader from '@/components/home/BoxHeader'

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
                <BoxHeader
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
