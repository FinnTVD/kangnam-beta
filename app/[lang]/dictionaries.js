import 'server-only'

const dictionaries = {
    vn: () => import('../../dictionaries/vn.json').then((module) => module.default),
    en: () => import('../../dictionaries/en.json').then((module) => module.default),
    kr: () => import('../../dictionaries/kr.json').then((module) => module.default),
    ch: () => import('../../dictionaries/ch.json').then((module) => module.default),
}

export const getDictionary = async (locale) => {
    switch (locale) {
        case 'vn':
            return dictionaries.vn()
        case 'en':
            return dictionaries.en()
        case 'kr':
            return dictionaries.kr()
        case 'ch':
            return dictionaries.ch()
        default:
            return dictionaries.vn()
    }
}
