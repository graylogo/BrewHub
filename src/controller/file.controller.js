const {
    saveAvatar
} = require('../service/file.service')
const {
    updateUserAvatar
} = require('../service/user.service')
const {APP_HOST,APP_PORT} = require('../app/config')
class FileController{
    async saveAvatar(ctx,next){
        const {filename,mimetype,size,destination,originalname,path} = ctx.req.file
        const {id} = ctx.user
        await saveAvatar(filename,mimetype,destination,originalname,path,size,id)
        // 将头像信息保存在用户表中
        const avatarURL = `${APP_HOST}:${APP_PORT}/users/${id}/avatar`
        await updateUserAvatar(avatarURL,id)
        ctx.body = '上传头像成功！'
    }
}

module.exports = new FileController() 