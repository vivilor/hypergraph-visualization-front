<template functional>
  <g
    class="Node"
    :data-node-id="props.node.id"
  >
    <circle />
  </g>
</template>

<script>
import { createNode } from '@/utils'

export default {
  name: 'Node',
  functional: true,
  props: {
    node: {
      type: createNode,
      required: true
    }
  }
}
</script>

<style lang="scss">
.Node {}
</style>
