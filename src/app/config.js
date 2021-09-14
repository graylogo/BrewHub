const dotenv = require('dotenv')
const path = require('path')
const fs = require('fs')

const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname,'./key/private.key'))
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname,'./key/public.key'))

dotenv.config()
// 一定要在根目录下（.env所在目录）启动项目，不然会undefined
module.exports = {
    APP_HOST,
    APP_PORT,
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_DATABASE,
    MYSQL_USER,
    MYSQL_PASSWD
} = process.env

// 一定要写在后面，否则重新赋值会覆盖
module.exports.PRIVATE_KEY = PRIVATE_KEY
module.exports.PUBLIC_KEY = PUBLIC_KEY