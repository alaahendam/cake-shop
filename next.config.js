// next.config.js

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.*.com",
      },
    ],
    domains: ["res.onrender.com"],
  },
};

module.exports = nextConfig;
