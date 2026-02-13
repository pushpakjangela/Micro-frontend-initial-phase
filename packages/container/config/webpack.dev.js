const {merge} = require('webpack-merge');
const commonCongif = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const PackageJson  = require('../package.json');
const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html',
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            filename: 'remoteEntry.js',
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js',
            },
            shared: PackageJson.dependencies,

        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
module.exports = merge(commonCongif, devConfig);
