const initInputData = require('../input/_data.js')
const logoTextTemplateGenerator = require('./template/logo_text/index.js')
const coverTextTemplateGenerator = require('./template/cover_text/index.js')

const state = require('../state.js')

async function run() {
  console.log(`> [adobe-robot] Writing Adobe Illustrator files based on selected template ...`)
  const content = await state.load()
  const templates = initInputData.initData.optionQuestions.template.options
  const selectedTemplate = content.template

  switch(selectedTemplate) {
    case templates[0]: {
        await logoTextTemplateGenerator.run()
        console.log(`> [adobe-robot] => template[0] Files created`)
        break;
    }
    case templates[1]: {
        await coverTextTemplateGenerator.run()
        console.log(`> [adobe-robot] => template[1] Files created`)
        break;
    }
  }
}

module.exports = {
  run
}