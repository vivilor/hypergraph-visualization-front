<!--suppress ES6ModulesDependencies -->
<template>
  <AppToolbarSection title="Общее">
    <AppButton
      icon
      tooltip="Сохранить локально"
      @click="performAction(CommonSectionAction.Save)"
    >
      save
    </AppButton>
    <AppButton
      icon
      tooltip="Загрузить локально"
      @click="performAction(CommonSectionAction.Open)"
    >
      folder-open
    </AppButton>
    <AppButton
      icon
      tooltip="Сохранить удаленно"
      @click="performAction(CommonSectionAction.Upload)"
    >
      upload
    </AppButton>
    <AppButton
      icon
      tooltip="Загрузить удаленно"
      @click="performAction(CommonSectionAction.Download)"
    >
      download
    </AppButton>
  </AppToolbarSection>
</template>

<script>
import AppButton from '@/components/AppButton/AppButton'
import AppToolbarSection from '@/components/AppToolbarSection/AppToolbarSection'

export default {
  name: 'ToolbarCommonSection',
  inject: [
    'CommonSectionAction'
  ],
  components: {
    AppButton,
    AppToolbarSection
  },
  methods: {
    performAction (name) {
      console.log(name)
    }
  }
}
</script>
