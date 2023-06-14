/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["*"],
  },
  reactStrictMode: true,
  styledComponents: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://3.39.67.175:8080/api/:path*",
      },
    ];
  },
};
module.exports = nextConfig;
