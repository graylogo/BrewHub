const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const errorHandler = require('./error_handle')
const useRoutes = require('../router')

const app = new Koa()

app.use(bodyParser())

// 请求路径中间件
// useRoutes(app)   //如果要以app.开头来写，就需要使用this的隐式绑定
app.useRoutes = useRoutes
app.useRoutes()

// 错误处理
app.on('error',errorHandler)

module.exports = app