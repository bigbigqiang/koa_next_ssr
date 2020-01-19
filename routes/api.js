const router = require('koa-router')()

router.post('/json', async (ctx, next) => {
    console.log(ctx.request.body)
    ctx.body = {
        title: 'koa2 json'
    }
})

module.exports = router
