const google = require('googleapis').google
const customSearch = google.customsearch('v1')

const googleSearchCredentials = require('../../../../credentials/google.search.json')

async function fetchAndReturnImagesObjWithGoogle(query, ext, bg) {
  const response = await customSearch.cse.list({
    auth: googleSearchCredentials.apiKey,
    cx: googleSearchCredentials.searchEngineId,
    q: query,
    fileType: ext,
    imgColorType: bg,
    searchType: 'image',
    num: 5
  })

  const imagesUrl = response.data.items.map((item) => {
    const imageObj = {}
    imageObj.link = item.link
    imageObj.size = {}
    imageObj.size.width = item.image.width
    imageObj.size.height = item.image.height
    return imageObj
  })

  return imagesUrl
}

module.exports = {
  fetchAndReturnImagesObjWithGoogle
}