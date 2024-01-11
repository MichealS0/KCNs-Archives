/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withSitemap = require('next-sitemap');

module.exports = withSitemap({
  sitemap: {
    hostname: 'https://kcnarchives.vercel.app',
  },
});

module.exports = nextConfig;
