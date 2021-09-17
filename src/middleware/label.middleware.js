const {
    create
} = require('../controller/label.controller')
const { getLabelList } = require('../service/label.service')


class labelMiddleware{
    async checkLabel(ctx,next){
        const {labels} = ctx.request.body
        if(labels.length === 0){
            ctx.body = {
                statusCode: 200,
                message: '没有传入标签!'
            }
          return
        }
        // 创建相关逻辑已经封装好
        await create(ctx,next)
        // 根据传过来的label获取到信息
        let labelArr = []
        for(let label of labels){
            const result = await getLabelList(label)
            labelArr.push(result)
        }
        ctx.labels = labelArr
        await next()
    }
}

module.exports = new labelMiddleware()