const path    = require('path'),
      webpack = require('webpack'),
      precss  = require('precss'),
      autopre = require('autoprefixer');

module.exports = {
  devtool: 'source-source-map',

  entry: {
    app: './index.js',
  },
  
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].min.js'
  },
  
  postcss: () => [autopre, precss],

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-object-rest-spread']
        }
      },
      {
        test: /\.scss$/,
        loaders: [
          'style?sourceMap',
          'css?sourceMap&modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'postcss-loader',
          'sass?sourceMap'
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: [
          'style?sourceMap',
          'css?sourceMap&modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'postcss-loader'
        ]
      }
    ]
  }
};
