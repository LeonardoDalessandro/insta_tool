const inputUtils = require('./cli.ask')

const getOptionQuestion = require('../../../initdata/_questions.select')
const getTypingQuestion = require('../../../initdata/_questions.typing')

/****************
** SHARED PRIVATE 
****************/
function returnOption (toAsk) {
  if (toAsk != undefined) {
    const answer = inputUtils.askAndReturnOptions(toAsk.options, toAsk.question)
    return answer
  }
  return null
}
function returnTyping (toAsk) {
  const answer = inputUtils.askAndReturnString(toAsk.question)
  return answer
}

/*********************
** INIT QUESTION BLOCK
*********************/
function askAndReturnLang() {
  const toAsk = getOptionQuestion.lang
  return returnOption(toAsk)
}
function askAndReturnTemplate() {
  const toAsk = getOptionQuestion.template
  return returnOption(toAsk)
}

/*********************
** INIT LOGOTEXT BLOCK
*********************/
function askAndReturnSearchTerm() {
  const toAsk = getTypingQuestion.searchTerm
  return returnTyping(toAsk)
}
function askAndReturnPrefix() {
  const toAsk = getOptionQuestion.prefix
  return returnOption(toAsk)
}
function askAndReturnColorThemeRED() {
  const toAsk = getTypingQuestion.colorThemeRGBred
  return returnTyping(toAsk)
}
function askAndReturnColorThemeGREEN() {
  const toAsk = getTypingQuestion.colorThemeRGBgreen
  return returnTyping(toAsk)
}
function askAndReturnColorThemeBLUE() {
  const toAsk = getTypingQuestion.colorThemeRGBblue
  return returnTyping(toAsk)
}

/**************************
** INIT RESUMEARTICLE BLOCK
**************************/
function askAndReturnURL() {
  const toAsk = getTypingQuestion.urlSource
  return returnTyping(toAsk)
}
function askAndReturnTitle() {
  const toAsk = getTypingQuestion.articleTitle
  return returnTyping(toAsk)
}
function askAndReturnAuthor() {
  const toAsk = getTypingQuestion.articleAuthor
  return returnTyping(toAsk)
}
function askAndReturnSource() {
  const toAsk = getOptionQuestion.articleCategory
  return returnOption(toAsk)
}



module.exports = {
  askAndReturnLang,
  askAndReturnTemplate,

  askAndReturnSearchTerm,
  askAndReturnPrefix,
  askAndReturnColorThemeRED,
  askAndReturnColorThemeGREEN,
  askAndReturnColorThemeBLUE,

  askAndReturnURL,
  askAndReturnTitle,
  askAndReturnAuthor,
  askAndReturnSource
}