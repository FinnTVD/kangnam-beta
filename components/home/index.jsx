import Image from 'next/image'
import Deposit from './Deposit'
import ProjectProminent from './ProjectProminent'
import Prominent from './Prominent'
import Partner from './Partner'
import LatestNews from './LatestNews'
import WeAre from './WeAre'
import SellingRes from './SellingRes'
import Hiring from './Hiring'
import MyProjectV2 from './MyProjectV2'
import MapV2 from './MapV2/MapV2'

export default function IndexHome({ lang, t }) {
    return (
        <>
                    <head>
                <script
                    src="https://maps.vietmap.vn/sdk/vietmap-gl/1.15.3/vietmap-gl.js"
                >
                </script>
                <link
                    href="https://maps.vietmap.vn/sdk/vietmap-gl/1.15.3/vietmap-gl.css"
                    rel="stylesheet"
                />
			</head>
            <main>
                <WeAre lang={lang} />
                <MyProjectV2 lang={lang} >
                    <MapV2/>
                </MyProjectV2>
                <SellingRes lang={lang} />
                <Hiring lang={lang} />
                <div className='w-full max-md:flex max-md:flex-col-reverse'>
                    <Deposit />
                    <ProjectProminent>
                        <Image
                            src='/images/bg-sky.png'
                            alt='sky'
                            height={800}
                            width={1600}
                            className='absolute bottom-0 left-0 object-cover w-full h-[48.625vw] z-0 max-md:hidden'
                        />
                    </ProjectProminent>
                </div>
                <Prominent />
                <Partner t={t} />
                <LatestNews
                    t={t}
                    lang={lang}
                />
            </main>
        </>
    )
}
