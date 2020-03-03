import { arrayMax, truthy } from '@/utils'

import { findItemById } from './utils'

/**
 * @alias hyperGraph/getNextNodeId
 * @param state
 * @returns {string}
 */
const getNextNodeId = state => `${arrayMax(state.nodes.map(n => +n.id)) + 1}`

const getNextEdgeId = state => `${arrayMax(state.edges.map(e => +e.id)) + 1}`

const getNodeById = state => id => findItemById(state.nodes, id)

const getEdgeById = state => id => findItemById(state.edges, id)

const getNodesByIds = state => nodeIds => nodeIds
  .map(id => findItemById(state.nodes, id))
  .filter(truthy)

const getEdgeNodesByEdgeId = state => edgeId =>
  getNodesByIds(
    findItemById(state.edges, edgeId)?.nodeIds || []
  )

/**
 * @typedef HyperGraphStoreModuleGetters
 * @property getNodeById
 * @property getEdgeById
 * @property getNodesByIds
 * @property getNextNodeId
 * @property getNextEdgeId
 * @property getEdgeNodesByEdgeId
 */
const getters = {
  getNodeById,
  getEdgeById,
  getNodesByIds,
  getNextNodeId,
  getNextEdgeId,
  getEdgeNodesByEdgeId
}

export default getters
