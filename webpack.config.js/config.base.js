const path = require('path');
const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const camelCase = require('uppercamelcase');
// const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
    stats: {
        children: false,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                exclude: /node_modules/,
                use: [{ loader: 'babel-loader' }],
            },
        ],
    },
    plugins: [
        new CaseSensitivePathsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
        new webpack.NamedModulesPlugin(),
        // new WriteFilePlugin(),
    ],
    output: {
        libraryTarget: 'umd',
        library: camelCase(require(path.resolve(__dirname, '..', 'package.json')).name),
        filename: '[name].js',
        // this is a weird hack to make the umd build work in node
        // https://github.com/webpack/webpack/issues/6525#issuecomment-417580843
        globalObject: 'typeof self !== "undefined" ? self : this',
    },
};
