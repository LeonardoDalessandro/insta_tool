const custom = require('./modules/_custom.js')
const wikipedia = require('./modules/_wikipedia.js')
const getOptionQuestionData = require('../../input/initdata/_questions.select')

const state = require('../../state.js')

async function fetchContent() {
  const content = await state.load()
  const selectedTemplate = content.template

  const initInputData = getOptionQuestionData.template
  const templateArray = initInputData.options
  
  console.log('> [text-robot] [fetch] Check user preference')
  switch (selectedTemplate) {
    case templateArray[0]:
      console.log('> [text-robot] [fetch] Get text for template: ' + selectedTemplate)
      await wikipedia()
      console.log('> [text-robot] [fetch] DONE')
      break
    case templateArray[1]:
      console.log('> [text-robot] [fetch] Get text for template: ' + selectedTemplate)
      await custom()
      console.log('> [text-robot] [fetch] DONE')
      break
    case templateArray[2]:
      console.log('> [text-robot] [fetch] Get text for template: ' + selectedTemplate)
      await wikipedia()
      console.log('> [text-robot] [fetch] DONE')
      break
  }

}

module.exports = fetchContent