import Image from "next/image"

export default function Story() {
    const description = 'Ra đời chính thức từ năm 2018, Kangnam là công ty công nghệ đầu tiên ở Đông Nam Á trong lĩnh vực môi giới bất động sản. Tại Kangnam, chúng tôi sử dụng công nghệ giúp quá trình mua bán được dễ dàng hơn và xây dựng lòng tin cho khách hàng thông qua việc cung cấp các công cụ so sánh giá bằng cách sử dụng hệ thống phân tích dữ liệu thị trường, theo dõi danh sách tài sản đang niêm yết, kết hợp với công nghệ truyền thông tương tác, quản lý giao dịch trực tuyến để mang lại giá trị tốt nhất cho người mua và người bán nhà. Đồng thời, Kangnam còn trang bị cho các môi giới hệ thống quản lý khách hàng (Smart CRM) và cơ sở dữ liệu, nhằm mục đích trở thành điểm đến cho mọi nhu cầu liên quan đến chỗ ở.'
    return(
        <section className="relative flex justify-between items-center px-120 pt-[1.25vw] pb-[6.125vw]">
            <div className="flex-col w-[41.625vw]">
                <div>
                    <span data-aos="fade-up" className='sub-title'>Cậu chuyện thương hiệu</span>
                    <h2 data-aos="fade-up" data-aos-delay="300" className='title56 text-den mt-[0.125vw]'>Giới thiệu về Kangnam</h2>
                </div>
                <span data-aos="fade-up" data-aos-delay="600" className="mt-[1vw] text-den title16-400-150 inline-block">{description}</span>
            </div>
            <div data-aos="fade-left" className="relative w-[32.125vw] h-[30.6875vw]">
                <Image fill src="/about-us-logo.svg" className="object-contain"></Image>
            </div>
            <Image fill src="/partner-bg.jpg" className="top-0 left-0 z-[-2] opacity-20"></Image>
            <div className="bg-opacity-20 z-[-1] absolute top-0 left-0 w-full h-full" style={{background: "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 53.44%, #FFF 100%)"}}></div>
        </section>
    )
}