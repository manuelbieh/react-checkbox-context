const path = require('path');
const camelCase = require('uppercamelcase');
const config = require('./config.base');

module.exports = Object.assign({}, config, {
    entry: {
        index: './src',
    },
    mode: 'production',
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
    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom',
        },
    },
    output: {
        path: path.resolve(__dirname, '..', 'dist', 'umd'),
        publicPath: 'dist/umd',
        libraryTarget: 'umd',
        library: camelCase(require(path.resolve(__dirname, '..', 'package.json')).name),
        filename: '[name].js',
        // this is a weird hack to make the umd build work in node
        // https://github.com/webpack/webpack/issues/6525#issuecomment-417580843
        globalObject: 'typeof self !== "undefined" ? self : this',
    },
});
