import * as tsx from 'vue-tsx-support'
import { CreateElement } from 'vue'

export const AppToolbar = tsx.createComponent({
  functional: true,
  render: (h: CreateElement) => (
    <header class="AppToolbar">
      <slot />
    </header>
  )
})
