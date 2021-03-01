//   basePath: process.env.NEXT_PUBLIC_BASE_PATH,
//   assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
const webpack = require('webpack')

const isProd = (process.env.NODE_ENV || 'production') === 'production'

const assetPrefix = isProd ? '/wineup-web' : ''

module.exports = {
  exportPathMap: () => ({
    '/': { page: '/' },
    '/login': { page: '/login' },
    '/favorites': { page: '/favorites' },
    '/profile': { page: '/profile' },
  }),
  assetPrefix,
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
      })
    )

    return config
  },
}
