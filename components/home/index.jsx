import Image from 'next/image'
import Deposit from './Deposit'
import Footer from './Footer'
import Header from './Header'
import MyProject from './MyProject'
import ProjectProminent from './ProjectProminent'
import Prominent from './Prominent'
import Partner from './Partner'
import LatestNews from './LatestNews'

export default function IndexHome() {
    return (
        <>
            <Header />
            <main>
                <MyProject />
                <Deposit />
                <ProjectProminent>
                    <Image
                        src='/bg-sky.png'
                        alt='sky'
                        height={800}
                        width={1600}
                        quality={100}
                        className='absolute bottom-0 left-0 object-cover w-full h-[48.625vw] z-0'
                    />
                </ProjectProminent>
                <Prominent />
                <Partner/>
                <LatestNews/>
                {/* <div className='h-[100vh]'></div> */}
            </main>
            {/* <Footer /> */}
        </>
    )
}
