const handleCheckParamsLanguage = (lang, href) => {
    switch (lang) {
        case 'vn':
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
        case 'vn':
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
export { handleCheckParamsLanguage, formatDateTime, handleCheckLangCode }
