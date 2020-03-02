import Vue from 'vue'
import Vuex from 'vuex'

import hyperGraph from './hyperGraph'
import playground from './playground'

Vue.use(Vuex)

/**
 * @typedef {Object} RootStoreModuleModules
 * @property {HyperGraphStoreModule} hyperGraph
 * @property {PlaygroundStoreModule} playground
 */
const modules = {
  hyperGraph,
  playground
}

/**
 * @typedef {Object} RootStoreModule
 * @property {RootStoreModuleModules} modules
 */
const store = {
  modules
}

export default new Vuex.Store(store)
