<template functional>
  <g
    class="Node"
    :data-node-id="`${props.node.id}`"
  >
    <circle
      :r="props.node.r"
      :cx="props.node.x"
      :cy="props.node.y"
      :fill="props.node.fill"
      :stroke="props.node.stroke"
      :stroke-width="props.node.strokeWidth"
    />
    <text
      :x="props.node.x"
      :y="props.node.y < 12 ? props.node.y + 20 : props.node.y - 8"
      text-anchor="middle"
      class="Node__Text"
    >
      {{ props.node.name }}
    </text>
  </g>
</template>

<script>
export default {
  name: 'Node',
  functional: true,
  props: {
    node: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import "~@/styles/index.scss";

.Node {
  @include cursorPointer;
  &__Text {
    @include labelFont;
    user-select: none;
    border: 1px solid black;
  }
}
</style>
