import Link from 'next/link'

export const metadata = {
    title: "Not found",
    description: "Page not found"
}
export default function NotFound() {

    return (
        <div className='text-black'>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href='/'>Return Home</Link>
        </div>
    )
}
