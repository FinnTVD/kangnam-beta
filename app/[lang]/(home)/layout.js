import Footer from '@/components/general/Footer'
import { getDictionary } from '../dictionaries'
import BoxHeader from '@/components/home/BoxHeader'
import getData from '@/utils/getData'

export async function generateMetadata({params: {lang}}){
    const t = await getDictionary(lang)
    return{
        title: t?.metaData?.homepage?.title,
        description: t?.metaData?.homepage?.description
    }
}

export default async function RootLayout({ children, params }) {
    const data = await getData('/site-infor')
    const t = await getDictionary(params.lang)
    return (
        <>
            <BoxHeader
                lang={params.lang}
                t={t}
                dataInfo={data}
            />
            {children}
            <Footer
                lang={params.lang}
                t={t}
                dataInfo={data}
            />
        </>
    )
}
