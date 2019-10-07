const webpack = require('webpack');
const path = require('path')

module.exports = {
  mode: 'development',
  context: path.join(__dirname, 'src'),
  entry: [
    './index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist/'),
  }
}
