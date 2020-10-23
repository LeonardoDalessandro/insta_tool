const fetchLogo = require('./fetch/_fetch.logo')
const saveImage = require('./utils/_saveImage')

async function getlogo() {
  console.log('> [image-robot] [get logo] Searching logo...')

  await fetchLogo()
  await saveImage()

  console.log('> [image-robot] [get logo] Searching done')  
}

module.exports = getlogo