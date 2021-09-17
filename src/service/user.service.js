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
        return result[0]
    }
    async getAvatarById(name){
        const statement = `select * from avatar where user_id=?;`
        const [result] = await connection.execute(statement,[name])
        return result.pop()
    }
    async updateUserAvatar(url,id){
        const statement = `update users set avatarUrl=? where id=?;`
        const [result] = await connection.execute(statement,[url,id])
        return result
    }
}

module.exports = new userService()