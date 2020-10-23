const state = require('../state.js')
const getOptionQuestionData = require('../input/initdata/_questions.select')

const logoTextTemplateGenerator = require('./template/logo_text/index.js')
const coverTextTemplateGenerator = require('./template/cover_text/index.js')

async function run() {
  console.log(`> [adobe-robot] Writing Adobe Illustrator files based on selected template ...`)

  const content = await state.load()
  const selectedTemplate = content.template

  const initInputData = getOptionQuestionData.template
  const templateArray = initInputData.options

  switch(selectedTemplate) {
    case templateArray[0]: {
        console.log(`> [adobe-robot] [Template logo] Starting`)
        await logoTextTemplateGenerator.run()
        console.log(`> [adobe-robot] [Template logo] Done`)
        break;
    }
    case templateArray[1]: {
        console.log(`> [adobe-robot] [Template resume article] Starting`)
        await coverTextTemplateGenerator.run()
        console.log(`> [adobe-robot] [Template resume article] Done`)
        break;
    }
  }
}

module.exports = {
  run
}