const bundleAnalyzer = require('@next/bundle-analyzer')
const withOffline = require('next-offline')

const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })

module.exports = withBundleAnalyzer(
  withOffline({
    target: 'serverless',
    dontAutoRegisterSw: true,
    // https://github.com/hanford/next-offline/blob/master/packages/now2-example/next.config.js
    workboxOpts: {
      swDest: 'service-worker.js',
    },
    headers() {
      return [
        {
          source: '/',
          headers: [{ key: 'X-Frame-Options', value: 'SAMEORIGIN' }],
        },
        {
          source: '/(.*)',
          headers: [
            { key: 'X-XSS-Protection', value: '1; mode=block' },
            { key: 'X-Content-Type-Options', value: 'nosniff' },
            { key: 'Referrer-Policy', value: 'no-referrer-when-downgrade' },
            {
              key: 'Feature-Policy',
              value: "geolocation 'self'; microphone 'self'; camera 'self'",
            },
          ],
        },
      ]
    },
  })
)
