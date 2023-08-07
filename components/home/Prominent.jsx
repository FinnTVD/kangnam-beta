import Image from 'next/image'
import Button from '../general/Button'

export default function Prominent() {
    return (
        <section className='relative flex items-end h-screen'>
            <Image
                className='z-0 object-cover'
                src='/bg-prominent.jpg'
                quality={100}
                sizes='100vw'
                fill
            />
            <div className='absolute bottom-0 left-0 w-full h-[76vh] bg-gradient-slide z-[1]'></div>
            <div className='relative z-10 px-120 flex flex-col gap-y-[4.25vw] items-center w-full mb-[3.19vw]'>
                <div className='flex flex-col items-center'>
                    <h2 className='title60'>Nổi bật theo khu vực</h2>
                    <span className='mt-[0.75vw] mb-[1.5vw] w-[21.5vw] text-24pc font-normal leading-[1.3] block text-center'>
                        Căn hộ Vinhomes Grand Park hướng Bắc
                    </span>
                    <Button
                        href='/'
                        className='text-white border-white'
                        stroke='white'
                    >
                        Chi tiết dự án
                    </Button>
                </div>
                <ul className='flex gap-x-[1.5vw] w-full'>
                    <li className='flex-1 border-t border-solid border-white02 pt-[0.5vw]'>
                        01. Khu vực Bắc Từ Liêm, Hà Nội
                    </li>
                    <li className='flex-1 border-t border-solid border-white02 pt-[0.5vw]'>
                        02. Khu vực Thanh Xuân, Hà Nội
                    </li>
                    <li className='flex-1 border-t border-solid border-white02 pt-[0.5vw]'>
                        03. Khu vực Hà Đông, Hà Nội{' '}
                    </li>
                    <li className='flex-1 border-t border-solid border-white02 pt-[0.5vw]'>
                        04. Khu vực Đống Đa, Hà Nội{' '}
                    </li>
                </ul>
            </div>
        </section>
    )
}
