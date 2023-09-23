import IndexListProject from '@/components/listProject'
import { getDictionary } from '../../dictionaries'
import getData from '@/utils/getData'

export default async function Page({ params: { lang } }) {
    const t = await getDictionary(lang)
    const data = await getData('/property-category')
    return (
        <IndexListProject
            lang={lang}
            t={t}
            dataSlug={data?.data}
        />
    )
}
