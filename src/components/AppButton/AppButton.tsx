import * as tsx from 'vue-tsx-support'
import { CreateElement, RenderContext } from 'vue'

import './AppButton.scss'

export const AppButton = tsx.component({
  functional: true,
  name: 'AppButton',
  props: {
    icon: {
      type: Boolean,
      default: false
    },
    tooltip: {
      type: String,
      default: ''
    }
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  render: (h: CreateElement, ctx: RenderContext) => null
})
