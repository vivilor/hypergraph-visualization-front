import * as tsx from 'vue-tsx-support'
import { CreateElement, RenderContext } from 'vue'

import './AppToolbar.scss'

export const AppToolbar = tsx.createComponent({
  name: 'AppToolbar',
  functional: true,
  render: (h: CreateElement, ctx: RenderContext) => (
    <header class="AppToolbar">
      {ctx.children}
    </header>
  )
})
