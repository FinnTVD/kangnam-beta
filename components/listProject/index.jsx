import ListProject from './ListProject'

export default function IndexListProject({ lang, t, dataSlug }) {
    return (
        <main>
            <ListProject
                lang={lang}
                t={t}
                dataSlug={dataSlug}
            />
        </main>
    )
}
