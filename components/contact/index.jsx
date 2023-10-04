import FormContact from './FormContact'
import MapLocation from './MapLocation'

export default function IndexContact({dataInfo}) {
    return (
        <>
            <main>
                <FormContact dataInfo={dataInfo}/>
                <MapLocation />
            </main>
        </>
    )
}
