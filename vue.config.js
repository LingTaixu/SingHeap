const CompressionWebpackPlugin = require('compression-webpack-plugin')
const externals = {}

module.exports = {
  lintOnSave: true,
  devServer: {
    open: true
  },
  // 不输出 map 文件
  productionSourceMap: false,
  configureWebpack: config => {
    const configNew = {}
    if (process.env.NODE_ENV === 'production') {
      configNew.externals = externals
      configNew.plugins = [
        // gzip
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8,
          deleteOriginalAssets: false
        })
      ]
    }
    return configNew
  }
}
