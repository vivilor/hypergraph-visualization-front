import * as tsx from 'vue-tsx-support'
import { CreateElement } from 'vue'

export const AppToolbar = tsx.createComponent({
  name: 'AppToolbar',
  functional: true,
  render: (h: CreateElement) => (
    <header class="AppToolbar">
      <slot />
    </header>
  )
})
