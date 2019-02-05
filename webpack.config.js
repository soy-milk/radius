const path = require('path');

module.exports = {
    entry: "",
    output: {
        path: "", 
        filename: "",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
            },
            {
                test: /\.css$/,
                use: extractCSS.extract(["css-loader", "postcss-loader"])
            }
        ]
    }
}