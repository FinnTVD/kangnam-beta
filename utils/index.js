import { toast } from 'react-toastify'

const handleCheckParamsLanguage = (lang, href) => {
    switch (lang) {
        case 'vi':
            return href
        case 'en':
            return '/en' + href
        case 'kr':
            return '/kr' + href
        case 'cn':
            return '/cn' + href
        default:
            return '/'
    }
}
const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')

    return `${day}/${month}/${year} - ${hours}:${minutes}`
}

const handleCheckLangCode = (lang) => {
    switch (lang) {
        case 'vi':
            return 'vi_VN'
        case 'en':
            return 'en_US'
        case 'kr':
            return 'ko_KR'
        case 'cn':
            return 'zh_CN'
        default:
            return 'vi_VN'
    }
}

const handleCheckParams = (pathName, dataSlug) => {
    if (!dataSlug || !pathName) return
    let pathNew = pathName?.toString()?.slice(1)?.toLowerCase()

    dataSlug?.data?.forEach((e) => {
        if (e?.translations?.find((i) => i?.alias?.toLowerCase()?.includes(pathNew))) {
            return '&propertyCategoryIds=' + e?.id
        }
    })
    // if (pathName?.includes('buy')) return '&propertyCategoryIds=87dd143a-695b-44f9-94a1-c8a9af862154'
    // if (pathName?.includes('hire')) return '&propertyCategoryIds=05d52397-71a8-4ecf-9a86-ee37965332ef'
    // if (pathName?.includes('resale')) return '&propertyCategoryIds=7fec6f07-be5c-49e1-8ceb-d87ebccaf9a6'
    // return ''
}

const findIdByAlias = (pathName, dataSlug) => {
    if (!dataSlug) return ''
    for (const item of dataSlug) {
        for (const translation of item?.translations) {
            if (translation?.alias?.toLowerCase()?.includes(pathName?.slice(1))) {
                return '&propertyCategoryIds=' + item?.id
            }
        }
    }
    // Trường hợp không tìm thấy khớp nào
    return ''
}

const arrFilter = [
    {
        id: 1,
        translations: [
            {
                langCode: 'vi',
                title: 'Loại hình',
            },
            {
                langCode: 'en',
                title: 'Type',
            },
            {
                langCode: 'kr',
                title: '부동산 유형',
            },
            {
                langCode: 'cn',
                title: '类也',
            },
        ],
        slug: 'propertyTypeIds',
        titleLang: 'propertyTypeIds',
        api: '/property-type',
    },
    {
        id: 2,
        translations: [
            {
                langCode: 'vi',
                title: 'Địa điểm',
            },
            {
                langCode: 'en',
                title: 'Location',
            },
            {
                langCode: 'kr',
                title: '위치',
            },
            {
                langCode: 'cn',
                title: '位',
            },
        ],
        slug: 'propertyAreaTypeIds',
        titleLang: 'propertyAreaTypeIds',
        api: '/property-area-type',
    },
    {
        id: 3,
        translations: [
            {
                langCode: 'vi',
                title: 'Hình thức',
            },
            {
                langCode: 'en',
                title: 'Form',
            },
            {
                langCode: 'kr',
                title: '형태',
            },
            {
                langCode: 'cn',
                title: '形式',
            },
        ],
        slug: 'propertyCategoryIds',
        titleLang: 'propertyCategoryIds',
        api: '/property-category',
    },
    {
        id: 4,
        translations: [
            {
                langCode: 'vi',
                title: 'Khoảng giá',
            },
            {
                langCode: 'en',
                title: 'Price range',
            },
            {
                langCode: 'kr',
                title: '가격 범위',
            },
            {
                langCode: 'cn',
                title: '价格范围',
            },
        ],
        slug: 'price',
        titleLang: 'price',
        api: '/price',
    },
    {
        id: 5,
        translations: [
            {
                langCode: 'vi',
                title: 'Diện tích',
            },
            {
                langCode: 'en',
                title: 'Acreage',
            },
            {
                langCode: 'kr',
                title: '면적',
            },
            {
                langCode: 'cn',
                title: '面积',
            },
        ],
        slug: 'area',
        titleLang: 'area',
        api: '/area',
    },
]
const arrFilterV2 = [
    {
        id: 1,
        translations: [
            {
                langCode: 'vi',
                title: 'Loại hình',
            },
            {
                langCode: 'en',
                title: 'Type',
            },
            {
                langCode: 'kr',
                title: '부동산 유형',
            },
            {
                langCode: 'cn',
                title: '类也',
            },
        ],
        slug: 'propertyTypeIds',
        titleLang: 'propertyTypeIds',
        api: '/property-type',
    },
    {
        id: 2,
        translations: [
            {
                langCode: 'vi',
                title: 'Địa điểm',
            },
            {
                langCode: 'en',
                title: 'Location',
            },
            {
                langCode: 'kr',
                title: '위치',
            },
            {
                langCode: 'cn',
                title: '位',
            },
        ],
        slug: 'propertyAreaTypeIds',
        titleLang: 'propertyAreaTypeIds',
        api: '/property-area-type',
    },
    {
        id: 4,
        translations: [
            {
                langCode: 'vi',
                title: 'Khoảng giá',
            },
            {
                langCode: 'en',
                title: 'Price range',
            },
            {
                langCode: 'kr',
                title: '가격 범위',
            },
            {
                langCode: 'cn',
                title: '价格范围',
            },
        ],
        slug: 'price',
        titleLang: 'price',
        api: '/price',
    },
    {
        id: 5,
        translations: [
            {
                langCode: 'vi',
                title: 'Diện tích',
            },
            {
                langCode: 'en',
                title: 'Acreage',
            },
            {
                langCode: 'kr',
                title: '면적',
            },
            {
                langCode: 'cn',
                title: '面积',
            },
        ],
        slug: 'area',
        titleLang: 'area',
        api: '/area',
    },
]
const handleCheckIsHome = (pathName) => {
    switch (pathName) {
        case '/vi':
            return true
        case '/en':
            return true
        case '/kr':
            return true
        case '/cn':
            return true
        default:
            return false
    }
}

