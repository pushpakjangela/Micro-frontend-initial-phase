const {merge} = require('webpack-merge');
const commonCongif = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const PackageJson  = require('../package.json');
const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: 'index.html',
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp': './src/bootstrap',
            },
            shared: PackageJson.dependencies,

        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
module.exports = merge(commonCongif, devConfig);
