const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
  publicPath: '/',
  outputDir: './doc_root/vue-dist/',
  pages: {
    HelloMPA: {
      entry: './src/views/HelloMPA/main.ts',
      template: './public/HelloMPA.html',
      filename: 'HelloMPA.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.output.filename('[name].js')
      config.output.chunkFilename('js/[name].js')
      config.module
        .rule('src/assets/')
        .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
        .use('url-loader')
        .loader('url-loader')
        .options({
          limit: 4096,
          name: 'img/[name].[ext]'
        })
      config.plugin('extract-css').use(MiniCssExtractPlugin, [
        {
          filename: '[name].css',
          chunkFilename: ''
        }
      ])
      config.splitChunks = {
        cacheGroups: {
          nodeVendors: {
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
            priority: 1
          }
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/')
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass')
      }
    }
  }
}
