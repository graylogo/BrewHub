const { PARAMS_IS_INCORRECT } = require('../constants/error_types')

const {
    create,
    labelIsExist,
    getAllLabelList
} = require('../service/label.service')

class labelController{
    async create(ctx,next){
        let arr = []
        let {labels}  = ctx.request.body
        if(labels.length === 0){
            ctx.app.emit('error',new Error(PARAMS_IS_INCORRECT),ctx)
            return 
        }
        if(typeof(labels)!== 'object'){
            arr.push(labels)
        }else{
            arr = labels
        }
        for(let label of arr){
            // 判断标签是否存在，不存在则创建
            const isExist = await labelIsExist(label)
            // 不存在
            if(!isExist){
             await create(label)
            }
        }
        ctx.body = labels
    }
    async getLabelList(ctx,next){
        ctx.body =  await getAllLabelList()
    }
}

module.exports = new labelController()