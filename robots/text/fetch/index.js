const medium = require('./_medium.js')
const wikipedia = require('./_wikipedia.js')
const initInputData = require('../../input/_data')

const state = require('../../state.js')

async function fetchContent() {
  const content = state.load()
  const mediaArray = initInputData.initData.optionQuestions.media.options
  const selectedMedia = content.media
  console.log('> [text-robot] Check user preference')
  console.log('> [text-robot] Allow media: ' + mediaArray)
  console.log('> [text-robot] Selected media: ' + selectedMedia)

  switch (selectedMedia) {
    case mediaArray[0]:
      wikipedia.getText()
      break
    case mediaArray[1]:
      medium.getText()
      break
  }

}

module.exports = fetchContent