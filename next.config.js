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
            }
        ]
    }
}

module.exports = nextConfig
