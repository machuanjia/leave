import * as types from '../mutation-types'
const state = {
    users:[]
}
const getters = {
    allUsers(state){
        return state.users
    }
}
const actions = {
    getAllUsers({ commit }){
        setTimeout(() => {
            commit(types.LOAD_USER,{users:[
                { name:'tom' , addr:'usa' },
                { name:'jim' , addr:'chn' },
                { name:'tim' , addr:'kor' }
            ]})
        }, 1000)

    },
    addUser( {commit} , data ){
        commit(types.ADD_USER,data)
    },
    delUser( {commit} , i ){
        commit( types.DEL_USER , i )
    }
}
const mutations = {
    [types.LOAD_USER] (state, { users }) {
        state.users = users
    },
    [types.ADD_USER]( state , data ){
        state.users.push( data )
    },
    [types.DEL_USER]( state , i ){
        state.users.splice( i , 1 )
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}
