const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const fs = require('fs');
const srcRoot = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');
const pageDir = path.resolve(srcRoot, 'page');
const mainFile = 'index.js';

function getHtmlArray(entryMap) {
    let htmlArray = [];
    Object.keys(entryMap).forEach((key) => {
        let fullPathName = path.resolve(pageDir, key);
        let filename = path.resolve(fullPathName, key + '.html');

        if (fs.existsSync(filename)) {
            htmlArray.push(new HtmlWebpackPlugin({
                filename: key + '.html',
                template: filename,
                chunks: ['common',key]
            }));
        }
    })
    return htmlArray;

}
function getEntry() {
    let entryMap = {};
    fs.readdirSync(pageDir).forEach((pathname) => {
        let fullPathName = path.resolve(pageDir, pathname);
        let stat = fs.statSync(fullPathName);
        let fileName = path.resolve(fullPathName, mainFile);

        if (stat.isDirectory() && fs.existsSync(fileName)) {
            entryMap[pathname] = fileName;
        }
    })
    return entryMap;
}

const entryMap = getEntry();
const htmlArray = getHtmlArray(entryMap);

module.exports = {
    mode: 'production',
    entry: entryMap,
    resolve:{
        alias:{
            component:path.resolve(srcRoot,'component')
        },
        extensions:['.js','.jsx']
    },
    output: {
        path: distPath,
        filename: 'js/[name].[hash].min.js',
        publicPath: '/' // 可根据自己实际情况修改
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, use: [{ loader: 'babel-loader' }, { loader: 'eslint-loader' }], include: srcRoot },
            {
                test: /\.scss$/, use: [MiniCssExtractPlugin.loader, {loader:'css-loader',options:{minimize:true}}, 'sass-loader', {
                    loader: 'sass-resources-loader',
                    options: {
                        resources: srcRoot + '/component/rem_function.scss'
                    }
                }], include: srcRoot
            },
            { test: /\.(png|jpg|jpeg)$/, use: 'url-loader?limit=8192&name=./images/[name].[hash].[ext]', include: srcRoot }
        ]
    },
    optimization: {
        splitChunks:{
            cacheGroups:{
                common: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    name: 'common'
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin([distPath],{allowExternal: true}),
        new MiniCssExtractPlugin({
            filename: "css/[name].[hash].css"
        })
    ].concat(htmlArray)
}