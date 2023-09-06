import { getDictionary } from '@/app/[lang]/dictionaries'
import IndexListProject from '@/components/listProject'

export default async function BuyPage({ params: { lang } }) {
    const t = await getDictionary(lang)
    return (
        <IndexListProject
            lang={lang}
            t={t}
        />
    )
}
