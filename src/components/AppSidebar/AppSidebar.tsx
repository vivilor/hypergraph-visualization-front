import * as tsx from 'vue-tsx-support'
import { CreateElement } from 'vue'

export const AppSidebar = tsx.component({
  render: (h: CreateElement) => (
    <aside class="AppSidebar" />
  )
})
