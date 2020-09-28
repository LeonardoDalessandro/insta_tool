const fetchContent = require('./fetch/index.js')
const sanitizeContent = require('./sanitize/index.js')
const arrayfyContent = require('./arrayfy/index.js')

async function robot() {
  console.log('> [text-robot] Starting...')

  await fetchContent()
  await sanitizeContent()
  await arrayfyContent()

  console.log('> [text-robot] Done')  
}

module.exports = robot