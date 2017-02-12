'use strict';

const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: {
        gin: "./src/index.js"
    },
    devtool: "source-map",
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js",
    },
    devServer: {
        port: 3000,
        inline: true,
        contentBase: __dirname + "/dist", // New
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            "presets": ["es2015", "react"]
                        }
                    }
                ]
            }, {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)([\?]?.*)$/,
                loader: "file-loader?name=images/[name].[ext]"
            }, {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    loader: ['css-loader?sourceMap', 'less-loader?sourceMap']
                })
            }, {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({ filename: "[name].bundle.css", allChunks: true }),
        new CopyWebpackPlugin([
            {
                from: "./lib",
                to: "./lib"
            }, {
                from: "./index.html",
                to: "./"
            }, {
                from: "./bower_components",
                to: "./lib"
            }
        ])
    ]
};
