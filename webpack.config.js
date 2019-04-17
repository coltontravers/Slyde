const path = require("path");
const PrettierPlugin = require("prettier-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ["babel-loader", "eslint-loader"]
            }
        ]
    },
    plugins: [new PrettierPlugin()],
    devServer: {
        contentBase: path.resolve(__dirname, "public")
    }
};
