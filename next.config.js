/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://neuma.iptime.org:8080/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
