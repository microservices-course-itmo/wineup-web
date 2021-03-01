const isProd = process.env.NODE_ENV === 'production'

module.export = {
  //   basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  //   assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  basePath: '/wineup-web',
  assetPrefix: isProd
    ? 'https://cdn.statically.io/gh/microservices-course-itmo/wineup-web/gh-pages/'
    : '',
}
