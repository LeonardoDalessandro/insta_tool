const readline = require('readline-sync')

function askAndReturnOptions(optionsArray, questionText) {
  const newArray = optionsArray
  const newQuestion = questionText
  const selectedIndex = readline.keyInSelect(newArray, newQuestion)
  const selectedText = newArray[selectedIndex]

  return selectedText
}

function askAndReturnString(questionText) {
  return readline.question(questionText)
}

module.exports = {
  askAndReturnOptions,
  askAndReturnString
}