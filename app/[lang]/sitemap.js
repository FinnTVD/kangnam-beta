export default async function sitemap() {
    // const posts = await getData(GET_POSTS)
    // const arrPosts = posts?.data?.posts?.nodes?.map((e) => {
    //   return {
    //     url: `${process.env.DOMAIN}/${e?.slug}`,
    //     lastModified: e?.date,
    //     priority: 0.8,
    //   }
    // })

    return [
        {
            url: process.env.DOMAIN,
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: `${process.env.DOMAIN}en`,
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: `${process.env.DOMAIN}kr`,
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: `${process.env.DOMAIN}ch`,
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: `${process.env.DOMAIN}du-an`,
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: `${process.env.DOMAIN}kr/프로젝트`,
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: `${process.env.DOMAIN}ban-lai`,
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: `${process.env.DOMAIN}kr/재판매`,
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: `${process.env.DOMAIN}mua-lai`,
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: `${process.env.DOMAIN}kr/획득`,
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: `${process.env.DOMAIN}thue`,
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: `${process.env.DOMAIN}kr/임대`,
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: `${process.env.DOMAIN}about-us`,
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: `${process.env.DOMAIN}en/about-us`,
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: `${process.env.DOMAIN}kr/about-us`,
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: `${process.env.DOMAIN}ch/about-us`,
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: `${process.env.DOMAIN}news`,
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: `${process.env.DOMAIN}en/news`,
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: `${process.env.DOMAIN}kr/news`,
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: `${process.env.DOMAIN}ch/news`,
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: `${process.env.DOMAIN}contact`,
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: `${process.env.DOMAIN}en/contact`,
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: `${process.env.DOMAIN}kr/contact`,
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: `${process.env.DOMAIN}ch/contact`,
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: `${process.env.DOMAIN}deposit`,
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: `${process.env.DOMAIN}en/deposit`,
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: `${process.env.DOMAIN}kr/deposit`,
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: `${process.env.DOMAIN}ch/deposit`,
            lastModified: new Date(),
            priority: 0.9,
        },
    ]
}
