import { createEdge, createNode } from '@/utils'
import { findItemById } from '@/store/hyperGraph/utils'

/**
 * @typedef {Object} HyperGraphStoreModuleMutations
 */
const mutations = {
  /**
   * @alias hyperGraph/CREATE_NODE
   * @param {HyperGraphStoreModuleState} state
   * @param {string} id
   * @param {number} x
   * @param {number} y
   * @constructor
   */
  CREATE_NODE (state, { id, x, y }) {
    state.nodes.push(createNode(id, x, y))
  },

  CREATE_EDGE (state, { id, nodesId }) {
    state.edges.push(createEdge(id, nodesId))
  },

  /**
   * @alias hyperGraph/DELETE_NODE
   * @param {HyperGraphStoreModuleState} state hyperGraph state
   * @param {string} id id of node to delete
   */
  DELETE_NODE (state, { id }) {
    const { nodes } = state
    // console.log(nodes.indexOf(findItemById(nodes, id)))

    nodes.splice(nodes.indexOf(findItemById(nodes, id)), 1)
  },

  DELETE_EDGE (state, id) {
    const { edges } = state

    edges.splice(edges.indexOf(findItemById(edges, id)), 1)
  }
}

export default mutations
