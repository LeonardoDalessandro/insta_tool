const fs = require('fs')

async function loadFile(filePath) {
  const fileBuffer = await fs.readFileSync(filePath, 'utf-8')
  const contentJson = JSON.parse(fileBuffer)
  return contentJson
}

module.exports = loadFile