//Đa ngôn ngữ : Việt + Anh + Trung + Hàn

// - API Search theo:
// + mua nhà
// + thuê nhà
// +dự án
// -------------------------------------

// - API tiền tệ
// -------------------------------------

// - API bộ lọc của danh sách dự án, lọc theo:
// + Loại hình
// + Địa điểm
// + Cho thuê
// + Mua lại
// Hỗ trợ phân trang

const apiHomePage = {
    meta: {
        title: '',
        description: '',
        background: {
            src: '/image',
            alt: '',
        },
    },
    header: {
        logo: {
            src: '/image',
            alt: '',
        },
        navbar: [
            'Trang chủ',
            'Về KANGNAM',
            'Dự án',
            'Kí gửi bất động sản',
            'Bán lại',
            'Thỏa thuận & Pháp lí',
            'Tin tức',
        ],
        slideBanner: [
            {
                src: '/image',
                alt: '',
            },
        ],
        slogan: 'An tâm với 100% bất động sản được xác thực tại KANGNAM',
        title: 'Lựa Chọn Căn Nhà Ưng Ý Của Bạn',
        suggest: {
            title: 'Gợi ý:',
            listItem: ['vinhomes central park', 'lumiere boulevard', 'glory heights'],
        },
        categoryType: [
            {
                icon: {
                    src: '/image',
                    alt: '',
                },
                title: 'Phân xưởng',
            },
            // Admin tự chọn được loại hình, em muốn admin chỉ chọn được tối đa 5 cái(categoryType.length<=5)
        ],
        phoneNumber: '0637 858 974',
    },
    section1: {
        subTitle: 'CÂU CHUYỆN THƯƠNG HIỆU',
        title: 'Chúng Tôi Là Ai',
        description:
            'Công ty Cổ phần bất động sản Kangnam là đơn vị môi giới bất động sản chuyên nghiệp, chuyên phân phối đa dạng các phân khúc bất động sản trải dài khắp miền Bắc và miền Trung với đội ngũ chuyên viên môi giới giày dạn kinh nghiệm được đào tạo bài bản',
        backgroundPrimary: {
            src: '/image',
            alt: '',
        },
        backgroundSecond: {
            src: '/image',
            alt: '',
        },
        backgroundThird: {
            src: '/image',
            alt: '',
        },
        backgroundFourth: {
            src: '/image',
            alt: '',
        },
        service: [
            {
                icon: {
                    src: '/image',
                    alt: '',
                },
                title: 'Phân xưởng',
            },
            //em muốn admin chỉ thêm được tối đa 3 cái (service.length<=3)
        ],
    },
    section2: {
        title: 'Dự án của chúng tôi',
        filter: [
            {
                title: 'Loại hình',
                type: ['Nhà mặt phố', 'Chung cư', 'Văn phòng', 'Phân xưởng', 'Đất nền'],
            },
            {
                title: 'Địa điểm',
                type: [
                    'Hà nội',
                    'Hà nam',
                    'TP. Hồ Chí Minh',
                    'Nghệ An',
                    'Quảng Ninh',
                    'Hà Tĩnh',
                    'Sơn La',
                    'Đắk Lắk',
                    'Lâm Đồng',
                    'Ninh Thuận',
                ],
            },
            {
                title: 'Cho thuê',
                type: [
                    'Thuê căn hộ',
                    'Thuê Sinh Viên',
                    'Thuê nhà phố',
                    'Thuê Studio',
                    'Thuê đất nền',
                    'Thuê Office-tel',
                ],
            },
            {
                title: 'Mua lại',
                type: ['Căn hộ', 'Nhà phố', 'Đất nền', 'Studio', 'Sinh Viên', 'Office-tel'],
            },
        ],
    },
    section3: {
        backgroundImage: {
            src: '/image',
            alt: '',
        },
        title: 'Kí gửi nhà đất',
        description:
            'Chúng tôi cung cấp dịch vụ kí gửi bất động sản, đáp ứng nhu cầu bán hoặc cho thuê tài sản của quý khách.',
        criteria: [
            {
                icon: {
                    src: '/image',
                    alt: '',
                },
                title: 'Đặt khách hàng làm trọng tâm',
            },
            //em muốn admin chỉ thêm được tối đa 3 cái (criteria.length<=3)
        ],
    },
    section4: {
        subTitle: 'Tổng hợp các dự án',
        title: 'Dự án nổi bật',
        backgroundImage: {
            src: '/image',
            alt: '',
        },
    },
    section5: {
        backgroundImage: {
            src: '/image',
            alt: '',
        },
        title: 'Nổi bật theo khu vực',
    },
    section6: {
        backgroundImage: {
            src: '/image',
            alt: '',
        },
        subTitle: 'Tổng hợp các dự án',
        title: 'Đối tác của chúng tôi',
        listPartner: [{ src: '', alt: '' }],
    },
    section7: {
        subTitle: 'Tổng hợp các dự án',
        title: 'Tin tức mới nhất',
    },
}
