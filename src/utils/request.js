// 封装axios请求
import axios from 'axios'
import store from '@/store/index'
import { Message } from 'element-ui'

// 创建 axios 实例，将来对创建出来的实例，进行自定义配置
// 好处：不会污染原始的 axios 实例
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 自定义配置 - 请求/响应 拦截器
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // store.getters.token 放在请求头里
  if (store.getters.token) {
    config.headers.Authorization = `Bearer ${store.getters.token}`
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么 (默认axios会多包装一层data，需要响应拦截器中处理一下)
  const { data, message, success } = response.data
  if (success) {
    return data
  } else {
    // 处理后端返回的错误
    Message({ type: 'error', message })
    return Promise.reject(new Error(message))
  }
}, function (error) {
  // 对响应错误做点什么
  // 处理 HTTP 请求错误（如404、500、超时等）
  Message({ type: 'error', message: error.message })
  return Promise.reject(error)
})

// 导出配置好的实例
export default instance
