const webpack = require('webpack')
const library = '[name]_lib'
const path = require('path')

module.exports = {
  entry: {
    vendor: ['react', 'react-dom']
  },
  output: {
    filename: './dist/[name].js',
    path: __dirname,
    library
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'dist/[name]-manifest.json'),
      name: library
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      env: '"node_dev"'
    })
  ]
}