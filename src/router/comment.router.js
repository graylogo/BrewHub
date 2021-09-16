const Router = require('koa-router')
const { 
    verifyAuth,
    verifyPermission
 } = require('../middleware/auth.middleware')
const {
    create,
    reply,
    update,
    remove
} = require('../controller/comment.controller')

const router  = new Router({prefix: '/comment'})

router.post('/',verifyAuth,create)
router.post('/:comment_id/reply',verifyAuth,reply)
// 修改评论（只能修改自己发表的评论）
router.patch('/:comment_id',verifyAuth,verifyPermission,update)
// 删除评论
router.delete('/:comment_id',verifyAuth,verifyPermission,remove)

module.exports = router