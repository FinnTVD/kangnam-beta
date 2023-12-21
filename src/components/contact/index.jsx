import FormContact from './FormContact'
import MapLocation from './MapLocation'

export default function IndexContact({dataInfo, t}) {
    return (
        <>
            <main>
                <FormContact dataInfo={dataInfo} t={t}/>
                <MapLocation />
            </main>
        </>
    )
}
