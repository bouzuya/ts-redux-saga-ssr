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
  name: 'server',
  target: 'node',
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
      path.join(__dirname, '.tmp/src/server.js')
    ]
  },
  externals: nodeModules,
  output: {
    path: path.join(__dirname, 'lib/'),
    filename: 'index.js'
  }
};
