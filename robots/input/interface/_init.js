const inputUtils = require('../_utils')
const data = require('../_data')
const state = require('../../state')

async function init() {
  const content = {}

  const inputObj = data.initData

  console.log('> [input-robot] Init questions:')  
  content.lang = askAndReturnLang()
  content.template = askAndReturnTemplate()  
  console.log('> [input-robot] Saving inputs...')
  state.save(content)
  console.log('> [input-robot] Next step...')

  function askAndReturnLang() {
    const optAnswer = inputObj.optionQuestions.lang.options
    const question = inputObj.optionQuestions.lang.question
    const answer = inputUtils.askAndReturnOptions(optAnswer, question)
    return answer
  }

  function askAndReturnTemplate() {
    const optAnswer = inputObj.optionQuestions.template.options
    const question = inputObj.optionQuestions.template.question
    const answer = inputUtils.askAndReturnOptions(optAnswer, question)
    return answer
  }  
}

module.exports = init