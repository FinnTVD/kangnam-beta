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
            break
    }
}

export { handleCheckParamsLanguage }
