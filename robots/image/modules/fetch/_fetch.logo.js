const search = require('../utils/_searchImage')

const state = require('../../../state')

async function fetchLogoImages() {
  const content = await state.load()

  const query = `${content.searchTerm} logo`

  content.downloadedImages = {}
  content.downloadedImages.logo = {}
  content.downloadedImages.logo.query = query

  const ext = 'png'
  const bg = 'trans'

  const googleResponse = await search.fetchAndReturnImagesObjWithGoogle(query, ext, bg)
  content.downloadedImages.logo.suggestions = googleResponse

  state.save(content)
}

module.exports = fetchLogoImages