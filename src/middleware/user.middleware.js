const {userIsExist} = require('../service/user.service')
const {
    USERNAME_OR_PASSWD_IS_REQUIRED,
    USER_IS_EXIST
} =require('../constants/error_types')

const verifyUser = async (ctx,next)=>{
    const {username,passwd} = ctx.request.body
    // 1.验证用户名密码是否为空
    if(!username || !passwd){
        const error = new Error(USERNAME_OR_PASSWD_IS_REQUIRED)
        return ctx.app.emit('error',error,ctx)
    }
    // 2. 验证用户名是否已经存在
    const result = await userIsExist(username)
    if(result){
        const error = new Error(USER_IS_EXIST)
        return ctx.app.emit('error',error,ctx)
    }
    // 都没问题后执行下一个中间件
    await next()
}

module.exports = {
    verifyUser
}