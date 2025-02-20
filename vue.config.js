const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      // 目标服务器 百度 新浪 网易
      // 只要目标路径含'/api'
      '/api': {
        target: 'https://heimahr.itheima.net'
      }
    }
  }
  // before:require('./mock/mock-server.js') 基础模版做的模拟数据 拦截请求
  // 2025/1 生成的脚手架没有before
})
