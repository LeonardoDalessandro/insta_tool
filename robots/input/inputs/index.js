const getInitInputs = require('./modules/_init')
const getLogoTextInputs = require('./modules/_logo_text')
const getResumeArticleInputs = require('./modules/_resumeArticle')
const getGlossaryInputs = require('./modules/_glossary')

const getOptionQuestionData = require('../initdata/_questions.select')
const state = require('../../state')

async function saveInputs() {
  console.log('> [input-robot] [Init input] Start questions')  
  await getInitInputs()
  console.log('> [input-robot] [Init input] Result saved') 

  const content = await state.load()
  const selectedTemplate = content.template

  const initInputData = getOptionQuestionData.template
  const templateArray = initInputData.options

  console.log('> [input-robot] [Next input] Reading init input')

  switch(selectedTemplate) {
    case templateArray[0]: {
      console.log('> [input-robot] [Next input] Start questions for "logo template"') 
      await getLogoTextInputs()
      console.log('> [input-robot] [Next input] Done')
      break;
    }
    case templateArray[1]: {
      console.log('> [input-robot] [Next input] Start questions for "resume article template"') 
      await getResumeArticleInputs()
      console.log('> [input-robot] [Next input] Done')
      break;
    }
    case templateArray[2]: {
      console.log('> [input-robot] [Next input] Start questions for "glossary template"') 
      await getGlossaryInputs()
      console.log('> [input-robot] [Next input] Done')
      break;
    }
  } 
}

module.exports = saveInputs