var path = require('path');
var webpack = require('webpack');
var plugins = [];



//整合CSS 为单独文件
var ExtractTextPlugin = require("extract-text-webpack-plugin"); //整合css 为单独文件
plugins.push( new ExtractTextPlugin({ 
  filename: './dist/[name].min.css', 
  disable: false, allChunks: true 
}));


//依赖zepto
plugins.push( new webpack.ProvidePlugin({
   $: "zepto-webpack"
}));

module.exports = {
  entry: {
   // bundle:['./es6/Animal.js','./es6/Cat.js','./es6/Dog.js','./es6/main.js']
      bundle:['./src/main.js','./src/samvrDialog.js']
  },
  output: {
    path: __dirname,
    filename: "./dist/[name].js"
  },
  module: {
    loaders: [
      {
        test: path.join(__dirname, 'es6'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
        { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192&name=./[name].[ext]'},
        { test: /\.css$/, loader: ExtractTextPlugin.extract({fallback:'style-loader',use:'css-loader!postcss-loader'})},
    ],
  },
   plugins:plugins,
   watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
   },
  
}