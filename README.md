### 启动
`npm i` 安装依赖
`npm start` 启动项目
如果要使用node或者nodemon自己启动，需要在根目录下启动src/main.js文件，否则识别不到.env文件！！！
原因： 在项目中任何一个地方的相对路径，都是相对于process.cwd()，即启动目录的文件夹。