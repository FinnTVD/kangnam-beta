import Image from 'next/image'
import Deposit from './Deposit'
import ProjectProminent from './ProjectProminent'
import Prominent from './Prominent'
import Partner from './Partner'
import WeAre from './WeAre'

import { ToastContainer } from 'react-toastify'

import SellingBox from './SellingBox'
import bgSky from '../../../public/images/bg-sky.png'
import BoxMyProjectV2 from './BoxMyProjectV2'
import BoxLatestNews from './BoxLatestNews'

export default function IndexHome({ lang, t, dataHomePage, params, searchParams }) {
    return (
        <main>
            <WeAre
                lang={lang}
                t={t}
            />
            <BoxMyProjectV2
                params={params}
                searchParams={searchParams}
                lang={lang}
                t={t}
            />

            <div className='lg:hidden'>
                <SellingBox
                    t={t}
                    lang={lang}
                    searchParams={searchParams}
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
            <BoxLatestNews
                t={t}
                lang={lang}
            />
            <ToastContainer style={{ zIndex: '999999999999999' }} />
        </main>
    )
}
