const Router = require('koa-router')

const {create, getAvatarById}  = require('../controller/user.controller')
const {verifyUser,handlePasswd} = require('../middleware/user.middleware.js')

const router = new Router({prefix: '/users'})

router.post('/',verifyUser,handlePasswd,create)
router.get('/:user_id/avatar',getAvatarById)

module.exports = router