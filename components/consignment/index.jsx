import { Suspense } from 'react'
import NavBarV2 from '../general/NavBarV2'
import WrapperForm from './WrapperForm'
import { ToastContainer } from 'react-toastify'

export default function ConsignmentIndex({ t, lang }) {
    return (
        <>
            <header className='fixed top-0 left-0 w-screen bg-white h-fit shadow-boxFilter z-[999999999999]'>
                <Suspense fallback={<div>Loading ...</div>}>
                    <NavBarV2
                        lang={lang}
                        t={t}
                    />
                </Suspense>
            </header>
            <main className='overflow-hidden h-fit'>
                <WrapperForm
                    t={t}
                    lang={lang}
                />
                <ToastContainer style={{ zIndex: '999999999999999' }} />
            </main>
        </>
    )
}
