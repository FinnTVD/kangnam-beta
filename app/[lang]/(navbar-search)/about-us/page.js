import IndexAboutUs from '@/components/aboutUs'
import { getDictionary } from '../../dictionaries'
import HeaderV2 from '@/components/general/HeaderV2'

export default async function News({ params: { lang } }) {
    const t = await getDictionary(lang)

    return (
        <>
            <HeaderV2
                lang={lang}
                t={t}
                src={'/images/bg-about-us.jpg'}
            />
            <IndexAboutUs
                t={t}
                lang={lang}
            />
        </>
    )
}
