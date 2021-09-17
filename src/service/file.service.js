const connection = require('../app/database')

class FileService{
    async saveAvatar(...params){
        const statement =  `insert into avatar (filename,mimetype,destination,originalname,path,size,user_id) values (?, ?,?,?,?,?,?);`
        const result = await connection.execute(statement,params)
        return result[0]
    }
    async savePicture(...params){
        const statement =  `insert into file (filename,mimetype,size,path,moment_id,user_id) values (?,?,?,?,?,?);`
        const result = await connection.execute(statement,params)
        return result[0]
    }
    async getPicInfo(name){
        const statement = `select * from file where filename = ?;`
        const [result] = await connection.execute(statement,[name])
        return result[0]
    }
}

module.exports = new FileService()