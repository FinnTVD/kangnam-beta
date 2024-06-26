import ListProject from './ListProject'
import ListProjectV2 from './ListProjectV2'

export default function IndexListProject({ lang, t, dataSlug, isProject, isHire }) {
    return (
        <main>
            {isProject ? (
                <ListProject
                    lang={lang}
                    t={t}
                    dataSlug={dataSlug}
                />
            ) : (
                <ListProjectV2
                    lang={lang}
                    t={t}
                    dataSlug={dataSlug}
                    isHire={isHire}
                />
            )}
        </main>
    )
}
