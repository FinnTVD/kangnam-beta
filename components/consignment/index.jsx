import ProjectProminent from '../home/ProjectProminent'
import SlideForm from './SlideForm'

export default function ConsignmentIndex({t}) {
    return (
        <>
            <main>
                <SlideForm t={t} />
                <ProjectProminent />
            </main>
        </>
    )
}
