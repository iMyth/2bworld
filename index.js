const Koa = require('koa')
const app = new Koa()

// add date method to context
app.context.date = new Date()

app.use(async (ctx, next) => {
  await next()
  const reponseTime = ctx.response.get('x-response-time')
  console.log(`${JSON.stringify(ctx)}, time =>>> ${reponseTime} <<<=`)
})

app.use(async (ctx, next) => {
  const now = new Date()
  await next()
  const milliseconds = Date.now() - now.getTime()
  ctx.response.set('x-response-time', milliseconds)
})

app.use(async ctx => {
  ctx.state.user = 'Myth'
  ctx.body = `Hello ${ctx.state.user}`
})

app.listen(3000)
