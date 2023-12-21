import { originHouseInit } from '@/utils'
import IconDT from '../icons/IconDT'
import IconHBC from '../icons/IconHBC'
import IconHN from '../icons/IconHN'
import IconLH from '../icons/IconLH'
import IconNT from '../icons/IconNT'
import IconNXD from '../icons/IconNXD'
import IconPL from '../icons/IconPL'
import IconST from '../icons/IconST'
import FormNamePhone from './FormNamePhone'

export default function InfoDetail({ data, lang, dataDetail, t }) {
    return (
        <div className='w-[23.9375vw] max-lg:hidden'>
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
                    <li className={`${dataDetail?.size ? '' : 'hidden'} flex items-center justify-between`}>
                        <div className='flex items-center gap-x-[0.56vw] max-md:gap-x-[3.73vw]'>
                            <IconDT />
                            <span className='title-16-400-150 text-[#333] max-md:text-14mb max-md:font-normal max-md:leading-[1.71]'>
                                {t?.projectDetail?.info?.area}:
                            </span>
                        </div>
                        <span className='text-14pc font-normal leading-[1.71] text-[#888] max-md:text-12mb max-md:leading-[2]'>
                            {dataDetail?.size}
                        </span>
                    </li>
                    <li className={`${dataDetail?.floor ? '' : 'hidden'} flex items-center justify-between`}>
                        <div className='flex items-center gap-x-[0.56vw] max-md:gap-x-[3.73vw]'>
                            <IconST />
                            <span className='title-16-400-150 text-[#333] max-md:text-14mb max-md:font-normal max-md:leading-[1.71]'>
                                {t?.projectDetail?.info?.floors}:
                            </span>
                        </div>
                        <span className='text-14pc font-normal leading-[1.71] text-[#888] max-md:text-12mb max-md:leading-[2]'>
                            {dataDetail?.floor}
                        </span>
                    </li>
                    <li
                        className={`${
                            originHouseInit[data?.orient]?.find((e) => e?.langCode === lang)?.title ? '' : 'hidden'
                        } flex items-center justify-between`}
                    >
                        <div className='flex items-center gap-x-[0.56vw] max-md:gap-x-[3.73vw]'>
                            <IconHN />
                            <span className='title-16-400-150 text-[#333] max-md:text-14mb max-md:font-normal max-md:leading-[1.71]'>
                                {t?.projectDetail?.info?.orientHouse}:
                            </span>
                        </div>
                        <span className='text-14pc font-normal leading-[1.71] text-[#888] max-md:text-12mb max-md:leading-[2]'>
                            {originHouseInit[data?.orient]?.find((e) => e?.langCode === lang)?.title}
                        </span>
                    </li>
                    <li className={`${dataDetail?.constructionYear ? '' : 'hidden'} flex items-center justify-between`}>
                        <div className='flex items-center gap-x-[0.56vw] max-md:gap-x-[3.73vw]'>
                            <IconNXD />
                            <span className='title-16-400-150 text-[#333] max-md:text-14mb max-md:font-normal max-md:leading-[1.71]'>
                                {t?.projectDetail?.info?.year}:
                            </span>
                        </div>
                        <span className='text-14pc font-normal leading-[1.71] text-[#888] max-md:text-12mb max-md:leading-[2]'>
                            {dataDetail?.constructionYear}
                        </span>
                    </li>
                    <li
                        className={`${
                            originHouseInit[dataDetail?.orientBalcony]?.find((e) => e?.langCode === lang)?.title
                                ? ''
                                : 'hidden'
                        } flex items-center justify-between`}
                    >
                        <div className='flex items-center gap-x-[0.56vw] max-md:gap-x-[3.73vw]'>
                            <IconHBC />
                            <span className='title-16-400-150 text-[#333] max-md:text-14mb max-md:font-normal max-md:leading-[1.71]'>
                                {t?.projectDetail?.info?.orientBalcony}:
                            </span>
                        </div>
                        <span className='text-14pc font-normal leading-[1.71] text-[#888] max-md:text-12mb max-md:leading-[2]'>
                            {originHouseInit[dataDetail?.orientBalcony]?.find((e) => e?.langCode === lang)?.title}
                        </span>
                    </li>
                    <li className={`${dataDetail?.furniture ? '' : 'hidden'} flex items-center justify-between`}>
                        <div className='flex items-center gap-x-[0.56vw] max-md:gap-x-[3.73vw]'>
                            <IconNT />
                            <span className='title-16-400-150 text-[#333] max-md:text-14mb max-md:font-normal max-md:leading-[1.71]'>
                                {t?.projectDetail?.info?.interior}:
                            </span>
                        </div>
                        <span className='text-14pc font-normal leading-[1.71] text-[#888] max-md:text-12mb max-md:leading-[2]'>
                            {dataDetail?.furniture}
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
        </div>
    )
}
