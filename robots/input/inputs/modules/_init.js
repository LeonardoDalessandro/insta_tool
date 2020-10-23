const state = require('../../../state')
const questionMap = require('./utils/question.map')

async function init() {
  const content = {}  

  content.lang = await questionMap.askAndReturnLang()
  content.template = await questionMap.askAndReturnTemplate()  

  state.save(content)
}

module.exports = init