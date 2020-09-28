const sentenceBoundaryDetection = require('sbd')
const state = require('../../state')

async function breakContentIntoSentences() {
  const content = await state.load()
  content.slides = []

  const sentences = sentenceBoundaryDetection.sentences(content.sourceContentSanitized)

  sentences.forEach((sentence) => {
    content.slides.push({
      text: sentence,
      keywords: [],
      images: []
    })
  })
  
  state.save(content)
}

async function limitMaximumSentences() {
  const content = await state.load()
  content.slides = content.slides.slice(0, content.maximumSentences)

  state.save(content)
}

module.exports = {
  breakContentIntoSentences,
  limitMaximumSentences
}