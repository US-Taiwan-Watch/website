import bundleAnalyzer from '@next/bundle-analyzer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    // 解析 markdown 檔案
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.soundon.fm',
      },
      {
        protocol: 'https',
        hostname: 'ustwcmsstorage.blob.core.windows.net',
      },
    ],
  },
  redirects() {
    return [
      // TODO: 此階段尚未有通知功能
      {
        source: '/:lang/account/notification',
        destination: '/:lang/404',
        permanent: true,
      },
    ]
  },
}

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

export default withBundleAnalyzer(nextConfig)
