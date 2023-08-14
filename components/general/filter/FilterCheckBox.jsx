const arrFilter = new Array(10).fill(0)
export default function FilterCheckBox({ className, setIndexFilter }) {
    return (
        <div
            className={`${className} absolute z-50 left-0 -bottom-[1.5vw] translate-y-full flex flex-col shadow-boxFilter rounded-[0.75vw] bg-white w-[20.875vw] gap-y-[2.3vw] transition-all duration-[2s] ease-linear`}
        >
            <div className='px-[1.5vw] pt-[1.5vw]'>
                <p className='text-den title16-600-150 whitespace-nowrap mb-[1.5vw]'>Chọn loại hình bất động sản</p>
                <div className='grid grid-cols-2 gap-x-[2.3vw] gap-y-[1vw]'>
                    {arrFilter.map((e, index) => (
                        <div
                            key={index}
                            className='w-fit flex items-center gap-x-[0.75vw]'
                        >
                            <input
                                type='checkbox'
                                name={`filter${index}`}
                                id={`filter${index}`}
                                className='w-[1.5vw] h-[1.5vw] outline-none border border-solid border-den02'
                            />
                            <label
                                className='title14-400-150 text-den whitespace-nowrap w-fit cursor-pointer'
                                htmlFor={`filter${index}`}
                            >
                                Nhà mặt phố
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            <div className='border-t border-solid border-black01 flex justify-between items-center py-[1vw] px-[1.5vw]'>
                <span className='title14-400-150 text-den'>Đặt lại</span>
                <div className='flex gap-x-[0.63vw]'>
                    <button
                        onClick={() => setIndexFilter(-1)}
                        className='py-[0.28vw] px-[1vw] rounded-[6.25vw] shadow-filter border border-solid border-logo text-den title14-400-150'
                    >
                        Hủy
                    </button>
                    <button className='py-[0.28vw] px-[1vw] rounded-[6.25vw] shadow-filter border border-solid border-logo text-logo title14-400-150'>
                        Áp dụng
                    </button>
                </div>
            </div>
        </div>
    )
}
