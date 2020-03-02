export const buttonContent = ctx =>
  ctx.slots().default?.[0]?.text || ''

export const iconClass = ctx =>
  `fas fa-${buttonContent(ctx).replace(/ /g, '')}`

export const buttonClasses = ctx => {
  const classes = ['AppButton']
  const { icon, fullWidth, fillRow, active, disabled } = ctx.props

  fillRow && classes.push('AppButton--FillRow')
  fullWidth && classes.push('AppButton--FullWidth')

  if (icon) {
    classes.push('AppButton--Icon')
  } else {
    classes.push('AppButton--Text')
  }

  if (disabled) {
    classes.push('AppButton--Disabled')
  } else if (active) {
    classes.push('AppButton--Active')
  }

  return classes
}
