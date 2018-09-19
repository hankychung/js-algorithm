const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HTMLPlugin({
      template: path.resolve(__dirname, './index.html')
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    host: 'localhost',
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}