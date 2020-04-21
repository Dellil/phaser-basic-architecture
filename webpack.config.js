let HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    mode: "development",
    entry: [
        "./js/app.js"
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Basic Architecture for phaser development',
        scriptLoading: 'defer'
    })]
}