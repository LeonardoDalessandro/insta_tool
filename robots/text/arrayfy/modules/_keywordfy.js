const watson = require('../../../../credentials/watson-nlu.json')

const watsonApiKey = watson.apikey
const watsonVersion = '2020-08-01'
const watsonUrl = watson.url

const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth')

const nlu = new NaturalLanguageUnderstandingV1({
  version: watsonVersion,
  authenticator: new IamAuthenticator({
    apikey: watsonApiKey,
  }),
  serviceUrl: watsonUrl
})

const state = require('../../../state')

async function fetchKeywordsOfAllSentences() {
  const content = await state.load()

  for (const slide of content.slides) {
    slide.keywords = await fetchWatsonAndReturnKeywords(slide.text)
  }

  state.save(content)
}

async function fetchWatsonAndReturnKeywords(sentence) {
  const analyzeParams = {
    text: sentence,
    features: {
      keywords: {
        'sentiment': false,
        'emotion': false,
        'limit': 3
      }
    }
  }

  return new Promise((resolve, reject) => {    
    nlu.analyze(analyzeParams, (error, response) => {
      if (error) {
        reject(error)
        return
      }

      const keywords = response.result.keywords.map((keyword) => {
        return keyword.text
      })

      resolve(keywords)
    })
  })
}

module.exports = fetchKeywordsOfAllSentences