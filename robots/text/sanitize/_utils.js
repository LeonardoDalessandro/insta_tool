const state = require('../../state.js')

async function removeBlankLinesAndMarkdown() {
  const content = await state.load()

  if (content.sourceContentOriginal) {
    const allLines = content.sourceContentOriginal.split('\n')

    const withoutBlankLinesAndMarkdown = allLines.filter((line) => {
      if (line.trim().length === 0 || line.trim().startsWith('=')) {
        return false
      }

      return true
    })
    
    content.sourceContentSanitized = await withoutBlankLinesAndMarkdown.join(' ')
  }
  

  state.save(content)
  return true
}

async function removeDatesInParentheses() {
  const content = await state.load()
  const allLines = content.sourceContentSanitized

  if (allLines) {
    allLines.replace(/\((?:\([^()]*\)|[^()])*\)/gm, '').replace(/  /g,' ')
    state.save(content)
  }
  
  return true
}

module.exports = {
  removeBlankLinesAndMarkdown,
  removeDatesInParentheses
}