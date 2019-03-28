import Vuex from './store/index'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1
  },

  mutations: {
    increment (state) {
      // 变更状态
      state.count++
    }
  },

  actions: {},

  getters: {
    countUpdate: state => {
      return state.count * state.count
    }
  }
})
