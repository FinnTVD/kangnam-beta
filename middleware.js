import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['vn', 'en', 'kr', 'ch'],

    // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
    defaultLocale: 'vn',
})

export const config = {
    // Skip all paths that should not be internationalized
    matcher: ['/((?!api|_next|.*\\..*).*)'],
}
