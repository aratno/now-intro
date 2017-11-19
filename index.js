const _   = require('lodash')

const Koa = require('koa')
const App = new Koa()

const Router = require('./router')

App.use( async ctx => {
  if ( Router.ping.match( ctx.request.path ) ) {
    Router.ping.reply( ctx )
  }
})

const start = () => {
  let port = 8000
  console.log(`Running server on port ${ port }`)
  App.listen( port )
}

start()
