import * as tsx from 'vue-tsx-support'
import { CreateElement } from 'vue'

import './AppInput.scss'

export const AppInput = tsx.component({
  name: 'AppInput',
  render: (h: CreateElement) => (
    <input class="AppInput" />
  )
})
