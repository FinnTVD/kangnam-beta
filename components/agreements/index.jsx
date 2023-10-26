'use client'
import { useState } from 'react'
import AgreementItem from './AgreementItem'

export default function IndexAgreements({ lang, agreementDataTranslation }) {
    const [index, setIndex] = useState(0)

    return (
        <div className='py-[5.5vw] flex max-lg:py-[8.5vw] max-lg:flex-col max-md:py-[18.5vw]'>
            <div className='w-[30%] max-lg:w-full'>
                <ul className='flex flex-col bg-[#F4F4F4] sticky top-[5.5vw] left-0 gap-[1vw] px-[3.75vw] py-[3vw] max-lg:py-[7.5vw] max-lg:flex-row max-lg:bg-transparent max-lg:justify-end max-lg:flex-nowrap max-lg:px-[8.25vw] max-lg:pt-[4.5vw] max-lg:pb-[0] max-lg:static max-lg:gap-[2vw] max-md:pt-[6vw]'>
                    {agreementDataTranslation?.map((e, indx) => (
                        <li
                            className={`${
                                indx === index ? 'text-[#d4a47c] font-semibold' : 'text-den'
                            } text-[1.125vw] max-md:title-mb14-400-171 opacity-80 max-lg:title-tl18 cursor-pointer max-lg:whitespace-nowrap`}
                            key={indx}
                            onClick={() => setIndex(indx)}
                        >
                            {e?.title}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='w-[70%] px-[8.25vw] pt-[2vw] max-md:pt-[8.2vw] max-md:px-[2.67vw] max-lg:px-[10vw] max-lg:w-full'>
                <h1 className='text-den font-extrabold text-[3.75vw] text-center max-md:text-[6.67vw]'>
                    {agreementDataTranslation && agreementDataTranslation[index]?.title}
                </h1>
                <AgreementItem data={agreementDataTranslation && agreementDataTranslation[index]}></AgreementItem>
            </div>
        </div>
    )
}
