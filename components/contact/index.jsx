import RelatedNews from '../blog/RelatedNews'
import FormContact from './FormContact'
import MapLocation from './MapLocation'

export default function IndexContact() {
    return (
        <>
            <main>
                <FormContact />
                <MapLocation />
                <RelatedNews />
                <div>test</div>
            </main>
        </>
    )
}
