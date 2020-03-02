import { arrayMax, truthy } from '@/utils'

import { findItemById } from './utils'

const nextNodeId = state => arrayMax(state.nodes.map(n => +n.id)) + 1

const nextEdgeId = state => arrayMax(state.edges.map(e => +e.id)) + 1

const getNode = state => id => findItemById(state.nodes, id)

const getEdge = state => id => findItemById(state.edges, id)

const getNodes = state => nodeIds => nodeIds
  .map(id => findItemById(state.nodes, id))
  .filter(truthy)

const getEdgeNodes = state => edgeId =>
  getNodes(
    findItemById(state.edges, edgeId)?.nodeIds || []
  )

/**
 * @typedef HyperGraphStoreModuleGetters
 * @property getNode
 * @property getEdge
 * @property getEdgeNodes
 */
const getters = {
  getNode,
  getEdge,
  getNodes,
  getEdgeNodes
}

export default getters
