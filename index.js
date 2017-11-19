const Koa = require('koa')
const app = new Koa()

app.use( async ctx => {
  ctx.body = 'Test works!'
})

const start = () => {
  let port = 8000
  console.log(`Running server on port ${ port }`)
  app.listen( port )
}

start()
