
import * as tsx from 'vue-tsx-support'
import { CreateElement } from 'vue'

export const AppButton = tsx.component({
  render: (h: CreateElement) => (
    <button class="AppButton" />
  )
})

