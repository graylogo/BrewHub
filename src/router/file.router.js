const Router = require('koa-router')
const { verifyAuth } = require('../middleware/auth.middleware')
const { receiveAvatar } = require('../middleware/file.middleware')
const {saveAvatar} = require('../controller/file.controller')

const router = new Router({prefix:'/upload'})
// 头像上传
router.post('/avatar',verifyAuth,receiveAvatar,saveAvatar)


module.exports = router