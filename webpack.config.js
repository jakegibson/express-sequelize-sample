module.exports = {
  entry: './src/main.js',
  output: {
    filename: './dist/bundle.js'       
  },
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
  resolve: {
    // enable require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json'] 
  }
};