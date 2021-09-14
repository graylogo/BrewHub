const mysql = require('mysql2')
const {  
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_DATABASE,
    MYSQL_USER,
    MYSQL_PASSWD
} = require('./config')

const connection = mysql.createPool({
    host:MYSQL_HOST,
    port:MYSQL_PORT,
    database:MYSQL_DATABASE,
    user:MYSQL_USER,
    password:MYSQL_PASSWD
});

connection.getConnection((err,con)=>{
    con.connect((err=>{
        if(err) console.log('数据库连接失败，请检查！');
        else console.log('数据库连接成功！');
    }))
})

module.exports = connection.promise()