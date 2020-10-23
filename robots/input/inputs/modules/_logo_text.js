const state = require('../../../state')
const questionMap = require('./utils/question.map')

async function logoText() {
  const content = await state.load()

  content.maximumSentences = 7

  //content.media = 'Wikipedia'
  content.searchTerm = questionMap.askAndReturnSearchTerm()
  content.prefix = questionMap.askAndReturnPrefix()

  content.colorThemeRGB = [
    parseInt(questionMap.askAndReturnColorThemeRED()),
    parseInt(questionMap.askAndReturnColorThemeGREEN()),
    parseInt(questionMap.askAndReturnColorThemeBLUE())
  ]

  content.sourceContentOriginal = ''
  content.sourceContentSanitized = ''

  state.save(content)
}

module.exports = logoText
