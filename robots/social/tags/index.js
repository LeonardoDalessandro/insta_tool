const fs = require('fs')

const state = require('../../state')
const getOptionQuestionData = require('../../input/initdata/_questions.select')

const coverLogoTemplate = require('./templates/_logo_text')
const resumeArticleTemplate = require('./templates/_cover_text')
const glossaryTemplate = require('./templates/_glossary')

const generatedFilePath = './content/'
const generatedFileName = 'tags.txt'
const generatedFileFullPath = generatedFilePath+generatedFileName

async function generateText(){
  const content = await state.load()
  const selectedTemplate = content.template

  const initInputData = getOptionQuestionData.template
  const templateArray = initInputData.options

  const slides = content.slides
  const slideLength = content.maximumSentences

  switch(selectedTemplate) {
    case templateArray[0]: {
        console.log('> [robot-social] [write tags file] Creating (logo template)...')
        const toPrint = await coverLogoTemplate(slides, slideLength)
        fs.writeFileSync(generatedFileFullPath, toPrint)
        break;
    }
    case templateArray[1]: {
        console.log('> [robot-social] [write tags file] Creating (resume article template) ...')
        const toPrint = await resumeArticleTemplate()
        fs.writeFileSync(generatedFileFullPath, toPrint)
        break;
    }
    case templateArray[2]: {
        console.log('> [robot-social] [write tags file] Creating (resume article template) ...')
        const toPrint = await glossaryTemplate()
        fs.writeFileSync(generatedFileFullPath, toPrint)
        break;
    }
  }
}

module.exports = generateText