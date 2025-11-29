/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    images:{
        formats:["image/webp"]
    },
    env: {
        AZAMAZA_API: process.env.AZAMAZA_API,
    },
}

module.exports = nextConfig
