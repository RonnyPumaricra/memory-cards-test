import type { ExtendedCardData } from './types'

export const staticStore = {
  allCardsData: [
    {
      clue: 'HTML',
      answer: 'HyperText Markup Language'
    },
    {
      clue: 'CSS',
      answer: 'Cascading StyleSheets'
    },
    {
      clue: 'DOM',
      answer: 'Document Object Model'
    },
    {
      clue: 'SQL',
      answer: 'Structured Query Language'
    },
    {
      clue: 'HTTP',
      answer: 'HyperText Transference Protocol'
    },
    {
      clue: 'API',
      answer: 'Application Programming Interface'
    }
  ] as ExtendedCardData[]
}
