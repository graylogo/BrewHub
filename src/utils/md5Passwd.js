const crypto = require('crypto')

// TODO 加盐，保证加密数据难以破解
const md5Passwd = (passwd)=>{
    const md5 = crypto.createHash('md5')
    return md5.update(passwd).digest('hex')
}

module.exports = md5Passwd