const multer = require('koa-multer')
const {v4:uuidv4} = require('uuid')

const {AVATAR_PATH} = require('../constants/file_path')
console.log(AVATAR_PATH);
const storage =multer.diskStorage( {
    destination:(req,file,cb)=>{
        cb(null,AVATAR_PATH)
    },
    filename:(req,file,cb)=>{
        const name = file.originalname.split('.')
        cb(null,name.shift()+'-'+uuidv4()+'.'+name.pop())
    }
})
const avatarUpload = multer({storage})

const receiveAvatar = avatarUpload.single('avatar')


module.exports = {
    receiveAvatar
}