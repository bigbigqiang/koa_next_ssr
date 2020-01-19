const router = require('koa-router')()
const app = require('../next_app')
const handle = app.getRequestHandler()
router.get('/*', async (ctx, next) => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
})

module.exports = router
