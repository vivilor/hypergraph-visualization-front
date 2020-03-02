export default {
  name: 'Node',
  functional: true,
  props: {
    node: {
      type: Object,
      required: true
    }
  },
  /**
   *
   * @param {CreateElement} h
   * @param {HyperGraphNode} node
   * @returns {VNode}
   */
  render: (h, { props: { node } }) => (
    <g class='Node' data-node-id={node.id}>
      <circle
        r={node.r}
        cx={node.x}
        cy={node.y}
        fill={node.fill}
        stroke={node.stroke}
        stroke-width={node.strokeWidth}
      />
    </g>
  )
}
