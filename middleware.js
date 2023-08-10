import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['vn', 'en', 'kr', 'ch'],

    // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
    defaultLocale: 'vn',
    domains: [
        {
            domain: 'localhost:3000/',
            defaultLocale: 'vn',
            // Optionally restrict the locales managed by this domain. If this
            // domain receives requests for another locale (e.g. us.example.com/fr),
            // then the middleware will redirect to a domain that supports it.
            locales: ['vn', 'en', 'kr', 'ch'],
        },
    ],
})

export const config = {
    // Skip all paths that should not be internationalized
    matcher: ['/((?!api|_next|.*\\..*).*)'],
}
