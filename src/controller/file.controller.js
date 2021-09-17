const {
    saveAvatar
} = require('../service/file.service')

class FileController{
    async saveAvatar(ctx,next){
        const {filename,mimetype,size,destination,originalname} = ctx.req.file
        const {id} = ctx.user
        await saveAvatar(filename,mimetype,destination,originalname,size,id)
        ctx.body = '上传头像成功！'
    }
}

module.exports = new FileController()