const webpackDevServer = require('webpack-dev-server');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const express  = require('express');

const webpackConfig = require('./webpack.dev.js');
const app = express();
const options = {
    contentBase: '../dist',
    hot: true,
    host: 'localhost',
    quiet:true
};
const compiler = webpack(webpackConfig);
const devMiddleware = webpackDevMiddleware(compiler,{
    publicPath: webpackConfig.output.publicPath,
    quiet: true //向控制台显示任何内容
});


const hotMiddleware = webpackHotMiddleware(compiler, {
    log: false,
    heartbeat: 2000
});

app.use(hotMiddleware);
app.use(devMiddleware);


app.listen(5000, 'localhost', () => {
    console.log('dev server listening on port 5000');
});