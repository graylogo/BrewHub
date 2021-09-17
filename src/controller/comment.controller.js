const {
    create,
    reply,
    update,
    remove,
    list
} = require('../service/comment.service')

class commentController{
    async create(ctx,next){
       try {
        const {content,moment_id} = ctx.request.body
        const {id} = ctx.user
        const result = await create(content,moment_id,id)
        ctx.body =  result
       } catch (err) {
           ctx.app.emit('error',new Error(),ctx)
       }
    }
    async reply(ctx,next){
        const {content,moment_id} = ctx.request.body
        const {comment_id} = ctx.params
        const {id} = ctx.user
        const result = await reply(content,moment_id,id,comment_id)
        ctx.body =  result
    }
    async update(ctx,next){
        const {content} = ctx.request.body
        const {comment_id} = ctx.params
        const result = await update(content,comment_id)
        ctx.body =  result
    }
    async remove(ctx,next){
        const {comment_id} = ctx.params
        const result = await remove(comment_id)
        ctx.body =  result
    }
    async list(ctx,next){
        const {momentid:id} = ctx.query
        const result = await list(id)
        ctx.body =  result
    }
}

module.exports = new commentController()