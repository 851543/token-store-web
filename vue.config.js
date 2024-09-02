const path = require('path')
const name = 'Vue Typescript Admin'
// const IS_PROD = ['production', 'development'].includes(process.env.NODE_ENV)

module.exports = {
  // 公共路径
  'publicPath': process.env.NODE_ENV === 'production' ? './' : '/',

  // 开发环境下才进行保存时的语法检查
  'lintOnSave': process.env.NODE_ENV === 'development',

  // PWA 配置
  'pwa': {
    'name': name
  },

  // 样式资源加载器配置
  // 'pluginOptions': {
  //   'style-resources-loader': {
  //     'preProcessor': 'scss',
  //     'patterns': [
  //       path.resolve(__dirname, 'src/styles/_variables.scss'),
  //       path.resolve(__dirname, 'src/styles/_mixins.scss')
  //     ]
  //   }
  // },

  // 开启代理
  devServer: {
    host: '0.0.0.0',
    // public: '0.0.0.0:8888', // 本地的ip:端口号
    port: 8888,
    open: true,
    historyApiFallback: true,
    allowedHosts: 'all',
    hot: true, // 自动保存
    client: {
      overlay: {
        warnings: false,
        errors: true
      }
    },
    proxy: {
      '/api': {
        target: process.env.VUE_APP_URL,
        ws: false,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },

  // 链接 Webpack 配置
  chainWebpack: (config) => {
    config.resolve.symlinks(true) // 修复热更新失效
  },

  // 配置 Webpack
  configureWebpack: {
    devtool: 'source-map'
  },

  // CSS 相关配置
  // css: {
  //   // 是否使用css分离插件 ExtractTextPlugin
  //   extract: IS_PROD,
  //   // 开启 CSS source maps?
  //   sourceMap: false,
  //   // css预设器配置项
  //   loaderOptions: {
  //   },
  //   // 启用 CSS modules for all css / pre-processor files.
  //   modules: false,
  // },
};
