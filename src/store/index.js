import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {
    instance() {
      // 初始化过程
      var Web3 = require('web3')
      console.log(Web3)
      if (typeof Web3 !== undefined) {
        web3 = new Web3(web3.currentProvider)
        console.log(web3)
      } else {
        web3 = new Web3(
          new Web3.providers.HttpProvider('http://localhost:8080')
        )
      }
    }
  },
  actions: {},
  modules: {}
})
