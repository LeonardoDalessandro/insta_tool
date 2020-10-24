const state = require('../../../state')
const questionMap = require('./utils/question.map')

async function logoText() {
  const content = await state.load()

  content.maximumSentences = 4

  //content.media = 'Wikipedia'
  content.searchTerm = questionMap.askAndReturnSearchTerm()

  content.sourceContentOriginal = ''
  content.sourceContentSanitized = ''

  state.save(content)
}

module.exports = logoText
