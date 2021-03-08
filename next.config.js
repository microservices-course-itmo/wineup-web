const pathPrefix = process.env.NODE_ENV === 'production' ? '' : ''

module.exports = {
  assetPrefix: pathPrefix,
  env: {
    pathPrefix,
  },
}
