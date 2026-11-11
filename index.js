import chalk from 'chalk'
import fs from 'node:fs'

const date = () => new Date().toLocaleDateString('es-ES')

function report(text) {
  fs.appendFileSync('report.txt', text + '\n')
}

export function info(message) {
  report(`${date()} ${message}`)
  console.log(chalk.gray(`${date()} [INFO] ${message}`))
}

export function warn(message) {
  report(`${date()} ${message}`)
  console.log(chalk.yellow(`${date()} [WARN] ${message}`))
}

export function error(message) {
  report(`${date()} ${message}`)
  console.log(chalk.red(`${date()} [ERROR] ${message}`))
}

export function debug(message) {
  report(`${date()} ${message}`)
  console.log(chalk.blue(`${date()} [DEBUG] ${message}`))
}
