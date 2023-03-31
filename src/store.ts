import { reactive } from 'vue'
import type { ExtendedCardData } from './types'

interface Props {
  gameTests: ExtendedCardData[]
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
  ]
})
