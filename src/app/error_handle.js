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
        case errorTypes.USERNAME_IS_UNQUALIFIED:
            status = 400  // bad request
            message = '用户名长度为4-16位，只能包含英文、数字和下划线！'
            break;
        case errorTypes.USER_IS_NOT_EXIST:
            status = 400  // bad request
            message = '用户名不存在！'
            break;
        case errorTypes.PASSWD_IS_INCORRECT:
            status = 400  // bad request
            message = '密码错误！'
            break;
        case errorTypes.UNAUTHORIZED:
            status = 401  // unauthorized
            message = '无效token！'
            break;
        default:
            status = 404;
            message = '未知错误'
    }
    ctx.status = status,
    ctx.body = message
}

module.exports = errorHandler