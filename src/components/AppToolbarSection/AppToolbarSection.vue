<template functional>
  <section class="AppToolbarSection">
    <div
      class="AppToolbarSection__Tools"
      :style="{ width: props.cellsMax * 36 + 'px' }"
    >
      <slot />
    </div>
    <header class="AppToolbarSection__Title">
      {{ props.title }}
    </header>
  </section>
</template>

<script>
export default {
  name: 'AppToolbarSection',
  functional: true,
  props: {
    title: {
      type: String,
      default: ''
    },
    cellsMax: {
      type: Number,
      default: 4
    }
  }
}
</script>

<style lang="scss">
@import "~@/styles/index.scss";

.AppToolbarSection {
  &:hover > &__Title{
    @include transition;
    background: $clr-active;
  }

  &__Tools {
    border-top: 1px $clr-border solid;
    border-left: 1px $clr-border solid;
    border-right: 1px $clr-border solid;
    @include border-radius-top-left(4px);
    @include border-radius-top-right(4px);
    height: 76px;
    padding: 2px;
    display: flex;
    flex-wrap: wrap;

    & > * {
      margin: 2px;
    }
  }
  &__Title {
    @include transition;
    background: $clr-border;
    text-align: center;
    height: 16px;
    @include border-radius-bottom-left(4px);
    @include border-radius-bottom-right(4px);
    @include captionFont;
    color: $clr-text;
  }
}


</style>


