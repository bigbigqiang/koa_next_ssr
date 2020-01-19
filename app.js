const Koa = require('koa')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const server_start = require('./server_start')

const app = require('./next_app')

const pages = require('./routes/pages')
const api = require('./routes/api')

// 等到pages目录编译完成后启动服务响应请求
app.prepare().then(() => {
  const koa_app = new Koa();

  onerror(koa_app);

  koa_app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
  }));

  koa_app.use(json());
  koa_app.use(logger());

  // const router = new Router()
  // router.get('/a/:id', async ctx => {
  //   const id = ctx.params.id
  //   await handle(ctx.req, ctx.res, {
  //     pathname: '/a',
  //     query: {
  //       id,
  //     },
  //   })
  //   ctx.respond = false
  // })

  koa_app.use(pages.routes(), pages.allowedMethods())
  koa_app.use(api.routes(), api.allowedMethods())

  // error-handling
  koa_app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
  });

  // server_start
  server_start(koa_app);
})
