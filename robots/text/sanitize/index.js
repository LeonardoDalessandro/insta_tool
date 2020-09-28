const utils = require('./_utils')

async function sanitizeContent() {
  console.log('> [text-robot] Starting sanitize content')  

  console.log('> [text-robot] Remove blank lines and markdown')
  await utils.removeBlankLinesAndMarkdown()

  console.log('> [text-robot] Remove dates in parentheses')
  await utils.removeDatesInParentheses()  

  console.log('> [text-robot] Sanitize done')
}

module.exports = sanitizeContent