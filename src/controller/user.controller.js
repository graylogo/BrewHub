const userService = require('../service/user.service')

class UserController{
    async create(ctx,next){
        const user = ctx.request.body
        
        //数据查询
        const result = await userService.create(user)

        //返回数据
        ctx.body = result
    }
}

module.exports = new UserController()