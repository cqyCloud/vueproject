const Router = require("koa-router")
const index = require('../control/index')

const router = new Router

router.get("vueProject","/vueProject/:id",index.index)
router.url("vueProject",{id:"vue.php"},{query:"limit = 1"})
module.exports = router