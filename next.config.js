/** @type {import('next').NextConfig} */

const nextConfig = {
    // images: {
    //     formats: ['image/avif', 'image/webp'],
    //     minimumCacheTTL: 60,
    //     remotePatterns: [
    //         {
    //             protocol: 'https',
    //             hostname: 'kangnam-okhub.s3.ap-southeast-1.amazonaws.com',
    //         },
    //         {
    //             protocol: 'https',
    //             hostname: 'd1zo9jo0ujl2il.cloudfront.net',
    //         },
    //     ],
    // },
    images: {
        loader: 'custom',
        loaderFile: './loader.js',
    },
    compiler: {
        removeConsole: true,
    },
    // Use the CDN in production and localhost for development.
    // assetPrefix: isProd ? 'https://d1zo9jo0ujl2il.cloudfront.net' : undefined,
}

module.exports = nextConfig
