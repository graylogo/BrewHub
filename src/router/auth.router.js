const Router = require('koa-router')

const {
    login
} = require('../controller/auth.controller.js')

const {
    verifyPasswd
} = require('../middleware/auth.middleware.js')

const router = new Router()

router.post('/login',verifyPasswd,login)

module.exports = router