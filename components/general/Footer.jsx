'use client'
import Image from "next/image"
import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations('HomepageFooter')
    const addr = "Villa e11, The Manor, KĐT mới Mỹ Đình - Mễ Trì, Nam từ Liêm, Hà Nội";
    const phoneArr = ['0637 858 974', '0337 858 892', '0837 858 357'];
    const menuArr = ['Trang chủ', 'Về KANGNAM', 'Dự án', 'Ký gửi nhà đất', 'Thỏa thuận & pháp lý', 'Tin tức'];
    const serviceArr = ['Dự án mới', 'Thiết kế nhà đẹp', 'Ký gửi bất động sản'];
    const copyright= "© 2023 Copyright. Powered by OKHUB Viet Nam";
    const linkFacebookHandler = () => {
        window.open('https://www.facebook.com/')
    }
    const linkYoutubeHandler = () => {
        window.open('https://www.twitter.com/')
    }
    const linkTiktokHandler = () => {
        window.open('https://www.tiktok.com/')
    }
    const linkInstaHandler = () => {
        window.open('https://www.instagram.com/')
    }
    return(
        <div className="bg-[#FBF7F2]">
            <div className="py-[5vw] px-[7.5625vw] flex">
                <div>
                    <div className="relative w-[24.0625vw] h-[6.625vw]">
                        <Image fill src="/logoKangnam.svg" className="top-0 left-0 object-contain"></Image>
                    </div>
                    <div className="flex mt-[2.5vw]">
                        <div onClick={linkFacebookHandler} className="group hover:bg-[#926B4F] transition-all duration-300 cursor-pointer border-[0.7px] border-nau-nhat rounded-[50%] w-[2.6875vw] h-[2.6875vw] flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="40" viewBox="0 0 9 40" fill="none" className="w-[0.5vw] h-auto">
                                <g clipPath="url(#clip0_846_3628)">
                                    <path className="group-hover:fill-white transition-all duration-300" d="M5.50099 17.4969V15.4919C5.50099 15.2139 5.59723 14.9759 5.78971 14.7781C5.98219 14.5803 6.21744 14.4814 6.49547 14.4814H7.50599V11.9791H5.50099C4.95563 11.9791 4.45304 12.1128 3.99323 12.3801C3.53342 12.6475 3.16717 13.011 2.89449 13.4708C2.62181 13.9307 2.48547 14.4332 2.48547 14.9786V17.4969H0.480469V19.9991H2.48547V28.0352H5.50099V19.9991H7.50599L8.50047 17.4969H5.50099Z" fill="#926B4F"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_846_3628">
                                    <rect width="8.02" height="40" fill="white" transform="matrix(1 0 0 -1 0.480469 40)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div onClick={linkYoutubeHandler} className="group hover:bg-[#926B4F] transition-all duration-300 cursor-pointer border-[0.7px] border-nau-nhat rounded-[50%] w-[2.6875vw] h-[2.6875vw] flex items-center justify-center ml-[1.5vw]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none" className="w-[1vw]">
                                <path className="group-hover:fill-white transition-all duration-300" d="M16.6452 1.71831C16.5484 1.38558 16.3587 1.08214 16.095 0.838375C15.8313 0.594608 15.5028 0.41906 15.1425 0.329299C13.8163 6.68179e-08 8.5 0 8.5 0C8.5 0 3.18371 -6.68179e-08 1.85748 0.327548C1.49703 0.417017 1.16842 0.592468 0.904654 0.83628C0.64089 1.08009 0.451257 1.38368 0.354799 1.71656C-7.23771e-08 2.94268 0 5.5 0 5.5C0 5.5 -7.23771e-08 8.05733 0.354799 9.28169C0.550223 9.9578 1.12701 10.4903 1.85748 10.6707C3.18371 11 8.5 11 8.5 11C8.5 11 13.8163 11 15.1425 10.6707C15.8749 10.4903 16.4498 9.9578 16.6452 9.28169C17 8.05733 17 5.5 17 5.5C17 5.5 17 2.94268 16.6452 1.71831ZM6.81138 7.84713V3.15287L11.2132 5.48248L6.81138 7.84713Z" fill="#926B4F"/>
                            </svg>
                        </div>
                        <div onClick={linkTiktokHandler} className="group hover:bg-[#926B4F] transition-all duration-300 cursor-pointer border-[0.7px] border-nau-nhat rounded-[50%] w-[2.6875vw] h-[2.6875vw] flex items-center justify-center ml-[1.5vw]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none" className="w-[1vw]">
                                <path className="group-hover:fill-white transition-all duration-300" d="M16 7.28382C15.8497 7.29878 15.6942 7.30377 15.5387 7.30876C13.8542 7.30876 12.2838 6.49058 11.3612 5.1336V12.5322C11.3612 15.5554 8.81633 18 5.6806 18C2.53968 18 0 15.5504 0 12.5322C0 9.50887 2.54487 7.0643 5.6806 7.0643C5.79981 7.0643 5.91383 7.07428 6.03304 7.07927V9.77329C5.91383 9.75832 5.79981 9.73836 5.6806 9.73836C4.07904 9.73836 2.7781 10.9906 2.7781 12.5322C2.7781 14.0737 4.07904 15.3259 5.6806 15.3259C7.28215 15.3259 8.69712 14.1086 8.69712 12.5671L8.72303 0H11.4027C11.6566 2.31486 13.5899 4.12085 16 4.29047V7.28382Z" fill="#926B4F"/>
                            </svg>
                        </div>
                        <div onClick={linkInstaHandler} className="group hover:bg-[#926B4F] transition-all duration-300 cursor-pointer border-[0.7px] border-nau-nhat rounded-[50%] w-[2.6875vw] h-[2.6875vw] flex items-center justify-center ml-[1.5vw]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="40" viewBox="0 0 17 40" fill="none" className="w-[1vw]">
                                <g clipPath="url(#clip0_846_3638)">
                                    <path className="group-hover:fill-white transition-all duration-300" d="M11.5022 12.9917H5.49473C4.58693 12.9917 3.74321 13.2213 2.96357 13.6806C2.20529 14.1185 1.60721 14.7165 1.16933 15.4748C0.710089 16.2438 0.480469 17.0822 0.480469 17.99V23.9975C0.480469 24.9053 0.710089 25.749 1.16933 26.5286C1.60721 27.2869 2.20529 27.885 2.96357 28.3229C3.74321 28.7821 4.58693 29.0117 5.49473 29.0117H11.5022C12.41 29.0117 13.2484 28.7821 14.0174 28.3229C14.7756 27.885 15.3737 27.2869 15.8116 26.5286C16.2708 25.749 16.5005 24.9053 16.5005 23.9975V17.99C16.5005 17.0822 16.2708 16.2438 15.8116 15.4748C15.3737 14.7165 14.7756 14.1185 14.0174 13.6806C13.2484 13.2213 12.41 12.9917 11.5022 12.9917ZM14.9946 23.9975C14.9946 24.6276 14.8371 25.2123 14.522 25.7516C14.2069 26.291 13.7824 26.7182 13.2484 27.0332C12.7144 27.3483 12.1323 27.5058 11.5022 27.5058H5.49473C4.85393 27.5058 4.26653 27.3483 3.73253 27.0332C3.19853 26.7182 2.774 26.2937 2.45894 25.7597C2.14388 25.2257 1.98635 24.6383 1.98635 23.9975V17.99C1.98635 17.3598 2.14388 16.7778 2.45894 16.2438C2.774 15.7098 3.2012 15.2852 3.74054 14.9702C4.27988 14.6551 4.86461 14.4976 5.49473 14.4976H11.5022C12.1323 14.4976 12.7144 14.6551 13.2484 14.9702C13.7824 15.2852 14.2069 15.7098 14.522 16.2438C14.8371 16.7778 14.9946 17.3598 14.9946 17.99V23.9975ZM8.49047 16.9967C7.76423 16.9967 7.09406 17.1756 6.47996 17.5334C5.86586 17.8912 5.37992 18.3771 5.02214 18.9912C4.66436 19.6053 4.48547 20.2755 4.48547 21.0017C4.48547 21.728 4.66436 22.3981 5.02214 23.0122C5.37992 23.6263 5.86586 24.1123 6.47996 24.47C7.09406 24.8278 7.76423 25.0067 8.49047 25.0067C9.21671 25.0067 9.88688 24.8278 10.501 24.47C11.1151 24.1123 11.601 23.6263 11.9588 23.0122C12.3166 22.3981 12.4955 21.728 12.4955 21.0017C12.4955 20.2755 12.3166 19.6053 11.9588 18.9912C11.601 18.3771 11.1151 17.8912 10.501 17.5334C9.88688 17.1756 9.21671 16.9967 8.49047 16.9967ZM8.49047 23.5008C8.04191 23.5008 7.62539 23.3887 7.24091 23.1644C6.85643 22.9401 6.55205 22.6358 6.32777 22.2513C6.10349 21.8668 5.99135 21.4503 5.99135 21.0017C5.99135 20.5532 6.10349 20.1366 6.32777 19.7522C6.55205 19.3677 6.85643 19.0633 7.24091 18.839C7.62539 18.6147 8.04191 18.5026 8.49047 18.5026C8.93903 18.5026 9.35555 18.6147 9.74003 18.839C10.1245 19.0633 10.4289 19.3677 10.6532 19.7522C10.8774 20.1366 10.9896 20.5532 10.9896 21.0017C10.9896 21.4503 10.8774 21.8668 10.6532 22.2513C10.4289 22.6358 10.1245 22.9401 9.74003 23.1644C9.35555 23.3887 8.93903 23.5008 8.49047 23.5008ZM12.7998 16.1637C12.9494 16.1637 13.0749 16.2144 13.1763 16.3159C13.2778 16.4173 13.3285 16.5428 13.3285 16.6923C13.3285 16.8419 13.2751 16.97 13.1683 17.0768C13.0615 17.1836 12.936 17.237 12.7918 17.237C12.6477 17.237 12.5222 17.1836 12.4154 17.0768C12.3086 16.97 12.2552 16.8419 12.2552 16.6923C12.2552 16.5428 12.3086 16.4173 12.4154 16.3159C12.5222 16.2144 12.6503 16.1637 12.7998 16.1637Z" fill="#926B4F"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_846_3638">
                                    <rect width="16.02" height="40" fill="white" transform="matrix(1 0 0 -1 0.480469 40)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between flex-grow ml-[4.625vw]">
                    <div className="max-w-[19.6875vw]">
                        <h2 className="uppercase text-nau-nhat title18-700-130"> {t('title1')} </h2>
                        <div className="mt-[1.25vw] flex flex-col gap-[0.75vw]">
                            <div className="flex items-center">
                                <div className="relative w-[1.25vw] h-[2.5vw] flex">
                                    <Image fill src="/location.svg" className="object-contain"></Image>
                                </div>
                                <span className="ml-[0.5vw] text-den-2 title16-400-150 max-w-[91%]"> {addr} </span>
                            </div>
                            {phoneArr.map((phone, index) => 
                                <div key={index} className="flex items-center">
                                    <div className="relative w-[1.25vw] h-[1.25vw] flex">
                                        <Image fill src="/call-footer.svg" className="object-contain"></Image>
                                    </div>
                                    <span className="ml-[0.5vw] text-den-2 title16-400-130"> {phone} </span>
                                </div>
                            )}
                        </div>
                    </div>
                    <div>
                        <h2 className="uppercase text-nau-nhat title18-700-130"> {t('title2')} </h2>
                        <div className="mt-[1.25vw] flex flex-col items-baseline gap-[0.75vw]">
                            {menuArr.map((menu, index) => 
                                <span key={index} className="cursor-pointer inline-flex relative text-den-2 title16-400-130 before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-full before:border-b before:border-den-2 before:scale-x-0 before:origin-right before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-left">
                                    {menu}
                                </span>
                            )}
                        </div>
                    </div>
                    <div>
                        <h2 className="uppercase text-nau-nhat title18-700-130"> {t('title3')} </h2>
                        <div className="mt-[1.25vw] flex flex-col gap-[0.75vw]">
                            {serviceArr.map((service, index) => 
                                <span key={index} className="text-den-2 title16-400-130">
                                    {service}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-den-2 border-opacity-40 py-[0.625vw] flex justify-center">
                <span className="text-center title14-400-160 text-den-2">{copyright}</span>
            </div>
                
        </div>
    )
}