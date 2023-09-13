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

const handleCheckParams = (pathName) => {
    if (pathName?.includes('buy')) return '&propertyCategoryIds=823a2e96-0913-47a2-a25c-780eb911434f'
    if (pathName?.includes('hire')) return '&propertyCategoryIds=013b523f-e340-4e7e-80a6-99096a7ce3fe'
    if (pathName?.includes('resale')) return '&propertyCategoryIds=74caa33c-64dc-4d16-a9c7-b730ae377b75'
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
}
