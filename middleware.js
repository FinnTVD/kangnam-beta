// import createMiddleware from 'next-intl/middleware'

// export default createMiddleware({
//     // A list of all locales that are supported
//     locales: ['vn', 'en', 'kr', 'ch'],

//     // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
//     defaultLocale: 'vn',
// })

// export const config = {
//     // Skip all paths that should not be internationalized
//     matcher: ['/((?!api|_next|.*\\..*).*)'],
// }
import { NextResponse } from 'next/server'

const defaultLocale = 'vn'
let locales = ['en', 'kr', 'ch']

export function middleware(request) {
    // Check if there is any supported locale in the pathname
    const pathname = request.nextUrl.pathname

    // Check if the default locale is in the pathname
    if (pathname.startsWith(`/${defaultLocale}/`) || pathname === `/${defaultLocale}`) {
        // e.g. incoming request is /en/products
        // The new URL is now /products
        return NextResponse.redirect(
            new URL(pathname.replace(`/${defaultLocale}`, pathname === `/${defaultLocale}` ? '/' : ''), request.url),
        )
    }

    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
    )

    if (pathnameIsMissingLocale) {
        // We are on the default locale
        // Rewrite so Next.js understands

        // e.g. incoming request is /products
        // Tell Next.js it should pretend it's /en/products
        return NextResponse.rewrite(new URL(`/${defaultLocale}${pathname}`, request.url))
    }
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|images|favicon.ico).*)',
    ],
}
