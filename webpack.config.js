const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HTMLWebpackPlugin({
    template: "./src/client/index.html",
    filename: "./index.html"
})

module.exports = {
  entry: __dirname + '/src/client/index.js',
  module: {
    rules: [
        { 
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.css$/,
            loader: 'style-loader'
        },
        {
            test: /\.css$/,
            loader: 'css-loader',
            query: {
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]'
            }
        }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [htmlPlugin]
};