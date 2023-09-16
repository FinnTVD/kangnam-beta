'use client'
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
import { ToastContainer } from 'react-toastify'
import 'react-loading-skeleton/dist/skeleton.css'


export default function IndexHome({ lang, t }) {
    return (
        <>
            <main>
                <WeAre lang={lang} />
                <MyProjectV2 lang={lang} />
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
                <ToastContainer style={{ zIndex: '999999999999999' }} />
            </main>
        </>
    )
}
