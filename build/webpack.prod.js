const path = require('path');
// 合并配置文件
const merge = require('webpack-merge');
const common = require('./webpack.base.js');

module.exports = merge(common, {
    module: {},
    plugins: [],
    mode: 'production',
    output: {
        filename: 'bundle/[name].[contenthash].js', //contenthash 若文件内容无变化，则contenthash 名称不变
        path: path.resolve(__dirname, '../dist')
    },
});