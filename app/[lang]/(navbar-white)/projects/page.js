import IndexListProject from '@/components/listProject'
import { getDictionary } from '../../dictionaries'

export default async function ListProjectPage({ params: { lang } }) {
    const t = await getDictionary(lang)
    return (
        <IndexListProject
            lang={lang}
            t={t}
        />
    )
}
