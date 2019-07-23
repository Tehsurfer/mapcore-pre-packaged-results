var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: "none",
  entry: {
    "mapcore-pre-packaged-results": "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "[name].js",
    library: 'mapcore-pre-packaged-results',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
              presets: ['@babel/preset-env',
            	  ['minify',  {
            		  builtIns: false,
            		  evaluate: false,
            		  mangle: false,
            	   }]]
          }
      }
    ]
  },
  devtool: 'source-map'
};
