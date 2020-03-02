import { createEdge, createNode } from '@/utils'
import { findItemById } from '@/store/hyperGraph/utils'

/**
 * @typedef {Object} HyperGraphStoreModuleMutations
 */
const mutations = {
  CREATE_NODE (state, { id, x, y }) {
    state.nodes.push(createNode(id, x, y))
  },

  CREATE_EDGE (state, { id, nodesId }) {
    state.edges.push(createEdge(id, nodesId))
  },

  DELETE_NODE (state, id) {
    const { nodes } = state

    nodes.splice(nodes.indexOf(findItemById(nodes, id)), 1)
  },

  DELETE_EDGE (state, id) {
    const { edges } = state

    edges.splice(edges.indexOf(findItemById(edges, id)), 1)
  }
}

export default mutations
