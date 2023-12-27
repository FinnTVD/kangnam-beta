import { NextResponse } from 'next/server'

const defaultLocale = 'vi'
let locales = ['en', 'kr', 'cn']

export function middleware(request) {
    // Check if there is any supported locale in the pathname
    const nextUrl = request.nextUrl
    const pathname = nextUrl.pathname
    // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
    // If you have one
    if (
        [
            '/manifest.json',
            '/favicon.ico',
            '/robots.txt',
            // Your other files in `public`
        ].includes(pathname)
    )
        return

    // Check if the default locale is in the pathname
    if (pathname.startsWith(`/${defaultLocale}/`) || pathname === `/${defaultLocale}`) {
        // e.g. incoming request is /en/products
        // The new URL is now /products
        // nextUrl.pathname =
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

        if (nextUrl.searchParams) {
            const newUrl = new URL(`/${defaultLocale}${pathname}`, request.url)
            newUrl.search = nextUrl.searchParams.toString()
            return NextResponse.rewrite(newUrl)
        }

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
