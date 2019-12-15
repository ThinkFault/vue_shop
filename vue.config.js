const login = require('./mock/login.json')
const menus = require('./mock/menus.json')
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
    },
    before (app) {
      app.post('/login', (req, res) => {
        res.json(login)
      })
      app.get('/menus', (req, res) => {
        res.json(menus)
      })
    }
  }
}
