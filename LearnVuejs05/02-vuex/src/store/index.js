import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT} from "../components/Mutations-types";

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    counter: 1000,
    student: [
      {id: 110, name: 'kobe', age: 18},
      {id: 111, name: 'lee', age: 12},
      {id: 112, name: 'curry', age: 42},
      {id: 113, name: 'james', age: 32},
    ],
    info: {id: 2000, name: 'ajax', age: 99},
  },
  mutations: {
    //定义方法的地方
    [INCREMENT](state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementCount(state, count) {
      return state.counter += count
    },
    modifyInfo(state) {
      return state.info.name = 'vue'
    }
  },
  actions: {
    updateInfo(context) {
      setTimeout(() => {
        context.commit('modifyInfo')
      })
    }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20stu(state) {
      return state.student.filter(s => s.age > 20);
    }
  },
  modules: {}
})
export default store
