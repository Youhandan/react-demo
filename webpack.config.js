var path = require('path')

var config = {
    entry: './main.js',

    output: {
        path:'./',
        filename: 'index.js',
    },

    devServer: {
        inline: true,
        port: 7777
    },

    resolve: {
        root: [
            path.resolve('/Users/youhandan/Desktop/react-demo')
        ]
    },

    devtool: 'cheap-module-source-map',

    module: {
        loaders: [ {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',

            query: {
                presets: ['es2015', 'react'],
                plugins: ["transform-class-properties"]
            }
        }]
    }

}

module.exports = config;