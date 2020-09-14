const HtmlWebPackPlugin = require("html-webpack-plugin");
const  path = require('path')

module.exports = {
    entry : "./src/index.js",
    output : {
        path : path.join(__dirname,'./dist'),
        filename : 'index_bundle.js'
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                use : ['babel-loader']
            },
            {
                test : /\.css$/,
                use : ['style-loader','css-loader']
            },
            {
                test : /\.(png|jpe?g|gif)$/i,
                use : ['file-loader']
            }
        ]
    },
    plugins : [
        new HtmlWebPackPlugin({
            template : './src/index.html'
        })
    ]
}