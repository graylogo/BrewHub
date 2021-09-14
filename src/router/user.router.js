const Router = require('koa-router')

const {create}  = require('../controller//user.controller')
const {verifyUser} = require('../middleware/user.middleware')

const router = new Router({prefix: '/users'})

router.post('/',verifyUser,create)

module.exports = router