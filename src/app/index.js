const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const userRouter = require('../router/user.router.js')
const errorHandler = require('./error_handle')

const app = new Koa()

app.use(bodyParser())

// 请求路径中间件
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

// 错误处理
app.on('error',errorHandler)

module.exports = app