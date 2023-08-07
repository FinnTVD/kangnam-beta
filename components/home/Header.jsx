import Image from 'next/image'
import Link from 'next/link'
import SocialMedia from './SocialMedia'
import BoxCurrency from './BoxCurrency'

const listNav = [
    {
        id: 1,
        title: 'Trang chủ',
        href: '/',
    },
    {
        id: 2,
        title: 'Về KANGNAM',
        href: '/gioi-thieu',
    },
    {
        id: 3,
        title: 'Dự án',
        href: '/danh-sach-du-an',
    },
    {
        id: 4,
        title: 'Kí gửi bất động sản',
        href: '/dang-tin',
    },
    {
        id: 5,
        title: 'Bán lại',
        href: '/',
    },
    {
        id: 6,
        title: 'Thỏa thuận & Pháp lí',
        href: '/thoa-thuan-va-phap-li',
    },
    {
        id: 7,
        title: 'Tin tức',
        href: '/danh-sach-tin-tuc',
    },
]
const arrSuggest = [
    {
        title: 'vinhomes central park',
    },
    {
        title: 'lumiere boulevard',
    },
    {
        title: 'glory heights',
    },
]

export default function Header() {
    return (
        <header className='relative w-screen h-fit'>
            <div className='relative w-full h-screen'>
                <Image
                    className='z-0 object-cover'
                    src='/bg-header.jpg'
                    alt='bg-header'
                    sizes='100vw'
                    quality={100}
                    fill
                />
                <Image
                    className='object-contain z-20 w-[23.4375vw] h-[59.8vh] absolute right-[7.56vw] top-[18vh] mix-blend-color-dodge'
                    src='/big-logo.png'
                    alt='big-logo'
                    width={350}
                    height={550}
                    quality={100}
                />
                <div className='absolute z-[2] bg-gradient-header1 top-0 left-0 w-full h-full'></div>
                {/* linear-white */}
                <div className='absolute z-[1] bg-gradient-header2 top-0 left-0 w-full h-full'></div>
                <nav className='px-120 relative z-10 py-[1.03vw] h-fit border-b border-solid border-white04'>
                    <div className='flex items-center justify-between w-full'>
                        <div className='py-[1.32vw] px-[1.95vw] bg-gradient-primary w-fit h-fit absolute left-[7.5vw] top-0'>
                            <div className='relative w-[3.52vw] h-[5.5vw]'>
                                <Image
                                    className='object-cover'
                                    src='/logo.png'
                                    alt='logo'
                                    quality={100}
                                    sizes='3.52vw'
                                    fill
                                />
                            </div>
                        </div>
                        <ul className='flex gap-x-[1.75vw] ml-[9.1875vw]'>
                            {listNav &&
                                listNav.map((e, index) => (
                                    <li key={index}>
                                        <Link
                                            className='block title16-600-130'
                                            href={e.href}
                                        >
                                            {e.title}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                        <div className='flex gap-x-[1.5vw] items-center'>
                            <Link
                                href='/dang-tin'
                                className='bg-gradient-prominent shadow-prominent h-fit w-fit rounded-[6.25vw] py-[1vw] px-[2vw] text-d-9-d-9-d-9 title16-700-150'
                            >
                                Kí gửi nhà đất
                            </Link>
                            <div className='flex flex-col gap-y-[0.56vw]'>
                                <span className='text-white -tracking-[0.6px] title12-600-150'>Chọn ngôn ngữ</span>
                                <div className='flex items-center gap-x-[0.5vw]'>
                                    <Image
                                        className='w-[1.75vw] h-[1.125vw] object-cover'
                                        src='/korea.jpg'
                                        alt='korea'
                                        quality={100}
                                        width={28}
                                        height={18}
                                    />
                                    <span>Korea</span>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='11'
                                        height='7'
                                        viewBox='0 0 11 7'
                                        fill='none'
                                    >
                                        <path
                                            d='M5.6 6.5L10.4497 0.5H0.750258L5.6 6.5Z'
                                            fill='white'
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className='absolute top-[47%] -translate-y-1/2 left-[7.5vw] z-10'>
                    <p className='title18-400-160'>An tâm với 100% bất động sản được xác thực tại KANGNAM</p>
                    <h1 className='mt-[0.5vw] mb-[1.87vw] text-white title60'>Lựa chọn căn nhà ưng ý của bạn</h1>
                    <div className='w-[54vw] bg-white rounded-[6.25vw] backdrop-blur-[7.5px] flex justify-between items-center'>
                        <div className='flex items-center'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='28'
                                height='36'
                                className='w-[1.75vw] h-[2.25vw] ml-[2.12vw] mr-[1.5vw]'
                                viewBox='0 0 28 36'
                                fill='none'
                            >
                                <path
                                    d='M22.9201 14.1638V9.30395L18.866 6.677H18.9378V3.19984L14.0003 0L9.06277 3.19984V6.677H9.13459L5.08055 9.30395V14.1638L0 17.4559V35.9983L7.47348 35.9994V35.2603V34.5211V26.3498L9.91903 27.9346V35.9994H12.6983V13.5459L9.91903 15.3477V26.122L7.62331 24.634L7.47348 24.5372V16.932L4.69422 18.7338V24.5503L5.99253 25.3914L4.69422 25.9939V34.5217H1.62273V18.2184L6.68966 14.9348H6.70328V14.9257L13.9997 10.1974L21.2961 14.9257V14.9348H21.3097L26.3766 18.2184V34.5211H23.3052V25.9939L22.0069 25.3914L23.3052 24.5503V18.7338L20.5259 16.932V24.5372L20.3761 24.634L18.0804 26.122V15.3477L15.3011 13.5459V36H18.0804V27.9352L20.5259 26.3504V34.5217V35.9994L28 35.9983V17.4559L22.9194 14.1632L22.9201 14.1638ZM10.6861 3.96178L14.0003 1.81432L17.3145 3.96178V5.67189L14.0003 3.52386L10.6861 5.67189V3.96178ZM14.0003 8.38369L6.7039 13.112V10.0659L14.0003 5.33762L21.2967 10.0659V13.112L14.0003 8.38369Z'
                                    fill='#D6A279'
                                />
                            </svg>
                            <div className='border-l border-solid border-[#57534E] opacity-30 h-[1.6875vw]'></div>
                            <input
                                className='outline-none w-[40vw] ml-[1.125vw] text-den title20-400-130 placeholder:text-20pc placeholder:font-normal placeholder:leading-[1.3] placeholder:text-den placeholder:opacity-[0.27]'
                                type='search'
                                name=''
                                id=''
                                placeholder='Tìm kiếm theo tên hoặc địa điểm'
                            />
                        </div>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='#444'
                            className='w-[2.13vw] h-[2.04vw] mr-[1.69vw] my-[1.22vw]'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                            />
                        </svg>
                    </div>
                    <div className='flex items-center my-[1.88vw]'>
                        <span className='mr-[0.81vw] text-white title16-600-160'>Gợi ý:</span>
                        <ul className='flex gap-x-[0.5vw]'>
                            {arrSuggest &&
                                arrSuggest.map((e, index) => (
                                    <li
                                        key={index}
                                        className='text-white px-[1.12vw] h-fit w-fit backdrop-blur-[3px] bg-suggest rounded-[6.25vw] py-[0.5vw] title14-400-150'
                                    >
                                        {e.title}
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <div className='flex gap-x-[1.06vw]'>
                        <div className='py-[0.97vw] h-fit w-fit px-[1.5vw] flex gap-x-[1vw] rounded-[6.25vw] items-center bg-category backdrop-blur-[7.5px]'>
                            <Image
                                src='/px.png'
                                alt='px'
                                width={32}
                                height={32}
                                quality={100}
                                className='object-cover w-[2vw] h-[2vw]'
                            />
                            <span className='text-white title14-400-150'>Phân xưởng</span>
                        </div>
                        <div className='py-[0.97vw] h-fit w-fit px-[1.5vw] flex gap-x-[1vw] rounded-[6.25vw] items-center bg-category backdrop-blur-[7.5px]'>
                            <Image
                                src='/cc.png'
                                alt='cc'
                                width={32}
                                height={32}
                                quality={100}
                                className='object-cover w-[2vw] h-[2vw]'
                            />
                            <span className='text-white title14-400-150'>Chung cư</span>
                        </div>
                        <div className='py-[0.97vw] h-fit w-fit px-[1.5vw] flex gap-x-[1vw] rounded-[6.25vw] items-center bg-category backdrop-blur-[7.5px]'>
                            <Image
                                src='/bt.png'
                                alt='bt'
                                width={32}
                                height={32}
                                quality={100}
                                className='object-cover w-[2vw] h-[2vw]'
                            />
                            <span className='text-white title14-400-150'>Biệt thự</span>
                        </div>
                        <div className='py-[0.97vw] h-fit w-fit px-[1.5vw] flex gap-x-[1vw] rounded-[6.25vw] items-center bg-category backdrop-blur-[7.5px]'>
                            <Image
                                src='/nmp.png'
                                alt='nmp'
                                width={32}
                                height={32}
                                quality={100}
                                className='object-cover w-[2vw] h-[2vw]'
                            />
                            <span className='text-white title14-400-150'>Nhà mặt phố</span>
                        </div>
                        <div className='py-[0.97vw] h-fit w-fit px-[1.5vw] flex gap-x-[1vw] rounded-[6.25vw] items-center bg-category backdrop-blur-[7.5px]'>
                            <Image
                                src='/dn.png'
                                alt='dn'
                                width={32}
                                height={32}
                                quality={100}
                                className='object-cover w-[2vw] h-[2vw]'
                            />
                            <span className='text-white title14-400-150'>Đất nền</span>
                        </div>
                    </div>
                </div>
                <div className='absolute bottom-[2vw] opacity-50 w-fit h-fit left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-y-[0.94vw] '>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='25'
                        viewBox='0 0 24 25'
                        fill='none'
                        className='w-[1.375vw] h-[1.375vw]'
                    >
                        <path
                            d='M1 1L12 12L23 1'
                            stroke='white'
                            strokeWidth='2'
                        />
                        <path
                            d='M1 12L12 23L23 12'
                            stroke='white'
                            strokeWidth='2'
                        />
                    </svg>
                    <span className='uppercase text-14pc font-semibold leading-[1.28] tracking-[0.7px]'>
                        Cuộn xuống
                    </span>
                </div>
                <div className='absolute z-[4] bottom-0 left-1/2 opacity-20 -translate-x-1/2 w-[72.625vw] h-[2px] bg-gradient-line-header'></div>
                <ul className='fixed right-[3.94vw] bottom-[5.86vw] z-[9999] gap-y-[1.88vw] flex flex-col'>
                    <li className='relative w-[4.5vw] h-[4.5vw] shadow-feature flex justify-center items-center bg-white rounded-full'>
                        <Image
                            src='/social.svg'
                            alt='social'
                            width={36}
                            height={36}
                            className='object-contain w-[2.04vw] h-[2.04vw]'
                        />
                        {/* <SocialMedia /> */}
                    </li>
                    <li className='relative w-[4.5vw] h-[4.5vw] shadow-feature flex justify-center items-center bg-white rounded-full'>
                        <Image
                            src='/tiente.svg'
                            alt='tiente'
                            width={36}
                            height={36}
                            className='object-contain w-[2.04vw] h-[2.04vw]'
                        />
                        {/* <BoxCurrency /> */}
                    </li>
                    <li className='w-[4.5vw] h-[4.5vw] shadow-feature flex justify-center items-center bg-white rounded-full'>
                        <Image
                            src='/call.svg'
                            alt='call'
                            width={36}
                            height={36}
                            className='object-contain w-[2.04vw] h-[2.04vw]'
                        />
                    </li>
                </ul>
            </div>

            <div className='w-full h-screen relative bg-[#57534E]'>
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
                                    className='rounded-[6.25vw] py-[1vw] px-[2.5vw] bg-transparent border border-solid border-vang-nhe title16-400-150'
                                >
                                    Xem dự án
                                </Link>
                                <Link
                                    href='/'
                                    className='rounded-[6.25vw] text-den-2 py-[1vw] px-[2.5vw] bg-vang-nhe title16-400-150'
                                >
                                    Về chúng tôi
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
            </div>
            <Image
                className='object-cover z-[3]'
                src='/linear.png'
                alt='linear'
                sizes='100vw'
                fill
            />
        </header>
    )
}
