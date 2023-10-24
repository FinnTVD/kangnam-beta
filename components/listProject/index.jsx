import ListProjectV2 from './ListProjectV2'

export default function IndexListProject({ lang, t, dataSlug }) {
    return (
        <main>
            <ListProjectV2
                lang={lang}
                t={t}
                dataSlug={dataSlug}
            />
        </main>
    )
}
