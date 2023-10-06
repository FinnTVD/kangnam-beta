import IndexContact from '@/components/contact'
import HeaderV2 from '@/components/general/HeaderV2'
import { getDictionary } from '../../dictionaries'
import getData from '@/utils/getData'
const src = '/images/bg-contact.jpg'
export default async function ContactPage({ params }) {
    const data = await getData('/site-infor')
    const t = await getDictionary(params.lang)

    return (
        <>
            <HeaderV2
                lang={params.lang}
                t={t}
                src={src}
            />
            <IndexContact dataInfo={data} />
        </>
    )
}
