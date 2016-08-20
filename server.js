var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  proxy: {
    "/api2/api/version/": {
      target: "https://api.welltory.com/",
      changeOrigin: true,
      secure: false
    },
    "/api2/data/rr/": {
      target: "https://api.welltory.com/",
      changeOrigin: true,
      secure: false
    },
    "/api2/profile/": {
      target: "https://api.welltory.com/",
      changeOrigin: true,
      secure: false
    },
    "/api2/auth/": {
      target: "https://api.welltory.com/",
      changeOrigin: true,
      secure: false
    }
  }
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
