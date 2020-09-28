const inputUtils = require('./_utils.js')
const data = require('./_data.js')
const state = require('../state.js')

function robot() {
  const content = {
    maximumSentences: 7
  }

  const inputObj = data.initData


  // TODO: refatoring
  /*
  for (let key in questionObj) {
    // skip loop if the property is from prototype
    if (!questionObj.hasOwnProperty(key)) continue;

    var obj = questionObj[key];
    if (obj === 'stringQuestions') {
      for (let prop in obj) {
          // skip loop if the property is from prototype
          if (!obj.hasOwnProperty(prop)) continue;

          // console interaction
          const question = prop.question
          const answer = inputUtils.askAndReturnString(question)

          content[prop] = answer
      }
    }

    if (obj === 'optionQuestions') {
      for (let prop in obj) {
          // skip loop if the property is from prototype
          if (!obj.hasOwnProperty(prop)) continue;

          // console interaction
          const optAnswer = prop.options
          const question = prop.question
          const answer = inputUtils.askAndReturnOptions(optAnswer, question)
          
          content[prop] = answer
      }
    }    
  }

  state.save(content)
  */
  console.log('> [input-robot] Starting...')  
  content.lang = askAndReturnLang()
  content.media = askAndReturnSource()
  content.searchTerm = askAndReturnSearchTerm()
  content.prefix = askAndReturnPrefix()
  content.template = askAndReturnTemplate()
  content.colorThemeRGB = [parseInt(askAndReturnColorThemeRED()),parseInt(askAndReturnColorThemeGREEN()),parseInt(askAndReturnColorThemeBLUE())]
  console.log('> [input-robot] Status: works')
  console.log('> [input-robot] Collected data: ' + JSON.stringify(content))
  state.save(content)
  console.log('> [input-robot] Data saved in "./content/content.json"')
  console.log('> [input-robot] Closed')
  

  function askAndReturnSearchTerm() {
    const question = inputObj.stringQuestions.searchTerm.question
    const answer = inputUtils.askAndReturnString(question)
    return answer
  }

  function askAndReturnLang() {
    const optAnswer = inputObj.optionQuestions.lang.options
    const question = inputObj.optionQuestions.lang.question
    const answer = inputUtils.askAndReturnOptions(optAnswer, question)
    return answer
  }

  function askAndReturnSource() {
    const optAnswer = inputObj.optionQuestions.media.options
    const question = inputObj.optionQuestions.media.question
    const answer = inputUtils.askAndReturnOptions(optAnswer, question)
    return answer
  }

  function askAndReturnPrefix() {
    const optAnswer = inputObj.optionQuestions.prefix.options
    const question = inputObj.optionQuestions.prefix.question
    const answer = inputUtils.askAndReturnOptions(optAnswer, question)
    return answer
  }

  function askAndReturnTemplate() {
    const optAnswer = inputObj.optionQuestions.template.options
    const question = inputObj.optionQuestions.template.question
    const answer = inputUtils.askAndReturnOptions(optAnswer, question)
    return answer
  }

  function askAndReturnColorThemeRED() {
    const question = inputObj.stringQuestions.colorThemeRGBred.question
    const answer = inputUtils.askAndReturnString(question)
    return answer
  }
  function askAndReturnColorThemeGREEN() {
    const question = inputObj.stringQuestions.colorThemeRGBgreen.question
    const answer = inputUtils.askAndReturnString(question)
    return answer
  }
  function askAndReturnColorThemeBLUE() {
    const question = inputObj.stringQuestions.colorThemeRGBblue.question
    const answer = inputUtils.askAndReturnString(question)
    return answer
  }
}

module.exports = robot