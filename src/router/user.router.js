const Router = require('koa-router')

const {create}  = require('../controller/user.controller')
const {verifyUser,handlePasswd} = require('../middleware/user.middleware.js')

const router = new Router({prefix: '/users'})

router.post('/',verifyUser,handlePasswd,create)

module.exports = router