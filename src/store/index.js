import Vue from 'vue'
import Vuex from 'vuex'
import LocalStorageState from './LocalStorageState.js'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    basket: [],
    productsFilter: ''
  },
  getters: {
    productsList(state) {
      return state.products;
    },
    basketList(state) {
      return state.basket;
    },
    filterString(state) {
      return state.productsFilter
    }
  },
  mutations: {
    loadProducts(state, data) {
      data.forEach(e => {
        state.products.push(e)
      });
    },
    loadBasket(state, data) {
      if (!data) return
      data.forEach(e => {
        state.basket.push(e)
      });
    },
    addToBasket(state, data) {
      state.basket.push(data)
    },
    setFilterString(state, data) {
      state.productsFilter = data.toLowerCase();
    }
  },
  actions: {
    loadFromLS({ commit }) {
      commit('loadProducts', LocalStorageState.loadProducts())
      commit('loadBasket', LocalStorageState.loadUserData())
    },
    addToBasket({ commit, getters }, product) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('addToBasket', product)
          LocalStorageState.saveUserData(getters.basketList)
          resolve()
        }, 2000)
      })
      
    }
  },
  modules: {
  }
})
