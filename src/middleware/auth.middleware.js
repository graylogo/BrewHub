const {userIsExist} = require('../service/user.service')

const {
    USERNAME_OR_PASSWD_IS_REQUIRED,
    USER_IS_NOT_EXIST,
    USERNAME_IS_UNQUALIFIED,
    PASSWD_IS_INCORRECT
} =require('../constants/error_types')

const md5Passwd = require('../utils/md5Passwd')

const verifyPasswd = async (ctx,next)=>{
    const {username,passwd} = ctx.request.body
    // 1. 验证是否有用户名和密码
    const rgx = /^[a-z0-9_-]{4,16}$/
    if(!rgx.test(username)){
        const error = new Error(USERNAME_IS_UNQUALIFIED)
        return ctx.app.emit('error',error,ctx)
    }
    if(!username || !passwd){
        const error = new Error(USERNAME_OR_PASSWD_IS_REQUIRED)
        return ctx.app.emit('error',error,ctx)
    }
    // 2. 判断用户名是否存在
    const result = await userIsExist(username)
    const user = result[0]
    if(!user){
        const error = new Error(USER_IS_NOT_EXIST)
        return ctx.app.emit('error',error,ctx)
    }
    // 3. 验证密码是否正确（加密后的）
    if(md5Passwd(passwd)!==user.passwd){
        const error = new Error(PASSWD_IS_INCORRECT)
        return ctx.app.emit('error',error,ctx)
    }

    await next()
}

module.exports = {
    verifyPasswd
}