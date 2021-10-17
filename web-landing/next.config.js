const CompressionPlugin = require("compression-webpack-plugin")

/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    webpack(config) {
        config.plugins.push(
            new CompressionPlugin({
                test: /\.js$|\.css$|\.html$/,
            })
        )
        return config
    },
}
