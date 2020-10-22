const initData = require('./_init')
const logoTextData = require('./_logo_text')
const resumeArticle = require('./_resumeArticle')
const state = require('../../state')
const initInputData = require('../_data')

async function interface() {
  await initData()

  const content = await state.load()
  const templateArray = initInputData.initData.optionQuestions.template.options
  const selectedTemplate = content.template

  switch(selectedTemplate) {
    case templateArray[0]: {
        await logoTextData()
        break;
    }
    case templateArray[1]: {
        await resumeArticle()
        break;
    }
  }
  
}

module.exports = interface