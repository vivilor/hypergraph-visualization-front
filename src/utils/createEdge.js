import { PlaygroundEntity } from '@/enums'

/**
 * @typedef {Object} HyperGraphEdge
 * @property {string} id
 * @property {Array<HyperGraphEdgeId>} nodeIds
 * @property {string} stroke
 * @property {string} fill
 * @property {string} name
 * @property {boolean} isCustomized
 */

/**
 * @typedef {string} HyperGraphEdgeId
 * Id of hyper edge
 */

/**
 *
 * @param {string} id
 * @param {Array<string>} nodeIds
 * @returns HyperGraphEdge
 */
export const createEdge = (id, nodeIds) => ({
  is: PlaygroundEntity.Edge,
  id, nodeIds,
  stroke: 'black',
  fill: 'transparent',
  name: `Hyper edge ${id}`,
  isCustomized: false
})
