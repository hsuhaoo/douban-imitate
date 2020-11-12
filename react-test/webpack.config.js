//webpackage.config.js

const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //增加导入webpack
module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, './src/'),
        publicPath: '/',
        host: '127.0.0.1',
        port: 3000,
        stats: {
            colors: true
        },
        hot: true,
    },
    entry: ['./src/index.js', './src/dev.js'],
    // 将 jsx 添加到默认扩展名中，省略 jsx
    resolve: {
        extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx']
    },
    
    module: {

        rules: [
            {
                test: /\.jsx?$/, // jsx文件的正则
                exclude: /node_modules/, // 排除 node_modules 文件夹
                use: {
                    // loader 是 babel
                    loader: 'babel-loader',
                    options: {
                        // babel 转义的配置选项
                        babelrc: false,
                        presets: [
                            // 添加 preset-react
                            require.resolve('@babel/preset-react'),
                            [require.resolve('@babel/preset-env'), {modules: false}]
                        ],
                        cacheDirectory: true
                    }
                }
            },
            {
                // 正则匹配所有以.css结尾的文件
                test:/.css$/,
                 // 使用css-loader和style-loader依次对css文件进行处理
                // 按照数组中从后往前的顺序
                use: ['style-loader',
                    {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                    }
                }]
            },
            {
                test:/\.(png|jpg|jpeg|gif)$/,
                use:{
                    loader: 'file-loader',
                    options:{
                        //name属性其实就是图片打包后的路径，其中包括图片名（[name]）和图片格式（[ext]）。
                        name:'[name].[hash].[ext]',
                        esModule: false
                    }
                },
            },

        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: 'public/index.html',
            filename: 'index.html',
            inject: true
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
};