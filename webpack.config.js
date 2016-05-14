var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = [
  {
    name: 'client',
    target: 'web',
    module: {
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
    entry: {
      app: [
        path.join(__dirname, '.tmp/src/client.js')
      ]
    },
    output: {
      path: path.join(__dirname, 'public/'),
      filename: 'index.js'
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin()
    ]
  },
  {
    name: 'server',
    target: 'node',
    module: {
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
  }
];
