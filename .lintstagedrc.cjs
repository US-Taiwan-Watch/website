const fs = require('fs')

const isFormattable = (file) => {
  try {
    return !fs.lstatSync(file).isSymbolicLink()
  } catch {
    return false
  }
}

module.exports = {
  '*.{ts,tsx,js,jsx}': ['prettier --write', 'eslint --fix'],
  '!(*.{ts,tsx,js,jsx})': (files) => {
    const formattable = files.filter(isFormattable)
    if (!formattable.length) return []
    return [`prettier --write ${formattable.map((f) => `"${f}"`).join(' ')}`]
  },
}
