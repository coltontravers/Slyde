module.exports = {
    plugins: [
        // your custom plugins
    ],
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ["babel-loader", "eslint-loader"]
            },
            {
                test: /\.css$/,
                use: [{ loader: "style-loader" }, { loader: "css-loader" }]
            }
        ]
    },
    externals: {
        jsdom: "window",
        cheerio: "window",
        "react/lib/ExecutionEnvironment": true,
        "react/lib/ReactContext": "window",
        "react/addons": true
    }
};
