const errorTypes = require('../constants/error_types')

const errorHandler = (error,ctx)=>{
    let status,message;
    switch (error.message){
        case errorTypes.USERNAME_OR_PASSWD_IS_REQUIRED:
            status = 400  // bad Request
            message = '用户名或者密码不能为空！'
            break;
        case errorTypes.USER_IS_EXIST:
            status = 409  // conflict  冲突
            message = '用户名已经存在！'
            break;
        default:
            status = 404;
            message = '未知错误'
    }
    ctx.status = status,
    ctx.body = message
}

module.exports = errorHandler