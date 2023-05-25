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
  ],
  [
    {
      type: 'img',
      title: 'Integral de seno',
      clue: 'trig-integrals/sin-clue.jpg',
      answer: 'trig-integrals/sin-ans.jpg'
    },
    {
      type: 'img',
      title: 'Integral de coseno',
      clue: 'trig-integrals/cos-clue.jpg',
      answer: 'trig-integrals/cos-ans.jpg'
    },
    {
      type: 'img',
      title: 'Integral de tangente',
      clue: 'trig-integrals/tan-clue.jpg',
      answer: 'trig-integrals/tan-ans.jpg'
    },
    {
      type: 'img',
      title: 'Integral de cotangente',
      clue: 'trig-integrals/cot-clue.jpg',
      answer: 'trig-integrals/cot-ans.jpg'
    },
    {
      type: 'img',
      title: 'Integral de secante',
      clue: 'trig-integrals/sec-clue.jpg',
      answer: 'trig-integrals/sec-ans.jpg'
    },
    {
      type: 'img',
      title: 'Integral de cosecante',
      clue: 'trig-integrals/csc-clue.jpg',
      answer: 'trig-integrals/csc-ans.jpg'
    }
  ],
  [
    {
      type: 'img',
      title: 'Producto de coseno por coseno',
      clue: 'trig-product/cos-cos-clue.jpg',
      answer: 'trig-product/cos-cos-ans.jpg'
    },
    {
      type: 'img',
      title: 'Integral de seno por coseno',
      clue: 'trig-product/sin-cos-clue.jpg',
      answer: 'trig-product/sin-cos-ans.jpg'
    },
    {
      type: 'img',
      title: 'Integral de seno por seno',
      clue: 'trig-product/sin-sin-clue.jpg',
      answer: 'trig-product/sin-sin-ans.jpg'
    }
  ]
]

export const staticStore = {
  allCardsData: allCollections[3] as ExtendedCardData[]
}
