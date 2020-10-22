const inputUtils = require('../_utils')
const data = require('../_data')
const state = require('../../state')

async function resumeArticle() {
  const content = await state.load()
  const inputObj = data.initData

  content.maximumSentences = 4

  console.log('> [input-robot] [Template: resume article] questions:')  
  content.article = askAndReturnURL()
  content.title = askAndReturnTitle()
  content.category = askAndReturnSource()
  content.author = askAndReturnAuthor()
  content.sourceContentOriginal = ''
  content.sourceContentSanitized = ''
  console.log('> [input-robot] Saving inputs...')
  state.save(content)
  console.log('> [input-robot] Closed')
  
  function askAndReturnURL() {
    const question = inputObj.stringQuestions.urlSource.question
    const answer = inputUtils.askAndReturnString(question)
    return answer
  }
  function askAndReturnTitle() {
    const question = inputObj.stringQuestions.articleTitle.question
    const answer = inputUtils.askAndReturnString(question)
    return answer
  }
  function askAndReturnAuthor() {
    const question = inputObj.stringQuestions.articleAuthor.question
    const answer = inputUtils.askAndReturnString(question)
    return answer
  }

  function askAndReturnSource() {
    const optAnswer = inputObj.optionQuestions.articleCategory.options
    const question = inputObj.optionQuestions.articleCategory.question
    const answer = inputUtils.askAndReturnOptions(optAnswer, question)
    return answer
  }
}

module.exports = resumeArticle