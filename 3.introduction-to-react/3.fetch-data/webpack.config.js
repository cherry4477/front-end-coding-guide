module.exports = {  
  entry: ['whatwg-fetch', './index.js'],
  
  output: {
    path: 'dist',
    filename: 'app.js'
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
