const { PARAMS_IS_INCORRECT } = require('../constants/error_types')
const {
    create,
    getMomentById,
    list,
    update,
    deleteById
} = require('../service/moment.service')

class momentController{
    async create(ctx,next){
        // 1. 获取用户传递的动态信息
        const {connect} = ctx.request.body
        const {id} = ctx.user

        // 2. 数据库插入操作
        const result = await create(connect,id)
        // 3. 执行成功的返回
        ctx.body = result
    }
    async getMomentById(ctx,next){
        const {moment_id} = ctx.params
        const result = await getMomentById(moment_id)
        if(!result) return ctx.app.emit('error',new Error(),ctx)
        ctx.body = result
    }
    async list(ctx,next){
        const {pageNum,pageSize} = ctx.request.query
        // 校验传参是否正确
        if(pageNum<1) return ctx.app.emit('error',new Error(PARAMS_IS_INCORRECT),ctx)
        ctx.body = await list(pageNum-1,pageSize)
    }
    async update(ctx,next){
        const {moment_id} = ctx.params
        const {content} = ctx.request.body
        const result = await update(moment_id,content)
        
        if(!result) return ctx.app.emit('error',new Error(),ctx)
        ctx.body = result
    }
    async deleteById(ctx,next){
        const {moment_id} = ctx.params
        const result = await deleteById(moment_id)
        if(!result) return ctx.app.emit('error',new Error(),ctx)
        ctx.body = result
    }
}

module.exports = new momentController()