import IndexHome from '@/components/home'

export default async function Home({ params: { lang } }) {
    return <IndexHome lang={lang} />
}
