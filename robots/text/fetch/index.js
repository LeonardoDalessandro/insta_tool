const custom = require('./_custom.js')
const wikipedia = require('./_wikipedia.js')
const initInputData = require('../../input/_data')

const state = require('../../state.js')

async function fetchContent() {
  const content = await state.load()
  const templates = initInputData.initData.optionQuestions.template.options
  const selectedTemplate = content.template
  console.log('> [text-robot] [fetch] Check user preference')
  console.log('> [text-robot] [fetch] Allow media: ' + templates)
  console.log(`> [text-robot] [fetch] Selected media: ${selectedTemplate}`)


  switch (selectedTemplate) {
    case templates[0]:
      await wikipedia.getText()
      break
    case templates[1]:
      await custom.getText()
      break
  }

}

module.exports = fetchContent