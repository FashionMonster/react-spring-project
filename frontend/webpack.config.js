// モジュールの読み込み
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// TODO .gitignore
// TODO githubにリポジトリ作成
// TODO slack作成

module.exports = {
    // モードを開発モードにする
    mode: "development",
    // 入力ファイル設定
    entry: [path.resolve(__dirname, "./src/app.tsx")],
    // 出力ファイル設定
    output: {
        // 出力されるファイル名
        filename: "bundle.js",
        // 出力先ディレクトリ
        path: path.resolve(__dirname, "dist")
    },

    // モジュール設定
    module: {
        rules: [
            {
                // ts-loaderの設定
                test: /\.(js|ts|tsx)?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
        ]
    },
    // モジュール解決
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    // https://webpack.js.org/plugins/html-webpack-plugin/
    // エントリーポイントとなる./src/app.tsxとどのHTMLを紐付けるかを設定する
    // buildすると、distにindex.htmlが出力される
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../backend/src/main/resources/templates/index.html"),
        }),
    ],

    // 開発モード設定
    devtool: "source-map",

};