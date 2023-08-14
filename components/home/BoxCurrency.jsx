import Image from 'next/image'

export default function BoxCurrency({ className = '' }) {
    return (
        <div
            className={`${className} absolute -left-[1.88vw] top-1/2 -translate-y-1/2 -translate-x-full py-[1.69vw] px-[1.5vw] rounded-[0.75vw] bg-white`}
        >
            <span className='text-den title20-700-130 mx-auto block'>Chuyển đổi tiền tệ</span>
            <span className='text-den title10-400-150 opacity-50 mb-[0.31vw]'>Số tiền</span>
            <div className='w-[15.8125vw] rounded-[6.25vw] px-[1vw] py-[0.6vw] flex shadow-currency'>
                <input
                    type='text'
                    className='outline-none w-[80%] text-den title14-400-150 placeholder:opacity-50 placeholder:font-normal placeholder:leading-[1.5]'
                    placeholder='Nhập số tiền'
                />
                <div className='flex items-center'>
                    <Image
                        src='/images/america.png'
                        alt='america'
                        width={16}
                        height={16}
                        quality={100}
                        className='object-cover w-[1vw] h-[1vw] rounded-full'
                    />
                    <select
                        name=''
                        id=''
                        className='outline-none text-den'
                    >
                        <option
                            defaultChecked
                            value=''
                        >
                            USD
                        </option>
                        <option value=''>VN</option>
                    </select>
                </div>
            </div>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='17'
                height='13'
                viewBox='0 0 17 13'
                fill='none'
                className='my-[0.75vw] mx-auto'
            >
                <path
                    d='M3.64645 12.3536C3.84171 12.5488 4.15829 12.5488 4.35355 12.3536L7.53553 9.17157C7.7308 8.97631 7.7308 8.65973 7.53553 8.46447C7.34027 8.2692 7.02369 8.2692 6.82843 8.46447L4 11.2929L1.17157 8.46447C0.97631 8.2692 0.659728 8.2692 0.464466 8.46447C0.269204 8.65973 0.269204 8.97631 0.464466 9.17157L3.64645 12.3536ZM3.5 1L3.5 12L4.5 12L4.5 1L3.5 1Z'
                    fill='#D6A279'
                />
                <path
                    d='M13.3536 0.646446C13.1583 0.451184 12.8417 0.451184 12.6464 0.646446L9.46447 3.82843C9.2692 4.02369 9.2692 4.34027 9.46447 4.53553C9.65973 4.7308 9.97631 4.7308 10.1716 4.53553L13 1.70711L15.8284 4.53553C16.0237 4.7308 16.3403 4.7308 16.5355 4.53553C16.7308 4.34027 16.7308 4.02369 16.5355 3.82843L13.3536 0.646446ZM13.5 12L13.5 1H12.5L12.5 12H13.5Z'
                    fill='#D6A279'
                />
            </svg>
            <span className='text-den title10-400-150 opacity-50 mb-[0.31vw]'>Chuyển đổi thành</span>
            <div className='w-[15.8125vw] rounded-[6.25vw] px-[1vw] py-[0.6vw] flex shadow-currency'>
                <input
                    type='text'
                    className='outline-none w-[80%] text-den title14-400-150 placeholder:opacity-50 placeholder:font-normal placeholder:leading-[1.5]'
                    placeholder='Thành tiền'
                />
                <div className='flex items-center'>
                    <Image
                        src='/images/vn.png'
                        alt='vn'
                        width={16}
                        height={16}
                        quality={100}
                        className='object-cover w-[1vw] h-[1vw] rounded-full'
                    />
                    <select
                        name=''
                        id=''
                        className='outline-none text-den'
                    >
                        <option
                            defaultChecked
                            value=''
                        >
                            VN
                        </option>
                        <option value=''>USD</option>
                    </select>
                </div>
            </div>
            <div className='text-13pc text-den leading-[1.5] font-normal mt-[2vw] mb-[0.5vw]'>
                <span>1.00000 USD</span>
                <span className='mx-[0.5vw]'>=</span>
                <span className='text-nau-nhat'>23667.00000</span>
                <span> USD</span>
            </div>
            <p className='text-den opacity-70 title10-400-150 text-center'>Tỷ giá chuyển đổi thực vào lúc 08:44 UTC</p>
        </div>
    )
}
