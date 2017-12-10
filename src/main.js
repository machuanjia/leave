import Vue from 'vue'
import App from './App.vue'
import router from 'router'
import i18n from 'i18n'
import ElementUI from 'element-ui'
import VueLazyload from 'vue-lazyload'
import store from 'store'
import './register'
import 'assets/scss/style.scss'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueLazyload)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App},
  i18n,
    beforeCreate: function () {
        // this.$i18n.locale = 'en-us'
    },
    created: function () {
        console.log('调用了created钩子函数')
    },
    beforeMount: function () {
        console.log('调用了beforeMount钩子函数')
    },
    mounted: function () {
        console.log('调用了mounted钩子函数')
    }
})
