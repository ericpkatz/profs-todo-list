const path = require('path')

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: 'client',
  },
  entry: [
    '@babel/polyfill', // enables async-await
    path.join(__dirname, 'src', 'index.js')
  ],
  output: {
    path: path.join(__dirname, 'client'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  watchOptions: {
    ignored: /node_modules/
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
