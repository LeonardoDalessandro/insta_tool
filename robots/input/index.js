const interface = require('./interface/index')

async function robot() {
  await interface()
}

module.exports = robot