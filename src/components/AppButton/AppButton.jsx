import Popper from 'vue-popperjs'

import { buttonClasses, buttonContent, iconClass } from '@/components/AppButton/utils'

import './AppButton.scss'

const bindListeners = ctx => ctx.listeners.click
  ? { on: { click: ctx.listeners.click } }
  : {}

const appTextButton = (h, ctx) => (
  <div class={buttonClasses(ctx)} {...bindListeners(ctx) }>
    {buttonContent(ctx)}
  </div>
)

const appIconButton = (h, ctx) => (
  <div class={buttonClasses(ctx)} {...bindListeners(ctx) }>
    <i class={iconClass(ctx)} />
  </div>
)

const appTooltipIconButton = (h, ctx) => (
  <Popper trigger="hover" options={{ placement: 'top' }}>
    <div>{ctx.props.tooltip}</div>
    <div slot="reference" class={buttonClasses(ctx)} {...bindListeners(ctx) }>
      <i class={iconClass(ctx)} />
    </div>
  </Popper>
)

export default {
  name: 'AppButton',
  functional: true,
  props: {
    icon: { type: Boolean, default: false },
    tooltip: { type: String, default: '' },
    fullWidth: { type: Boolean, default: false },
    fillRow: { type: Boolean, default: false },
    active: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
  render: (h, ctx) =>
    ctx.props.icon
      ? ctx.props.tooltip
        ? appTooltipIconButton(h, ctx)
        : appIconButton(h, ctx)
      : appTextButton(h, ctx)
}
