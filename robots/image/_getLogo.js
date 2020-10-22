const downloader = require('./_downloadImage')
const googleSearchImage = require('./_google.searchImage')

const state = require('../state')

async function getlogo() {
  console.log('> [text-robot] Searching logo...')

  await fetchLogoImages()
  await saveImages()

  console.log('> [text-robot] Logo found')


  async function fetchLogoImages() {
    const content = await state.load()

    let query
    query = `${content.searchTerm} logo`

    console.log(`> [image-robot] Querying Google Images with: "${query}"`)
    content.downloadedImages = {}
    content.downloadedImages.logo = {}
    content.downloadedImages.logo.query = query
    const ext = 'png'
    const bg = 'trans'

    const googleResponse = await googleSearchImage.fetchAndReturnImagesLinks(query, ext, bg)
    content.downloadedImages.logo.suggestions = googleResponse

    state.save(content)
  }


  async function saveImages() {
    const content = await state.load()
    const images = content.downloadedImages.logo.suggestions
    const tempArray = [] 

    for (let i = 0; i < images.length; i++) {
      const imageUrl = images[i].link
      const imageWidth = images[i].size.width
      const imageHeight = images[i].size.height
      const imageName = `logo-1-original.png`

      const selectedObject = {
        link: imageUrl,
        width: imageWidth,
        height: imageHeight
      }

      try {
        if (tempArray.includes(imageUrl)) {
          throw new Error('Image already downloaded')
        }

        await downloader.downloadImage(imageUrl, imageName)
        tempArray.push(imageUrl)
        content.downloadedImages.logo.selectedImage = selectedObject

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