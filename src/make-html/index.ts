import process from 'node:process'
import { promises as fs, existsSync } from 'node:fs'
import url from 'node:url'
import path from 'node:path'

const CWD = process.cwd()
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const templatePath = path.join(__dirname, 'assets/template')

console.log('-----')
console.log('cp', templatePath, 'to', path.join(CWD, 'template'))
console.log('-----')

if (!existsSync(templatePath)) {
  console.error(`Could not find the template to copy at ${templatePath}`)
  process.exit(1)
}

console.log('cp', templatePath, 'to', path.join(CWD, 'template'))

// await fs.cp(
//   templatePath,
//   path.join(CWD, 'template'),
//   { recursive: true }
// )