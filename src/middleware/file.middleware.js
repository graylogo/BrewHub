const multer = require('koa-multer')
const {v4:uuidv4} = require('uuid')

const {AVATAR_PATH} = require('../constants/file_path')
const storage =multer.diskStorage( {
    destination:(req,file,cb)=>{
        cb(null,AVATAR_PATH)
    },
    filename:(req,file,cb)=>{
        const name = file.originalname.split('.')
        // 不要直接用文件名来命，中文会有乱码问题
        cb(null,uuidv4()+'.'+name.pop())
    }
})
const avatarUpload = multer({storage})

const receiveAvatar = avatarUpload.single('avatar')


module.exports = {
    receiveAvatar
}