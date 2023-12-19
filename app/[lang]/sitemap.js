import { categoryHireId, categoryResaleId } from '@/utils'
import getData from '@/utils/getData'
import { hireSM, langSM, mgId, projectSM, resaleSM, ttId, tvId } from '@/utils/sitemapinit'

export default async function sitemap() {
    const [hire, resale, posts, project] = await Promise.all([
        getData(`/property/for-web?take=50&propertyCategoryIds=${categoryHireId}`),
        getData(`/property/for-web?take=50&propertyCategoryIds=${categoryResaleId}`),
        getData(`/post?order=DESC&page=1&take=50&postTypeIds=${ttId}&postTypeIds=${tvId}&postTypeIds=${mgId}`),
        getData(`/project?page=1&take=50`),
    ])

    const listHire = []
    hire?.data?.forEach((e) => {
        const b = []
        e?.translations?.forEach((i) => {
            b.push({
                url: hireSM?.find((h) => i?.languageCode?.toLowerCase()?.includes(h?.code))?.link + i?.slug,
                lastModified: new Date(),
                priority: 0.9,
            })
        })
        return listHire?.push(...b)
    })

    const listResale = []
    resale?.data?.forEach((e) => {
        const b = []
        e?.translations?.forEach((i) => {
            b.push({
                url: resaleSM?.find((h) => i?.languageCode?.toLowerCase()?.includes(h?.code))?.link + i?.slug,
                lastModified: new Date(),
                priority: 0.9,
            })
        })
        return listResale?.push(...b)
    })

    const listPosts = []
    posts?.data?.forEach((e) => {
        const b = []
        e?.translations?.forEach((i) => {
            b.push({
                url: langSM?.find((h) => i?.languageCode?.toLowerCase()?.includes(h?.code))?.link + 'news/' + i?.slug,
                lastModified: new Date(),
                priority: 0.9,
            })
        })
        return listPosts?.push(...b)
    })

    const listProjects = []
    project?.data?.forEach((e) => {
        const b = []
        e?.translations?.forEach((i) => {
            b.push({
                url: projectSM?.find((h) => i?.languageCode?.toLowerCase()?.includes(h?.code))?.link + i?.slug,
                lastModified: new Date(),
                priority: 0.9,
            })
        })
        return listProjects?.push(...b)
    })

    return [
        ...langSM.map((e) => {
            return {
                url: e?.link,
                lastModified: new Date(),
                priority: 1,
            }
        }),
        ...hireSM.map((e) => {
            return {
                url: e?.link,
                lastModified: new Date(),
                priority: 1,
            }
        }),
        ...listHire,
        ...listResale,
        ...listProjects,
        ...resaleSM.map((e) => {
            return {
                url: e?.link,
                lastModified: new Date(),
                priority: 1,
            }
        }),
        ...projectSM.map((e) => {
            return {
                url: e?.link,
                lastModified: new Date(),
                priority: 1,
            }
        }),
        ...langSM.map((e) => {
            return {
                url: e?.link + 'news',
                lastModified: new Date(),
                priority: 0.8,
            }
        }),
        ...listPosts,
        ...langSM.map((e) => {
            return {
                url: e?.link + 'about-us',
                lastModified: new Date(),
                priority: 0.5,
            }
        }),
        ...langSM.map((e) => {
            return {
                url: e?.link + 'contact',
                lastModified: new Date(),
                priority: 0.5,
            }
        }),
        ...langSM.map((e) => {
            return {
                url: e?.link + 'agreements',
                lastModified: new Date(),
                priority: 0.5,
            }
        }),
        ...langSM.map((e) => {
            return {
                url: e?.link + 'deposit',
                lastModified: new Date(),
                priority: 0.5,
            }
        }),
    ]
}
