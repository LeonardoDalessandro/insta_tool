const imageDownloader = require('image-downloader')

const contentDir = './content/'

async function downloadImage(url, fileName) {
  const options = {
    url,
    dest: contentDir+fileName
  }
  
  const response = imageDownloader.image(options)
    .then( ({ filename }) => {
      console.log(`> [image-robot] ${filename} successfully downloaded`)
    })
    .catch( (err) =>
      console.log(`> [image-robot] ${filename} failed to download, ${err}`)
    )

  return response
}

module.exports = downloadImage