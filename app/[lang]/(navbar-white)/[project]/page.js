import IndexListProject from '@/components/listProject'
import { getDictionary } from '../../dictionaries'
import getData from '@/utils/getData'
import { ToastContainer } from 'react-toastify'
import { postTypeIdAgreement } from '@/utils'
import HeaderV2 from '@/components/general/HeaderV2'
import IndexAgreement from '@/components/agreement'
import NavBarV2 from '@/components/general/NavBarV2'
import NotFound from '../../not-found'

export async function generateMetadata( { params: {lang}}){
    const t = await getDictionary(lang)
    return{
        title: t?.metaData?.project?.title,
        description: t?.metaData?.project?.description
    }
}
export default async function Page({ params: { lang, project } }) {
    const t = await getDictionary(lang)
    const data = await getData('/property-category')
    // const data1 = await getData(`/post?page=1&take=12&postTypeIds=${postTypeIdAgreement}`)
    // if (data1) {
    //     const post = data1?.data?.find((e) => e?.translations?.find((i) => i?.slug === decodeURIComponent(project)))
    //     const agreementDetail = post?.translations?.find((e) =>
    //         e?.languageCode?.toLowerCase()?.includes(lang === 'ch' ? 'cn' : lang),
    //     )
    //     if (post) {
    //         return (
    //             <>
    //                 <HeaderV2
    //                     lang={lang}
    //                     t={t}
    //                     post={post}
    //                     newsDetail={agreementDetail}
    //                     breadcrumb={agreementDetail?.title}
    //                 />
    //                 {agreementDetail && (
    //                     <IndexAgreement
    //                         agreementDetail={agreementDetail}
    //                         post={post}
    //                         lang={lang}
    //                     />
    //                 )}
    //             </>
    //         )
    //     }
    // }
    return (
        <>
            <header className='fixed top-0 left-0 w-screen bg-white h-fit shadow-boxFilter z-[999999999999]'>
                <NavBarV2
                    lang={lang}
                    t={t}
                />
            </header>
            {!data || data?.statusCode === 404 ? (
                <NotFound />
            ) : (
                <IndexListProject
                    lang={lang}
                    t={t}
                    dataSlug={data?.data}
                />
            )}
            <ToastContainer style={{ zIndex: '999999999999999' }} />
        </>
    )
}
