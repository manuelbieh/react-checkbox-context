module.exports = (env = 'development') => {
    if (process.env.NODE_ENV === 'production') {
        return require('./config.production');
    }

    if (env === 'production') {
        process.env.NODE_ENV = 'production';
    }

    return require(`./config.${env}`);
};

// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//     entry: './src/index.js',
//     module: {
//         rules: [
//             {
//                 test: /\.jsx?$/,
//                 exclude: /node_modules/,
//                 use: [{ loader: 'babel-loader' }],
//             },
//         ],
//     },
//     plugins: [new HtmlWebpackPlugin()],
//     externals: {
//         react: {
//             commonjs2: 'react',
//         },
//     },
//     mode: 'production',
//     output: {
//         path: path.resolve(__dirname, '..', 'lib'),
//         libraryTarget: 'commonjs2',
//         filename: 'index.js',
//     },
// };
