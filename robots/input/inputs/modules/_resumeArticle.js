const state = require('../../../state')
const questionMap = require('./utils/question.map')

async function resumeArticle() {
  const content = await state.load()

  content.maximumSentences = 4

  content.article = questionMap.askAndReturnURL()
  content.title = questionMap.askAndReturnTitle()
  content.category = questionMap.askAndReturnSource()
  content.author = questionMap.askAndReturnAuthor()

  content.sourceContentOriginal = ''
  content.sourceContentSanitized = ''

  state.save(content)  
}

module.exports = resumeArticle