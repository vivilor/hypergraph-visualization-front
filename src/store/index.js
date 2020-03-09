import Vue from 'vue'
import Vuex from 'vuex'

import hyperGraph from './hyperGraph'
import playground from './playground'

Vue.use(Vuex)

const store = {
  modules: {
    hyperGraph,
    playground
  }
}

export default new Vuex.Store(store)
