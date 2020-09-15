const state = require('../../state.js')
const utils = require('./_utils')

async function sanitizeContent() {
  console.log('> [text-robot] Starting sanitize content')
  const content = state.load()

  console.log('> [text-robot] Remove blank lines and markdown')
  const withoutBlankLinesAndMarkdown = utils.removeBlankLinesAndMarkdown(content.sourceContentOriginal)

  console.log('> [text-robot] Remove dates in parentheses')
  const withoutDatesInParentheses = utils.removeDatesInParentheses(withoutBlankLinesAndMarkdown)

  content.sourceContentSanitized = withoutDatesInParentheses

  state.save(content)
  console.log('> [text-robot] Saving data!')

  console.log('> [text-robot] Sanitize done')
}

module.exports = sanitizeContent