const path = require('path');

const config = {
    entry: {
        vendor: ['@babel/polyfill', 'react'],
        app: ['./src/hydrate.js']
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.wasm', '.mjs', '*']
    }
};

module.exports = config;
