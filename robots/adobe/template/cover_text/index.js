const fs = require('fs')
const xmlCode = require('./generator/_xml.js')
const vbsCode = require('./generator/_vbs.js')

const getOptionQuestionData = require('../../../input/initdata/_questions.select')
const state = require('../../../state')

const pathXML = './content/aiTask.xml'
const pathVBScript = './content/aiTask.vbs'

async function run() {
  let template
  const content = await state.load()

  const slides = content.slides
  const slideLength = content.maximumSentences
  const mainTitle = content.title
  const author = content.author
  const category = content.category

  const categoryArray = getOptionQuestionData.articleCategory.options

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
    return fs.writeFileSync(pathXML, xmlCode.build(slides, slideLength, mainTitle, author))
  }

  async function generateVBS(){
    console.log(`> [adobe-robot] Writing .vbs structure data ...`)
    return fs.writeFileSync(pathVBScript, vbsCode.build(slideLength, template))
  }

  await generateXML()
  await generateVBS()
}

module.exports = {
  run
}