const sentencefy = require('./_slidefy')
const keywordfy = require('./_keywordfy')

async function arrayfyContent() {
  console.log('> [text-robot] [arrayfy] Prepare text slide array')

  console.log('> [text-robot] [arrayfy] Selecting sentences...')
  await sentencefy.breakContentIntoSentences()
  await sentencefy.limitMaximumSentences()
  await keywordfy.fetchKeywordsOfAllSentences()

  console.log('> [text-robot] [arrayfy] Slide array ready')
}

module.exports = arrayfyContent