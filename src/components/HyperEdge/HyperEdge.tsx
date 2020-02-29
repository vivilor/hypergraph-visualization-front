import * as tsx from 'vue-tsx-support'
import { CreateElement } from 'vue'

import './HyperEdge.scss'

export const HyperEdge = tsx.component({
  name: 'HyperEdge',
  functional: true,
  render: (h: CreateElement) => (
    <g class="HyperEdge" />
  )
})
