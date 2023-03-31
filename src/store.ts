import { reactive, ref } from 'vue'
import type { ExtendedCardData } from './types'
// import type { BasicCardData, ExtendedCardData } from './types'

interface Props {
  gameTests: ExtendedCardData[]
  randomizedData: ExtendedCardData[][]
}

interface randomItem {
  index: number
  value: number
}

const getRandomArray = (limit: number) => {
  const randomArray: randomItem[] = []

  for (let i = 0; i < limit; i++) {
    randomArray[i] = {
      index: i,
      value: Math.random()
    }
  }
  randomArray.sort((a, b) => a.value - b.value)
  return randomArray.map((random) => random.index)
}

/**
 * Make a random list in the form:
 * [
 *  [ Cards for first slider ],
 *  [ Cards for second slider ],
 *  and so on...
 * ]
 */
export function randomizeGameData(cardsPerSlider: number) {
  const { allCardsData } = staticStore
  const randArray = getRandomArray(allCardsData.length)
  const newList: ExtendedCardData[][] = []
  for (let i = 0, e = -1; i < randArray.length; i++) {
    if (i % cardsPerSlider === 0) {
      e++
    }
    if (!newList[e]) newList[e] = []
    newList[e][i % cardsPerSlider] = { ...allCardsData[randArray[i]] }
  }
  return newList
}
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

export const store = reactive<Props>({
  gameTests: [
    {
      clue: 'HTML',
      answer: 'HyperText Markup Language',
      revealed: false
    },
    {
      clue: 'CSS',
      answer: 'Cascading StyleSheets',
      revealed: false
    },
    {
      clue: 'DOM',
      answer: 'Document Object Model',
      revealed: false
    }
  ],
  randomizedData: randomizeGameData(3)
})

export const cardSliderScreen = ref(0)
