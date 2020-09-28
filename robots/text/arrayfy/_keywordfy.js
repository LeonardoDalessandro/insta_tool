const watsonApiKey = require('../../../credentials/watson-nlu.json').apikey
const watsonVersion = '2020-08-01'
const watsonUrl = require('../../../credentials/watson-nlu.json').url

const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth')

const nlu = new NaturalLanguageUnderstandingV1({
  version: watsonVersion,
  authenticator: new IamAuthenticator({
    apikey: watsonApiKey,
  }),
  serviceUrl: watsonUrl
})

const state = require('../../state')

async function fetchKeywordsOfAllSentences() {
  const content = await state.load()

  console.log('> [text-robot] Starting to fetch keywords from Watson')

  for (const slide of content.slides) {
    console.log(`> [text-robot] Sentence: "${slide.text}"`)

    slide.keywords = await fetchWatsonAndReturnKeywords(slide.text)

    console.log(`> [text-robot] Keywords: ${slide.keywords}`)
    //console.log(`> [text-robot] Keywords: ${sentence.keywords.join(', ')}\n`)
  }

  state.save(content)
  console.log('> [text-robot] Written all keywords')
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

module.exports = {
  fetchKeywordsOfAllSentences
}


/*
{
  "status":200,
  "statusText":"OK",
  "headers":{
    "content-type":"application/json; charset=utf-8",
    "content-length":"415",
    "x-powered-by":"Express",
    "cache-control":"no-cache, no-store",
    "x-dp-watson-tran-id":"edb9aa7edc3162ecd71e59fc33fda831",
    "content-security-policy":"default-src 'none'",
    "pragma":"no-cache",
    "x-content-type-options":"nosniff",
    "x-frame-options":"DENY",
    "x-xss-protection":"1; mode=block",
    "strict-transport-security":"max-age=31536000; includeSubDomains;",
    "x-global-transaction-id":"edb9aa7edc3162ecd71e59fc33fda831",
    "x-edgeconnect-midmile-rtt":"102",
    "x-edgeconnect-origin-mex-latency":"351",
    "date":"Tue, 15 Sep 2020 03:44:32 GMT",
    "connection":"close"
  },
  "result":{
    "usage":{
      "text_units":1,
      "text_characters":87,
      "features":1
    },
    "language":"pt",
    "keywords":[
      {"text":"componentes Vue","relevance":0.985432,"count":1},
      {"text":"elementos HTML básicos","relevance":0.32542,"count":1},
      {"text":"código reutilizável","relevance":0.029733,"count":1}
    ]
  }
}
*/