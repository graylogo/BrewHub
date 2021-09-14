const connection = require('../app/database')

class momentService{
    async create(connect,id){
        const statement = `insert into moment (content, user_id) values (?,?);`
        // [result] 获取到返回的数组中下标位0的值并起名为result
        const [result] = await connection.execute(statement,[connect,id])
        return result
    }
    async getMomentById(id){
        const statement = `select
        m.id id,
        m.content content,
        JSON_OBJECT('id',u.id,'name',u.name) author
        from moment m
        left join users u on m.user_id = u.id
        where m.id = ?;`

        const [result] = await connection.execute(statement,[id])
        return result[0]
    }
    async list(pageNum,pageSize){
        const statement =`select
        m.id id,
        m.content content,
        JSON_OBJECT('id',u.id,'name',u.name) author
        from moment m
        left join users u on m.user_id = u.id
        limit ?,?;`
        const [result] = await connection.execute(statement,[(pageNum*pageSize).toString(),pageSize])
        return result
    }
    async update(id,connect){
        const statement = `
        update moment
        set content = ?
        where id = ?;`
        const [result] = await connection.execute(statement,[connect,id])
        if(result.affectedRows !== 1) return false
        return result
    }
    async deleteById(id){
        const statement = `
            delete from moment
            where id=?;`
        const [result] = await connection.execute(statement,[id])
        if(result.affectedRows !== 1) return false
        return result
    }

}

module.exports = new momentService()