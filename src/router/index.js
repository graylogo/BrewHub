const fs = require('fs')
// 传入app参数
// const useRoutes = (app)=>{
//     fs.readdirSync(__dirname).forEach(file=>{
//         if(file==='index.js') return
//         const Router = require(`./${file}`)
//         app.use(Router.routes())
//         app.use(Router.allowedMethods())
//     })
// }

// 不传app参数，使用this的隐式绑定  注意使用普通函数而不是箭头函数
const useRoutes = function(){
    fs.readdirSync(__dirname).forEach(file=>{
        if(file==='index.js') return
        const router = require(`./${file}`)
        this.use(router.routes())
        this.use(router.allowedMethods())
    })
}
module.exports = useRoutes