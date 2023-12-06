// Note : To required('next-pwa') you should install that package as explain
// above. If you miss that please install it with npm i next-pwa command.

const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
    buildExcludes: [/middleware-manifest.json$/]
});

const nextConfig = withPWA({
    reactStrictMode: true,
    swcMinify: true,
});

module.exports = nextConfig;