const dotenv = require('dotenv')

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