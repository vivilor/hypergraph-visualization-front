<template>
  <div class="AppPlayground">
    <svg
      ref="svg"
      class="AppPlayground__InteractiveZone"
      @click="onClick"
      @mouseup="onMouseUp"
      @mousemove="onMouseMove"
      @mousedown="onMouseDown"
    >
      <Node
        v-for="node in $store.state.hyperGraph.nodes"
        :key="node.id"
        :node="node"
      />
    </svg>
  </div>
</template>

<script>
import { PlaygroundMode } from '@/enums'
import Node from '@/components/Node/Node'

export default {
  name: 'AppPlayground',
  components: { Node },
  methods: {
    /**
     *
     * @param {MouseEvent} e
     */
    onMouseMove (e) {
      this.$store.commit({
        type: 'playground/SET_MOUSE_POS',
        x: e.offsetX,
        y: e.offsetY
      })
    },
    onMouseDown (e) {
    },
    onMouseUp (e) {
    },
    /**
     *
     * @param {MouseEvent} e
     */
    onClick (e) {
      console.log(e)


      const { mode } = this.$store.state.playground

      switch (mode) {
        case PlaygroundMode.CreateNode:
          const isSvg = e.composedPath()?.find(el => el.tagName === 'svg')

          if (!isSvg) return

          const { top, left } = this.$refs.svg.getBoundingClientRect()
          const { x, y } = e


          this.$store.commit({
            type: 'hyperGraph/CREATE_NODE',
            id: this.$store.getters['hyperGraph/newNodeId'],
            x: x - left,
            y: y - top
          })
          break
        case PlaygroundMode.Delete:
          break
        default:
          break
      }
    }
  }
}
</script>

<style lang="scss">
@import "~@/styles/index.scss";

.AppPlayground {
  flex: auto;
  width: calc(100% - 2px);
  border-top: 1px solid $clr-border;
  border-left: 1px solid $clr-border;
  border-right: 1px solid $clr-border;
  &__InteractiveZone {
    width: 100%;
    height: 100%;
  }
}
</style>
