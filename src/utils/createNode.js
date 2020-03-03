/**
 * @typedef {Object} HyperGraphNode
 * @property {number} x
 * @property {number} y
 * @property {number} r
 * @property {string} id
 * @property {string} name
 * @property {string} fill
 * @property {string} stroke
 * @property {number} strokeWidth
 * @property {boolean} isCustomized
 */

/**
 * @typedef {string} HyperGraphNodeId
 * Id of node in hyper graph
 */

/**
 *
 * @param {number} x - X-coordinate of node
 * @param {number} y - Y-coordinate of node
 * @param {HyperGraphNodeId} id - id of node
 * @returns HyperGraphNode
 */
export const createNode = (id, x, y) => ({
  x, y, id,
  r: 5,
  name: `Node ${id}`,
  fill: 'white',
  stroke: 'black',
  strokeWidth: 1,
  isCustomized: false
})
