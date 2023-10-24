import getData from '@/utils/getData'
import Header from '../general/Header'
export default async function BoxHeader({ lang, t, dataInfo }) {
    const data = await getData('/home-page')
    return (
        <>
            <Header
                lang={lang}
                t={t}
                data={data}
                isHome={true}
                dataInfo={dataInfo}
            >
                <div className='absolute z-[4] bottom-0 left-1/2 opacity-20 -translate-x-1/2 w-[72.625vw] h-[2px] bg-gradient-line-header'></div>
            </Header>
        </>
    )
}
