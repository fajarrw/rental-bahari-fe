/** @type {import('next').NextConfig} */
const nextConfig = {
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
