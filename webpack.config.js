const path = require('path');
//plugin used for generating file tags required on index.html
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    //maps compiled code back to original source code, for debugging purposes:
    devtool: 'inline-source-map', 
    //tells webpack-dev-server to serve the files from the dist directory on localhost:8080
    devServer: {
        static: './dist',
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Development',
      }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, //only generates files in use
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    //optimization used in case multiple entry points are required for development webserver
    optimization: {
      runtimeChunk: 'single',
    },
}