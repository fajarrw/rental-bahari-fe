/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    async redirects() {
        return [
            {
                source: '/admin/dashboard',
                destination: '/admin/dashboard/cars',
                permanent: true
            },
            {
                source: '/',
                destination: '/before_login',
                permanent: false
            }
        ]
    }
}

module.exports = nextConfig
