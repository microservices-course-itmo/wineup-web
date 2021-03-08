const pathPrefix = process.env.NODE_ENV === 'production' ? '/wineup-web' : ''

module.exports = {
  assetPrefix: pathPrefix,
  basePath: '/wineup-web',
  env: {
    pathPrefix,
  },
}
