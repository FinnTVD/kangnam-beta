import IndexAgreement from '@/components/agreement'
import HeaderV2 from '@/components/general/HeaderV2'
import { getDictionary } from '../../dictionaries'

export default async function Agreement({ params }) {
    const t = await getDictionary(params.lang)

    return (
        <>
            <HeaderV2
                lang={params.lang}
                t={t}
                src={'/images/bg-agreement.jpg'}
            />
            <IndexAgreement />
        </>
    )
}
