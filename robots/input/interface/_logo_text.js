const inputUtils = require('../_utils')
const data = require('../_data')
const state = require('../../state')

async function logoText() {
  const content = await state.load()
  const inputObj = data.initData

  content.maximumSentences = 7

  console.log('> [input-robot] [Template: logo and text] questions:')
  content.media = 'Wikipedia'
  content.searchTerm = askAndReturnSearchTerm()
  content.prefix = askAndReturnPrefix()
  content.colorThemeRGB = [parseInt(askAndReturnColorThemeRED()),parseInt(askAndReturnColorThemeGREEN()),parseInt(askAndReturnColorThemeBLUE())]
  content.sourceContentOriginal = ''
  content.sourceContentSanitized = ''
  console.log('> [input-robot] Saving inputs...')
  state.save(content)
  console.log('> [input-robot] Closed')  

  function askAndReturnSearchTerm() {
    const question = inputObj.stringQuestions.searchTerm.question
    const answer = inputUtils.askAndReturnString(question)
    return answer
  }

  function askAndReturnPrefix() {
    const optAnswer = inputObj.optionQuestions.prefix.options
    const question = inputObj.optionQuestions.prefix.question
    const answer = inputUtils.askAndReturnOptions(optAnswer, question)
    return answer
  }

  function askAndReturnColorThemeRED() {
    const question = inputObj.stringQuestions.colorThemeRGBred.question
    const answer = inputUtils.askAndReturnString(question)
    return answer
  }
  function askAndReturnColorThemeGREEN() {
    const question = inputObj.stringQuestions.colorThemeRGBgreen.question
    const answer = inputUtils.askAndReturnString(question)
    return answer
  }
  function askAndReturnColorThemeBLUE() {
    const question = inputObj.stringQuestions.colorThemeRGBblue.question
    const answer = inputUtils.askAndReturnString(question)
    return answer
  }
}

module.exports = logoText