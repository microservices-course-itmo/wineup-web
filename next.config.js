const pathPrefix = process.env.NODE_ENV === 'production' ? '/wineup-web' : ''

module.exports = {
  assetPrefix: pathPrefix,
  env: {
    pathPrefix,
  },
  distDir: '_next',
  generateBuildId: async () => {
    if (process.env.BUILD_ID) {
      return process.env.BUILD_ID
    }
    return `${new Date().getTime()}`
  },
}
