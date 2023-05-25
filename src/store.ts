import type { ExtendedCardData } from './types'

const allCollections = [
  [
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
  ],
  [
    {
      type: 'img',
      title: 'Integral de potencia',
      clue: 'antiderivatives/power-clue.jpg',
      answer: 'antiderivatives/power-ans.jpg'
    },
    {
      type: 'img',
      title: 'Integral exponencial',
      clue: 'antiderivatives/exponential-clue.jpg',
      answer: 'antiderivatives/exponential-ans.jpg'
    },
    {
      type: 'img',
      title: 'Integral logarítmica',
      clue: 'antiderivatives/logarithm-clue.jpg',
      answer: 'antiderivatives/logarithm-ans.jpg'
    },
    {
      type: 'img',
      title: 'Integral de inversa',
      clue: 'antiderivatives/inverse-clue.jpg',
      answer: 'antiderivatives/inverse-ans.jpg'
    },
    {
      type: 'img',
      title: 'Integración por partes',
      clue: 'antiderivatives/by-parts-clue.jpg',
      answer: 'antiderivatives/by-parts-ans.jpg'
    }
  ]
]

export const staticStore = {
  allCardsData: allCollections[1] as ExtendedCardData[]
}
