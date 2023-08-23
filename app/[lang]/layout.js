import 'swiper/css'
import './globals.css'

import localFont from 'next/font/local'
import Footer from '@/components/general/Footer'
import HeaderV2 from '@/components/general/HeaderV2'
import Script from 'next/script'
import { getDictionary } from './dictionaries'

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
export async function generateStaticParams() {
    return [{ lang: 'vn' }, { lang: 'en' }, { lang: 'kr' }, { lang: 'ch' }]
}

export default async function RootLayout({ children, params }) {
    const t = await getDictionary(params.lang)

    return (
        <html lang={params.lang}>
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
                <HeaderV2
                    lang={params.lang}
                    t={t}
                />
                {children}
                <Footer
                    lang={params.lang}
                    t={t}
                />
                <Script
                    async
                    defer
                    crossorigin='anonymous'
                    src='https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v17.0&appId=969348797395616&autoLogAppEvents=1'
                    nonce='OlcKjsAi'
                    strategy='afterInteractive'
                ></Script>
            </body>
        </html>
    )
}
