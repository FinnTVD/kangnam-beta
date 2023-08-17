
'use client'
import Image from "next/image"

export default function Teams({t}) {
    const description = 'Ra đời chính thức từ năm 2018, Kangnam là công ty công nghệ đầu tiên ở Đông Nam Á trong lĩnh vực môi giới bất động sản. Tại Kangnam, chúng tôi sử dụng công nghệ giúp quá trình mua bán được dễ dàng hơn và xây dựng lòng tin cho khách hàng thông qua việc cung cấp các công cụ so sánh giá bằng cách sử dụng hệ thống phân tích dữ liệu thị trường, theo dõi danh sách tài sản đang niêm yết, kết hợp với công nghệ truyền thông tương tác, quản lý giao dịch trực tuyến để mang lại giá trị tốt nhất cho người mua và người bán nhà. Đồng thời, Kangnam còn trang bị cho các môi giới hệ thống quản lý khách hàng (Smart CRM) và cơ sở dữ liệu, nhằm mục đích trở thành điểm đến cho mọi nhu cầu liên quan đến chỗ ở.'
    return(
        <section className="flex justify-end items-center px-120 pt-[6.125vw] pb-[9.5625vw] relative">
            <div className="flex-col w-[41.625vw]">
                <div>
                    <span data-aos="fade-up" className='sub-title'>{t.aboutUsTeams.subtitle}</span>
                    <h2 data-aos="fade-up" className='title56 text-den mt-[0.125vw]'>{t.aboutUsTeams.title}</h2>

                </div>
                <span
                    data-aos='fade-up'
                    className='mt-[1vw] text-den title16-400-150 inline-block'
                >
                    {description}
                </span>
            </div>
            <Image
                data-aos='zoom-out'
                data-aos-anchor-placement='top-center'
                fill
                src='/images/about-us-team-bg.png'
                className='object-cover top-0 left-0 z-[-1]'
            ></Image>
        </section>
    )
}
