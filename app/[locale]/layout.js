import 'swiper/css'
import './globals.css'

import { useLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import localFont from 'next/font/local'
import Footer from '@/components/general/Footer'
import { NextIntlClientProvider } from 'next-intl'

const avertaStdCY = localFont({
    src: [
        {
            path: '../../font/IntelligentLight.otf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../font/IntelligentRegular_3.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../font/IntelligentSemibold_1.otf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../font/IntelligentBold_1.otf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../font/IntelligentExtrabold_1.otf',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../../font/IntelligentBlack_1.otf',
            weight: '900',
            style: 'normal',
        },
    ],
    display: 'swap',
})

export const metadata = {
    title: 'KangNam',
    description: 'KangNam by OkHub',
}

export default async function RootLayout({ children, params }) {
    const locale = useLocale()
    let messages
    try {
        messages = (await import(`../../messages/${locale}.json`)).default
    } catch (error) {
        notFound()
    }

    return (
        <html lang={locale}>
            <head>
                <script src='https://maps.vietmap.vn/sdk/vietmap-gl/1.15.3/vietmap-gl.js'></script>
                <link
                    href='https://maps.vietmap.vn/sdk/vietmap-gl/1.15.3/vietmap-gl.css'
                    rel='stylesheet'
                />
            </head>
            <body
                suppressHydrationWarning={true}
                className={avertaStdCY.className}
            >
                <NextIntlClientProvider
                    locale={locale}
                    messages={messages}
                >
                    {children}
                    <Footer />
                </NextIntlClientProvider>
                {children}
                <Footer></Footer>
            </body>
        </html>
    )
}
