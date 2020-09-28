const algorithmia = require('algorithmia')
const algorithmiaApiKey = require('../../../credentials/algorithmia.json').apiKey

const state = require('../../state')

async function getText () {
  console.log('> [text-robot] Starting Fetching data from Algorithmia to get text content')

  const content = await state.load()

  const input = {
    "articleName": content.searchTerm,
    "lang": content.lang
  }

  const algorithmiaAuthenticated = algorithmia.client(algorithmiaApiKey)
  console.log('> [text-robot] Authenticated')

  const wikipediaAlgorithm = algorithmiaAuthenticated.algo('web/WikipediaParser/0.1.2')
  console.log('> [text-robot] Find algorithm')

  const wikipediaResponse = await wikipediaAlgorithm.pipe(input)
  console.log('> [text-robot] Use input data from "content.json": ' + JSON.stringify(input))

  const wikipediaContent = wikipediaResponse.get()
  console.log('> [text-robot] Getting response')

  content.sourceContentOriginal = wikipediaContent.content  

  state.save(content)
  console.log('> [text-robot] Saving data!')

  console.log('> [text-robot] Fetching done!')
}

module.exports = {
  getText
}