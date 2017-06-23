module.exports = {
    entry: './src/index.ts',
    output: {
        path: __dirname + '/dist',
        filename: 'app.js'
    },
    devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.html/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]"
                }
            },
            {
                test: /\.ts/,
                loader: "ts-loader",
            },
            {
                test: /style-as-module\.scss/,
                use: [
                    "style-loader",
                    {
                        loader: "typings-for-css-modules-loader",
                        options: {
                            modules: true,
                            sourceMap: true,
                            namedExport: true,
                        }
                    },
                    {loader: "sass-loader", options: {sourceMap: true}}
                ]
            },
            {
                test: /style-no-module\.scss/,
                use: [
                    "style-loader",
                    {loader: "css-loader", options: {sourceMap: true}},
                    {loader: "sass-loader", options: {sourceMap: true}}
                ]
            }
        ]
    }
};
