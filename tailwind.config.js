/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-primary': 'linear-gradient(180deg, #2D1C10 0%, #412A1A 47.22%, #665142 100%)',
                'gradient-header1': 'linear-gradient(180deg, rgba(136, 91, 58, 0.60) 0%, rgba(15, 8, 2, 0.60) 61.77%)',
                'gradient-header2':
                    'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 91.01%, rgba(255, 255, 255, 0.80) 100%)',
                'gradient-header':
                    'linear-gradient(180deg, rgba(15, 8, 2, 0.00) 0%, rgba(21, 14, 9, 0.45) 15.10%, rgba(21, 14, 9, 0.53) 18.09%, rgba(21, 14, 9, 0.59) 21.07%, rgba(21, 14, 9, 0.70) 24.72%, rgba(21, 14, 9, 0.80) 28.51%, rgba(26, 20, 16, 0.80) 32.54%, rgba(24, 18, 13, 0.78) 35.21%, rgba(22, 16, 11, 0.75) 37.95%, rgba(17, 9, 3, 0.65) 43.28%, rgba(18, 10, 4, 0.62) 46.50%, rgba(26, 15, 7, 0.56) 54.29%, rgba(56, 36, 21, 0.56) 73.85%, rgba(73, 48, 29, 0.56) 81.64%, rgba(91, 60, 38, 0.56) 90.51%, rgba(139, 93, 60, 0.56) 100%)',
                'gradient-prominent': 'linear-gradient(180deg, #412A1A 0%, #665142 100%)',
                'gradient-line-header':
                    'linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, #FFF 52.55%, rgba(255, 255, 255, 0.00) 100%)',
                'gradient-slide': 'linear-gradient(360deg, rgba(115, 76, 45, 0.67) 0%, rgba(115, 76, 45, 0.00) 88.33%)',
            },
            boxShadow: {
                button: '0px 0px 30px 0px rgba(200, 200, 200, 0.36)',
                filter: ' 0px 0px 31px 0px rgba(0, 0, 0, 0.08)',
                prominent: '0px 0px 12px 0px rgba(230, 217, 207, 0.50)',
                currency: '0px 2px 40px 0px rgba(0, 0, 0, 0.08)',
                feature: '0px 2px 40px rgba(65, 42, 26, 0.10)',
                input: '6px 0px 39.76811599731445px 0px rgba(0, 0, 0, 0.05)',
                submit: '0px 0px 30px 0px rgba(206, 126, 64, 0.36)',
            },
            colors: {
                'vang-nhe': '#fcf8f5',
                den: '#444',
                logo: '#d6a279',
                nu: '#412A1A',
                'den-2': '#57534E',
                maunhat: '#FBF7F2',
                'nau-nhat': '#926B4F',
                white02: 'rgba(255,255,255,0.2)',
                white04: 'rgba(255,255,255,0.4)',
                white07: 'rgba(255,255,255,0.7)',
                white09: 'rgba(255, 255, 255, 0.9)',
                'd-9-d-9-d-9': '#E5C5AB',
                suggest: 'rgba(41, 41, 41, 0.50)',
                category: 'rgba(163, 163, 163, 0.26)',
                duan: 'rgba(146, 107, 79, 0.16)',
                line: 'rgba(206, 126, 64, 0.20)',
            },
            fontSize: {
                '60pc': '3.75vw',
                '56pc': '3.5vw',
                '45pc': '2.8125vw',
                '32pc': '2vw',
                '24pc': '1.5vw',
                '20pc': '1.25vw',
                '18pc': '1.125vw',
                '16pc': '1vw',
                '15pc': '0.9375vw',
                '14pc': '0.875vw',
                '13pc': '0.8125vw',
                '12pc': '0.75vw',
                '10pc': '0.625vw',
            },
            fontFamily: {
                avertaStdCY: ['__avertaStdCY_65281d', '__avertaStdCY_Fallback_65281d'],
            },
        },
    },
    plugins: [],
}
