'use client'
import Image from 'next/image'
import { useState } from 'react'
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
export default function SearchHome() {
    const [valueSearch, setValueSearch] = useState('Thành phố Hà Nội')

    return (
        <div className='absolute top-[47%] -translate-y-1/2 left-[7.5vw] z-10'>
            <p className='title18-400-160'>An tâm với 100% bất động sản được xác thực tại KANGNAM</p>
            <h1 className='mt-[0.5vw] mb-[1.87vw] text-white capitalize title60'>Lựa chọn căn nhà ưng ý của bạn</h1>
            <div className='w-[54vw] py-[1.53vw] px-[2.5vw] bg-white rounded-[6.25vw] backdrop-blur-[7.5px] flex justify-between items-center'>
                <div className='flex items-center w-full'>
                    <div className='gap-x-[0.5vw] flex items-center title16-400-130 text-den'>
                        Mua nhà
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='21'
                            height='21'
                            viewBox='0 0 21 21'
                            fill='none'
                        >
                            <path
                                d='M14.1561 9.53609L13.5639 8.94389L10.5 12.0057L7.43607 8.94389L6.84387 9.53609L10.5 13.1943L14.1561 9.53609Z'
                                fill='#D6A279'
                            />
                        </svg>
                    </div>
                    <div className='border-l border-solid border-[#57534E] opacity-30 h-[1.6875vw] mx-[1vw]'></div>
                    <div className='flex-1 flex items-center gap-x-[0.62vw]'>
                        <label htmlFor='search'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='16'
                                height='17'
                                viewBox='0 0 16 17'
                                fill='none'
                                className='w-[1vw] h-[1vw]'
                            >
                                <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M7.19929 2.72722C6.58212 2.72003 5.96965 2.83469 5.39737 3.06456C4.82509 3.29442 4.30438 3.63492 3.8654 4.06632C3.42642 4.49773 3.0779 5.01146 2.84003 5.57776C2.60217 6.14405 2.47969 6.75165 2.47969 7.36536C2.47969 7.97906 2.60217 8.58666 2.84003 9.15296C3.0779 9.71925 3.42642 10.233 3.8654 10.6644C4.30438 11.0958 4.82509 11.4363 5.39737 11.6662C5.96965 11.896 6.58212 12.0107 7.19929 12.0035C8.42696 11.9892 9.59947 11.4942 10.4625 10.626C11.3256 9.75771 11.8096 8.58614 11.8096 7.36536C11.8096 6.14457 11.3256 4.973 10.4625 4.10474C9.59947 3.23647 8.42696 2.74152 7.19929 2.72722ZM1.57497 7.36631C1.56703 6.62685 1.70666 5.89316 1.98577 5.20771C2.26487 4.52226 2.67792 3.89864 3.201 3.37295C3.72409 2.84726 4.34682 2.42994 5.03318 2.14512C5.71953 1.8603 6.45588 1.71365 7.19961 1.71365C7.94333 1.71365 8.67968 1.8603 9.36603 2.14512C10.0524 2.42994 10.6751 2.84726 11.1982 3.37295C11.7213 3.89864 12.1343 4.52226 12.4134 5.20771C12.6926 5.89316 12.8322 6.62685 12.8242 7.36631C12.8084 8.83925 12.2089 10.2465 11.1558 11.2825C10.1027 12.3186 8.68104 12.8997 7.19961 12.8997C5.71817 12.8997 4.29654 12.3186 3.24343 11.2825C2.19032 10.2465 1.59077 8.83925 1.57497 7.36631Z'
                                    fill='#D6A279'
                                />
                                <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M10.7105 10.4576L14.3041 14.0212L13.6263 14.6977L10.0327 11.1334L10.7105 10.4576Z'
                                    fill='#D6A279'
                                />
                            </svg>
                        </label>
                        <input
                            className='outline-none text-den title16-400-130'
                            type='text'
                            name='search'
                            id='search'
                            value={valueSearch}
                            onChange={(e) => setValueSearch(e.target.value)}
                        />
                    </div>
                </div>
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
                        src='/images/px.png'
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
                        src='/images/cc.png'
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
                        src='/images/bt.png'
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
                        src='/images/nmp.png'
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
                        src='/images/dn.png'
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
    )
}
