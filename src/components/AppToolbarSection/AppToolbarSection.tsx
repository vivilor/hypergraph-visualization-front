import * as tsx from 'vue-tsx-support'
import { CreateElement, RenderContext } from 'vue'

interface AppToolbarSectionProps {
  title?: string
}

export const AppToolbarSection = tsx.component({
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
