//   basePath: process.env.NEXT_PUBLIC_BASE_PATH,
//   assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
const pathPrefix = process.env.NODE_ENV === 'production' ? '/wineup-web' : ''

module.exports = {
  assetPrefix: pathPrefix,
  env: {
    pathPrefix,
  },
}
