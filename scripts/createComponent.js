// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs')

const componentName = process.argv[2]
const tagName = process.argv[3] || 'div'
const paramsArg = process.argv[4] || ''

const params = paramsArg.split()

const dirPath = c => `./src/components/${c}`
const tsxPath = c => `./src/components/${c}/${c}.tsx`
const scssPath = c => `./src/components/${c}/${c}.scss`

const createTsxFileContent = (componentName, tagName) =>
`import * as tsx from 'vue-tsx-support'
import { CreateElement } from 'vue'

export const ${componentName} = tsx.component({${params.includes('f') ? '\n  functional: true,' : ''}
  name: '${componentName}',
  render: (h: CreateElement) => (
    <${tagName} class="${componentName}" />
  )
})
`

const createScssFileContent = componentName =>
`.${componentName} {}
`

if (!componentName) {
  process.stderr.write('[!] Component name was not specified. Aborting...')
  process.exit(-1)
}

if (!fs.existsSync(dirPath(componentName))) {
  fs.mkdirSync(dirPath(componentName))
}

const tsxFileFd = fs.openSync(tsxPath(componentName), 'w')
const scssFileFd = fs.openSync(scssPath(componentName), 'w')

fs.writeSync(tsxFileFd, createTsxFileContent(componentName, tagName))
fs.writeSync(scssFileFd, createScssFileContent(componentName))

fs.closeSync(tsxFileFd)
fs.closeSync(scssFileFd)
