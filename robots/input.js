const inputUtils = require('./input.utils.js')
const state = require('./state.js')

function robot() {
  const content = {
    maximumSentences: 7
  }

  const questionObj = {
    stringQuestions: {
      searchTerm: {
        question: 'Type a Wikipedia search term: '
      }
    },
    optionQuestions: {
      lang: {
        options: ['it', 'eng', 'pt'],
        question: 'Choose one option: '
      },
      media: {
        options: ['Wikipedia', 'Medium'],
        question: 'Choose one option: '
      },      
      prefix: {
        options: ['Who is', 'What is', 'The history of'],
        question: 'Choose one option: '
      }
    }    
  }


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
  console.log('> [input-robot] Status: works')
  console.log('> [input-robot] Collected data: ' + JSON.stringify(content))
  state.save(content)
  console.log('> [input-robot] Data saved in "./content/content.json"')
  console.log('> [input-robot] Closed')
  

  function askAndReturnSearchTerm() {
    const question = questionObj.stringQuestions.searchTerm.question
    const answer = inputUtils.askAndReturnString(question)
    return answer
  }

  function askAndReturnLang() {
    const optAnswer = questionObj.optionQuestions.lang.options
    const question = questionObj.optionQuestions.lang.question
    const answer = inputUtils.askAndReturnOptions(optAnswer, question)
    return answer
  }

  function askAndReturnSource() {
    const optAnswer = questionObj.optionQuestions.media.options
    const question = questionObj.optionQuestions.media.question
    const answer = inputUtils.askAndReturnOptions(optAnswer, question)
    return answer
  }

  function askAndReturnPrefix() {
    const optAnswer = questionObj.optionQuestions.prefix.options
    const question = questionObj.optionQuestions.prefix.question
    const answer = inputUtils.askAndReturnOptions(optAnswer, question)
    return answer
  }
}

module.exports = robot