var path = require("path");
var webpack = require('webpack');

module.exports = {
    //sourcemap
    devtool: 'cheep-module-eval-source-map',
    entry: [
        "script-loader!jquery/dist/jquery.min.js",
        "script-loader!foundation-sites/dist/js/foundation.min.js",
        "./app/app.jsx"
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                context: __dirname,
                sassLoader: {
                    path: './node_module/foundation-sites/scss'
                }
            }
        })
    ],
    output: {
        publicPath: "/",
        path: __dirname,
        filename: "./public/bundle.js"
    },
    resolve: {
        modules: [
            __dirname,
            "app/components",
            "node_modules",
//            path.resolve('app/components'),
//            path.resolve('node_modules'),
//            path.resolve(__dirname, "app/components"),
        ],
        alias: {
            applicationStyles: 'app/styles/app.scss',
            TodoApp: 'app/components/TodoApp.jsx',
            TodoList: 'app/components/TodoList.jsx',
            Todo: 'app/components/Todo.jsx',
            AddTodo: 'app/components/AddTodo.jsx',
            TodoSearch: 'app/components/TodoSearch.jsx',
        },
        extensions: ['.js', 'jsx']
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
};