const Router = require("koa-router")
const index = require('../control/index')

const router = new Router

router.get("/vueProject/vue.php",index.index)
module.exports = router