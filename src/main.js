// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    s: '',
    storeID: '',
    tableID: ''
  },
  mutations: {
    updateStore (state, store) {
      state.s = store
    },
    updateStoreID (state, storeID) {
      state.storeID = storeID
    },
    updateTableID (state, tableID) {
      state.tableID = tableID
    },
    addItem (state, item) {
      state.items.push(item)
    }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
