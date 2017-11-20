import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {baseUrl} from 'config/env'

Vue.use(VueAxios, axios)

// 动态设置本地和线上接口域名
Vue.axios.defaults.baseURL = baseUrl

/**
 * 封装axios的通用请求
 * @param  {string}   type      get或post
 * @param  {string}   url       请求的接口URL
 * @param  {object}   data      传的参数，没有则传空对象
 * @param  {Function} fn        回调函数
 */
function ajax({
                type,
                pathParams,
                path,
                data,
                fn,
                errFn,
                tokenFlag,
                headers,
                opts
              } = {}) {
  var p = path
  if (typeof path === 'function') {
    p = path(pathParams || {})
  }
  var options = {
    method: type,
    url: p,
    headers: headers && typeof headers === 'object' ? headers : {}
  }

  options[type === 'get' ? 'params' : 'data'] = data

  // axios内置属性均可写在这里
  if (opts && typeof opts === 'object') {
    for (var f in opts) {
      options[f] = opts[f]
    }
  }

  // 发送请求
  Vue.axios(options).then((res) => {
    if (res.data['code'] === 200) {
      if (res.data['data']) {
        fn(res.data['data'])
      } else {
        fn(res.data)
      }
    } else {
      if (errFn) {
        errFn.call(this, res.data)
      }
    }
  }).catch(() => {

  })
};


export default ajax;
