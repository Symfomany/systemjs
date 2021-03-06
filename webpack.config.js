module.exports = {
    entry: "./main.ts",
    output: {
        path: __dirname,
        filename: "./dist/bundle.js",
    },
    devtool: "source-map",
    resolve: {
       extensions: ['', '.ts', '.tsx', '.js'] 
    },
    module: {
        loaders: [
            { test: /\.ts?$/, loader: "ts-loader" }
        ],
    },

};