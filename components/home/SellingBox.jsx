import Hiring from './Hiring'
import SellingRes from './SellingRes'

export default function SellingBox({ lang, t, dataSelling, dataHiring }) {
    if (dataHiring === undefined || dataSelling === undefined) return <SellingRes.Skeleton />
    if (dataHiring === null && !isLoadingHiring) return null
    if (dataSelling === null && !isLoadingSelling) return null

    return (
        <>
            <SellingRes
                lang={lang}
                t={t}
                data={dataSelling}
            />
            <Hiring
                lang={lang}
                t={t}
                data={dataHiring}
            />
        </>
    )
}
