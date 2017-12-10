import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en-us'
import cn from './zh-cn'

function lang () {
// 将选择的语言存在localStorage中
  let t = window.localStorage.getItem('language')
  if (t) return t
  // 默认中文
  else return 'zh-cn'
}

const language = lang()

// 自定义 window 的 lang 属性
window.lang = lang()


Vue.use(VueI18n)
// Vue.prototype.AppLanguage = function(lang) {
//   this.$i18n.locale = lang
// }
// Vue.prototype.getAppLanguage = function() {
//   return this.$i18n.locale
// }
export default new VueI18n({
  locale: language,
  messages: {
    'zh-cn': cn,
    'en-us': en
  }
})
