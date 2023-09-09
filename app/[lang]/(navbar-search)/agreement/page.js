import IndexAgreement from '@/components/agreement'
import HeaderV2 from '@/components/general/HeaderV2'
import { getDictionary } from '../../dictionaries'
const src = '/images/bg-agreement.jpg'
export default async function Agreement({ params }) {
    const t = await getDictionary(params.lang)

    return (
        <>
            <HeaderV2
                lang={params.lang}
                t={t}
                src={src}
            />
            <IndexAgreement />
        </>
    )
}
