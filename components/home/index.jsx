import Image from 'next/image'
import Deposit from './Deposit'
// import Header from './Header'
import MyProject from './MyProject'
import ProjectProminent from './ProjectProminent'
import Prominent from './Prominent'
import Partner from './Partner'
import LatestNews from './LatestNews'
import WeAre from './WeAre'

export default function IndexHome({ lang, t }) {
    return (
        <>
            <main>
                <WeAre lang={lang} />
                <MyProject lang={lang}/>
                <Deposit />
                <ProjectProminent>
                    <Image
                        src='/images/bg-sky.png'
                        alt='sky'
                        height={800}
                        width={1600}
                        quality={100}
                        className='absolute bottom-0 left-0 object-cover w-full h-[48.625vw] z-0'
                    />
                </ProjectProminent>
                <Prominent />
                <Partner t={t}/>
                <LatestNews t={t}/>
            </main>
        </>
    )
}
