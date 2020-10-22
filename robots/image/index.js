const state = require('../state')
const fetchImages = require('./_getLogo.js')
const initInputData = require('../input/_data')

async function robot() {
  console.log('> [image-robot] Starting...')

  const content = await state.load()
  const templateArray = initInputData.initData.optionQuestions.template.options
  const selectedTemplate = content.template

  switch(selectedTemplate) {
    case templateArray[0]: {
        await fetchImages.getlogo()
        break;
    }
    case templateArray[1]: {
        console.log("> [image-robot] This template don't require images")
        break;
    }
  }

  

  console.log('> [image-robot] Done')  
}

module.exports = robot