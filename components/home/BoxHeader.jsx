import getData from '@/utils/getData'
import Header from '../general/Header'
import { headers } from 'next/headers'
import { handleCheckIsHome } from '@/utils'

export default async function BoxHeader({ lang, t }) {
    const data = await getData('/homePage')
    const headersList = headers()
    const activePath = headersList.get('x-invoke-path')
    return (
        <Header
            lang={lang}
            t={t}
            data={data}
            isHome={handleCheckIsHome(activePath)}
        />
    )
}
