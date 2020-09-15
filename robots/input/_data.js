const initData = {
  stringQuestions: {
    searchTerm: {
      question: 'Type a Wikipedia search term: '
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
    }
  }    
}

module.exports = {
    initData
};