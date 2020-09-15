const sentencefy = require('./_slidefy')
const keywordfy = require('./_keywordfy')

async function arrayfyContent() {
  console.log('> [text-robot] Prepare text slide array')

  console.log('> [text-robot] Selecting sentences...')
  await sentencefy.breakContentIntoSentences()
  await sentencefy.limitMaximumSentences()
  await keywordfy.fetchKeywordsOfAllSentences()

  console.log('> [text-robot] Slide array ready')
}

module.exports = arrayfyContent