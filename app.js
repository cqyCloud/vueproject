const Koa = require('koa')
const router = require('./routers/router')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')
const fs = require('fs')
const { join } = require("path")
const static = require("koa-static")

const app = new Koa()

// 允许跨域
app.use(cors({origin:"*"}))

// 解析post
app.use(bodyParser())

//静态资源目录
app.use(static(join(__dirname,'public')))

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log("程序监听在localhost:3000端口")
})
