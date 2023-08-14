import Image from 'next/image'

export default function Contact() {
    const title = 'Trụ sở chính (Hà Nội)'
    const address = 'Villa e11, The Manor, KĐT mới Mỹ Đình - Mễ Trì, Nam từ Liêm, Hà Nội'
    const phone = ['+84 337858021 / +84 339625612', '+82 10-8413-1981']
    return (
        <section className='relative px-120 pt-[8.125vw] pb-[8.125vw]'>
            <div className='flex items-end justify-between'>
                <div>
                    <span
                        data-aos='fade-up'
                        className='sub-title'
                    >
                        Liên hệ
                    </span>
                    <h2
                        data-aos='fade-up'
                        className='title56 text-den mt-[0.62vw]'
                    >
                        Thông tin văn phòng
                    </h2>
                </div>
                <button
                    className='text-white px-[2.5vw] py-[1vw] bg-[#D6A279] rounded-full flex items-center'
                    style={{ boxShadow: '0px 0px 30px 0px rgba(206, 126, 64, 0.36)' }}
                >
                    <span> Liên hệ ngay </span>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='7'
                        height='14'
                        viewBox='0 0 7 14'
                        fill='none'
                        className='w-[0.375vw] ml-[0.75vw]'
                    >
                        <path
                            d='M0.5 1L6.5 7L0.5 13'
                            stroke='white'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                        />
                    </svg>
                </button>
            </div>
            <div className='flex relative pt-[6.5vw]'>
                <div>
                    <h3 className='title32-600-127 text-den'>{title}</h3>
                    <div
                        data-aos='fade-right'
                        className='mt-[1.1875vw]'
                    >
                        <div className='flex items-center'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                            >
                                <path
                                    d='M12.0003 11.7515C12.4821 11.7515 12.8939 11.5799 13.2355 11.2367C13.5772 10.8936 13.748 10.4811 13.748 9.99924C13.748 9.51739 13.5765 9.10563 13.2333 8.76397C12.8902 8.4223 12.4777 8.25146 11.9958 8.25146C11.514 8.25146 11.1022 8.42304 10.7605 8.76619C10.4189 9.10932 10.248 9.52182 10.248 10.0037C10.248 10.4855 10.4196 10.8973 10.7628 11.239C11.1059 11.5806 11.5184 11.7515 12.0003 11.7515ZM11.998 20.0265C14.2147 18.0098 15.8522 16.1806 16.9105 14.539C17.9689 12.8973 18.498 11.4515 18.498 10.2015C18.498 8.2383 17.8706 6.63084 16.6157 5.37909C15.3609 4.12734 13.8217 3.50146 11.998 3.50146C10.1744 3.50146 8.6352 4.12734 7.38035 5.37909C6.12548 6.63084 5.49805 8.2383 5.49805 10.2015C5.49805 11.4515 6.03971 12.8973 7.12305 14.539C8.20638 16.1806 9.83138 18.0098 11.998 20.0265ZM11.998 22.0015C9.31471 19.7181 7.31055 17.5973 5.98555 15.639C4.66055 13.6806 3.99805 11.8681 3.99805 10.2015C3.99805 7.70147 4.80221 5.7098 6.41055 4.22646C8.01888 2.74313 9.88138 2.00146 11.998 2.00146C14.1147 2.00146 15.9772 2.74313 17.5855 4.22646C19.1939 5.7098 19.998 7.70147 19.998 10.2015C19.998 11.8681 19.3355 13.6806 18.0105 15.639C16.6855 17.5973 14.6814 19.7181 11.998 22.0015Z'
                                    fill='#D6A279'
                                />
                            </svg>
                            <span className='ml-[1vw] text-den title18-400-140'>{address}</span>
                        </div>
                        {phone?.map((item) => (
                            <div className='flex items-center mt-[1vw]'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                >
                                    <path
                                        d='M19.875 21C17.8417 21 15.8208 20.5 13.8125 19.5C11.8042 18.5 10 17.2 8.4 15.6C6.8 14 5.5 12.1958 4.5 10.1875C3.5 8.17917 3 6.15833 3 4.125C3 3.80357 3.10714 3.53571 3.32142 3.32142C3.53571 3.10714 3.80357 3 4.125 3H7.625C7.85185 3 8.0544 3.07917 8.23265 3.2375C8.41088 3.39583 8.525 3.60833 8.575 3.875L9.25 7.025C9.28333 7.25833 9.27917 7.47083 9.2375 7.6625C9.19583 7.85417 9.10833 8.01667 8.975 8.15L6.475 10.675C7.40833 12.225 8.45417 13.575 9.6125 14.725C10.7708 15.875 12.0833 16.85 13.55 17.65L15.925 15.2C16.0917 15.0167 16.2833 14.8875 16.5 14.8125C16.7167 14.7375 16.9333 14.725 17.15 14.775L20.125 15.425C20.3802 15.4812 20.5898 15.6078 20.7539 15.8047C20.918 16.0016 21 16.2333 21 16.5V19.875C21 20.1964 20.8929 20.4643 20.6786 20.6786C20.4643 20.8929 20.1964 21 19.875 21ZM5.725 9.3L7.75 7.25L7.175 4.5H4.5C4.5 5.15 4.6 5.8625 4.8 6.6375C5 7.4125 5.30833 8.3 5.725 9.3ZM14.95 18.375C15.6333 18.6917 16.375 18.95 17.175 19.15C17.975 19.35 18.75 19.4667 19.5 19.5V16.825L16.925 16.3L14.95 18.375Z'
                                        fill='#D6A279'
                                    />
                                </svg>
                                <span className='ml-[1vw] text-den title18-400-140'>{item}</span>
                            </div>
                        ))}
                    </div>
                    <div
                        data-aos='zoom-in'
                        className='relative w-[41.25vw] h-[25.3125vw] mt-[2vw]'
                    >
                        <Image
                            fill
                            src='/images/about-us-contact-address.png'
                            className='top-0 left-0 object-cover rounded-lg'
                        ></Image>
                    </div>
                </div>
                <Image
                    width={862}
                    height={710}
                    src='/images/about-us-map.svg'
                    className='absolute right-0 top-0 w-[50.625vw] h-[44.375vw] object-contain'
                ></Image>
            </div>
            <Image
                fill
                src='/images/about-us-contact-bg.png'
                className='top-0 left-0 opacity-[0.06]'
            ></Image>
        </section>
    )
}
