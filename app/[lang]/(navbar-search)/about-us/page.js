import IndexAboutUs from '@/components/aboutUs'
import { getDictionary } from '../../dictionaries'


export default async function News({params: {lang}}) {
    const t = await getDictionary(lang)

    return <IndexAboutUs t={t} lang={lang}/>
}
