module.exports = (ctx) => {
  return {
    map: ctx.env === 'dev',
    plugins: {
      'postcss-easy-import': {
        extensions: ['.css', '.pcss'],
      },
      'postcss-rgb': {},
      'postcss-inline-svg': {
        removeFill: true,
        paths: ['./src/assets/images/icons']
      },
      'precss': {},
      'postcss-combine-media-query': ctx.env === 'prod' ? {} : false,
      cssnano: ctx.env === 'prod' ? {} : false
    }
  }
}
