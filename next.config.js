/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['*'],
    },
    reactStrictMode: true,
    styledComponents: true,
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: "http://neuma.iptime.org:8080/api/:path*",
            },
        ];
    },
}
module.exports = nextConfig;
