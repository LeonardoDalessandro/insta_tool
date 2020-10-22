const scriptGenerator = require('./_scriptGenerator')
const scriptRunner = require('./_scriptRunner')

async function robot() {
  console.log('> [adobe-robot] Starting...')

  await scriptGenerator.run()
  await scriptRunner.runAiTask()

  console.log('> [adobe-robot] Done')  
}

module.exports = robot