import * as tsx from 'vue-tsx-support'
import { CreateElement } from 'vue'

import './AppSidebar.scss'

export const AppSidebar = tsx.component({
  name: 'AppSidebar',
  render: (h: CreateElement) => (
    <aside class="AppSidebar" />
  )
})
