const generateCreditsFile = require('./credits/index.js')
const generateTagsFile = require('./tags/index.js')

async function robot() {
  console.log('> [robot-social] Starting...')

  await generateCreditsFile()
  await generateTagsFile()

  console.log('> [robot-social] Done')  
}

module.exports = robot