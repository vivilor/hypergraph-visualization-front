<template>
  <div class="App">
    <AppToolbar>
      <ToolbarOperationSection />
      <AppToolbarSection title="Узлы" />
      <AppToolbarSection title="Ребра" />
    </AppToolbar>
    <div class="App__PlaygroundWrapper">
      <AppPlayground />
      <!--<AppSidebar />-->
    </div>
    <AppStatusbar>
      <MousePosition
        :x="512"
        :y="256"
      />
      <AppStatusBarDelimiter />
    </AppStatusbar>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import {
  AppToolbar,
  AppSidebar,
  AppStatusbar,
  AppPlayground,
  AppToolbarSection,
  ToolbarCommonSection,
  ToolbarOperationSection
} from '@/components'
import MousePosition from '@/components/MousePosition/MousePosition'
import AppStatusBarDelimiter from '@/components/AppStatusBarDelimiter/AppStatusBarDelimiter'

export default {
  name: 'App',
  components: {
    AppStatusBarDelimiter,
    MousePosition,
    ToolbarOperationSection,
    AppToolbar,
    AppSidebar,
    AppStatusbar,
    AppPlayground,
    AppToolbarSection,
    ToolbarCommonSection
  }
}
</script>

<style lang="scss">
div.App {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 108px auto 22px;
  flex-direction: column;
  &__PlaygroundWrapper {
    display: flex;
    flex: auto;
  }
}
</style>

