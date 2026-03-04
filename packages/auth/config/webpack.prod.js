const {merge} = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonCongif = require('./webpack.common');
const PackageJson = require('../package.json');

const prodConfig = {
    mode:"production",
    output:{
        filename: '[name].[contenthash].js',
        publicPath: '/auth/latest/',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'auth',
            filename: 'remoteEntry.js',
            exposes: {
                './AuthApp': './src/bootstrap',
            },
            shared: PackageJson.dependencies,
        }),
    ],
};
module.exports = merge(commonCongif, prodConfig);