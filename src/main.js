const app = require('./app')

const {APP_PORT,APP_HOST} = require('./app/config.js')


app.listen(APP_PORT,APP_HOST,()=>{
    console.log(`服务器在${APP_HOST}:${APP_PORT}启动了！`);
})