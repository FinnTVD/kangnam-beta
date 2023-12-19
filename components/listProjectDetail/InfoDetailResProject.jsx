import IconDT from '../icons/IconDT'
import IconHN from '../icons/IconHN'
import IconLH from '../icons/IconLH'
import IconNXD from '../icons/IconNXD'
import IconPL from '../icons/IconPL'
import IconST from '../icons/IconST'

export default function InfoDetailResProject({ data, lang, dataDetail, t }) {
    return (
        <div className='lg:hidden'>
            <h4 className='text-den text-[1.5vw] mt-[6.4vw] mb-[3.47vw] max-md:title-mb20-700-130 -tracking-[0.6px] max-lg:title-tl20'>
                {t?.projectDetail?.title}
            </h4>
            <ul className='flex flex-col gap-y-[4.27vw] py-[6.4vw] max-lg:py-[4.4vw] px-[4.27vw] border border-solid border-den01 rounded-[2.67vw]'>
                <li
                    className={`${
                        data?.propertyType?.translations?.find((e) => e?.languageCode?.toLowerCase()?.includes(lang))
                            ?.name
                            ? ''
                            : 'hidden'
                    } flex items-center justify-between`}
                >
                    <div className='flex items-center gap-x-[0.56vw] max-md:gap-x-[3.73vw]'>
                        <IconLH />
                        <span className='title-16-400-150 text-[#333] max-md:text-14mb max-md:font-normal max-md:leading-[1.71] max-lg:title-tl16'>
                            {t?.projectDetail?.info?.type}:
                        </span>
                    </div>
                    <span className='text-14pc font-normal leading-[1.71] text-[#888] max-md:text-12mb max-md:leading-[2] max-lg:title-tl14'>
                        {
                            data?.propertyType?.translations?.find((e) =>
                                e?.languageCode?.toLowerCase()?.includes(lang),
                            )?.name
                        }
                    </span>
                </li>
                <li className={`${dataDetail?.areaDisplay ? '' : 'hidden'} flex items-center justify-between`}>
                    <div className='flex items-center gap-x-[0.56vw] max-md:gap-x-[3.73vw]'>
                        <IconDT />
                        <span className='title-16-400-150 text-[#333] max-md:text-14mb max-md:font-normal max-md:leading-[1.71] max-lg:title-tl16'>
                            {t?.projectDetail?.info?.area}:
                        </span>
                    </div>
                    <span className='text-14pc font-normal leading-[1.71] text-[#888] max-md:text-12mb max-md:leading-[2] max-lg:title-tl14'>
                        {dataDetail?.areaDisplay}
                    </span>
                </li>
                <li className={`${dataDetail?.scale ? '' : 'hidden'} flex items-center justify-between`}>
                    <div className='flex items-center gap-x-[0.56vw] max-md:gap-x-[3.73vw]'>
                        <IconST />
                        <span className='title-16-400-150 text-[#333] max-md:text-14mb max-md:font-normal max-md:leading-[1.71] max-lg:title-tl16'>
                            Quy mô:
                        </span>
                    </div>
                    <span className='text-14pc font-normal leading-[1.71] text-[#888] max-md:text-12mb max-md:leading-[2] max-lg:title-tl14'>
                        {dataDetail?.scale}
                    </span>
                </li>
                <li className={`${dataDetail?.investor ? '' : 'hidden'} flex items-center justify-between`}>
                    <div className='flex items-center gap-x-[0.56vw] max-md:gap-x-[3.73vw]'>
                        <IconHN />
                        <span className='title-16-400-150 text-[#333] max-md:text-14mb max-md:font-normal max-md:leading-[1.71] max-lg:title-tl16'>
                            Chủ đầu tư:
                        </span>
                    </div>
                    <span className='text-14pc font-normal leading-[1.71] text-[#888] max-md:text-12mb max-md:leading-[2] max-lg:title-tl14'>
                        {dataDetail?.investor}
                    </span>
                </li>
                <li className={`${data?.constructionYear ? '' : 'hidden'} flex items-center justify-between`}>
                    <div className='flex items-center gap-x-[0.56vw] max-md:gap-x-[3.73vw]'>
                        <IconNXD />
                        <span className='title-16-400-150 text-[#333] max-md:text-14mb max-md:font-normal max-md:leading-[1.71] max-lg:title-tl16'>
                            {t?.projectDetail?.info?.year}:
                        </span>
                    </div>
                    <span className='text-14pc font-normal leading-[1.71] text-[#888] max-md:text-12mb max-md:leading-[2] max-lg:title-tl14'>
                        {data?.constructionYear}
                    </span>
                </li>

                <li className={`${dataDetail?.policy ? '' : 'hidden'} flex items-center justify-between`}>
                    <div className='flex items-center gap-x-[0.56vw] max-md:gap-x-[3.73vw]'>
                        <IconPL />
                        <span className='title-16-400-150 text-[#333] max-md:text-14mb max-md:font-normal max-md:leading-[1.71] max-lg:title-tl16'>
                            {t?.projectDetail?.info?.juridical}:
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
