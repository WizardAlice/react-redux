const path = require('path').default
const webpack = require('webpack')
// var DllLinkPlugin = require('dll-link-webpack-plugin')
// const personal = require('./personal.json')

module.exports = {
  entry: {
    login: "./entry/login.js",
    main: "./entry/main.js"
  },
  output: {
    path: __dirname,
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
  plugins: [new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      env: '"development"'
    })],
  devServer: {
      port: 8000, //设置监听端口（默认的就是8080）
      contentBase: __dirname,
      historyApiFallback: true,//不跳转，用于开发单页面应用，依赖于HTML5 history API 设置为true点击链接还是指向index.html
  }
}