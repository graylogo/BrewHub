const Router = require('koa-router')

const {
    login,
    success
} = require('../controller/auth.controller.js')

const {
    verifyPasswd,
    verifyAuth
} = require('../middleware/auth.middleware.js')

const router = new Router()

router.post('/login',verifyPasswd,login)
router.post('/test',verifyAuth,success)
module.exports = router