var path = require('path');

module.exports = {

  // Define an entry point
  entry: './src/script-1.js',

  // Output point
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  }
}
