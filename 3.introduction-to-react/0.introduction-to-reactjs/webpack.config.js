const webpack      = require("webpack");
const autoprefixer = require('autoprefixer');
const precss       = require('precss');

module.exports = {
  context: __dirname,
  
  entry: './src/entry',
  
  output: {
    path: './dist',
    filename: 'app.min.js'
  },
  
  devtool: 'source-map',
  
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?sourceMap',          
          'postcss-loader',
          'sass?sourceMap'
        ]
      },
      
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css?sourceMap',          
          'postcss-loader'
        ]
      },

      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: [
            'react',
            'es2015'
          ]
        }
      }
    ]
  },
  
  postcss: () => {
    return [autoprefixer, precss];
  },
  
  plugins: [
     new webpack.optimize.UglifyJsPlugin({
       compress: {
         warnings: false
       }
     })
  ]
};