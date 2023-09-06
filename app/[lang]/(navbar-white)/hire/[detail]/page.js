import IndexProjectDetail from '@/components/listProjectDetail'

export default function DetailPage({ params: { lang, detail } }) {
    return (
        <IndexProjectDetail
            lang={lang}
            detail={detail}
        />
    )
}
