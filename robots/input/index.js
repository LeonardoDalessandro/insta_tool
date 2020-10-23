const getInputs = require('./inputs/index')

async function robot() {
  console.log('> [input-robot] Starting...') 
  await getInputs()
  console.log('> [input-robot] Done') 
}

module.exports = robot