module.exports = (ctx) => {
  return {
    map: ctx.env === 'development',
    plugins: {
      'postcss-easy-import': {
        extensions: ['.css', '.pcss'],
      },
      'postcss-rgb': {},
      'postcss-inline-svg': {
        removeFill: true,
        paths: ['./src/images/icons']
      },
      'precss': {},
      'postcss-combine-media-query': ctx.env === 'production' ? {} : false,
      cssnano: ctx.env === 'production' ? {} : false
    }
  }
}
