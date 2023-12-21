import getData from '@/utils/getData'
import LatestNews from './LatestNews'
import { postTypeIdAgreement } from '@/utils'

export default async function BoxLatestNews({ t, lang }) {
    const dataPosts = await getData('/post?order=DESC')
    const dataPostNews = dataPosts?.data?.filter((item) => item?.postType?.id !== postTypeIdAgreement).slice(0, 6)

    return (
        <LatestNews
            t={t}
            lang={lang}
            dataPostNews={dataPostNews}
        />
    )
}
