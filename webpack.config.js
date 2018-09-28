const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {              
        index: './webapp/src/index.tsx',
    },
    output: {
        filename: '[name].bundle.js',      
        sourceMapFilename: '[file].map',
        path: `${__dirname}/public`
    },
    module: {
        rules: [
            { 
                test: /\.tsx?$/,
                use:[
                  { loader: "ts-loader" }
                ]              
            },           
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader',                  
                  'sass-loader',
                ],
              }
        ]
    },
    resolve: {
        extensions: ['.mjs','.ts', '.tsx', '.js', '.jsx'],
    },
    optimization: {
        splitChunks: {
            chunks: 'async',
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                   test:/[\\/]node_modules[\\/]/,
                   name: 'vendors',
                   enforce: true,
                   priority: -10,
                   chunks: 'all'
                }              
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './webapp/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'source-map',
    devServer: {
        contentBase: './public',
    }
}