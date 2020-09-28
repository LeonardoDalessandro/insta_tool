const minimalTemplateGenerator = require('./template/minimal/index.js')
const singleTemplateGenerator = require('./template/single/index.js')

const state = require('../state.js')

async function run() {
  const content = await state.load()
  const template = content.template

  switch(template) {
    case 'minimal': {
        await minimalTemplateGenerator.run()
        break;
    }
    case 'single': {
        await singleTemplateGenerator.run()
        break;
    }
  }
}

module.exports = {
  run
}