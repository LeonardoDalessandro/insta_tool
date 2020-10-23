const sentencefy = require('./modules/_slidefy')
const keywordfy = require('./modules/_keywordfy')

async function arrayfyContent() {
  console.log('> [text-robot] [arrayfy] Selecting sentences...')
  await sentencefy.breakContentIntoSentences()
  await sentencefy.limitMaximumSentences()
  await keywordfy()
  console.log('> [text-robot] [arrayfy] Done')
}

module.exports = arrayfyContent