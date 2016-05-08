var webpack = require('webpack');
var path = require('path');

var port = 3001;

module.exports = {
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
  devServer: {
    port: port,
    contentBase: './dist/'
  },
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: 'index.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
