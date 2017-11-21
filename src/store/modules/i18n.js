import * as types from '../mutation-types'
const state = {
    locale:'zh-cn'
}
const getters = {
    getLocale: state => state.locale
}
const actions = {
    changeLocale ({ commit, state }, locale) {
        commit(types.CHANGE_LOCALE,{locale})
    }
}
const mutations = {
    [types.CHANGE_LOCALE] (state, { locale }) {
        state.locale = locale
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}
