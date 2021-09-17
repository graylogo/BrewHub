const multer = require('koa-multer')
const {v4:uuidv4} = require('uuid')
const Jimp = require('jimp')

const {AVATAR_PATH,PICTURE_PATH} = require('../constants/file_path')
const avatarStorage =multer.diskStorage( {
    destination:(req,file,cb)=>{
        cb(null,AVATAR_PATH)
    },
    filename:(req,file,cb)=>{
        const name = file.originalname.split('.')
        // 不要直接用文件名来命，中文会有乱码问题
        cb(null,uuidv4()+'.'+name.pop())
    }
})
const pictureStorage =multer.diskStorage( {
    destination:(req,file,cb)=>{
        cb(null,PICTURE_PATH)
    },
    filename:(req,file,cb)=>{
        const name = file.originalname.split('.')
        cb(null,uuidv4()+'.'+name.pop())
    }
})
//上传头像
const avatarUpload = multer({storage:avatarStorage})
const receiveAvatar = avatarUpload.single('avatar')

// 上传图片
const pictureUpload = multer({storage:pictureStorage})
const receivePicture = pictureUpload.array('picture',6)

const resizePic = async (ctx,next)=>{
    const {files} = ctx.req
    for(let file of files){
        Jimp.read(`./${file.path}`).then(pic=>{
        pic.resize(1280,Jimp.AUTO).write('./'+file.path+'-lager')
        pic.resize(640,Jimp.AUTO).write('./'+file.path+'-middle')
        pic.resize(320,Jimp.AUTO).write('./'+file.path+'-small')
        })
    }
    await next()
}

module.exports = {
    receiveAvatar,
    receivePicture,
    resizePic
}