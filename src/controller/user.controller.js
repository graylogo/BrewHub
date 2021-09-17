const path = require('path')
const fs = require('fs')
const userService = require('../service/user.service')

class UserController{
    async create(ctx,next){
        const user = ctx.request.body
        
        //数据查询
        const result = await userService.create(user)

        //返回数据
        ctx.body = result
    }
    async getAvatarById(ctx,next){
        const {user_id:id} = ctx.params
        //1. 查询头像数据
        const avatarInfo = await userService.getAvatarById(id)
        //2. 提供服务，让浏览器可以识别到该图片
        const avatarPath = '.\/'+avatarInfo.path
        ctx.response.set('content-type', avatarInfo.mimetype);
        ctx.body = fs.createReadStream(avatarPath);
    }
}

module.exports = new UserController()