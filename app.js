const Koa = require('koa')
const router = require('./routers/router')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')
const fs = require('fs')
const p = require("path")

const app = new Koa()

// 允许跨域
app.use(cors({origin:"*"}))

// 解析post
app.use(bodyParser())

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000, () => {
  console.log("程序监听在localhost:3000端口")
})
