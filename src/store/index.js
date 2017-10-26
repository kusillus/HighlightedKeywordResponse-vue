import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store ({
  state: {
    originalText: '',
    highLigthText: '',
    showHighLitgh: false,
    showEditable: false,
    showLoader: false
  },
  mutations: {
    setOriginalText(state, value) {
      state.originalText = value
    },
    setShowHighLitgh(state, value) {
      state.showHighLitgh = value
    },
    setHighLigthText(state, value) {
      state.highLigthText = value
    },
    setShowEditable(state, value) {
      state.showEditable = value
    },
    setShowLoader(state, value) {
      state.showLoader = value
    }
  },
  actions: {

  },
  getters:{
    loadOriginalText(state) {
      return state.originalText
    },
    loadShowHighLitgh(state) {
      return state.showHighLitgh
    },
    loadHighLigthText(state) {
      return state.highLigthText
    },
    loadShowEditable(state) {
      return state.showEditable
    },
    loadShowLoader(state) {
      return state.showLoader
    }
      
  }
})