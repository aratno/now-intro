Ping = {}

Ping.match = ( path ) => {
  return path.match(/^\/ping$/)
}

Ping.reply = ( ctx ) => {
  let ms = +new Date()
  ctx.append('pong', ms)
  ctx.body = 'pong'
}

module.exports = Ping
