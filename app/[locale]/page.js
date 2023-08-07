import IndexHome from '@/components/home'
import Link from 'next-intl/link'

export default async function Home() {
    return (
        <>
            <span className='sub-title'>Home Page</span>
            <Link
                className='text-nu'
                href='/'
                locale='vn'
            >
                VietNam
            </Link>{' '}
            |{' '}
            <Link
                className='text-nu'
                href='/'
                locale='en'
            >
                English
            </Link>
            <IndexHome />
        </>
    )
}
