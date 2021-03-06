const path = require("path");
const PrettierPlugin = require("prettier-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    node: {
        fs: "empty"
        // net: "empty"
    },
    // target: "node",
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: ["/node_modules/", "/src/server/"],
                use: ["babel-loader", "eslint-loader"]
            },
            {
                test: /\.css$/,
                use: [{ loader: "style-loader" }, { loader: "css-loader" }]
            }
        ]
    },
    plugins: [new PrettierPlugin()],
    devServer: {
        contentBase: path.resolve(__dirname, "public")
    }
};
