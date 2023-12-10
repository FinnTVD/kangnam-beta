import 'server-only'

const dictionaries = {
    vi: () => import('../../dictionaries/vn.json').then((module) => module.default),
    en: () => import('../../dictionaries/en.json').then((module) => module.default),
    kr: () => import('../../dictionaries/kr.json').then((module) => module.default),
    cn: () => import('../../dictionaries/cn.json').then((module) => module.default),
}

export const getDictionary = async (locale) => {
    switch (locale) {
        case 'vi':
            return dictionaries.vi()
        case 'en':
            return dictionaries.en()
        case 'kr':
            return dictionaries.kr()
        case 'cn':
            return dictionaries.cn()
        default:
            return dictionaries.vi()
    }
}
