const Router = require('koa-router')
const { verifyAuth } = require('../middleware/auth.middleware')
const { receiveAvatar,receivePicture,resizePic } = require('../middleware/file.middleware')
const {saveAvatar,savePicture} = require('../controller/file.controller')

const router = new Router({prefix:'/upload'})
// 头像上传
router.post('/avatar',verifyAuth,receiveAvatar,saveAvatar)
router.post('/picture',verifyAuth,receivePicture,resizePic,savePicture)


module.exports = router