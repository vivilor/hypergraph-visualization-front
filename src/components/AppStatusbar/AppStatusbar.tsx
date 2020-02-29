import * as tsx from 'vue-tsx-support'
import { CreateElement } from 'vue'

import './AppStatusbar.scss'

export const AppStatusbar = tsx.component({
  name: 'AppStatusbar',
  render: (h: CreateElement) => (
    <footer class="AppStatusbar" />
  )
})
