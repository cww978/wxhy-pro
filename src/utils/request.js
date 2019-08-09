import { Notify } from 'vant'
import axios from 'axios'
import store from '@/store'
const qs = require('qs')
console.log('baseURL:', process.env.VUE_APP_BASE_API)

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 100000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'User-Agent': 'micromessenger'
  },
  withCredentials: true
})

const pending = []
const cancelToken = axios.CancelToken

/**
 * 处理重复请求
 * @param  {} {config}={} AxiosRequestConfig
 */
const addPending = ({ config }) => {
  const url = config.url + '&' + config.method + '&' + qs.stringify(config.data)
  config.cancelToken = new cancelToken(cancel => {
    if (!pending.some(item => item.url === url)) {
      pending.push({
        url,
        cancel
      })
    }
  })
}
const removePending = ({ config }) => {
  const url = config.url + '&' + config.method + '&' + qs.stringify(config.data)
  pending.forEach((item, index) => {
    if (item.url === url) {
      item.cancel('取消重复请求:' + config.url)
      pending.splice(index, 1)
    }
  })
}
/**
 * 请求头预处理
 * @param  {} {config} AxiosRequestConfig
 */
const requestHeaders = ({ config }) => {
  //1.时间戳
  const timestamp = new Date().getTime()
  config.headers.timestamp = timestamp
  //2.token
  config.headers.Authorization =
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlMzRmMDBjYTc3OTI4YmE2ZTcxMDEzMmY4MzNjMDAwNiIsIjEzMzMzMzMzMzMzIjoiMTMzMzMzMzMzMzMiLCJleHAiOjE1Njc2NzgzOTN9.CFpEufY5E7WiPh0UlL9O6DEe7U_qxk3fhxdfTdW2zAI'
  const token = sessionStorage.getItem('token')
  if (token) {
    config.headers.token = token
  }
}
/**
 * 请求参数预处理
 * @param  {} {config}={} AxiosRequestConfig
 */
const requestParams = ({ config } = {}) => {
  return config
}
/**
 * 请求开始&&loading=true
 * @param  {} requestHeaders 1.配置请求头
 * @param  {} requestParams 2.配置请求体
 * @param  {} removePending 3.处理重复请求
 */
const requestStart = ({ config } = {}) => {
  requestHeaders({ config })
  requestParams({ config })
  removePending({ config })
  addPending({ config })
  store.dispatch('loading/showLoad')
}
/**
 * 请求结束&&loading=false
 * @param  {} {config}={} AxiosRequestConfig
 * @param  {} {config}={} response body
 */
const requestEnd = ({ config } = {}) => {
  removePending({ config })
  store.dispatch('loading/closeLoad')
}
/**
 * @param  {} {status HTTP状态码
 * @param  {} data 响应体
 * @param  {} config}={} AxiosRequestConfig
 */
const responseResolve = ({ status, data, config } = {}) => {
  const { code, message } = data
  if (status === 200) {
    switch (code) {
      case 0:
        return Promise.resolve(data)
      default:
        //可配置错误提醒
        if (!config.headers['hide-message']) {
          Notify(message || '操作失败！')
        }
        return Promise.reject(data)
    }
  } else {
    Notify(message || '操作失败！')
    return Promise.reject(data)
  }
}
/**
 * 请求拦截器
 * @param  {} requestStart 请求开始
 */
service.interceptors.request.use(
  config => {
    requestStart({ config })
    return config
  },
  error => {
    store.dispatch('loading/closeLoad')
    Notify('请求出错')
    Promise.reject(error)
  }
)
/**
 * 响应拦截器
 * @param  {} requestEnd 1.请求结束
 * @param  {} responseResolve 2.请求错误处理
 */
service.interceptors.response.use(
  response => {
    const { status, data, config } = response
    requestEnd({ config, data })
    return responseResolve({ status, data, config })
  },
  error => {
    if (axios.isCancel(error)) {
      Notify({ duration: 1500, message: '网络请求中，请不要重复操作！', background: 'orange' })
    } else {
      const { response } = error
      Notify(`请求错误！响应状态 : ${response.status}`)
      store.dispatch('loading/closeLoad')
    }
    return Promise.reject(error)
  }
)

export default service
