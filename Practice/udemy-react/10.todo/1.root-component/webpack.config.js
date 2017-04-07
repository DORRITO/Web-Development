var path = require("path");
var webpack = require('webpack');

module.exports = {
    //sourcemap
    devtool: 'cheep-module-eval-source-map',
    entry: [
        "script!jquery/dist/jquery.min.js",
        "script!foundation-sites/dist/js/foundation.min.js",
        "./app/app.jsx"
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        //publicPath: "/",
        path: __dirname,
        filename: "./public/bundle.js"
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'app/components'),
            "node_modules"
        ],
        alias: {
            applicationStyles: path.resolve(__dirname, 'app/styles/app.scss'),
        },
        extensions: ['', '.js', 'jsx']
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    sassLoader: {
        includePaths: [
            path.resolve(__dirname, './node_module/foundation-sites/scss')
        ]
    },
};