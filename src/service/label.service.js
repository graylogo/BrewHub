const connection = require('../app/database')

class labelService{
    async labelIsExist(name){
        let result = '';
        const statement =  `select * from label where name =?;`
       try {
            [result] = await connection.execute(statement,[name])
       } catch (error) {
           console.log(err);
       }
        // 
        // // 由于mysql2查出来的数据存在问题（最后一条总是有数据，取的前一条数据，所有手动判断一下是否存在）
        //     bug找到了，因为用const定义了变量，导致第二次进入的时候值不能改变
        // const [result] = await connection.execute(statement,[name])
        // let isExist = false;
        // if(result[0].id){
        //     // 因为传递过来的数据会有Number类型，而数据库查出来的是String，所以两个等号判断
        //     console.log(result[0].name , name);
        //     if(result[0].name == name){
        //         isExist = true
        //     }
        // }
        // return isExist
        return result[0]?true:false
    }
    async create(name){
        const statement =  `insert into label (name) values(?);`
        const [result] = await connection.execute(statement,[name])
        return result
    }
    async getLabelList(name){
        const statement =  `select * from label where name =?;`
        const [result] = await connection.execute(statement,[name])
        return result[0]
    }
    async getAllLabelList(){
        const statement =  `select * from label;`
        const [result] = await connection.execute(statement)
        return result
    }
    async labelAndMomentIsExist(labelId,userId){
        let result = '';
        const statement =  `select * from moment_label where label_id = ? and moment_id = ?;`
       try {
            [result] = await connection.execute(statement,[labelId,userId])
       } catch (error) {
           console.log(err);
       }
        return result[0]?true:false
    }
}

module.exports = new labelService() 