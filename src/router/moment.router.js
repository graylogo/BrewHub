const Router = require('koa-router')

const {
    create,
    getMomentById,
    list
} = require('../controller/moment.controller.js')

const {
    verifyAuth
} = require('../middleware/auth.middleware.js')

const router = new Router({prefix:'/moment'})

router.post('/',verifyAuth,create)
router.get('/',list)
router.get('/:moment_id',getMomentById)

module.exports = router