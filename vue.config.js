module.exports = {
  // evServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://xxx:20101/',
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   },
  //   host: "localhost",
  //   port: 8008
  // },
  runtimeCompiler: true,
  productionSourceMap: false,
  publicPath: '/',
  outputDir: '../dist',
  lintOnSave: false,
  //警告 webpack 的性能提示
  configureWebpack: {
    performance: {
      hints: false
    }
  }
}
