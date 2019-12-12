module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://vue_shop_api.test/api', // 要请求的地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
