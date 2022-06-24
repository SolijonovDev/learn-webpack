const path=require("path");
const HtmlWebpackPlugin =require("html-webpack-plugin")
const {CleanWebpackPlugin}=require("clean-webpack-plugin");



module.exports={
    context:path.resolve(__dirname,"src"),
    entry:{
        main:"./index.js",
        analitics:"./analitics.js"
    },
    mode:"development",
    output:{
        filename:'[name].[contenthash].js',
        path:path.resolve(__dirname,"dist")
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:"Learn Webpack",
            template:"./index.html"
        }),
        new CleanWebpackPlugin()
    ]
}
