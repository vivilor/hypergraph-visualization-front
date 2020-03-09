<template functional>
  <component
    :is="slots().default"
    :class="`AppIcon--${props.size}`"
  />
</template>

<script>
const sizes = ['Xs', 'Sm', 'Md', 'Lg', 'Xl']

export default {
  name: 'AppIcon',
  functional: true,
  props: {
    size: {
      type: String,
      validator: v => sizes.includes(v),
      default: 'sm'
    }
  }
}
</script>
