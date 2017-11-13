import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en-us'
import cn from './zh-cn'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'zh-cn',
  messages: {
    'zh-cn': cn,
    'en-us': en
  }
})
