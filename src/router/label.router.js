const Router = require('koa-router')
const { 
    verifyAuth
 } = require('../middleware/auth.middleware')
const {
    create,
    getLabelList
} = require('../controller/label.controller')

const router  = new Router({prefix: '/labels'})

// 创建新标签
router.post('/',verifyAuth,create)
router.get('/',getLabelList)

module.exports = router