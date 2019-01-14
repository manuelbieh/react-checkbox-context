const path = require('path');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{ loader: 'babel-loader' }],
            },
        ],
    },
    externals: {
        react: {
            commonjs2: 'react',
        },
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '..', 'lib'),
        libraryTarget: 'commonjs2',
        filename: 'index.js',
    },
};
