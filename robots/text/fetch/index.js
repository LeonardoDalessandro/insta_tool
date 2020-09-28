const medium = require('./_medium.js')
const wikipedia = require('./_wikipedia.js')
const initInputData = require('../../input/_data')

const state = require('../../state.js')

async function fetchContent() {
  const content = await state.load()
  const mediaArray = initInputData.initData.optionQuestions.media.options
  const selectedMedia = content.media
  console.log('> [text-robot] Check user preference')
  console.log('> [text-robot] Allow media: ' + mediaArray)
  console.log(`> [text-robot] Selected media: ${selectedMedia}`)

  //await wikipedia.getText()

  switch (selectedMedia) {
    case mediaArray[0]:
      await wikipedia.getText()
      break
    case mediaArray[1]:
      await medium.getText()
      break
  }

}

module.exports = fetchContent