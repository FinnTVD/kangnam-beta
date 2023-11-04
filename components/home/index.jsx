import Image from 'next/image'
import Deposit from './Deposit'
import ProjectProminent from './ProjectProminent'
import Prominent from './Prominent'
import Partner from './Partner'
import LatestNews from './LatestNews'
import WeAre from './WeAre'

import MyProjectV2 from './MyProjectV2'
import { ToastContainer } from 'react-toastify'

import SellingBox from './SellingBox'
import bgSky from '../../public/images/bg-sky.png'

export default function IndexHome({ lang, t, dataPostNews, dataHomePage, dataSelling, dataHiring }) {
    return (
        <main>
            <WeAre
                lang={lang}
                t={t}
            />
            <MyProjectV2
                lang={lang}
                t={t}
            />

            <div className='lg:hidden'>
                <SellingBox
                    t={t}
                    lang={lang}
                    dataSelling={dataSelling}
                    dataHiring={dataHiring}
                />
            </div>
            <div className='w-full max-md:flex max-md:flex-col-reverse'>
                <Deposit
                    lang={lang}
                    t={t}
                />
                <ProjectProminent
                    lang={lang}
                    t={t}
                    dataHomePage={dataHomePage}
                >
                    <Image
                        src={bgSky}
                        alt='background sky kangnam'
                        placeholder='blur'
                        className='absolute bottom-0 left-0 object-cover w-full h-[48.625vw] z-0 max-md:hidden'
                    />
                </ProjectProminent>
            </div>
            <Prominent
                t={t}
                lang={lang}
            />
            <Partner
                t={t}
                lang={lang}
                dataHomePage={dataHomePage}
            />
            <LatestNews
                t={t}
                lang={lang}
                dataPostNews={dataPostNews}
            />
            <ToastContainer style={{ zIndex: '999999999999999' }} />
        </main>
    )
}
