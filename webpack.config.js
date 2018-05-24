const path = require('path')
const webpack = require('webpack')
var DllLinkPlugin = require('dll-link-webpack-plugin')
var Ex = require('extract-text-webpack-plugin')

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
      // {test: /\.css$/, exclude: /node_modules/, use: ['style-loader', 'css-loader', 'sass-loader']},
      {
        test: /\.css$/,
        exclude: /node_modules/, 
        use:Ex.extract({
            fallback:'style-loader', // 回滚
            use:['css-loader', 'sass-loader'],
            publicPath:'../' //解决css背景图的路径问题
        })
      },
      {test: /\.(jpg|png|gif|svg)$/,exclude: /node_modules/, use: ['url-loader?limit=8192&name=./[name].[ext]']},
      {test: /\.json$/,exclude: /node_modules/, use: ['json-loader']},
      {test: /\.html$/,exclude: /node_modules/, use: ['raw-loader']}
    ]
  },
  plugins: [
    new DllLinkPlugin({
      config: require('./webpack.dll.config.js')
    }),
    new Ex('[name].css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      env: '"production"'
    })
  ]
}