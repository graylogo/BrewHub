#### 启动
`npm i` 安装依赖

在/src同级目录下创建.env文件，内容如下：

```js
APP_HOST = http://localhost
APP_PORT = 8000

MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_DATABASE="你的数据库表名"
MYSQL_USER=“数据库用户”
MYSQL_PASSWD=“数据库密码”
```

导入`/sql/init.sql`文件，创建数据库。

在项目根目录下手动创建`/upload/avatar`和`/upload/picture`文件夹，用于上传文件。

`npm start` 启动项目
> 如果要使用node或者nodemon自己启动，需要在根目录下启动src/main.js文件，否则识别不到.env文件！！！原因： 在项目中任何一个地方的相对路径，都是相对于process.cwd()，即启动目录的文件夹。

#### 技术栈：

1. node
2. Koa
3. mysql

#### 各种插件

| 名称           | 功能                              |
| -------------- | --------------------------------- |
| koa-router     | Koa框架的路由                     |
| mysql2         | 连接并操作MySQL                   |
| dotenv         | 在本地保留配置文件，避免上传到git |
| crypto         | 用于MD5加密保存密码               |
| jsonwebtoken   | JWT认证                           |
| koa-logger     | 启动项目后命令行显示请求日志      |
| uuid           | 生成唯一ID，另有更轻量级的tinyid  |
| koa-bodyparser | 解析body传参                      |
| koa-multer     | 文件上传                          |

接口文档在`/doc`中，可以导入postman中查看
