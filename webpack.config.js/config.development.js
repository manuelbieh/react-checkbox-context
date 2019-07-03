// const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./config.base');

config.entry = {
    example: './examples',
};

config.mode = 'development';
config.devServer = {
    // contentBase: path.join(__dirname, '..'),
    compress: true,
    port: 9000,
};

config.plugins = config.plugins.concat([
    new HtmlWebpackPlugin({
        template: 'examples/index.html',
    }),
]);

module.exports = config;
