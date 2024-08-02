/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avataaars.io',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig
