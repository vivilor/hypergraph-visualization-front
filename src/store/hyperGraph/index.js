import state from './state.js'
import getters from './getters.js'
import actions from './actions.js'
import mutations from './mutations.js'

/**
 * @typedef {Object} HyperGraphStoreModule
 * @property {HyperGraphStoreModuleState} state
 * @property {HyperGraphStoreModuleGetters} getters
 * @property {HyperGraphStoreModuleActions} actions
 * @property {HyperGraphStoreModuleMutations} mutations
 * @property {true} namespaced
 */
const hyperGraphModule = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}

export default hyperGraphModule
