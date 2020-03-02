const fs = require('fs')
const path = require('path')

const config = require('./scripts.config')

const SCRIPT_NAME = 'genExports'
const CWD = process.cwd()

const err = s => process.stderr.write(`[!] ${s}\n`)
const log = s => process.stdout.write(`[>] ${s}\n`)

const genDirImports = entries => entries
  .map(e => e.name)
  .map(s => `import ${s} from './${s}/${s}'`)
  .join('\n')

const genDirExports = entries => entries
  .map(e => e.name)
  .map(s => `  ${s}`)
  .join(',\n')

const wrapExports = e => `export {\n${e}\n}\n`

const dirs = config.genExports

if (!Array.isArray(dirs) || !dirs.length) {
  err(`No config entry for script ${SCRIPT_NAME}. Aborting`)
  process.exit(-1)
}

log(`Working directory: ${CWD}`)

for (const dir of dirs) {
  try {
    log(`Generating in ${dir}`)

    const dirToRead = path.join(CWD, dir)
    const readdirOptions = { withFileTypes: true }

    const entries = fs.readdirSync(dirToRead, readdirOptions)
      .filter(e => path.basename(e.name) !== 'index.js')

    const dirsToExport = entries.filter(e => e.isDirectory())

    log(`\tFound ${dirsToExport.length} directories`)

    const indexPath = path.join(CWD, dir, 'index.js')
    const indexBody = `${genDirImports(dirsToExport)}\n\n${wrapExports(genDirExports(dirsToExport))}`
    const indexFd = fs.openSync(indexPath, 'w')

    fs.writeSync(indexFd, indexBody)
    fs.closeSync(indexFd)
  } catch (e) {
    err(e.message)
  }
}

log('Done!')
