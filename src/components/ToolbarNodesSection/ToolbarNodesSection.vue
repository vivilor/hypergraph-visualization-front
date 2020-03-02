<template>
  <AppToolbarSection
    title="Узлы"
    :cells-max="2"
  >
    <AppButton
      icon
      :active="isActive(NodeToolbarButtonType.Add)"
      @click="onClick(NodeToolbarButtonType.Add)"
    >
      plus
    </AppButton>
    <AppButton
      icon
      :active="isActive(NodeToolbarButtonType.Move)"
      @click="onClick(NodeToolbarButtonType.Move)"
    >
      arrows-alt
    </AppButton>
    <AppButton
      icon
      :active="isActive(NodeToolbarButtonType.Delete)"
      @click="onClick(NodeToolbarButtonType.Delete)"
    >
      trash-alt
    </AppButton>
  </AppToolbarSection>
</template>

<script>
import { AppButton, AppToolbarSection } from '@/components'

import { NodeToolbarButtonType, NodeToolbarButtonTypeToPlaygroundMode } from '@/enums'

export default {
  name: 'ToolbarNodesSection',
  components: { AppButton, AppToolbarSection },
  data: () => ({
    NodeToolbarButtonType
  }),
  methods: {
    /**
     * @param {NodeToolbarButtonType} btnType
     */
    isActive (btnType) {
      return NodeToolbarButtonTypeToPlaygroundMode[btnType] === this.$store.state.playground.mode
    },

    /**
     *
     * @param {NodeToolbarButtonType} btnType
     */
    onClick (btnType) {
      this.$store.commit({
        type: 'playground/SET_MODE_BY_NODE_TOOLBAR',
        btnType
      })
    }
  }
}
</script>

<style scoped>

</style>
