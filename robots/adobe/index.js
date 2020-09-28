const scriptGenerator = require('./_scriptGenerator')
const scriptRunner = require('./_scriptRunner')

async function robot() {
  console.log('> [adobe-robot] Starting...')

  console.log(`> [adobe-robot] Writing Adobe Illustrator files based on selected template ...`)
  await scriptGenerator.run()
  console.log(`> [adobe-robot] Files created`)

  console.log('> [adobe-robot] Running Adobe Illustrator automation ...')
  await scriptRunner.runAiTask()
  console.log(`> [adobe-robot] All slide are ready to upload`)

  console.log('> [adobe-robot] Done')  
}

module.exports = robot