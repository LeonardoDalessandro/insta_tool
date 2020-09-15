const fetchImages = require('./_getLogo.js')

async function robot() {
  console.log('> [text-robot] Starting...')

  await fetchImages.getlogo()

  console.log('> [text-robot] Done')  
}

module.exports = robot