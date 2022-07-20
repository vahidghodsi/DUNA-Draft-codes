/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const isProduction = process.env.NODE_ENV === "production";

module.exports = withPWA({
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  },
  pwa: {
    disable: !isProduction,
    dest: "public",
    runtimeCaching,
  },
  images: {
    domains: [""],
  },
});
