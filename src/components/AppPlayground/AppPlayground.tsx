import * as tsx from 'vue-tsx-support'
import { CreateElement } from 'vue'

import './AppPlayground.scss'

export const AppPlayground = tsx.component({
  name: 'AppPlayground',
  render: (h: CreateElement) => (
    <div class="AppPlayground">
    </div>
  )
})
