/*
** SUSPENDED
*/
const algorithmia = require('algorithmia')
const algorithmiaApiKey = require('../../../../credentials/algorithmia.json').apiKey

const state = require('../../../state')

async function getText () {
  console.log('> [text-robot] [fetch - URL main text] Starting Fetching data from Algorithmia to get text content')

  const content = await state.load()

  const input = {
    "articleName": content.article,
    "sentence": content.maximumSentences
  }

  const algorithmiaAuthenticated = algorithmia.client(algorithmiaApiKey)
  console.log('> [text-robot] [fetch - URL main text] Authenticated')

  const customURLAlgorithm = algorithmiaAuthenticated.algo('nlp/SummarizeURL/0.1.4')
  console.log('> [text-robot] [fetch - URL main text] Find algorithm')

  const customURLResponse = await customURLAlgorithm.pipe(input.articleName, input.sentence)
  console.log('> [text-robot] [fetch - URL main text] Use input data')

  const customURLContent = customURLResponse.get()
  console.log('> [text-robot] [fetch - URL main text] Getting response')
  console.log('> [text-robot] [fetch - URL main text] Result :')
  console.log(customURLContent)

  content.sourceContentOriginal = customURLContent  

  state.save(content)
  console.log('> [text-robot] [fetch - URL main text] Saving data!')
  console.log('> [text-robot] [fetch - URL main text] Fetching done!')
}

module.exports = getText