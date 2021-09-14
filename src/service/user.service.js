const connection = require('../app/database')

class userService{
    async create(user){
        const {username,passwd} = user
        const statement =  `insert into users (name,passwd) values (?, ?);`
        const result = await connection.execute(statement,[username,passwd])
        return result[0]
    }
    async userIsExist(name){
        const statement = `select * from users where name=?;`
        const result = await connection.execute(statement,[name])
        return !(result[0].length===0)
    }
}

module.exports = new userService()