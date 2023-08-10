import Image from 'next/image'
import Link from 'next/link'

export default function WeAre() {
    return (
        <>
            <section
                id='weAre'
                className='relative w-full h-screen bg-den-2'
            >
                <Image
                    className='z-0 object-cover'
                    src='/bg-we.png'
                    alt='bg-we'
                    sizes='100vw'
                    quality={100}
                    fill
                />
                <div className='relative z-10 flex justify-between h-full'>
                    <div className='flex items-center pl-[7.5vw]'>
                        <div className='w-[40.2vw] h-fit'>
                            <span className='sub-title'>Câu chuyện thương hiệu</span>
                            <h2 className='text-vang-nhe mt-[0.12vw] mb-[1vw] -tracking-[1.12px] title56'>
                                Chúng tôi là ai
                            </h2>
                            <p className='text-vang-nhe title16-400-150 w-[38vw]'>
                                Công ty Cổ phần bất động sản Kangnam là đơn vị môi giới bất động sản chuyên nghiệp,
                                chuyên phân phối đa dạng các phân khúc bất động sản trải dài khắp miền Bắc và miền Trung
                                với đội ngũ chuyên viên môi giới giày dạn kinh nghiệm được đào tạo bài bản
                            </p>
                            <ul className='flex my-[2.5vw]'>
                                <li className='flex flex-col items-center gap-y-[1vw]'>
                                    <Image
                                        src='/check.svg'
                                        alt='check'
                                        width={100}
                                        height={100}
                                        quality={100}
                                        className='w-[4.375vw] h-[4.375vw] object-cover'
                                    />
                                    <span className='text-vang-nhe title18-600-130'>Cam kết xác thực</span>
                                </li>
                                <li className='flex flex-col items-center gap-y-[1vw] ml-[3.75vw] mr-[3.12vw]'>
                                    <Image
                                        src='/pig.svg'
                                        alt='pig'
                                        width={100}
                                        height={100}
                                        quality={100}
                                        className='w-[4.375vw] h-[4.375vw] object-cover'
                                    />
                                    <span className='text-vang-nhe title18-600-130'>Trọn hỗ trợ, chi phí thấp</span>
                                </li>
                                <li className='flex flex-col items-center gap-y-[1vw]'>
                                    <Image
                                        src='/watch.svg'
                                        alt='watch'
                                        width={100}
                                        height={100}
                                        quality={100}
                                        className='w-[4.375vw] h-[4.375vw] object-cover'
                                    />
                                    <span className='text-vang-nhe title18-600-130'>Thủ tục nhanh chóng</span>
                                </li>
                            </ul>
                            <div className='flex gap-x-[1.5vw]'>
                                <Link
                                    href='/'
                                    className='rounded-[6.25vw] py-[1vw] px-[2.5vw] bg-transparent border border-solid border-vang-nhe title16-400-150 hover:border-logo hover:bg-logo'
                                >
                                    Xem dự án
                                </Link>
                                <Link
                                    href='/'
                                    className='group relative rounded-[6.25vw] text-den-2 py-[1vw] px-[2.5vw] bg-vang-nhe title16-400-150 hover:text-logo overflow-hidden'
                                >
                                    Về chúng tôi
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='28'
                                        height='36'
                                        viewBox='0 0 28 36'
                                        fill='none'
                                        className='absolute transition-all ease-linear duration-200 -bottom-[20%] opacity-0 left-0 w-[3vw] h-[3vw] group-hover:opacity-50'
                                    >
                                        <path
                                            d='M22.9201 14.1638V9.30395L18.866 6.677H18.9378V3.19984L14.0003 0L9.06277 3.19984V6.677H9.13459L5.08055 9.30395V14.1638L0 17.4559V35.9983L7.47348 35.9994V35.2603V34.5211V26.3498L9.91903 27.9346V35.9994H12.6983V13.5459L9.91903 15.3477V26.122L7.62331 24.634L7.47348 24.5372V16.932L4.69422 18.7338V24.5503L5.99253 25.3914L4.69422 25.9939V34.5217H1.62273V18.2184L6.68966 14.9348H6.70328V14.9257L13.9997 10.1974L21.2961 14.9257V14.9348H21.3097L26.3766 18.2184V34.5211H23.3052V25.9939L22.0069 25.3914L23.3052 24.5503V18.7338L20.5259 16.932V24.5372L20.3761 24.634L18.0804 26.122V15.3477L15.3011 13.5459V36H18.0804V27.9352L20.5259 26.3504V34.5217V35.9994L28 35.9983V17.4559L22.9194 14.1632L22.9201 14.1638ZM10.6861 3.96178L14.0003 1.81432L17.3145 3.96178V5.67189L14.0003 3.52386L10.6861 5.67189V3.96178ZM14.0003 8.38369L6.7039 13.112V10.0659L14.0003 5.33762L21.2967 10.0659V13.112L14.0003 8.38369Z'
                                            fill='#D6A279'
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-end'>
                        <div className='h-[77.5vh] w-[48.1875vw] relative z-10'>
                            <Image
                                src='/house.png'
                                alt='house'
                                className='object-fill z-[2]'
                                sizes='48.1875vw'
                                quality={100}
                                fill
                            />
                            <Image
                                src='/circle-house.png'
                                alt='circle'
                                className='object-cover w-[35.5vw] h-[35.5vw] absolute -top-[3.81vw] left-[2.69vw] z-[1]'
                                width={600}
                                height={600}
                                quality={100}
                            />
                            <Image
                                src='/people.png'
                                alt='people'
                                className='object-cover w-[33.875vw] h-[38.5625vw] absolute bottom-0 left-[5.68vw] z-[3]'
                                width={600}
                                height={600}
                                quality={100}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Image
                className='object-cover z-[3] !h-[200vh]'
                src='/linear.png'
                alt='linear'
                sizes='100vw'
                fill
            />
        </>
    )
}
