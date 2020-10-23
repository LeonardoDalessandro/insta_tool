const downloadImage = require('./_downloadImage')

const state = require('../../../state')

async function saveImage() {
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

      await downloadImage(imageUrl, imageName)
      tempArray.push(imageUrl)
      content.downloadedImages.logo.selectedImage = selectedObject

      break
    } catch(error) {
      console.log(`> [image-robot] Stoped: ${error}`)
    }
  }

  state.save(content)
}

module.exports = saveImage