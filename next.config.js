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
  },
};

module.exports = nextConfig;
