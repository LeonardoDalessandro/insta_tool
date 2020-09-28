const initData = {
  stringQuestions: {
    searchTerm: {
      question: 'Type a Wikipedia search term: '
    },
    colorThemeRGBred: {
      question: 'Type RGB value from 0 to 255. RED = '
    },
    colorThemeRGBgreen: {
      question: 'Type RGB value from 0 to 255. GREEN = '
    },
    colorThemeRGBblue: {
      question: 'Type RGB value from 0 to 255. BLUE = '
    }
  },
  optionQuestions: {
    lang: {
      options: ['it', 'eng', 'pt'],
      question: 'Choose one option: '
    },
    media: {
      options: ['Wikipedia', 'Medium'],
      question: 'Choose one option: '
    },      
    prefix: {
      options: ['Who is', 'What is', 'The history of'],
      question: 'Choose one option: '
    },
    template: {
      options: ['minimal', 'single'],
      question: 'Choose one option: '
    }
  }    
}

module.exports = {
    initData
};