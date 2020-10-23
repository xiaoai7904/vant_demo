module.exports = {
    plugins: {
      'postcss-pxtorem': {
        rootValue ({ file }) {
          return file.indexOf('vant/lib') !== -1 ? 37.5 : 75
        },
        propList: ['*']
      }
    }
  }