const date = () => new Date().toLocaleDateString('es-ES')

export const info = message => console.log(`${date()} [INFO] ${message}`)
export const warn = message => console.log(`${date()} [WARN] ${message}`)
export const error = message => console.log(`${date()} [ERROR] ${message}`)
export const debug = message => console.log(`${date()} [DEBBUG] ${message}`)
