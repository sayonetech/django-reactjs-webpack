var webpack = require('webpack')
var WebpackLocal = require('webpack-dev-server')
var config = require('./webpack.local.config')

new WebpackLocal(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  inline: true,
  historyApiFallback: true,
}).listen(3000, config.ip, function (err, result) {
  if (err) {
    console.log(err)
  }

  console.log('Listening at ' + config.ip + ':3000')
})