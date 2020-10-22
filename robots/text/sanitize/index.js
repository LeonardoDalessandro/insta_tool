const utils = require('./_utils')

async function sanitizeContent() {
  console.log('> [text-robot] [sanitize] Starting sanitize content')  

  console.log('> [text-robot] [sanitize] Remove blank lines and markdown')
  await utils.removeBlankLinesAndMarkdown()

  console.log('> [text-robot] [sanitize] Remove dates in parentheses')
  await utils.removeDatesInParentheses()  

  console.log('> [text-robot] [sanitize] Sanitize done')
}

module.exports = sanitizeContent