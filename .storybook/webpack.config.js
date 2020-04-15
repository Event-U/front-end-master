const path = require('path')
const rootPath = path.resolve(__dirname, '../src')

module.exports = ({ config }) => {
    config.module.rules.push({
        test: /\.vue$/,
        use: [
            'vue-style-loader',
        ],
    })

    config.resolve.alias['@'] = rootPath
    config.resolve.alias['~'] = rootPath

    return config
}