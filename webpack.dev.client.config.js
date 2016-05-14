var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function (x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function (mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

var port = 3001;

module.exports = {
  name: 'client',
  target: 'web',
  module: {
    preLoaders: [
      { loader: 'source-map-loader', test: /\.js$/ }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  devtool: [
    'source-map'
  ],
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:' + port,
      'webpack/hot/dev-server',
      path.join(__dirname, '.tmp/src/client.js')
    ]
  },
  externals: nodeModules,
  devServer: {
    port: port,
    contentBase: './public/'
  }
};
