import Vue from 'vue'
import _ from 'lodash'
import libs from './lib.js'
import plugins from './plugin'

/**
 * 把一些全局对象和一些全局方法，注册到Vue原型上
 */
Vue.use({
  install(Vue, options) {
    // 注册第三方库
    _.each(libs, (item, key) => {
      Vue.prototype['$$' + key] = item
    })

    // 注册全局方法，如常用的接口方法，工具方法等。
    Vue.prototype['$$api'] = plugins
  }
})

