import * as tsx from 'vue-tsx-support'
import { CreateElement } from 'vue'

export const Node = tsx.component({
  name: 'Node',
  functional: true,
  render: (h: CreateElement) => (
    <g class="Node" />
  )
})
