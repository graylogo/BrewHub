class authController {
    async login(ctx,next){
        const {username} = ctx.request.body
        ctx.body =  `欢迎${username}回来！`
        await next()
    }
}

module.exports = new authController()