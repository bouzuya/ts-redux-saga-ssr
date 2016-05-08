var webpack = require('webpack');
var path = require('path');

module.exports = {
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
    path: path.join(__dirname, 'dist/'),
    filename: 'index.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
