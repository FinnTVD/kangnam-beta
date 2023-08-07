import Image from "next/image"

export default function Footer() {
    const addr = "Villa e11, The Manor, KĐT mới Mỹ Đình - Mễ Trì, Nam từ Liêm, Hà Nội";
    const phoneArr = ['0637 858 974', '0337 858 892', '0837 858 357'];
    const menuArr = ['Trang chủ', 'Về KANGNAM', 'Dự án', 'Ký gửi nhà đất', 'Thỏa thuận & pháp lý', 'Tin tức'];
    const serviceArr = ['Dự án mới', 'Thiết kế nhà đẹp', 'Ký gửi bất động sản'];
    const copyright= "© 2023 Copyright. Powered by OKHUB Viet Nam"
    return(
        <div className="bg-[#FBF7F2]">
            <div className="py-[5vw] px-[7.5625vw] flex">
                <div>
                    <div className="relative w-[24.0625vw] h-[6.625vw]">
                        <Image fill src="logoKangnam.svg" className="top-0 left-0 object-contain"></Image>
                    </div>
                    <div className="flex mt-[2.5vw]">
                        <div className="border-[0.7px] border-nau-nhat rounded-[50%] w-[2.6875vw] h-[2.6875vw] flex items-center justify-center">
                            <div className="relative w-[0.5vw] h-full flex">
                                <Image fill src="facebook.svg" className="w-full h-full object-contain"></Image>
                            </div>
                        </div>
                        <div className="border-[0.7px] border-nau-nhat rounded-[50%] w-[2.6875vw] h-[2.6875vw] flex items-center justify-center ml-[1.5vw]">
                            <div className="relative w-[1vw] h-full flex">
                                <Image fill src="youtube.svg" className="w-full h-full object-contain"></Image>
                            </div>
                        </div>
                        <div className="border-[0.7px] border-nau-nhat rounded-[50%] w-[2.6875vw] h-[2.6875vw] flex items-center justify-center ml-[1.5vw]">
                            <div className="relative w-[1vw] h-full flex">
                                <Image fill src="tiktok.svg" className="w-full h-full object-contain"></Image>
                            </div>
                        </div>
                        <div className="border-[0.7px] border-nau-nhat rounded-[50%] w-[2.6875vw] h-[2.6875vw] flex items-center justify-center ml-[1.5vw]">
                            <div className="relative w-[1vw] h-full flex">
                                <Image fill src="instagram.svg" className="w-full h-full object-contain"></Image>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between flex-grow ml-[4.625vw]">
                    <div className="max-w-[19.6875vw]">
                        <h2 className="text-nau-nhat title18-700-130 uppercase"> Liên hệ </h2>
                        <div className="mt-[1.25vw] flex flex-col gap-[0.75vw]">
                            <div className="flex">
                                <div className="relative w-[1.25vw] h-[2.5vw] flex">
                                    <Image fill src="location.svg" className="object-contain"></Image>
                                </div>
                                <span className="ml-[0.5vw] text-den-2 title16-400-150 max-w-[91%]"> {addr} </span>
                            </div>
                            {phoneArr.map((phone) => 
                                <div className="flex">
                                    <div className="relative w-[1.25vw] h-[1.25vw] flex">
                                        <Image fill src="call.svg" className="object-contain"></Image>
                                    </div>
                                    <span className="ml-[0.5vw] text-den-2 title16-400-130"> {phone} </span>
                                </div>
                            )}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-nau-nhat title18-700-130 uppercase"> Điều hướng chung </h2>
                        <div className="mt-[1.25vw] flex flex-col gap-[0.75vw]">
                            {menuArr.map((menu) => 
                                <span className="text-den-2 title16-400-130">
                                    {menu}
                                </span>
                            )}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-nau-nhat title18-700-130 uppercase"> Dịch vụ </h2>
                        <div className="mt-[1.25vw] flex flex-col gap-[0.75vw]">
                            {serviceArr.map((service) => 
                                <span className="text-den-2 title16-400-130">
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