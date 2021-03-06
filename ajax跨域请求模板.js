const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')
const fs = require('fs')
const p = require("path")

const app = new Koa()

const router = new Router()

// 允许跨域
app.use(cors({origin:"*"}))

// 解析post
app.use(bodyParser())

// dataBase路径
const path = p.join(process.cwd(), "dataBase.txt")

console.log(path)

// 检测dataBase是否存在，不存在就创建
if(!fs.existsSync(path)){
  fs.writeFileSync(path, "[]") 
}

// 用户数据跟dataBase数据比对
const handler = (ctx, reqObj) => {
  let dataBase = JSON.parse(fs.readFileSync(path, "utf8"))
  let isExist = false
  dataBase.forEach(v => {
    if(v.user === reqObj.user)isExist = true
  })
  
  // 检测用户名是否存在
  if(isExist){
    // 用户名存在
    ctx.status = 200
    ctx.body = {state: 0, msg: "用户名已存在"}
  }else if(reqObj.user && reqObj.pwd){
    // 用户名不存在
    dataBase.push(reqObj)
    fs.writeFileSync(path, JSON.stringify(dataBase))
    ctx.status = 200
    ctx.body = {state: 1, msg: "注册成功"}
  }else{
    ctx.status = 200
    ctx.body = {state: 0, msg: "请输入用户名和密码"}
  }
}


router.get("/", async ctx => {
  let reqObj = ctx.request.query
  console.log(reqObj)
  handler(ctx, reqObj)
})

router.post("/", async ctx => {
  let reqObj = ctx.request.body
  handler(ctx, reqObj)
})

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3001, () => {
  console.log("程序监听在localhost:3001端口")
})
