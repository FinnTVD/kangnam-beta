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
    if (pathName?.includes('buy')) return '&propertyCategoryIds=1c3afd45-f351-407a-96ab-0d8812047b8b'
    if (pathName?.includes('hire')) return '&propertyCategoryIds=804e0d3c-dc23-4382-88e4-9f511341c24a'
    if (pathName?.includes('resale')) return '&propertyCategoryIds=d47b243b-6593-4098-b99e-56151d31add8'
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

export { handleCheckParamsLanguage, formatDateTime, handleCheckLangCode, handleCheckParams, arrFilter }
