const path = require('path')
const webpack = require('webpack')
var DllLinkPlugin = require('dll-link-webpack-plugin')

module.exports = {
  entry: {
    login: "./entry/login.js",
    main: "./entry/main.js"
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: '[name].js'
  },
  module: {
    rules: [
      {test: /\.js|jsx$/,exclude: /node_modules/, use: ['babel-loader']},
      //{test: /.css$/, use: ['style-loader', 'css-loader']},
      {test: /.css$/,exclude: /node_modules/, use: ['style-loader', 'css-loader']},
      {test: /.(jpg|png|gif|svg)$/,exclude: /node_modules/, use: ['url-loader?limit=8192&name=./[name].[ext]']},
      {test: /.json$/,exclude: /node_modules/, use: ['json-loader']},
      {test: /.html$/,exclude: /node_modules/, use: ['raw-loader']}
    ]
  },
  plugins: [
    new DllLinkPlugin({
      config: require('./webpack.dll.config.js')
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      env: '"production"'
    })
  ]
}