import IconDT from '../icons/IconDT'
import IconHN from '../icons/IconHN'
import IconLH from '../icons/IconLH'
import IconNXD from '../icons/IconNXD'
import IconPL from '../icons/IconPL'
import IconST from '../icons/IconST'
import FormNamePhone from './FormNamePhone'
import ShareSocialInfo from './ShareSocialInfo'

export default function InfoDetailProject({ data, lang, dataDetail, t }) {
    return (
        <div
            id='info_detail_project'
            className='w-[23.9375vw] max-lg:hidden lg:max-h-[85vh] lg:overflow-y-scroll'
        >
            <div className='rounded-[0.625vw] border border-solid border-den01 pt-[1.88vw] pb-[3.63vw] px-[1.58vw]'>
                <h4 className='text-den font-extrabold leading-[1.3] tracking-[-0.72px] text-[1.5vw]'>
                    {t?.projectDetail?.title}
                </h4>
                <ul className='flex flex-col gap-y-[1vw] mt-[1vw]'>
                    <li
                        className={`${
                            data?.propertyType?.translations?.find((e) =>
                                e?.languageCode?.toLowerCase()?.includes(lang),
                            )?.name
                                ? ''
                                : 'hidden'
                        } flex items-center justify-between`}
                    >
                        <div className='flex items-center gap-x-[0.56vw] max-md:gap-x-[3.73vw]'>
                            <IconLH />
                            <span className='title-16-400-150 text-[#333] max-md:text-14mb max-md:font-normal max-md:leading-[1.71]'>
                                {t?.projectDetail?.info?.type}:
                            </span>
                        </div>
                        <span className='text-14pc font-normal leading-[1.71] text-[#888] max-md:text-12mb max-md:leading-[2]'>
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
                            <span className='title-16-400-150 text-[#333] max-md:text-14mb max-md:font-normal max-md:leading-[1.71]'>
                                {t?.projectDetail?.info?.area}:
                            </span>
                        </div>
                        <span className='text-14pc font-normal leading-[1.71] text-[#888] max-md:text-12mb max-md:leading-[2]'>
                            {dataDetail?.areaDisplay}
                        </span>
                    </li>
                    <li className={`${dataDetail?.scale ? '' : 'hidden'} flex items-center justify-between`}>
                        <div className='flex items-center gap-x-[0.56vw] max-md:gap-x-[3.73vw]'>
                            <IconST />
                            <span className='title-16-400-150 text-[#333] max-md:text-14mb max-md:font-normal max-md:leading-[1.71]'>
                                {t?.projectDetail?.info?.scale}:
                            </span>
                        </div>
                        <span className='text-14pc font-normal leading-[1.71] text-[#888] max-md:text-12mb max-md:leading-[2]'>
                            {dataDetail?.scale}
                        </span>
                    </li>
                    <li className={`${dataDetail?.investor ? '' : 'hidden'} flex items-center justify-between`}>
                        <div className='flex items-center gap-x-[0.56vw] max-md:gap-x-[3.73vw]'>
                            <IconHN />
                            <span className='title-16-400-150 text-[#333] max-md:text-14mb max-md:font-normal max-md:leading-[1.71]'>
                                {t?.projectDetail?.info?.investor}:
                            </span>
                        </div>
                        <span className='text-14pc font-normal leading-[1.71] text-[#888] max-md:text-12mb max-md:leading-[2]'>
                            {dataDetail?.investor}
                        </span>
                    </li>
                    <li className={`${data?.constructionYear ? '' : 'hidden'} flex items-center justify-between`}>
                        <div className='flex items-center gap-x-[0.56vw] max-md:gap-x-[3.73vw]'>
                            <IconNXD />
                            <span className='title-16-400-150 text-[#333] max-md:text-14mb max-md:font-normal max-md:leading-[1.71]'>
                                {t?.projectDetail?.info?.year}:
                            </span>
                        </div>
                        <span className='text-14pc font-normal leading-[1.71] text-[#888] max-md:text-12mb max-md:leading-[2]'>
                            {data?.constructionYear}
                        </span>
                    </li>

                    <li className={`${dataDetail?.policy ? '' : 'hidden'} flex items-center justify-between`}>
                        <div className='flex items-center gap-x-[0.56vw] max-md:gap-x-[3.73vw]'>
                            <IconPL />
                            <span className='title-16-400-150 text-[#333] max-md:text-14mb max-md:font-normal max-md:leading-[1.71]'>
                                {t?.projectDetail?.info?.juridical}:
                            </span>
                        </div>
                        <span className='text-14pc font-normal leading-[1.71] text-[#888] max-md:text-12mb max-md:leading-[2]'>
                            {dataDetail?.policy}
                        </span>
                    </li>
                </ul>
            </div>
            <FormNamePhone
                id={data?.id}
                t={t}
            />
            <ShareSocialInfo />
        </div>
    )
}
