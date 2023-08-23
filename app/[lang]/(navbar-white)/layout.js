import NavBarV2 from '@/components/general/NavBarV2'
import Footer from '@/components/general/Footer'
import { getDictionary } from '../dictionaries'

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
                <header className='fixed top-0 left-0 w-screen bg-white h-fit shadow-boxFilter z-[999999999999]'>
                    <NavBarV2
                        lang={params.lang}
                        t={t}
                    />
                </header>
                {children}
                <Footer
                    lang={params.lang}
                    t={t}
                />
            </body>
        </html>
    )
}
