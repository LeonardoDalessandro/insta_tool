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
  const slideLenght = content.maximumSentences
  const mainTitle = content.searchTerm
 
  async function generateXML(){
    console.log(`> [adobe-robot] Writing .xml structure data ...`)  
    return fs.writeFileSync(pathXML, xmlCode.build(slides, slideLenght, mainTitle))
  }

  async function generateVBS(){
    console.log(`> [adobe-robot] Writing .vbs structure data ...`)
    return fs.writeFileSync(pathVBScript, vbsCode.build())
  }

  await generateXML()
  await generateVBS()
}

module.exports = {
  run
}