import * as tsx from 'vue-tsx-support'
import { CreateElement } from 'vue'

export const AppInput = tsx.component({
  name: 'AppInput',
  render: (h: CreateElement) => (
    <input class="AppInput" />
  )
})
