<template functional>
  <div class="AppToolbar">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppToolbar',
  functional: true
}
</script>

<style lang="scss">
@import "~@/styles/index.scss";

.AppToolbar {
  width: calc(100% - 8px);
  height: 96px;
  display: flex;
  padding: 4px;
  overflow-x: scroll;
  overflow-y: hidden;
  background: $clr-background;
  align-items: flex-start;
  justify-content: flex-start;

  & > *:not(:first-child) {
    margin-left: 4px;
  }
}
</style>

