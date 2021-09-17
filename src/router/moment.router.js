const Router = require('koa-router')

const {
    create,
    getMomentById,
    list,
    deleteById,
    update,
    addLabelToMoment
} = require('../controller/moment.controller.js')

const {
    verifyAuth,
    verifyPermission
} = require('../middleware/auth.middleware.js')

const {
    checkLabel
} = require('../middleware/label.middleware')
const router = new Router({prefix:'/moment'})

router.post('/',verifyAuth,create)
// TODO 查询特定用户的所有动态
router.get('/',list)
router.get('/:moment_id',getMomentById)
router.patch('/:moment_id',verifyAuth,verifyPermission,update)
router.delete('/:moment_id',verifyAuth,verifyPermission,deleteById)
// 发表动态的时候添加标签
router.post('/:moment_id/labels',verifyAuth,verifyPermission,checkLabel,addLabelToMoment)


module.exports = router