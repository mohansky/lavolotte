// module.exports = {
//     env: {
//         API_TOKEN: process.env.SNIPCART_KEY,
//     },
//     reactStrictMode: true,
//     images: {
//       formats: ['image/avif', 'image/webp'],
//     }
//   }


  // next.config.js
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  env: {
    API_TOKEN: process.env.SNIPCART_KEY,
},
reactStrictMode: true,
images: {
  formats: ['image/avif', 'image/webp'],
}
});

