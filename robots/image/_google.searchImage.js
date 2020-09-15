const google = require('googleapis').google
const customSearch = google.customsearch('v1')

const googleSearchCredentials = require('../../credentials/google.search.json')

async function fetchAndReturnImagesLinks(query) {
  const response = await customSearch.cse.list({
    auth: googleSearchCredentials.apiKey,
    cx: googleSearchCredentials.searchEngineId,
    q: query,
    searchType: 'image',
    num: 5
  })

  const imagesUrl = response.data.items.map((item) => {
    return item.link
  })

  return imagesUrl
}

module.exports = {
  fetchAndReturnImagesLinks
}