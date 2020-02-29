
import * as tsx from 'vue-tsx-support'
import { CreateElement } from 'vue'

export const Node = tsx.component({
  render: (h: CreateElement) => (
    <g class="Node" />
  )
})

