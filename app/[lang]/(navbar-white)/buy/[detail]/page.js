import IndexProjectDetail from '@/components/listProjectDetail'

export default function DetailPage({ params: { lang, detail } }) {
    return (
            <>
            <head>
                
            </head>
                <IndexProjectDetail
                    lang={lang}
                    detail={detail}
                />
            </>
    )
}
