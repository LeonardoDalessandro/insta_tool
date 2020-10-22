const fs = require('fs')
const xmlCode = require('./generator/_xml.js')
const vbsCode = require('./generator/_vbs.js')

const initInputData = require('../../../input/_data')
const state = require('../../../state')

const pathXML = './content/aiTask.xml'
const pathVBScript = './content/aiTask.vbs'

async function run() {
  let template
  const content = await state.load()

  const slides = content.slides
  const slideLenght = content.maximumSentences
  const mainTitle = content.title
  const author = content.author
  const category = content.category

  const categoryArray = initInputData.initData.optionQuestions.articleCategory.options

  switch(category) {
    case categoryArray[0]: {
        template = 'AITemplateDicas.ai'
        break;
    }
    case categoryArray[1]: {
        template = 'AITemplate.ai'
        break;
    }
  }


  async function generateXML(){
    console.log(`> [adobe-robot] Writing .xml structure data ...`)  
    return fs.writeFileSync(pathXML, xmlCode.build(slides, slideLenght, mainTitle, author))
  }

  async function generateVBS(){
    console.log(`> [adobe-robot] Writing .vbs structure data ...`)
    return fs.writeFileSync(pathVBScript, vbsCode.build(slideLenght, template))
  }

  await generateXML()
  await generateVBS()
}

module.exports = {
  run
}