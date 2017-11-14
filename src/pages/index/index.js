import Vue from 'vue'
import App from './App'
import router from 'router'
import i18n from 'i18n'
import ElementUI from 'element-ui'
import moment from 'moment'
import lodash from 'lodash'
import VueLazyload from 'vue-lazyload'
import store from 'store'

import 'common/scss/style.scss'

Vue.config.productionTip = false


moment.locale('zh-cn')
Vue.prototype.$moment = moment

Vue.prototype._ = lodash

Vue.use(ElementUI)
Vue.use(VueLazyload)
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App},
    i18n
})
