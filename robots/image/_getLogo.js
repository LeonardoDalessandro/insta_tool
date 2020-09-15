const downloader = require('./_downloadImage')
const googleSearchImage = require('./_google.searchImage')

const state = require('../state')

async function getlogo() {
  console.log('> [text-robot] Searching logo...')

  await fetchLogoImages()
  await saveImages()

  console.log('> [text-robot] Logo found')


  async function fetchLogoImages() {
    const content = state.load()

    let query
    query = `${content.searchTerm} logo`

    console.log(`> [image-robot] Querying Google Images with: "${query}"`)
    content.downloadedImages = {}
    content.downloadedImages.logo = {}
    content.downloadedImages.logo.query = query

    const googleResponse = await googleSearchImage.fetchAndReturnImagesLinks(query)
    content.downloadedImages.logo.suggestions = googleResponse

    state.save(content)
  }


  async function saveImages() {
    const content = state.load()
    const images = content.downloadedImages.logo.suggestions
    const tempArray = [] 

    console.log(images)

    for (let i = 0; i < images.length; i++) {
      const imageUrl = images[i]
      const imageName = `logo-${i}-original.png`

      try {
        if (tempArray.includes(imageUrl)) {
          throw new Error('Image already downloaded')
        }

        await downloader.downloadImage(imageUrl, imageName)
        tempArray.push(imageUrl)
        content.downloadedImages.logo.image = imageName

        break
      } catch(error) {
        console.log(`> [image-robot] Stoped: ${error}`)
      }
    }

    console.log(tempArray)

    state.save(content)
  }
}

module.exports = {getlogo}