const notifySuccess = (title) =>
    toast.success(title || 'Successful form submission!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
    })
const notifyError = (title) =>
    toast.error(title || 'Something went wrong!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
    })

const scrollToSection = (element) => {
    element.scrollIntoView({
        behavior: 'smooth',
    })
}

const handleListPhone = (str) => {
    if (!str) return
    if (str.split('|')?.length) return str.split('|')
    if (str.split('/')?.length) return str.split('/')
    if (str.split('--')?.length) return str.split('--')
    if (str.split('-')?.length) return str.split('-')
}

const listIdNav = [
    '87dd143a-695b-44f9-94a1-c8a9af862154',
    '7fec6f07-be5c-49e1-8ceb-d87ebccaf9a6',
    '05d52397-71a8-4ecf-9a86-ee37965332ef',
]

const postTypeIdAgreement = '645dc0f1-091a-4ead-87f2-fce21d843c72'
const categoryHireId = '05d52397-71a8-4ecf-9a86-ee37965332ef'
const categoryResaleId = '7fec6f07-be5c-49e1-8ceb-d87ebccaf9a6'
const apiKey = 'c6a8fb5d25f0f32c87d1469f6847388c445850643364b94e'
const slugProject = ['/du-an', '/projects', '/분양', '/项目']
const slugProjectLangCode = [
    {
        slug: '/du-an',
        langCode: 'vi',
    },
    {
        slug: '/projects',
        langCode: 'en',
    },
    {
        slug: '/분양',
        langCode: 'kr',
    },
    {
        slug: '/项目',
        langCode: 'cn',
    },
]

const cityIdDefault = 11 //ha noi
const levelZoomDefault = 8 //zoom mac dinh
const levelZoomDistrictDefault = 11 //zoom mac dinh
const levelZoomWardDefault = 13 //zoom mac dinh

const lngDefault = 105.85379875200005
const latDefault = 21.028354507000074

const renderTitle = (e, lang, message) => {
    return (
        e?.translations?.find((item) => item?.languageCode?.toLowerCase()?.includes(lang))?.name ||
        e?.translations[0]?.name ||
        message 
        // || t?.projects?.filterSecond?.noinfo
    )
}

const renderAddress = (e) => {
    return `${e?.ward}, ${e?.district}, ${e?.city}`
}
const renderHref = (e, lang) => {
    return (
        (lang === 'vi' ? '' : lang + '/') +
        (e?.propertyCategory?.translations?.find((e) => e?.languageCode?.toLowerCase()?.includes(lang))?.alias ||
            'du-an') +
        '/' +
        (e?.translations?.find((e) => e?.languageCode?.toLowerCase()?.includes(lang))?.slug || e?.translations[0]?.slug)
    )
}

const preventRefreshSwr = {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
}

// const preventRefreshSwr = {
//     revalidateOnFocus: false,
//     revalidateOnMount: false,
//     revalidateOnReconnect: false,
//     refreshWhenOffline: false,
//     refreshWhenHidden: false,
//     refreshInterval: 0,
//     revalidateIfStale: false,
// }

const listPriceHire = [
    {
        title: '< 10',
        min: '',
        max: 10,
    },
    {
        title: '10 - 20',
        min: 10,
        max: 20,
    },
    {
        title: '20 - 30',
        min: 20,
        max: 30,
    },
    {
        title: '30 - 40',
        min: 30,
        max: 40,
    },
    {
        title: '40 - 50',
        min: 40,
        max: 50,
    },
    {
        title: '50 - 70',
        min: 50,
        max: 70,
    },
    {
        title: '70 - 100',
        min: 70,
        max: 100,
    },
    {
        title: '100+',
        min: 100,
        max: '',
    },
]
const listPriceResale = [
    {
        title: '< 2',
        min: '',
        max: 2,
    },
    {
        title: '2 - 5',
        min: 2,
        max: 5,
    },
    {
        title: '5 - 10',
        min: 5,
        max: 10,
    },
    {
        title: '10 - 15',
        min: 10,
        max: 15,
    },
    {
        title: '15 - 20',
        min: 15,
        max: 20,
    },
    {
        title: '20+',
        min: 20,
        max: '',
    },
]

