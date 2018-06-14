import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import User from './modules/user'
Vue.use(Vuex)
console.log(state)
export default new Vuex.Store({
  state: state.state,
  getters: getters.getters,
  actions: actions.actions,
  mutations: mutations.mutations,
  modules: {
    User
  }
})
