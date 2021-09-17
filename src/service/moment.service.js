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
        JSON_OBJECT('id',u.id,'name',u.name) author,
        (select count(*) from comment c where c.moment_id = m.id) replyCount,
        if(count(c2.id),JSON_ARRAYAGG(JSON_OBJECT(
            'id',c2.id,
            'content',c2.content,
            'commentId',c2.comment_id,
            'createAt',c2.createAt,
            'updateAt',c2.updateAt,
            'author',JSON_OBJECT('id',cu.id,'name',cu.name)
            )),NULL) reply,
         if(count(l2.id),JSON_ARRAYAGG(JSON_OBJECT('id',l2.id,'name',l2.name)),NULL) labels
        from moment m
        left join users u on m.user_id = u.id
        left join comment c2 on m.id = c2.moment_id
        left join users cu on c2.user_id = cu.id
        left join moment_label ml2 on m.id = ml2.moment_id
        left join label l2 on ml2.label_id = l2.id
        where m.id = ?
        group by m.id;`
        const [result] = await connection.execute(statement,[id])
        return result
    }
    async list(pageNum,pageSize){
        const statement =`select
        m.id id,
        m.content content,
        m.createAt createAt,
        m.updateAt updateAt,
        JSON_OBJECT('id',u.id,'name',u.name) author,
        (select count(*) from comment c where c.moment_id = m.id) replyCount,
        (select count(*) from moment_label ml where ml.moment_id = m.id) labelCount
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
    async deleteById(id){
        const statement = `
            delete from moment
            where id=?;`
        const [result] = await connection.execute(statement,[id])
        if(result.affectedRows !== 1) return false
        return result
    }
    async addLabelToMoment(labelId,momentId){
        const statement = `insert into moment_label (label_id,moment_id) values (?,?)`
        const [result] = await connection.execute(statement,[labelId,momentId])
        return result
    }
    async removeLabel(labelId,momentId){
        const statement = `delete from moment_label where moment_id = ? and label_id = ?;`
        const [result] = await connection.execute(statement,[momentId,labelId])
        return result
    }

}

module.exports = new momentService()