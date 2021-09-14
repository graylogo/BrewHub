const {userIsExist} = require('../service/user.service')
const {
    USERNAME_OR_PASSWD_IS_REQUIRED,
    USER_IS_EXIST
} =require('../constants/error_types')
const md5Passwd = require('../utils/md5Passwd')

const verifyUser = async (ctx,next)=>{
    const {username,passwd} = ctx.request.body
    // TODO 1.验证用户名长度

    // 2.验证用户名密码是否为空
    if(!username || !passwd){
        const error = new Error(USERNAME_OR_PASSWD_IS_REQUIRED)
        return ctx.app.emit('error',error,ctx)
    }
    // 3. 验证用户名是否已经存在
    const result = await userIsExist(username)
    if(result){
        const error = new Error(USER_IS_EXIST)
        return ctx.app.emit('error',error,ctx)
    }
    // 都没问题后执行下一个中间件
    await next()
}

const handlePasswd = async (ctx,next)=>{
    const {passwd} = ctx.request.body
    ctx.request.body.passwd =  md5Passwd(passwd)
    await next()
}
module.exports = {
    verifyUser,
    handlePasswd
}