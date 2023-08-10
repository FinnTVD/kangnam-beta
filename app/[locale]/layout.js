import 'swiper/css'
import './globals.css'

import { useLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import localFont from 'next/font/local'
import Footer from '@/components/general/Footer'
import Script from 'next/script'
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

export default function RootLayout({ children, params }) {
    const locale = useLocale()

    if (params.locale !== locale) {
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
                <Script async defer crossorigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v17.0" nonce="KrgYDVii"></Script>
            </head>
            <body
                suppressHydrationWarning={true}
                className={avertaStdCY.className}
            >
                {children}
                <Footer></Footer>
            </body>
        </html>
    )
}
