const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry : ['@babel/polyfill','./src/index.js'],
    module : {
        rules : [
            {
                test : /\.(js|jsx)$/i,
                exclude : /(node_modules|bower_components)/,
                use : [
                    {loader : 'babel-loader'}
                ]
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            hash : true,
            title : 'Config ESLint with Webpack & Babel',
            filename : 'index.html',
            template : './src/index.html',
            inject : 'head',
            scriptLoading : 'defer'
        }),
        new CleanWebpackPlugin(),
        new webpack.ProgressPlugin()
    ],
    output : {
        path : path.resolve(__dirname, './dist'),
        filename : 'index.bundle.js'
    }
};