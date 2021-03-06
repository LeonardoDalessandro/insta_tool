const fs = require('fs')
const xmlCode = require('./generator/_xml.js')
const vbsCode = require('./generator/_vbs.js')

const state = require('../../../state')

const pathXML = './content/aiTask.xml'
const pathVBScript = './content/aiTask.vbs'

async function run() {
  const content = await state.load()
  const slides = content.slides
  const logo = content.downloadedImages.logo.selectedImage
  const slideLength = content.maximumSentences
  const colorTheme = content.colorThemeRGB
  const searchTerm = content.searchTerm
  const prefix = content.prefix

  async function generateXML(){
    console.log(`> [adobe-robot] Writing .xml structure data ...`)  
    return fs.writeFileSync(pathXML, xmlCode.build(slides, slideLength, searchTerm, prefix))
  }

  async function generateVBS(){
    console.log(`> [adobe-robot] Writing .vbs structure data ...`)
    return fs.writeFileSync(pathVBScript, vbsCode.build(logo, slides.length, colorTheme))
  }

  await generateXML()
  await generateVBS()
}

module.exports = {
  run
}