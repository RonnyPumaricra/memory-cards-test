interface randomItem {
  index: number
  value: number
}

/** Suffles numbers from 0 to limit */
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
 *  [ d, a, b ],
 *  [ f, k, e ],
 *  and so on...
 * ]
 */
export function randomizeGameData<T>(data: T[], cardsPerSlider: number) {
  const randArray = getRandomArray(data.length)
  const newList: T[][] = []
  for (let i = 0, e = -1; i < randArray.length; i++) {
    if (i % cardsPerSlider === 0) {
      e++
    }
    if (!newList[e]) newList[e] = [] // Make an array every `cardsPerSlider`
    newList[e][i % cardsPerSlider] = { ...data[randArray[i]] } // copy of a random element
  }
  return newList
}
