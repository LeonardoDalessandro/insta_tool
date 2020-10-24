const state = require('../state')
const getOptionQuestionData = require('../input/initdata/_questions.select')

const getlogo = require('./modules/_getLogo.js')

async function robot() {
  console.log('> [image-robot] Starting...')  

  const content = await state.load()
  const selectedTemplate = content.template

  const initInputData = getOptionQuestionData.template
  const templateArray = initInputData.options

  switch(selectedTemplate) {
    case templateArray[0]: {
        console.log('> [image-robot] [get logo] Starting...')
        await getlogo()
        console.log('> [image-robot] [get logo] Done')
        break;
    }
    case templateArray[1]: {
        console.log("> [image-robot] This template don't require images")
        break;
    }
    case templateArray[2]: {
        console.log("> [image-robot] This template don't require images")
        break;
    }
  }

  console.log('> [image-robot] Done')  
}

module.exports = robot