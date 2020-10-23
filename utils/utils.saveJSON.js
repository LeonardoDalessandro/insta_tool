const fs = require('fs')

async function saveFile(filePath, content) {
  const contentString = JSON.stringify(content)
  return fs.writeFileSync(filePath, contentString)
}

module.exports = saveFile