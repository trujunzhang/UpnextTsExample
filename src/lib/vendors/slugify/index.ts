import * as charMap from './slugify.json'

export function slugify(value, options) {
  options =
    typeof options === 'string' ? { replacement: options } : options || {}

  value = value
    .split('')
    .reduce((result, ch) => {
      if (charMap[ch]) {
        ch = charMap[ch]
      }
      // allowed
      ch = ch.replace(options.remove || /[^\w\s$*_+~.()'"!\-:@]/g, '')
      result += ch
      return result
    }, '')
    // trim leading/trailing spaces
    .replace(/^\s+|\s+$/g, '')
    // convert spaces
    .replace(/[-\s]+/g, options.replacement || '-')
    // remove trailing separator
    .replace('#{replacement}$', '')

  return options.lower ? value.toLowerCase() : value
}
