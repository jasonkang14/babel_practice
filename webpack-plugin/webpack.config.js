const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[chunkhash].js',
        // chunkhash changes file names when their contents are modified
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                    },
                },
            },
            //babel-loader is set to take care of JavaScript files
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        // cleans the `dist` directory each time webpack is ran
        new HtmlWebpackPlugin({
            template: './template/index.html',
        }),
        new webpack.DefinePlugin({
            APP_VERSION: '"1.2.3"'
        })
        // automatically creates a `html` file. template option is given to set the configuration as we want
    ],
    mode: 'production',
}