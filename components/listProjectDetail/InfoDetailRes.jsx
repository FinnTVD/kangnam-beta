import IconDT from '../icons/IconDT'
import IconHBC from '../icons/IconHBC'
import IconHN from '../icons/IconHN'
import IconLH from '../icons/IconLH'
import IconNT from '../icons/IconNT'
import IconNXD from '../icons/IconNXD'
import IconPL from '../icons/IconPL'
import IconST from '../icons/IconST'

export default function InfoDetailRes({ data, lang, dataDetail }) {
    return (
        <div className='lg:hidden'>
            <h4 className='text-den text-[1.5vw] mt-[6.4vw] mb-[3.47vw] max-md:title-mb20-700-130 -tracking-[0.6px] max-lg:title-tl20'>
                Thông tin chi tiết
            </h4>
            <ul className='flex flex-col gap-y-[4.27vw] py-[6.4vw] px-[4.27vw] border border-solid border-den01 rounded-[2.67vw]'>
                <li className='flex items-center justify-between'>
                    <div className='flex items-center gap-x-[0.56vw] max-md:gap-x-[3.73vw]'>
                        <IconLH />
                        <span className='title-16-400-150 text-[#333] max-md:text-14mb max-md:font-normal max-md:leading-[1.71] max-lg:title-tl16'>
                            Loại hình:
                        </span>
                    </div>
                    <span className='text-14pc font-normal leading-[1.71] text-[#888] max-md:text-12mb max-md:leading-[2] max-lg:title-tl14'>
                        {
                            data?.propertyType?.translations?.find((e) =>
                                e?.languageCode?.toLowerCase()?.includes(lang === 'ch' ? 'cn' : lang),
                            )?.name
                        }
                    </span>
                </li>
                <li className='flex items-center justify-between'>
                    <div className='flex items-center gap-x-[0.56vw] max-md:gap-x-[3.73vw]'>
                        <IconDT />
                        <span className='title-16-400-150 text-[#333] max-md:text-14mb max-md:font-normal max-md:leading-[1.71] max-lg:title-tl16'>
                            Diện tích:
                        </span>
                    </div>
                    <span className='text-14pc font-normal leading-[1.71] text-[#888] max-md:text-12mb max-md:leading-[2] max-lg:title-tl14'>
                        {dataDetail?.size} m²
                    </span>
                </li>
                <li className='flex items-center justify-between'>
                    <div className='flex items-center gap-x-[0.56vw] max-md:gap-x-[3.73vw]'>
                        <IconST />
                        <span className='title-16-400-150 text-[#333] max-md:text-14mb max-md:font-normal max-md:leading-[1.71] max-lg:title-tl16'>
                            Số tầng:
                        </span>
                    </div>
                    <span className='text-14pc font-normal leading-[1.71] text-[#888] max-md:text-12mb max-md:leading-[2] max-lg:title-tl14'>
                        {dataDetail?.floor}
                    </span>
                </li>
                <li className='flex items-center justify-between'>
                    <div className='flex items-center gap-x-[0.56vw] max-md:gap-x-[3.73vw]'>
                        <IconHN />
                        <span className='title-16-400-150 text-[#333] max-md:text-14mb max-md:font-normal max-md:leading-[1.71] max-lg:title-tl16'>
                            Hướng nhà:
                        </span>
                    </div>
                    <span className='text-14pc font-normal leading-[1.71] text-[#888] max-md:text-12mb max-md:leading-[2] max-lg:title-tl14'>
                        {dataDetail?.orientHouse}
                    </span>
                </li>
                <li className='flex items-center justify-between'>
                    <div className='flex items-center gap-x-[0.56vw] max-md:gap-x-[3.73vw]'>
                        <IconNXD />
                        <span className='title-16-400-150 text-[#333] max-md:text-14mb max-md:font-normal max-md:leading-[1.71] max-lg:title-tl16'>
                            Năm xây dựng:
                        </span>
                    </div>
                    <span className='text-14pc font-normal leading-[1.71] text-[#888] max-md:text-12mb max-md:leading-[2] max-lg:title-tl14'>
                        {dataDetail?.constructionYear}
                    </span>
                </li>
                <li className='flex items-center justify-between'>
                    <div className='flex items-center gap-x-[0.56vw] max-md:gap-x-[3.73vw]'>
                        <IconHBC />
                        <span className='title-16-400-150 text-[#333] max-md:text-14mb max-md:font-normal max-md:leading-[1.71] max-lg:title-tl16'>
                            Hướng ban công:
                        </span>
                    </div>
                    <span className='text-14pc font-normal leading-[1.71] text-[#888] max-md:text-12mb max-md:leading-[2] max-lg:title-tl14'>
                        {dataDetail?.orientBalcony}
                    </span>
                </li>
                <li className='flex items-center justify-between'>
                    <div className='flex items-center gap-x-[0.56vw] max-md:gap-x-[3.73vw]'>
                        <IconNT />
                        <span className='title-16-400-150 text-[#333] max-md:text-14mb max-md:font-normal max-md:leading-[1.71] max-lg:title-tl16'>
                            Nội thất:
                        </span>
                    </div>
                    <span className='text-14pc font-normal leading-[1.71] text-[#888] max-md:text-12mb max-md:leading-[2] max-lg:title-tl14'>
                        {dataDetail?.furniture}
                    </span>
                </li>
                <li className='flex items-center justify-between'>
                    <div className='flex items-center gap-x-[0.56vw] max-md:gap-x-[3.73vw]'>
                        <IconPL />
                        <span className='title-16-400-150 text-[#333] max-md:text-14mb max-md:font-normal max-md:leading-[1.71] max-lg:title-tl16'>
                            Pháp lý:
                        </span>
                    </div>
                    <span className='text-14pc font-normal leading-[1.71] text-[#888] max-md:text-12mb max-md:leading-[2] max-lg:title-tl14'>
                        {dataDetail?.policy}
                    </span>
                </li>
            </ul>
        </div>
    )
}
