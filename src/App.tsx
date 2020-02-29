import * as tsx from 'vue-tsx-support'
import { CreateElement } from 'vue'

import { AppToolbar } from '@/components/AppToolbar/AppToolbar'
import { AppSidebar } from '@/components/AppSidebar/AppSidebar'
import { AppStatusbar } from '@/components/AppStatusbar/AppStatusbar'
import { AppPlayground } from '@/components/AppPlayground/AppPlayground'
import { AppToolbarSection } from '@/components/AppToolbarSection/AppToolbarSection'

export default tsx.component({
  render: (h: CreateElement) => (
    <div class="App">
      <AppToolbar>
        <AppToolbarSection title={'Общее'}/>
        <AppToolbarSection title={'Узлы'}/>
        <AppToolbarSection title={'Ребра'}/>
      </AppToolbar>
      <AppPlayground />
      <AppSidebar />
      <AppStatusbar />
    </div>
  )
})
