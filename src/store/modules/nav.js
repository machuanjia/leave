import Vue from 'vue'
import * as types from '../mutation-types'
const state = {
  isCollapse:false
}
const getters = {
  isCollapse(state){
    return state.isCollapse
  }
}
const actions = {
  toggleCollapse ({commit},data){
    commit(types.TOGGLE_NAV,data)
  }
}
const mutations = {
  [types.TOGGLE_NAV] (state, data) {
    state.isCollapse = data.isCollapse
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
