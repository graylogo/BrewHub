const {
    saveAvatar,
    savePicture
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
    async savePicture(ctx,next){
        const { momentid:moment_id } = ctx.query
        const {id:user_id} = ctx.user
        for(let file of ctx.req.files){
            await savePicture(file.filename,file.mimetype,file.size,file.path,moment_id,user_id)
        }
        ctx.body = '上传图片成功！'
    }
}

module.exports = new FileController() 