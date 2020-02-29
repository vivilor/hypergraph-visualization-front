import * as tsx from 'vue-tsx-support'
import { CreateElement, RenderContext } from 'vue'

export const AppToolbarSection = tsx.component({
  name: 'AppToolbarSection',
  functional: true,
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  render: (h: CreateElement, ctx: RenderContext) => (
    <section class="AppToolbarSection">
      <div class="AppToolbarSection__Tools">
        <slot />
      </div>
      <header class="AppToolbarSection__Title">
        {ctx.props.title}
      </header>
    </section>
  )
})
