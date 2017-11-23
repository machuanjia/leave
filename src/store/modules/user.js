import * as types from '../mutation-types'
import _ from 'lodash';
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
                {id:0, name:'tom' , addr:'usa' },
                {id:1, name:'jim' , addr:'chn' },
                {id:2, name:'tim' , addr:'kor' }
            ]})
        }, 1000)

    },
    addUser( {commit} , data ){
        commit(types.ADD_USER,data)
    },
    editUser({commit} , data ){
        commit(types.EDIT_USER,data)
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
        data.id = state.users.length;
        state.users.push( data )
    },
    [types.EDIT_USER]( state , data ){
        let ss = _.find(state.users,{id:data.id});
        ss.name = data.name;
        ss.addr = data.addr;

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
