import { arrayMax, createEdge, createNode, truthy } from '@/utils'
import { findItemById } from './utils'

/**
 * @typedef {Object} HyperGraphStoreModuleMutations
 */

/**
 * @typedef {Object} HyperGraphStoreModule
 */

/**
 * @type {HyperGraphStoreModule}
 */
export default {
  state: {
    nodes: [],
    edges: [],
    selected: []
  },
  getters: {
    /**
     * @alias hyperGraph/getNodeById
     */
    getNodeById: state => `${arrayMax(state.nodes.map(n => +n.id)) + 1}`,
    /**
     * @alias hyperGraph/getEdgeById
     */
    getEdgeById: state => `${arrayMax(state.edges.map(e => +e.id)) + 1}`,
    /**
     * @alias hyperGraph/getNextNodeId
     */
    getNextNodeId: state => id => findItemById(state.nodes, id),
    /**
     * @alias hyperGraph/getNextEdgeId
     */
    getNextEdgeId: state => id => findItemById(state.edges, id),
    /**
     * @alias hyperGraph/getNodesByIds
     */
    getNodesByIds: state => nodeIds => nodeIds.map(id => findItemById(state.nodes, id)).filter(truthy),
    /**
     * @alias hyperGraph/getEdgeNodesByEdgeId
     */
    getEdgeNodesByEdgeId: (state, getters) => edgeId =>
      getters.getNodesByIds(findItemById(state.edges, edgeId)?.nodeIds || [])
  },
  mutations: {
    /**
     * @alias hyperGraph/CREATE_NODE
     */
    CREATE_NODE: ({ nodes }, { id, x, y }) => nodes.push(createNode(id, x, y)),
    /**
     * @alias hyperGraph/CREATE_EDGE
     */
    CREATE_EDGE: ({ edges }, { id, nodesId }) => edges.push(createEdge(id, nodesId)),
    /**
     * @alias hyperGraph/DELETE_NODE
     */
    DELETE_NODE: ({ nodes }, { id }) => nodes.splice(nodes.indexOf(findItemById(nodes, id)), 1),
    /**
     * @alias hyperGraph/DELETE_EDGE
     */
    DELETE_EDGE: ({ edges }, id) => edges.splice(edges.indexOf(findItemById(edges, id)), 1)
  },
  namespaced: true
}
