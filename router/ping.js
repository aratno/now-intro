Ping = {}

Ping.match = ( path ) => {
  return path.match(/^\/ping$/)
}

Ping.reply = ( ctx ) => {
  ctx.body = 'pong'
}

module.exports = Ping
