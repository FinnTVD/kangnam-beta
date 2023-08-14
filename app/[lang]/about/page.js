import { getData } from '@/utils/getData'

export default async function page() {
    const data =await getData('/posts')
    if (!data) return <div className='text-2xl text-den'>loading...</div>
    return (
        <div className='text-den'>
            <h1>about</h1>
            <div>{JSON.stringify(data)}</div>
        </div>
    )
}
