const pathPrefix = process.env.NODE_ENV === 'production' ? '/web' : ''

module.exports = {
  assetPrefix: pathPrefix,
  env: {
    pathPrefix,
  },
}
