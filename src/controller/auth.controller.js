const jwt = require('jsonwebtoken')
const { PRIVATE_KEY } = require('../app/config')
class authController {
    async login(ctx,next){
        const { id, name} = ctx.user
        const token = jwt.sign({id,name},PRIVATE_KEY,{
            algorithm:'RS256',
            expiresIn: 60 * 60 * 24  // 设置一天过期
        })
        ctx.body =  {id,name,token}
        await next()
    }
    async success(ctx,next){
        ctx.body = {
            message: '授权成功',
            ...ctx.user
        }
    }
}
module.exports = new authController()