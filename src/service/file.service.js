const connection = require('../app/database')

class FileService{
    async saveAvatar(...params){
        const statement =  `insert into avatar (filename,mimetype,destination,originalname,size,user_id) values (?, ?,?,?,?,?);`
        const result = await connection.execute(statement,params)
        return result[0]
    }
}

module.exports = new FileService()