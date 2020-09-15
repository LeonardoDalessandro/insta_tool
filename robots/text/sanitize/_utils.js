function removeBlankLinesAndMarkdown(text) {
  const allLines = text.split('\n')

  const withoutBlankLinesAndMarkdown = allLines.filter((line) => {
    if (line.trim().length === 0 || line.trim().startsWith('=')) {
      return false
    }

    return true
  })

  return withoutBlankLinesAndMarkdown.join(' ')
}

function removeDatesInParentheses(text) {
  return text.replace(/\((?:\([^()]*\)|[^()])*\)/gm, '').replace(/  /g,' ')
}

module.exports = {
  removeBlankLinesAndMarkdown,
  removeDatesInParentheses
}