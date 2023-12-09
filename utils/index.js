import { toast } from 'react-toastify'

const handleCheckParamsLanguage = (lang, href) => {
    switch (lang) {
        case 'vi':
            return href
        case 'en':
            return '/en' + href
        case 'kr':
            return '/kr' + href
        case 'ch':
            return '/ch' + href
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
        case 'ch':
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
        title: 'Loại hình',
        slug: 'propertyTypeIds',
        api: '/property-type',
    },
    {
        id: 2,
        title: 'Địa điểm',
        slug: 'propertyAreaTypeIds',
        api: '/property-area-type',
    },
    {
        id: 3,
        title: 'Hình thức',
        slug: 'propertyCategoryIds',
        api: '/property-category',
    },
    {
        id: 4,
        title: 'Khoảng giá',
        slug: 'price',
        api: '/price',
    },
    {
        id: 5,
        title: 'Diện tích',
        slug: 'area',
        api: '/area',
    },
]
const arrFilterV2 = [
    {
        id: 1,
        title: 'Loại hình',
        slug: 'propertyTypeIds',
        api: '/property-type',
    },
    {
        id: 2,
        title: 'Địa điểm',
        slug: 'propertyAreaTypeIds',
        api: '/property-area-type',
    },
    {
        id: 4,
        title: 'Khoảng giá',
        slug: 'price',
        api: '/price',
    },
    {
        id: 5,
        title: 'Diện tích',
        slug: 'area',
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
        case '/ch':
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
const apiKey = 'c6a8fb5d25f0f32c87d1469f6847388c445850643364b94e'
const slugProject = ['/du-an', '/projects', '/분양', '/프로젝트']

const cityIdDefault = 11 //ha noi
const levelZoomDefault = 8 //zoom mac dinh
const levelZoomDistrictDefault = 11 //zoom mac dinh
const levelZoomWardDefault = 13 //zoom mac dinh

const lngDefault = 105.85379875200005
const latDefault = 21.028354507000074

const renderTitle = (e, lang, message) => {
    return (
        e?.translations?.find((item) => item?.languageCode?.toLowerCase()?.includes(lang === 'ch' ? 'cn' : lang))
            ?.name ||
        e?.translations[0]?.name ||
        message ||
        'Chưa có thông tin!'
    )
}

const renderAddress = (e) => {
    return `${e?.ward}, ${e?.district}, ${e?.city}`
}
const renderHref = (e, lang) => {
    return (
        (lang === 'vi' ? '' : lang + '/') +
        (e?.propertyCategory?.translations?.find((e) =>
            e?.languageCode?.toLowerCase()?.includes(lang === 'ch' ? 'cn' : lang),
        )?.alias || 'du-an') +
        '/' +
        (e?.translations?.find((e) => e?.languageCode?.toLowerCase()?.includes(lang === 'ch' ? 'cn' : lang))?.slug ||
            e?.translations[0]?.slug)
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
        min: 0,
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
        title: '100+',
        min: 100,
        max: 100,
    },
]
const listPriceResale = [
    {
        title: '< 2',
        min: 0,
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
        max: 20,
    },
]

const listAreaProject = [
    {
        title: '< 30',
        min: 0,
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
        max: 250,
    },
]
const listSlugNavHire = ['thue', '임대아파트', 'hire', '赁赁']

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
}
