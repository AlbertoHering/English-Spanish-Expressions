module.exports = {
    devServer: {
      proxy: {
        '^/api': {
          target: 'http://api:3080',
          changeOrigin: true
        },
      }
    }
  }