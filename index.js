import chalk from 'chalk'

const date = () => new Date().toLocaleDateString('es-ES')

export const info = message =>
  console.log(`${chalk.bgGray(date())} [INFO] ${message}`)
export const warn = message =>
  console.log(`${chalk.bgYellow(date())} [WARN] ${message}`)
export const error = message =>
  console.log(`${chalk.bgRed(date())} [ERROR] ${message}`)
export const debug = message =>
  console.log(`${chalk.bgBlue(date())} [DEBBUG] ${message}`)
