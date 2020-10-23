const loadFile = require('../utils/utils.loadJSON')
const saveFile = require('../utils/utils.saveJSON')

const contentFilePath = './content/content.json'

async function save(content) {
  await saveFile(contentFilePath, content)
}

async function load() {
  const contentFile = await loadFile(contentFilePath)
  return contentFile
}

module.exports = {
  save,
  load
}