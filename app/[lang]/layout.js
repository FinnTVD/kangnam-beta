import '/public/css/vietmap-gl.css'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'react-loading-skeleton/dist/skeleton.css'
import 'react-toastify/dist/ReactToastify.css'
import 'aos/dist/aos.css'

import './globals.css'

import localFont from 'next/font/local'
import Script from 'next/script'
import AosInit from '@/components/general/AosInit'

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

// export const metadata = {
//     viewport: 'width=device-width, initial-scale=1, maximum-scale=1', // <-- now here
// }

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    // Also supported by less commonly used
    // interactiveWidget: 'resizes-visual',
}

export default async function RootLayout({ children, params }) {
    return (
        <html lang={params.lang}>
            <head>
                <meta
                    name='google-site-verification'
                    content='mLV7YCxrelL4Fm6eT69OV9RzCJxKi5Jfm-hsA6hrTXE'
                />
                <meta
                    name='DC.title'
                    content='Công Ty Tư Vấn Đầu Tư BDS Kang Nam (하노이강남부동산)'
                />
                <meta
                    name='geo.region'
                    content='VN-HN'
                />
                <meta
                    name='geo.placename'
                    content='Ha Noi'
                />
                <meta
                    name='geo.position'
                    content='21.015453152589238;105.77731782503285'
                />
                <meta
                    name='ICBM'
                    content='21.015453152589238, 105.77731782503285'
                />
            </head>
            <body
                suppressHydrationWarning={true}
                className={avertaStdCY.className}
            >
                <AosInit />
                {children}
                <Script
                    strategy='lazyOnload'
                    src={`https://www.googletagmanager.com/gtag/js?id=G-YQHLC4FNTP`}
                ></Script>
                <Script strategy='lazyOnload'>
                    {`window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());

							gtag('config', 'G-YQHLC4FNTP');`}
                </Script>
                <Script
                    async
                    defer
                    crossOrigin='anonymous'
                    src='https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v17.0&appId=969348797395616&autoLogAppEvents=1'
                    nonce='OlcKjsAi'
                    strategy='lazyOnload'
                ></Script>
            </body>
        </html>
    )
}
