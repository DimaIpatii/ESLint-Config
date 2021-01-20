const path = require('path');
const {merge} = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');

module.exports = merge (common,{
    mode : 'development',
    devtool : 'eval-cheap-module-source-map',
    target : 'web',
    devServer : {
        index : 'index.html',
        contentBase : path.resolve(__dirname,'/dist'),
        hot : true,
        compress : true,
        historyApiFallback: true
    },
    plugins : [
        new webpack.HotModuleReplacementPlugin(),
    ],
    module : {
        rules : [

        ]
    }
});