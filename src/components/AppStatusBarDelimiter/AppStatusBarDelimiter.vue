<template functional>
  <div class="AppStatusBarDelimiter" />
</template>

<script>
export default {
  name: 'AppStatusBarDelimiter',
  functional: true
}
</script>

<style lang="scss">
@import "~@/styles/index.scss";

.AppStatusBarDelimiter {
  border-left: 1px solid $clr-border;
  width: 0;
  height: 100%;
}
</style>
