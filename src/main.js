// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import _ from 'lodash'

Vue.use(VueResource)
Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    s: '',
    storeID: '',
    tableID: '',
    ordered: []
  },
  getters: {
    subtotal: function (state) {
      var t = 0
      for (var i = 0; i < state.ordered.length; i++) {
        t += state.ordered[i].price
        var v = 0
        for (var j = 0; j < state.ordered[i].variations.length; j++) {
          v += state.ordered[i].variations[j].options[state.ordered[i].variationChoice[j]].price
          // item.variations[i].options[item.variationChoice[i]].price
        }
        t += v
      }
      return t
    },
    quantity: (state, getters) => (item) => {
      var q = 0
      for (var i = 0; i < state.ordered.length; i++) {
        if (state.ordered[i]._id === item._id) {
          q++
        }
      }
      return q
    },
    quantityOf: (state, getters) => (item) => {
      var q = 0
      for (var i = 0; i < state.ordered.length; i++) {
        if (state.ordered[i] === item) {
          q++
        }
      }
      return q
    }
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
      state.ordered.push(item)
    },
    removeItem (state, item) {
      var found = _.findLast(state.ordered, {'_id': item._id})
      if (typeof found === 'object') {
        var i = _.indexOf(state.ordered, found)
        state.ordered.splice(i, 1)
      }
    },
    clearOrdered (state) {
      state.ordered = []
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
