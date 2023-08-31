import { getDictionary } from '@/app/[lang]/dictionaries'
import IndexListProject from '@/components/listProject'

export default async function HirePage({ params: { lang } }) {
    const t = await getDictionary(lang)
    return (
        <IndexListProject
            lang={lang}
            t={t}
        />
    )
}