const listAreaProject = [
    {
        title: '< 30',
        min: '',
        max: 30,
    },
    {
        title: '30 - 50',
        min: 30,
        max: 50,
    },
    {
        title: '50 - 70',
        min: 50,
        max: 70,
    },
    {
        title: '70 - 100',
        min: 70,
        max: 100,
    },
    {
        title: '100 - 150',
        min: 100,
        max: 150,
    },
    {
        title: '150 - 200',
        min: 150,
        max: 200,
    },
    {
        title: '200 - 250',
        min: 200,
        max: 250,
    },
    {
        title: '250+',
        min: 250,
        max: '',
    },
]
const listAreaProjectP = [
    {
        title: '< 150',
        min: '',
        max: 150,
    },
    {
        title: '150 - 300',
        min: 150,
        max: 300,
    },
    {
        title: '300 - 500',
        min: 300,
        max: 500,
    },
    {
        title: '500 - 750',
        min: 500,
        max: 750,
    },
    {
        title: '750 - 1000',
        min: 750,
        max: 1000,
    },
    {
        title: '1000 - 1500',
        min: 1000,
        max: 1500,
    },
    {
        title: '1500 - 2000',
        min: 1500,
        max: 2000,
    },
    {
        title: '2000+',
        min: 2000,
        max: '',
    },
]
const listSlugNavHire = ['thue', '임대아파트', 'hire', '赁赁']

const originHouseInit = {
    north: [
        {
            title: 'Bắc',
            langCode: 'vi',
        },
        {
            title: 'North',
            langCode: 'en',
        },
        {
            title: 'North',
            langCode: 'kr',
        },
        {
            title: 'North',
            langCode: 'cn',
        },
    ],
    west: [
        {
            title: 'Tây',
            langCode: 'vi',
        },
        {
            title: 'West',
            langCode: 'en',
        },
        {
            title: 'West',
            langCode: 'kr',
        },
        {
            title: 'West',
            langCode: 'cn',
        },
    ],
    east: [
        {
            title: 'Đông',
            langCode: 'vi',
        },
        {
            title: 'East',
            langCode: 'en',
        },
        {
            title: 'East',
            langCode: 'kr',
        },
        {
            title: 'East',
            langCode: 'cn',
        },
    ],
    south: [
        {
            title: 'Nam',
            langCode: 'vi',
        },
        {
            title: 'South',
            langCode: 'en',
        },
        {
            title: 'South',
            langCode: 'kr',
        },
        {
            title: 'South',
            langCode: 'cn',
        },
    ],
    southeast: [
        {
            title: 'Đông Nam',
            langCode: 'vi',
        },
        {
            title: 'Southeast',
            langCode: 'en',
        },
        {
            title: 'Southeast',
            langCode: 'kr',
        },
        {
            title: 'Southeast',
            langCode: 'cn',
        },
    ],
    northeast: [
        {
            title: 'Đông Bắc',
            langCode: 'vi',
        },
        {
            title: 'Northeast',
            langCode: 'en',
        },
        {
            title: 'Northeast',
            langCode: 'kr',
        },
        {
            title: 'Northeast',
            langCode: 'cn',
        },
    ],
    southwest: [
        {
            title: 'Tây Nam',
            langCode: 'vi',
        },
        {
            title: 'Southwest',
            langCode: 'en',
        },
        {
            title: 'Southwest',
            langCode: 'kr',
        },
        {
            title: 'Southwest',
            langCode: 'cn',
        },
    ],
    northwest: [
        {
            title: 'Tây Bắc',
            langCode: 'vi',
        },
        {
            title: 'Northwest',
            langCode: 'en',
        },
        {
            title: 'Northwest',
            langCode: 'kr',
        },
        {
            title: 'Northwest',
            langCode: 'cn',
        },
    ],
}

export {
    handleCheckParamsLanguage,
    formatDateTime,
    handleCheckLangCode,
    handleCheckParams,
    handleCheckIsHome,
    arrFilter,
    arrFilterV2,
    notifyError,
    notifySuccess,
    scrollToSection,
    handleListPhone,
    listIdNav,
    findIdByAlias,
    postTypeIdAgreement,
    categoryHireId,
    categoryResaleId,
    apiKey,
    slugProject,
    cityIdDefault,
    levelZoomDefault,
    levelZoomDistrictDefault,
    levelZoomWardDefault,
    latDefault,
    lngDefault,
    renderTitle,
    renderAddress,
    renderHref,
    preventRefreshSwr,
    listPriceHire,
    listSlugNavHire,
    listPriceResale,
    listAreaProject,
    listAreaProjectP,
    slugProjectLangCode,
    originHouseInit,
}
