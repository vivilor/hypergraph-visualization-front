<template>
  <div class="MousePosition">
    {{ $store.getters['playground/mousePos'] }}
  </div>
</template>

<script>
export default {
  name: 'MousePosition'
}
</script>

<style scoped lang="scss">
@import "~@/styles/index.scss";

.MousePosition {
  @include captionFont;
  color: $clr-text;
  width: 90px;
  text-align: center;
}
</style>
