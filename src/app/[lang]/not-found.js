import Link from 'next/link'

export default function NotFound() {
    return (
        <>
            <div className='h-[5.75vw] max-lg:h-[10vw] max-md:h-[18vw]'></div>
            <div className='text-black w-full h-screen flex justify-center items-center'>
                <div>
                    <h2>Not Found</h2>
                    <p>Could not find requested resource</p>
                    <Link href='/'>Return Home</Link>
                </div>
            </div>
        </>
    )
}
