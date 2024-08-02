const path = require('path')

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
    webpack: (config) => {
        config.resolve.alias['@public'] = path.resolve(__dirname, 'public')
        config.resolve.alias['@assets'] = path.resolve(__dirname, 'src/app/_assets')
        config.resolve.alias['@components'] = path.resolve(__dirname, 'src/app/_components')
        config.resolve.alias['@constants'] = path.resolve(__dirname, 'src/app/_constants')
        config.resolve.alias['@hooks'] = path.resolve(__dirname, 'src/app/_hooks')
        config.resolve.alias['@layouts'] = path.resolve(__dirname, 'src/app/_layouts')
        config.resolve.alias['@modules'] = path.resolve(__dirname, 'src/app/_modules')
        config.resolve.alias['@serviceModules'] = path.resolve(__dirname, 'src/app/_serviceModules')
        config.resolve.alias['@store'] = path.resolve(__dirname, 'src/app/_store')
        config.resolve.alias['@styles'] = path.resolve(__dirname, 'src/app/_styles')
        config.resolve.alias['@utils'] = path.resolve(__dirname, 'src/app/_utils')
        config.resolve.alias['@api'] = path.resolve(__dirname, 'src/app/_api')
        config.resolve.alias['@app'] = path.resolve(__dirname, 'src/app')
        return config
    },
}

module.exports = nextConfig
