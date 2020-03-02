<template functional>
  <footer class="AppStatusbar">
    <slot />
  </footer>
</template>
<script>
export default {
  name: 'AppStatusbar',
  functional: true
}
</script>
<style lang="scss">
@import "~@/styles/index.scss";

footer.AppStatusbar {
  width: calc(100% - 2px);
  border: 1px solid $clr-border;
  background: $clr-background;
  height: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>

